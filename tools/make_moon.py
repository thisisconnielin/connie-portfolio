# Wrap the real moon surface from the style render into a full, rotatable moon disc (out/moon.png).
# run from tools/:  python3 make_moon.py  →  tools/out/moon.png (convert to ../assets/moon.webp)
import numpy as np
from PIL import Image

import os
os.makedirs("out", exist_ok=True)
REF = np.asarray(Image.open("refs/style-sticker-moon.png").convert("RGB")).astype(float)
H, W, _ = REF.shape
lum = REF.mean(axis=2)

# 1) horizon: first bright row per column, fitted with a parabola (skip columns where stickers stand on it)
skip = [(140, 245), (440, 515), (670, 785), (990, 1090), (1235, 1320), (1435, 1545)]
xs, ys = [], []
for x in range(0, W, 4):
    if any(a <= x <= b for a, b in skip): continue
    col = lum[500:900, x]
    hit = np.argmax((col[:-3] > 70) & (col[1:-2] > 70) & (col[2:-1] > 70))
    if hit: xs.append(x); ys.append(500 + hit)
a, b, c = np.polyfit(xs, ys, 2)
horizon = lambda x: a * x * x + b * x + c

# 2) clean surface: paint over the toy stickers + their shadows with nearby moon
surf = REF.copy()
toys = [(136, 760, 186, 806), (300, 790, 356, 838), (448, 742, 508, 784), (630, 779, 684, 822), (828, 738, 888, 787),
        (964, 712, 1010, 762), (1092, 789, 1176, 826), (1266, 755, 1323, 816), (1474, 782, 1535, 826),
        (732, 862, 940, 904)]  # last one: the "drag the moon" pill printed in the render
from PIL import ImageFilter
for l, t, r, bt in toys:
    l, t, r, bt = l - 10, t - 10, r + 10, bt + 10
    w = r - l
    src = REF[t:bt, l - w:l] if l - w > 0 else REF[t:bt, r:r + w]
    soft = np.zeros((bt - t, w)); soft[8:-8, 8:-8] = 1  # feathered patch so no hard rectangles
    soft = np.asarray(Image.fromarray((soft * 255).astype("uint8")).filter(ImageFilter.GaussianBlur(5))) / 255
    surf[t:bt, l:r] = surf[t:bt, l:r] * (1 - soft[..., None]) + src * soft[..., None]

surf[860:908, 726:946] = REF[808:856, 726:946]  # (overwritten again below if a toy patch overlaps)  # the "drag the moon" pill printed in the render

# 3) polar warp: disc pixel (depth below rim, angle) ← render pixel (x along the band, horizon + depth)
Rt = 1400                        # texture radius in px
k = 0.74                         # render px per texture px (site draws the moon at ~0.62·W)
band0, band1 = 300, 1372         # use the middle of the band, where the surface is deepest
span = band1 - band0
N = Rt * 2
yy, xx = np.mgrid[0:N, 0:N].astype(float)
dx, dy = xx - Rt + .5, yy - Rt + .5
d = np.hypot(dx, dy)
ang = np.arctan2(dx, -dy)        # 0 at the top, clockwise
u = (ang / (2 * np.pi) * 2 * np.pi * Rt * k) % (2 * span)
u = np.where(u > span, 2 * span - u, u) + band0          # mirror-tile so there are no hard seams
depth = (Rt - d) * k
hz = horizon(u)
maxd = (H - 2) - hz
RIM = 34  # the top strip of the render has sticker feet + shadows: mirror the clean surface just below it instead
dd = depth % (2 * maxd); dd = np.where(dd > maxd, 2 * maxd - dd, dd)  # mirror deeper than the photo goes
dd = np.where(dd < RIM, 2 * RIM - dd, dd)
sy = np.clip(hz + 3 + dd, 0, H - 1).astype(int)
sx = np.clip(u, 0, W - 1).astype(int)
img = surf[sy, sx]
alpha = np.clip((Rt - d) * 2, 0, 1) * 255
out = np.dstack([img, alpha]).astype("uint8")
Image.fromarray(out).save("out/moon.png")
Image.fromarray(out).resize((700, 700)).save("out/_moon-preview.png")
print("horizon fit", round(a, 6), round(b, 3), round(c, 1), "| moon", N, "px")

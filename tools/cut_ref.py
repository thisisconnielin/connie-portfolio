# Cut the stickers (cat, projects, toys) out of the chosen style render.
# run from tools/:  python3 cut_ref.py  →  writes stickers to tools/out/ (copy the ones you like into ../assets/)
# Background = everything reachable from the crop edge without crossing the white sticker border.
import os
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

REF = Image.open("refs/style-sticker-moon.png").convert("RGB")
OUT = "out"
os.makedirs(OUT, exist_ok=True)

BOXES = {  # name: (left, top, right, bottom) in the 1672x941 render
    "cat-0": (676, 563, 779, 663),
    "telescope": (151, 628, 239, 727), "rocket": (448, 566, 509, 677), "dish": (998, 570, 1084, 664),
    "mailbox": (1241, 606, 1314, 694), "cv-flag": (1443, 625, 1542, 729),
    "toy-soccer": (141, 766, 179, 801), "toy-02": (304, 794, 351, 834), "toy-06": (452, 746, 503, 779),
    "toy-17": (634, 783, 678, 817), "toy-16": (834, 742, 881, 782), "toy-25": (969, 717, 1004, 754),
    "toy-11": (1097, 793, 1168, 821), "toy-22": (1272, 762, 1317, 811), "toy-23": (1479, 786, 1529, 821),
}

def biggest_parts(mask):
    # drop crumbs that aren't attached to the sticker (4-connected components smaller than 15% of the largest)
    h, w = mask.shape; lab = np.zeros((h, w), int); sizes = [0]
    for y0 in range(h):
        for x0 in range(w):
            if mask[y0, x0] and not lab[y0, x0]:
                n = len(sizes); stack = [(y0, x0)]; lab[y0, x0] = n; c = 0
                while stack:
                    y, x = stack.pop(); c += 1
                    for yy, xx in ((y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)):
                        if 0 <= yy < h and 0 <= xx < w and mask[yy, xx] and not lab[yy, xx]:
                            lab[yy, xx] = n; stack.append((yy, xx))
                sizes.append(c)
    big = max(sizes)
    return np.isin(lab, [i for i, c in enumerate(sizes) if i and c >= big * .15])

def cut(name, box, white=172, scale=4, close=5, rim=0, feet=None):
    im = REF.crop(box)
    a = np.asarray(im).astype(int)
    lum = a.mean(axis=2)
    sat = a.max(axis=2) - a.min(axis=2)
    barrier = ((lum > white) & (sat < 70)) | (lum > 228)  # cream/white sticker border
    # the render is small, so the border has gaps: thicken it to seal them, flood, then shrink back
    m = Image.fromarray(np.where(barrier, 255, 0).astype("uint8")).filter(ImageFilter.MaxFilter(close))
    w, h = m.size
    for x in range(w):
        for y in (0, h - 1):
            if m.getpixel((x, y)) == 0: ImageDraw.floodfill(m, (x, y), 100, thresh=0)
    for y in range(h):
        for x in (0, w - 1):
            if m.getpixel((x, y)) == 0: ImageDraw.floodfill(m, (x, y), 100, thresh=0)
    keep = np.asarray(m) != 100
    if rim:  # bottom rows touch the moon rim: let each row only continue what the row above had (legs, posts)
        r0 = h - rim
        prev = keep[r0 - 1]
        for r in range(r0, h):
            grow = np.convolve(prev.astype(int), np.ones(5, int), "same") > 0
            keep[r] &= grow; prev = keep[r]
    if feet:  # (first_row, col_from, col_to): from first_row down only the standing foot is sticker
        r0, c0, c1 = feet
        keep[r0:, :c0] = False; keep[r0:, c1:] = False
    keep = biggest_parts(keep)
    alpha = Image.fromarray(np.where(keep, 255, 0).astype("uint8"))
    alpha = alpha.filter(ImageFilter.MinFilter(close - 2)).filter(ImageFilter.GaussianBlur(.6))
    rgba = im.convert("RGBA"); rgba.putalpha(alpha)
    bb = alpha.point(lambda v: 255 if v > 40 else 0).getbbox()
    if bb: rgba = rgba.crop(bb)
    rgba = rgba.resize((rgba.width * scale, rgba.height * scale), Image.LANCZOS)
    rgba.save(f"{OUT}/{name}.png")
    return rgba

RIM = {"cat-0": 10, "telescope": 9, "rocket": 8, "dish": 9, "mailbox": 9, "cv-flag": 8}  # rows of moon rim under the feet

sheet = Image.new("RGBA", (1800, 900), (40, 120, 60, 255))  # green check background to inspect the cut
x = y = 10
for n, b in BOXES.items():
    s = cut(n, b, rim=RIM.get(n, 0), feet={"cat-0": (88, 44, 69)}.get(n))
    t = s.copy(); t.thumbnail((220, 220))
    if x + t.width > 1790: x, y = 10, y + 240
    sheet.alpha_composite(t, (x, y)); x += t.width + 20
sheet.save("out/_check-sheet.png")
print("cut", len(BOXES))

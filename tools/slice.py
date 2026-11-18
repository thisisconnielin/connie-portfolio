# Cut Codex's sticker sheets into single, trimmed PNGs for the site.
# usage: from tools/, put the generated sheets in tools/in/, then python3 slice.py → tools/out/
import os
from PIL import Image

SRC, OUT = "in", "out"
os.makedirs(OUT, exist_ok=True)

def trim(im, pad=6):
    box = im.getchannel("A").point(lambda a: 255 if a > 12 else 0).getbbox()
    if not box:
        return im
    l, t, r, b = box
    return im.crop((max(0, l - pad), max(0, t - pad), min(im.width, r + pad), min(im.height, b + pad)))

def cells(im, cols, rows):
    w, h = im.width // cols, im.height // rows
    return [im.crop((c * w, r * h, (c + 1) * w, (r + 1) * h)) for r in range(rows) for c in range(cols)]

def p(name):
    return os.path.join(SRC, name)

# cat: crop every frame to the SAME box so the feet stay on one baseline while walking
if os.path.exists(p("cat-sheet.png")):
    frames = cells(Image.open(p("cat-sheet.png")).convert("RGBA"), 5, 1)
    boxes = [f.getchannel("A").point(lambda a: 255 if a > 12 else 0).getbbox() for f in frames]
    boxes = [b for b in boxes if b]
    l, t = min(b[0] for b in boxes), min(b[1] for b in boxes)
    r, b = max(b[2] for b in boxes), max(b[3] for b in boxes)
    for i, f in enumerate(frames):
        f.crop((l, t, r, b)).save(f"{OUT}/cat-{i}.png")
    print("cat: 5 frames")

if os.path.exists(p("toys-sheet.png")):
    for i, c in enumerate(cells(Image.open(p("toys-sheet.png")).convert("RGBA"), 7, 4)):
        trim(c).save(f"{OUT}/toy-{i + 1:02d}.png")
    print("toys: 28")

for name in ["telescope", "rocket", "dish", "mailbox", "cv-flag"]:
    if os.path.exists(p(f"{name}.png")):
        trim(Image.open(p(f"{name}.png")).convert("RGBA")).save(f"{OUT}/{name}.png")
        print("project:", name)

if os.path.exists(p("moon.png")):
    m = trim(Image.open(p("moon.png")).convert("RGBA"), 0)
    s = max(m.size)
    sq = Image.new("RGBA", (s, s))
    sq.paste(m, ((s - m.width) // 2, (s - m.height) // 2))
    sq.resize((min(s, 3000), min(s, 3000)), Image.LANCZOS).save(f"{OUT}/moon.png")
    print("moon")

if os.path.exists(p("galaxy.png")):
    Image.open(p("galaxy.png")).convert("RGB").save(f"{OUT}/galaxy.png")
    print("galaxy")

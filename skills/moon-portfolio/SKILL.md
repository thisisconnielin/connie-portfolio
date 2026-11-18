---
name: moon-portfolio
description: Make a personal portfolio site where a sticker cat walks on a draggable moon, using Connie Lin's moon template. Use when the user asks for a moon portfolio, a cute interactive personal site, or wants to copy thisisconnielin.github.io/connie-portfolio.
---

# Moon portfolio

Template: https://github.com/thisisconnielin/connie-portfolio (live: https://thisisconnielin.github.io/connie-portfolio/).
A static site: one `index.html` drawing a canvas scene, plus `assets/`. No build step.

## 1. Copy the template

```bash
gh repo create <user>.github.io --public --clone --template thisisconnielin/connie-portfolio \
  || (git clone https://github.com/thisisconnielin/connie-portfolio <folder> && cd <folder> && rm -rf .git && git init)
```

Remove Connie's own leftovers: `classic.html`, `app.js`, `data.js`, `style.css`, `media/`, and the `classic` link in the top nav of `index.html`.

## 2. Ask the user for content (one short message)

- name and one-line tagline
- email (resume requests go there; the PDF is never attached)
- 4 social handles + URLs
- up to 6 projects: name, one sentence, a link, 2–6 images
- the "about me" paragraphs
- 10–30 things they love, each with a short funny line

## 3. Edit `index.html`

Everything lives in the `/* ---------- content ---------- */` block plus two HTML bits:

- `.hero` (top of `<body>`): name + tagline.
- `#note`: the paper note's 4 social links.
- `LANDMARKS`: one entry per project `{ id, label, file, emoji }`. `file` is the sticker in `assets/`, `emoji` is the fallback.
- `CARDS`: one per landmark id: `k` (kicker), `t` (title), `p` (text), `h` (HTML: images, `.item` rows, `.go` buttons). Put images in `media/`.
- `TOYS`: `[label, line, motion, emoji, file?]`. The tap card reads "i love {label}" + line.
  motion: `bounce` · `hop` · `walk` · `walkhop` · `float` · `sway` · `still` · `drive` / `drive2` (circle the moon).
- `EMAIL`, `GITHUB` constants.

## 4. Art

Stickers are die-cut paper stickers with a white border on a transparent background, standing on the bottom edge.

- **Quick path:** keep the template's art. Missing stickers fall back to their emoji.
- **Own art:** give an image model `tools/codex-assets-prompt.md` (edit the lists first), put the sheets in `tools/in/`, run `python3 slice.py` in `tools/`, copy `tools/out/*` into `assets/`.
- **From one render:** with a single scene render, set the crop boxes in `tools/cut_ref.py` and run it. `make_moon.py` wraps the render's moon surface into a rotatable texture. Save it as `assets/moon.webp` (about 2000px, quality 80).
- Never draw copyrighted characters (game or film characters, logos). Use an original stand-in and name the character in the text instead.

## 5. Check and deploy

```bash
python3 -m http.server 8000   # open http://localhost:8000: drag the moon, tap every project and sticker, try a phone-width window
git add -A && git commit -m "My moon portfolio" && git push -u origin main
```

Turn on Pages (Settings → Pages → `main` / root), then send the user the live URL.

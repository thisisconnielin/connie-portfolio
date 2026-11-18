# Connie Lin — personal website

**Live: https://thisisconnielin.github.io/connie-portfolio/**

A single-page personal site: a sticker cat walks on a photoreal moon you can drag. Projects stand on the horizon and open as cards, and films play right inside them. Small stickers (things I love) bounce, drive and float around the moon, and a paper plane tows a note with my socials across the sky. It is a static site with no build step and no dependencies: one HTML file and a canvas. GitHub Pages serves it as-is.

## Make your own (Claude skill)

In Claude Code:

```
/plugin marketplace add thisisconnielin/connie-portfolio
/plugin install moon-portfolio@connie-portfolio
```

Then ask *"make me a moon portfolio"*. Claude copies this template, swaps in your name, projects, socials and stickers, and deploys it to your GitHub Pages.

Prefer doing it by hand? Fork the repo and follow [`skills/moon-portfolio/SKILL.md`](skills/moon-portfolio/SKILL.md).

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — the moon site: layout, motion, and all content (projects, cards, stickers, socials)
- `assets/` — moon texture, galaxy, the cat, project and toy stickers (transparent PNG / WebP)
- `media/` — the films, posters and Belo screenshots used in the cards
- `tools/` — scripts that made the art: cut stickers out of one render (`cut_ref.py`), wrap a moon texture (`make_moon.py`), slice generated sticker sheets (`slice.py`), and the image prompt (`codex-assets-prompt.md`)
- `skills/moon-portfolio/` — the Claude skill for making your own

## Deploy to GitHub Pages

```bash
gh repo create <you>.github.io --public --source=. --remote=origin --push
```

Then in the repository settings, under Pages, set the source to the `main` branch (root). The site is live within a minute or two.

## Notes

- `.nojekyll` makes Pages serve every file as-is.
- Drag, swipe, scroll or use ← → to turn the moon. Tap a project to open it, tap a sticker for a fun fact.
- Stickers still showing as emoji are placeholders until their art is generated (see `tools/codex-assets-prompt.md`).

# Connie Lin — personal website

**Live: https://thisisconnielin.github.io/**

A single-page personal site: a sticker cat walks on a photoreal moon you can drag. Projects stand on the horizon and open as cards, and films play right inside them. Small stickers (things I love) bounce, drive and float around the moon, and a paper plane tows a note with my socials across the sky. It is a static site with no build step and no dependencies: one HTML file and a canvas. GitHub Pages serves it as-is.

## Make your own

This site is also a Claude skill and template: **[Cat Moon Portfolio](https://github.com/thisisconnielin/cat-moon-portfolio)**.

```
/plugin marketplace add thisisconnielin/cat-moon-portfolio
/plugin install cat-moon-portfolio@cat-moon-portfolio
```

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — the moon site: layout, motion, and all content (projects, cards, stickers, socials)
- `assets/` — moon texture, galaxy, the cat, project and toy stickers (transparent PNG / WebP)
- `media/` — the films, posters and Belo screenshots used in the cards

## Deploy to GitHub Pages

```bash
gh repo create thisisconnielin.github.io --public --source=. --remote=origin --push
```

Then in the repository settings, under Pages, set the source to the `main` branch (root). The site is live within a minute or two.

## Notes

- `.nojekyll` makes Pages serve every file as-is.
- Drag, swipe, scroll or use ← → to turn the moon. Tap a project to open it, tap a sticker for a fun fact.
- Stickers still showing as emoji are placeholders until their art is generated (prompt and tools live in Cat Moon Portfolio).

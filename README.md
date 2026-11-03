# ConnieOS — portfolio

A tiny pixel desktop that holds my work. Double-click a folder, click a file, watch the film. Every click makes a little chiptune sound (generated live with WebAudio, so there are no audio files).

No build step and no dependencies: plain HTML, CSS and JS.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Put it on GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Build and deployment → Deploy from a branch**, then pick `main` / `/ (root)`.
3. The site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Add or edit a project

Everything on the desktop comes from `data.js`. To add a video:

1. Drop the source file somewhere and add a line `slug|path/relative/to/Desktop.mp4` to `encode-list.txt`.
2. Run `./encode.sh` to make a 720p web copy plus a poster in `media/<client>/`. Run `./posters.sh` if you want it to pick a better poster frame.
3. Add an entry to the matching folder in `data.js`.

To change the about text, the links (GitHub / email) and the folder colors, edit the top of `data.js`.

## Files

```
index.html    desktop shell
style.css     pixel UI
app.js        windows, sounds, sprites, player
data.js       all portfolio content
media/        web-sized videos + posters (~140 MB)
encode.sh     source → web copy (ffmpeg)
posters.sh    picks the most detailed frame as the poster
```

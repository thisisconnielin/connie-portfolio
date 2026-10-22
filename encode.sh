#!/bin/bash
# Re-encode source videos into small web copies under media/ (720p, H.264, faststart).
cd "$(dirname "$0")"
enc() {
  slug="$1"; src="$HOME/Desktop/$2"; out="media/$slug.mp4"
  [ -f "$out" ] && return
  ffmpeg -nostdin -v error -y -i "$src" -vf "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))',fps=30,format=yuv420p" \
    -c:v libx264 -preset slow -crf 27 -maxrate 2500k -bufsize 5000k -c:a aac -b:a 128k -ac 2 -movflags +faststart "$out.tmp.mp4" && mv "$out.tmp.mp4" "$out"
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$out"); t=$(echo "$d*0.4" | bc)
  ffmpeg -nostdin -v error -y -ss "$t" -i "$out" -frames:v 1 -vf "scale=480:-2" -q:v 4 "media/$slug.jpg"
  echo "done $slug"
}
export -f enc
while IFS='|' read -r slug src; do printf '%s\0%s\0' "$slug" "$src"; done < encode-list.txt | xargs -0 -n2 -P4 bash -c 'enc "$0" "$1"'

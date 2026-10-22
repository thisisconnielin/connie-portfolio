#!/bin/bash
# Pick the most detailed of 6 sampled frames as each video's poster (bigger jpg ≈ more detail).
cd "$(dirname "$0")"
for v in media/*/*.mp4; do
  d=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$v"); best=""; bs=0
  for p in 0.15 0.3 0.45 0.55 0.7 0.85; do
    t=$(echo "$d*$p" | bc); o="/tmp/poster_$p.jpg"
    ffmpeg -nostdin -v error -y -ss "$t" -i "$v" -frames:v 1 -vf "scale=480:-2" -q:v 4 "$o"
    s=$(stat -f%z "$o"); [ "$s" -gt "$bs" ] && { bs=$s; best=$o; }
  done
  cp "$best" "${v%.mp4}.jpg"
done

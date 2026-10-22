(() => {
  const P = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };

  /* ================= pixel sprites ================= */
  // Each sprite is rows of chars; each char maps to a color in the palette ('.' = empty).
  const INK = "#3b2a3f";
  function sprite(rows, pal) {
    const w = Math.max(...rows.map((r) => r.length)), hgt = rows.length;
    let rects = "";
    rows.forEach((r, y) => [...r].forEach((c, x) => {
      if (c !== "." && pal[c]) rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${pal[c]}"/>`;
    }));
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${hgt}" shape-rendering="crispEdges">${rects}</svg>`;
  }
  const shade = (hex, amt) => {
    const n = parseInt(hex.slice(1), 16);
    const f = (v) => Math.max(0, Math.min(255, Math.round(v + amt * 255)));
    return "#" + [n >> 16, (n >> 8) & 255, n & 255].map(f).map((v) => v.toString(16).padStart(2, "0")).join("");
  };

  const FOLDER = [
    "................",
    "..LLLLL.........",
    ".LHHHHHL........",
    ".LFFFFFFLLLLLLL.",
    ".LFFFFFFFFFFFFFL",
    ".LHHHHHHHHHHHHHL",
    ".LFFFFFFFFFFFFFL",
    ".LFFFFFFFFFFFFFL",
    ".LFFFFLFFFLFFFFL",
    ".LFFFFLFFFLFFFFL",
    ".LFFFPFFLFFPFFFL",
    ".LFFFFFFFFFFFFFL",
    ".LDDDDDDDDDDDDDL",
    "..LLLLLLLLLLLLL.",
  ];
  const folderIcon = (c) => sprite(FOLDER, { L: INK, F: c, H: shade(c, 0.18), D: shade(c, -0.15), P: "#ff9fc0" });

  const TXT = [
    "...LLLLLLLL.....",
    "...LWWWWWWLL....",
    "...LWWWWWWLWL...",
    "...LWWWWWWLLLL..",
    "...LWGGGGWWWWL..",
    "...LWWWWWWWWWL..",
    "...LWGGGGGGGWL..",
    "...LWWWWWWWWWL..",
    "...LWGGGGGGWWL..",
    "...LWWWWWWWWWL..",
    "...LWGGGGGGGWL..",
    "...LWWWWWWWWWL..",
    "...LWWWWWWWWWL..",
    "...LLLLLLLLLLL..",
  ];
  const MAIL = [
    "................",
    "................",
    ".LLLLLLLLLLLLLL.",
    ".LPWWWWWWWWWWPL.",
    ".LWPWWWWWWWWPWL.",
    ".LWWPWWWWWWPWWL.",
    ".LWWWPWWWWPWWWL.",
    ".LWWWWPRRPWWWWL.",
    ".LWWWWWRRWWWWWL.",
    ".LWWWWWWWWWWWWL.",
    ".LWWWWWWWWWWWWL.",
    ".LLLLLLLLLLLLLL.",
  ];
  const TRASH = [
    "......LLLL......",
    "..LLLLLLLLLLLL..",
    "..LGGGGGGGGGGL..",
    "..LLLLLLLLLLLL..",
    "...LWWWWWWWWL...",
    "...LWWGWWGWWL...",
    "...LWWGWWGWWL...",
    "...LWWGWWGWWL...",
    "...LWWGWWGWWL...",
    "...LWWGWWGWWL...",
    "...LWWWWWWWWL...",
    "...LLLLLLLLLL...",
  ];
  const HEART = [
    "................",
    "...LLL...LLL....",
    "..LPPPL.LPPPL...",
    ".LPWPPPLPPPPPL..",
    ".LPWPPPPPPPPPL..",
    ".LPPPPPPPPPPPL..",
    "..LPPPPPPPPPL...",
    "...LPPPPPPPL....",
    "....LPPPPPL.....",
    ".....LPPPL......",
    "......LPL.......",
    ".......L........",
  ];
  const CAT = (blink) => [
    "................",
    ".LL.......LL....",
    ".LPL.....LPL....",
    ".LWWLLLLLWWL....",
    ".LWWWWWWWWWL....",
    blink ? "LWWWWWWWWWWWL..." : "LWWLWWWWLWWWL...",
    "LWWLWWWWLWWWL...",
    "LWPWWWLWWWPWL...",
    "LWWWWLWLWWWWL...",
    ".LWWWWWWWWWL....",
    ".LWWWWWWWWWLLL..",
    ".LWWWWWWWWWLWL..",
    ".LWLWWWWWLWLWL..",
    ".LWLWWWWWLWWL...",
    ".LLLLLLLLLLL....",
  ];
  // game cartridge for vibe-coded apps
  const CART = [
    "..LLLLLLLLLLLL..",
    "..LGGGGGGGGGGL..",
    "..LGLLLLLLLLGL..",
    "..LGLOOOOOOLGL..",
    "..LGLOWWWWOLGL..",
    "..LGLOOOOOOLGL..",
    "..LGLOWWOOOLGL..",
    "..LGLLLLLLLLGL..",
    "..LGGGGGGGGGGL..",
    "..LGGGLGGLGGGL..",
    "..LGGPGGGGPGGL..",
    "..LGGGGGGGGGGL..",
    "...LYLYLYLYLYL..",
    "...LLLLLLLLLLL..",
  ];
  const PRINTER = [
    "....LLLLLLLL....",
    "....LWWWWWWL....",
    "....LWGGGGWL....",
    "..LLLLLLLLLLLL..",
    ".LPPPPPPPPPPPPL.",
    ".LPPPPPPPPPKPPL.",
    ".LPPLPPPPLPPPPL.",
    ".LPRPPPPPPRPPPL.",
    ".LDDDDDDDDDDDDL.",
    ".LDLLLLLLLLLLDL.",
    ".LDDDDDDDDDDDDL.",
    "..LLLLLLLLLLLL..",
  ];
  const ARROW = [
    "L...........", "LL..........", "LWL.........", "LWWL........",
    "LWWWL.......", "LWWWWL......", "LWWWWWL.....", "LWWWWWWL....",
    "LWWWLLLL....", "LWLWL.......", "LL.LWL......", "....LL......",
  ];
  const HAND = [
    "...LL.......", "..LWWL......", "..LWWL......", "..LWWLLLLL..",
    "..LWWLWWLWLL", "LLLWWWWWWWWL", "LWLWWWWWWWWL", "LWWWWWWWWWWL",
    ".LWWWWWWWWWL", "..LWWWWWWWL.", "...LWWWWWWL.", "...LLLLLLLL.",
  ];
  const base = { L: INK, W: "#ffffff", G: "#c9b8c9", P: "#ff9fc0", R: "#ff5d8f" };
  const cartPal = { L: INK, G: "#cfc6f2", O: "#ff8a3d", W: "#fff3e0", P: "#ff9fc0", Y: "#ffd36b" };
  const printerPal = { L: INK, W: "#ffffff", G: "#c9b8c9", P: "#bfe6ff", D: "#8fc8ee", K: "#4fd18b", R: "#ff9fc0" };
  const CAMERA = [
    ".LLLLLLLL.", "L........L", "L..LLLL.LL", "L.L....L.L", "L.L....L.L",
    "L.L....L.L", "L..LLLL..L", "L........L", ".LLLLLLLL.",
  ];

  // pixel cursors
  const cur = (rows, pal, hx, hy, fb) => {
    const svg = sprite(rows, pal).replace("<svg ", '<svg width="24" height="24" ');
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hx} ${hy}, ${fb}`;
  };
  document.documentElement.style.setProperty("--cursor", cur(ARROW, base, 0, 0, "auto"));
  document.documentElement.style.setProperty("--pointer", cur(HAND, { ...base, W: "#ffe3ee" }, 6, 0, "pointer"));

  /* ================= sound (WebAudio, no files) ================= */
  let ac = null, soundOn = localStorage.getItem("sound") !== "off";
  const audio = () => (ac ||= new (window.AudioContext || window.webkitAudioContext)());
  function tone(freq, dur = 0.06, { type = "square", vol = 0.06, to = null, at = 0 } = {}) {
    if (!soundOn) return;
    const a = audio(), t = a.currentTime + at;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  const seq = (notes, step, opts = {}) => notes.forEach((f, i) => tone(f, step * 1.3, { ...opts, at: (opts.at || 0) + i * step }));
  // short filtered noise burst (printer head, sticker peel)
  function noise(dur, { at = 0, freq = 2000, q = 1, vol = 0.08 } = {}) {
    if (!soundOn) return;
    const a = audio(), t = a.currentTime + at;
    const buf = a.createBuffer(1, Math.ceil(a.sampleRate * dur), a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    s.buffer = buf; f.type = "bandpass"; f.frequency.value = freq; f.Q.value = q;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f).connect(g).connect(a.destination); s.start(t);
  }
  const sfx = {
    click: () => tone(660, 0.05, { to: 990 }),
    select: () => tone(1046, 0.035, { vol: 0.04 }),
    hover: () => tone(1568, 0.02, { vol: 0.015, type: "triangle" }),
    open: () => seq([523, 659, 784, 1046], 0.045, { type: "triangle", vol: 0.08 }),
    close: () => seq([784, 523], 0.05, { type: "triangle", vol: 0.07 }),
    play: () => tone(392, 0.12, { to: 784, vol: 0.05 }),
    pause: () => tone(784, 0.1, { to: 392, vol: 0.05 }),
    boot: () => seq([523, 659, 784, 1046, 1318], 0.09, { type: "triangle", vol: 0.09 }),
    meow: () => { tone(700, 0.12, { type: "triangle", to: 1150, vol: 0.09 }); tone(1150, 0.18, { type: "triangle", to: 620, vol: 0.09, at: 0.12 }); },
    nope: () => seq([220, 165], 0.08, { vol: 0.05 }),
    // dot-matrix: rows of head chatter + a paper-feed whir, then a ding
    print: (secs) => {
      for (let t = 0; t < secs; t += 0.045) noise(0.03, { at: t, freq: 1800 + (t * 997 % 1) * 1600, q: 4, vol: 0.06 });
      for (let t = 0; t < secs; t += 0.32) tone(110, 0.2, { at: t, type: "sawtooth", vol: 0.015 });
      seq([1318, 1760], 0.08, { type: "triangle", vol: 0.08, at: secs });
    },
    peel: () => { noise(0.16, { freq: 3500, q: 0.7, vol: 0.09 }); tone(523, 0.08, { type: "triangle", to: 1046, vol: 0.06, at: 0.12 }); },
    insert: () => { noise(0.05, { freq: 600, vol: 0.12 }); tone(196, 0.06, { at: 0.06 }); seq([392, 523, 784], 0.07, { type: "triangle", vol: 0.08, at: 0.2 }); },
  };
  let lastHover = 0;
  const hoverSfx = () => { const n = performance.now(); if (n - lastHover > 70) { lastHover = n; sfx.hover(); } };

  const soundBtn = $("#soundToggle");
  const paintSound = () => (soundBtn.textContent = soundOn ? "♪ on" : "♪ off");
  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn; localStorage.setItem("sound", soundOn ? "on" : "off"); paintSound(); sfx.click();
  });
  paintSound();

  /* ================= boot ================= */
  $("#bootLogo").innerHTML = sprite(HEART, base);
  $("#menuLogo").innerHTML = sprite(HEART, base);
  const fill = $("#bootFill");
  let pct = 0;
  const tick = setInterval(() => {
    pct = Math.min(100, pct + 8 + Math.random() * 14);
    fill.style.width = pct + "%";
    if (pct >= 100) { clearInterval(tick); $("#bootStart").hidden = false; }
  }, 90);
  $("#bootStart").addEventListener("click", () => {
    audio().resume(); sfx.boot();
    $("#boot").classList.add("gone");
    setTimeout(() => $("#boot").remove(), 400);
  });

  /* ================= menubar ================= */
  const clock = () => ($("#clock").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  clock(); setInterval(clock, 20000);
  $("#ownerName").textContent = P.owner;
  $("#ownerRole").textContent = P.role;
  document.querySelectorAll("[data-open]").forEach((b) => b.addEventListener("click", () => { sfx.click(); openers[b.dataset.open](); }));

  /* ================= windows ================= */
  const layer = $("#windows");
  let z = 100, cascade = 0;
  const isMobile = () => matchMedia("(max-width: 720px)").matches;

  function focusWin(win) {
    document.querySelectorAll(".win.focused").forEach((w) => w.classList.remove("focused"));
    win.classList.add("focused");
    win.style.zIndex = ++z;
  }
  function closeWin(win) {
    if (!win || win.classList.contains("closing")) return;
    sfx.close();
    win.querySelectorAll("video").forEach((v) => v.pause());
    win.classList.add("closing");
    setTimeout(() => win.remove(), 150);
  }
  function openWindow({ id, title, width, body, onClose }) {
    let win = document.getElementById("win-" + id);
    if (win) { // already open: swap content, bring to front
      $(".t", win).textContent = title;
      win.querySelectorAll("video").forEach((v) => v.pause());
      $(".win-body", win).replaceChildren(body);
      if (width) win.style.width = width + "px";
      focusWin(win);
      return win;
    }
    win = h(`<section class="win pixel" id="win-${id}" role="dialog" aria-label="${title}">
      <div class="titlebar"><button class="x" aria-label="close">x</button><span class="t"></span><span style="width:20px"></span></div>
      <div class="win-body"></div></section>`);
    $(".t", win).textContent = title;
    $(".win-body", win).append(body);
    const w = Math.min(width || 560, innerWidth - 40);
    win.style.width = w + "px";
    const off = (cascade++ % 6) * 28;
    win.style.left = Math.max(12, Math.min(innerWidth - w - 16, 150 + off + (innerWidth - w - 300) / 2.4)) + "px";
    win.style.top = Math.max(48, 64 + off) + "px";
    layer.append(win);
    focusWin(win);
    $(".x", win).addEventListener("click", (e) => { e.stopPropagation(); closeWin(win); onClose?.(); });
    win.addEventListener("pointerdown", () => focusWin(win));
    drag(win, $(".titlebar", win));
    sfx.open();
    return win;
  }
  function drag(win, handle) {
    handle.addEventListener("pointerdown", (e) => {
      if (isMobile() || e.target.closest(".x")) return;
      const r = win.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
      handle.setPointerCapture(e.pointerId);
      handle.style.cursor = "grabbing";
      const move = (ev) => {
        win.style.left = Math.max(-r.width + 80, Math.min(innerWidth - 80, ev.clientX - dx)) + "px";
        win.style.top = Math.max(34, Math.min(innerHeight - 40, ev.clientY - dy)) + "px";
      };
      const up = () => { handle.style.cursor = ""; handle.removeEventListener("pointermove", move); handle.removeEventListener("pointerup", up); };
      handle.addEventListener("pointermove", move);
      handle.addEventListener("pointerup", up);
    });
  }

  /* ================= folder window ================= */
  // tiny canvas copy of the poster -> chunky pixel thumbnail; real image fades in on hover
  function pixelThumb(thumb, src) {
    const img = new Image();
    img.src = src; img.alt = ""; img.loading = "lazy";
    const c = document.createElement("canvas"); c.width = 48; c.height = 30;
    img.onload = () => {
      const ctx = c.getContext("2d"), r = img.width / img.height, cr = c.width / c.height;
      let sw = img.width, sh = img.height, sx = 0, sy = 0;
      if (r > cr) { sw = sh * cr; sx = (img.width - sw) / 2; } else { sh = sw / cr; sy = (img.height - sh) / 2; }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, c.width, c.height);
    };
    thumb.prepend(c, img);
  }
  const slug = (item) => item.file.split("/").pop() + ".mp4";

  function openFolder(folder) {
    const count = folder.groups.reduce((n, g) => n + g.items.length, 0);
    const body = h(`<div>
      <div class="folder-head">${folderIcon(folder.color)}<div><p></p><div class="folder-meta">${count} files</div></div></div>
    </div>`);
    $("p", body).textContent = folder.blurb;
    folder.groups.forEach((g) => {
      body.append(h(`<div class="group-title">${g.name}</div>`));
      const grid = h(`<div class="files"></div>`);
      g.items.forEach((item) => {
        const f = h(`<button class="file" title="${item.title}">
          <div class="thumb"><span class="tag">${item.dur}</span>${item.ratio !== "16:9" ? `<span class="tag v">${item.ratio}</span>` : ""}</div>
          <div class="fname">${slug(item)}</div></button>`);
        pixelThumb($(".thumb", f), `media/${item.file}.jpg`);
        f.addEventListener("pointerenter", hoverSfx);
        f.addEventListener("click", () => { sfx.click(); openPlayer(folder, item); });
        grid.append(f);
      });
      body.append(grid);
    });
    openWindow({ id: "folder-" + folder.id, title: folder.name, width: 640, body });
  }

  /* ================= player window ================= */
  const fmt = (s) => (isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}` : "0:00");

  function openPlayer(folder, item) {
    const list = folder.groups.flatMap((g) => g.items);
    const idx = list.indexOf(item);
    const [rw, rh] = item.ratio.split(":").map(Number);
    const maxH = innerHeight - 290;
    let width = Math.min(rw > rh ? (rw / rh > 2 ? 880 : 760) : 380, (maxH * rw) / rh + 32);
    width = Math.max(320, width);

    const body = h(`<div class="player">
      <div class="screen" style="aspect-ratio:${rw}/${rh}">
        <video playsinline preload="metadata" src="media/${item.file}.mp4" poster="media/${item.file}.jpg"></video>
        <button class="big-play"><span>▶ play</span></button>
      </div>
      <div class="controls">
        <button class="btn pp" aria-label="play">▶</button>
        <div class="bar" role="slider" aria-label="seek"><span></span></div>
        <span class="time">0:00 / ${item.dur}</span>
        <button class="btn mute" aria-label="mute">♪</button>
        <button class="btn fs" aria-label="fullscreen">⛶</button>
      </div>
      <div class="info"><h3></h3><p></p>
        <div class="chips"><span class="chip">${folder.name}</span><span class="chip">${item.dur}</span><span class="chip">${item.ratio}</span></div>
      </div>
      <div class="nav">
        <button class="btn prev" ${idx === 0 ? "disabled" : ""}>◀ prev</button>
        <button class="btn next" ${idx === list.length - 1 ? "disabled" : ""}>next ▶</button>
      </div>
    </div>`);
    $("h3", body).textContent = item.title;
    $(".info p", body).textContent = item.note || "";

    const v = $("video", body), screen = $(".screen", body), pp = $(".pp", body), fillEl = $(".bar span", body);
    const toggle = () => { if (v.paused) { document.querySelectorAll("video").forEach((o) => o !== v && o.pause()); v.play(); sfx.play(); } else { v.pause(); sfx.pause(); } };
    $(".big-play", body).addEventListener("click", toggle);
    v.addEventListener("click", toggle);
    pp.addEventListener("click", toggle);
    v.addEventListener("play", () => { screen.classList.add("playing"); pp.textContent = "❚❚"; });
    v.addEventListener("pause", () => (pp.textContent = "▶"));
    v.addEventListener("timeupdate", () => {
      fillEl.style.width = (v.currentTime / v.duration) * 100 + "%";
      $(".time", body).textContent = `${fmt(v.currentTime)} / ${fmt(v.duration)}`;
    });
    v.addEventListener("ended", () => { sfx.boot(); });
    const bar = $(".bar", body);
    const seek = (e) => { const r = bar.getBoundingClientRect(); v.currentTime = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * v.duration; };
    bar.addEventListener("pointerdown", (e) => { sfx.select(); seek(e); bar.setPointerCapture(e.pointerId); bar.onpointermove = seek; });
    bar.addEventListener("pointerup", () => (bar.onpointermove = null));
    $(".mute", body).addEventListener("click", (e) => { v.muted = !v.muted; e.currentTarget.textContent = v.muted ? "×" : "♪"; sfx.click(); });
    $(".fs", body).addEventListener("click", () => { sfx.click(); (v.requestFullscreen || v.webkitEnterFullscreen)?.call(v); });
    $(".prev", body).addEventListener("click", () => { sfx.click(); openPlayer(folder, list[idx - 1]); });
    $(".next", body).addEventListener("click", () => { sfx.click(); openPlayer(folder, list[idx + 1]); });
    body.querySelectorAll(".btn").forEach((b) => b.addEventListener("pointerenter", hoverSfx));

    openWindow({ id: "player", title: slug(item), width, body });
  }

  /* ================= text windows ================= */
  function textWin(id, title, html, width = 460) {
    openWindow({ id, title, width, body: h(`<div class="txt">${html}</div>`) });
  }
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const socialBtns = () => `<div class="links">${P.socials.map((s) =>
    `<a class="btn" href="${esc(s.url)}" target="_blank" rel="noopener">${STICKER_NAME[s.id]} ${esc(s.label)}</a>`).join("")}</div>`;
  const total = P.folders.reduce((n, f) => n + f.groups.reduce((m, g) => m + g.items.length, 0), 0);
  const openers = {
    about: () => textWin("about", "about_me.txt",
      P.about.map((p) => `<p>${esc(p)}</p>`).join("") +
      `<p class="folder-meta">${total} videos · ${P.folders.length} startups · ${P.apps.length} app shipped</p>` + socialBtns()),
    contact: () => textWin("contact", "say_hi.mail",
      `<p>Launching something? I'd love to help it land.</p>
       <p><a class="btn" href="mailto:${esc(P.email)}">✉ ${esc(P.email)}</a></p>` + socialBtns(), 440),
    trash: () => { sfx.nope(); textWin("trash", "Trash", `<p>Trash is empty.</p><p>I don't throw drafts away. I re-cut them ♥</p>`, 360); },
    apps: () => openCartridge(),
    resume: () => openResume(),
  };

  /* ================= vibe-coded cartridge ================= */
  function openCartridge() {
    sfx.insert();
    const body = h(`<div class="cart">
      <div class="cart-top">${sprite(CART, cartPal)}<div><b>vibe_coded</b><div class="folder-meta">apps I designed, built & shipped myself</div></div></div>
      <div class="homescreen"></div>
    </div>`);
    const home = $(".homescreen", body);
    P.apps.forEach((app) => {
      const b = h(`<button class="app-icon"><img alt="" src="${app.icon}"><span>${esc(app.name)}</span></button>`);
      b.addEventListener("pointerenter", hoverSfx);
      b.addEventListener("click", () => { sfx.click(); openApp(app); });
      home.append(b);
    });
    const self = h(`<button class="app-icon"><span class="self">${sprite(HEART, base)}</span><span>ConnieOS</span></button>`);
    self.addEventListener("click", () => { sfx.meow(); self.classList.remove("wiggle"); void self.offsetWidth; self.classList.add("wiggle"); say("you're already in it :3"); });
    home.append(self, h(`<div class="app-icon soon"><span class="slot">+</span><span>loading…</span></div>`));
    openWindow({ id: "apps", title: "vibe_coded.cart", width: 440, body });
  }

  function openApp(app) {
    const body = h(`<div class="app">
      <div class="phone"><div class="notch"></div><div class="phone-screen"></div><div class="dots"></div></div>
      <div class="app-info">
        <div class="app-head"><img alt="" src="${app.icon}"><div><h3>${esc(app.name)}</h3><p class="tag-line">${esc(app.tagline)}</p></div></div>
        <p>${esc(app.about)}</p>
        <ol class="steps">${app.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
        <p class="built">${esc(app.built)}</p>
        <div class="chips">${app.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
        <div class="links"><a class="btn hot" href="${esc(app.url)}" target="_blank" rel="noopener">↗ ${esc(app.url.replace(/^https?:\/\//, ""))}</a></div>
      </div>
    </div>`);
    const scr = $(".phone-screen", body), dots = $(".dots", body);
    let i = 0, timer;
    app.screens.forEach((src, k) => {
      scr.append(h(`<img alt="" src="${src}" ${k ? "" : 'class="on"'}>`));
      const d = h(`<button aria-label="screen ${k + 1}" ${k ? "" : 'class="on"'}></button>`);
      d.addEventListener("click", () => { sfx.select(); show(k); restart(); });
      dots.append(d);
    });
    const show = (k) => {
      i = (k + app.screens.length) % app.screens.length;
      scr.querySelectorAll("img").forEach((im, n) => im.classList.toggle("on", n === i));
      dots.querySelectorAll("button").forEach((d, n) => d.classList.toggle("on", n === i));
    };
    const restart = () => { clearInterval(timer); timer = setInterval(() => body.isConnected ? show(i + 1) : clearInterval(timer), 2600); };
    scr.addEventListener("click", () => { sfx.select(); show(i + 1); restart(); });
    restart();
    $(".hot", body).addEventListener("click", sfx.click);
    openWindow({ id: "app-" + app.id, title: app.name.toLowerCase() + ".app", width: 640, body });
  }

  /* ================= resume printer ================= */
  function openResume() {
    const r = P.resume, PRINT_SECS = 1.8;
    const li = (arr) => arr.map((x) => `<li>${esc(x)}</li>`).join("");
    const body = h(`<div class="printer-wrap">
      <div class="printer">${sprite(PRINTER, printerPal)}</div>
      <div class="paper-slot"><div class="paper">
        <div class="paper-in">
          <div class="r-name">${esc(r.name)}</div>
          <div class="r-head">★ ${esc(r.headline)} ★</div>
          <div class="r-school">${esc(r.school)}</div>
          <div class="r-sec">now</div><ul>${li(r.now)}</ul>
          <div class="r-sec">before</div><ul>${li(r.before)}</ul>
          <div class="r-sec">good at</div>
          <div class="chips">${r.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
          <div class="r-cut">- - - - - ✂ - - - - - - - - - - - - - -</div>
          <div class="links">
            <a class="btn hot" href="${esc(r.pdf)}" download="Connie-Lin-Resume.pdf">⬇ download pdf</a>
            <a class="btn" href="${esc(r.pdf)}" target="_blank" rel="noopener">↗ full resume</a>
            <button class="btn again">↻ print again</button>
          </div>
        </div>
      </div></div>
    </div>`);
    const go = () => {
      const paper = $(".paper", body), printer = $(".printer", body);
      paper.classList.remove("printing"); printer.classList.remove("busy"); void paper.offsetWidth;
      paper.style.setProperty("--secs", PRINT_SECS + "s");
      paper.classList.add("printing"); printer.classList.add("busy");
      sfx.print(PRINT_SECS);
      setTimeout(() => printer.classList.remove("busy"), PRINT_SECS * 1000);
    };
    $(".again", body).addEventListener("click", go);
    body.querySelectorAll("a.btn").forEach((a) => a.addEventListener("click", sfx.click));
    openWindow({ id: "resume", title: "print_resume.exe", width: 480, body });
    go();
  }

  /* ================= social stickers ================= */
  const STICKER_NAME = { x: "X", xhs: "小红书", ig: "IG", in: "LinkedIn" };
  const stickerWrap = $("#stickers");
  P.socials.forEach((s, k) => {
    const a = h(`<a class="sticker s-${s.id}" href="${esc(s.url)}" target="_blank" rel="noopener" style="--r:${[-7, 5, -3, 8][k % 4]}deg">
      <span class="s-badge">${s.id === "ig" ? sprite(CAMERA, { L: "#fff" }) : esc({ x: "X", xhs: "小红书", in: "in" }[s.id])}</span>
      <span class="s-handle">${esc(s.label)}</span></a>`);
    a.title = `${STICKER_NAME[s.id]} ${s.label}`;
    a.addEventListener("pointerenter", hoverSfx);
    a.addEventListener("click", () => sfx.peel());
    stickerWrap.append(a);
  });

  /* ================= desktop icons ================= */
  const icons = [
    ...P.folders.map((f) => ({ label: f.name, svg: folderIcon(f.color), open: () => openFolder(f) })),
    { label: "vibe_coded", svg: sprite(CART, cartPal), open: openers.apps, cls: "cart-icon" },
    { label: "resume", svg: sprite(PRINTER, printerPal), open: openers.resume },
    { label: "about_me.txt", svg: sprite(TXT, base), open: openers.about },
    { label: "say_hi.mail", svg: sprite(MAIL, base), open: openers.contact },
    { label: "Trash", svg: sprite(TRASH, base), open: openers.trash, cls: "trash" },
  ];
  const iconWrap = $("#icons");
  icons.forEach((ic) => {
    const el = h(`<button class="icon ${ic.cls || ""}">${ic.svg}<span class="label"></span></button>`);
    $(".label", el).textContent = ic.label;
    el.addEventListener("pointerenter", hoverSfx);
    // mouse: click selects, double-click opens. touch: tap opens.
    el.addEventListener("pointerup", (e) => {
      if (e.pointerType !== "mouse") { ic.open(); return; }
      document.querySelectorAll(".icon.selected").forEach((o) => o.classList.remove("selected"));
      el.classList.add("selected"); sfx.select();
    });
    el.addEventListener("dblclick", () => ic.open());
    el.addEventListener("keydown", (e) => e.key === "Enter" && ic.open());
    (ic.cls === "trash" ? $("#desktop") : iconWrap).append(el);
  });
  $("#desktop").addEventListener("pointerdown", (e) => {
    if (!e.target.closest(".icon")) document.querySelectorAll(".icon.selected").forEach((o) => o.classList.remove("selected"));
  });

  /* ================= pet cat ================= */
  const pet = $("#pet");
  const lines = ["meow!", "nice cut ✿", "try the printer →", "*purr*", "peel a sticker!", "hi :3", "she made an app too"];
  function say(text) {
    document.querySelector(".bubble")?.remove();
    const b = h(`<div class="bubble pixel"></div>`);
    b.textContent = text;
    $("#desktop").append(b);
    setTimeout(() => b.remove(), 1800);
  }
  pet.innerHTML = sprite(CAT(false), base);
  setInterval(() => { pet.innerHTML = sprite(CAT(true), base); setTimeout(() => (pet.innerHTML = sprite(CAT(false), base)), 160); }, 3200);
  pet.addEventListener("click", () => {
    sfx.meow();
    pet.classList.remove("hop"); void pet.offsetWidth; pet.classList.add("hop");
    say(lines[Math.floor(Math.random() * lines.length)]);
  });

  /* ================= keyboard ================= */
  addEventListener("keydown", (e) => {
    const top = $(".win.focused");
    if (e.key === "Escape") closeWin(top);
    if (e.key === " " && top?.id === "win-player") { e.preventDefault(); $(".pp", top).click(); }
  });
})();

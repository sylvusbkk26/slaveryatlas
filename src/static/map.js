/* Carte mondiale interactive des systèmes esclavagistes.
   Données : tableau D (app.<lang>.js). Libellés : MAP_T (injecté par le build).
   Bibliothèques : d3-geo, topojson-client (auto-hébergées dans /assets/vendor/). */
(function () {
  const box = document.getElementById("worldmap");
  if (!box || typeof D === "undefined" || !window.d3 || !window.topojson) return;
  const T = window.MAP_T;
  const LANG = document.documentElement.lang.slice(0, 2);
  const reduceMotion = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Position [longitude, latitude] de chaque système.
  const POS = {
    meso: [44.4, 33.0], egy: [31.2, 26.5], ath: [23.7, 38.0], spa: [22.4, 36.6], rome: [12.5, 41.9],
    chine: [110, 34], coree: [127.5, 37.0], inde: [78, 24], siam: [100.5, 14.5], asiec: [63.5, 40.5],
    orient: [42, 20], afr: [6, 12], eumed: [-2, 52.5], medit: [12.3, 45.4], otto: [29, 41],
    tatar: [34.5, 46.5], barb: [3, 36.8], russie: [37.6, 55.7], azt: [-99.1, 19.4], nwc: [-127, 52],
    amind: [-104, 33], atl: [-28, 8]
  };
  // Grandes routes de traite (du lieu de capture vers le lieu de vente), rattachées à un système.
  const ROUTES = [
    { id: "atl", lines: [[[3, 6.4], [-38.5, -12.9]], [[3, 6.4], [-72.3, 18.6]], [[3, 6.4], [-79.9, 32.8]], [[13.2, -8.8], [-43.2, -22.9]]] },
    { id: "orient", lines: [[[-3, 16.8], [-5, 34]], [[14, 13], [13.2, 32.9]], [[25, 13], [31.2, 30]], [[38.5, 15.6], [39.8, 21.4]], [[39.2, -6.2], [58.4, 23.6]], [[58.4, 23.6], [72.8, 19]]] },
    { id: "tatar", lines: [[[24, 50.5], [35.4, 45]], [[37.6, 54], [35.4, 45]], [[35.4, 45], [29, 41]]] },
    { id: "barb", lines: [[[-9, 38.7], [3, 36.8]], [[12, 41], [3, 36.8]], [[-8.5, 51.9], [-6.8, 34]]] },
    { id: "medit", lines: [[[35.4, 45], [12.3, 45.4]]] },
    { id: "eumed", lines: [[[-6.3, 53.3], [10, 55], [30.5, 50.4], [44.4, 33.3]]] },
    { id: "asiec", lines: [[[51.4, 35.7], [60.6, 41.4]]] },
    { id: "siam", lines: [[[121, 6], [104, 1.3]]] }
  ];
  const byId = Object.fromEntries(D.map(r => [r.id, r]));
  const isRaceSys = r => ["amind", "atl"].includes(r.id);

  // ---------- SVG ----------
  const W = 960, H = 470;
  const NS = "http://www.w3.org/2000/svg";
  const canvas = box.querySelector(".map-canvas");
  const el = (name, attrs, parent) => {
    const n = document.createElementNS(NS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  const svg = el("svg", { viewBox: `0 0 ${W} ${H}`, role: "img", "aria-label": T.title });
  canvas.appendChild(svg);
  const projection = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: "Sphere" });
  const path = d3.geoPath(projection);
  const clip = el("clipPath", { id: "map-clip" }, el("defs", {}, svg));
  el("path", { d: path({ type: "Sphere" }) }, clip);
  el("path", { d: path({ type: "Sphere" }), class: "map-sea" }, svg);
  const vp = el("g", { "clip-path": "url(#map-clip)" }, svg);   // groupe zoomable
  const view = el("g", {}, vp);
  el("path", { d: path(d3.geoGraticule10()), class: "map-grat" }, view);
  const landG = el("g", {}, view), routesG = el("g", {}, view), dotsG = el("g", {}, view);

  fetch("/assets/vendor/countries-110m.json").then(r => r.json()).then(topo => {
    el("path", { d: path(topojson.feature(topo, topo.objects.countries)), class: "map-land" }, landG);
    el("path", { d: path(topojson.mesh(topo, topo.objects.countries, (a, b) => a !== b)), class: "map-border" }, landG);
  }).catch(() => {});

  const routeEls = [];
  for (const R of ROUTES) {
    const r = byId[R.id];
    if (!r) continue;
    for (const line of R.lines) {
      const d = path({ type: "LineString", coordinates: line });
      const hit = el("path", { d, class: "map-route-hit" }, routesG);
      const p = el("path", { d, class: "map-route" + (isRaceSys(r) ? " race" : "") }, routesG);
      bindItem(hit, r);
      routeEls.push({ p, hit, r });
    }
  }
  const dotEls = [];
  for (const r of D) {
    const pos = POS[r.id];
    if (!pos) continue;
    const [x, y] = projection(pos);
    const g = el("g", { class: "map-dot" + (isRaceSys(r) ? " race" : ""), tabindex: "0", role: "button", "aria-label": r.name + ", " + r.per }, dotsG);
    const hit = el("circle", { cx: x, cy: y, r: 13, class: "hit" }, g);
    const c = el("circle", { cx: x, cy: y, r: 6 }, g);
    bindItem(g, r);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(r); } });
    dotEls.push({ g, c, hit, r });
  }

  // ---------- Infobulle et fiche ----------
  const tip = document.createElement("div");
  tip.className = "map-tip";
  tip.hidden = true;
  canvas.appendChild(tip);
  function bindItem(node, r) {
    node.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") showTip(r, e); });
    node.addEventListener("pointermove", e => { if (e.pointerType === "mouse") moveTip(e); });
    node.addEventListener("pointerleave", () => { tip.hidden = true; });
    node.addEventListener("click", () => { if (!dragged) select(r); });
  }
  function showTip(r, e) {
    tip.innerHTML = "<strong></strong><span></span><span class='v'></span>";
    tip.querySelector("strong").textContent = r.name;
    tip.querySelector("span").textContent = r.per;
    tip.querySelector(".v").textContent = r.vol;
    tip.hidden = false;
    moveTip(e);
  }
  function moveTip(e) {
    const b = canvas.getBoundingClientRect();
    let x = e.clientX - b.left + 14, y = e.clientY - b.top + 14;
    if (x + tip.offsetWidth > b.width) x = e.clientX - b.left - tip.offsetWidth - 14;
    if (y + tip.offsetHeight > b.height) y = e.clientY - b.top - tip.offsetHeight - 14;
    tip.style.left = Math.max(0, x) + "px";
    tip.style.top = Math.max(0, y) + "px";
  }
  const info = box.querySelector(".map-info");
  let selected = null;
  function select(r) {
    selected = r;
    dotEls.forEach(d => d.g.classList.toggle("sel", d.r === r));
    routeEls.forEach(d => d.p.classList.toggle("sel", d.r === r));
    info.innerHTML = '<span class="per"></span><strong></strong><span class="v"></span><span class="tags"></span><span class="links"><a class="go"></a><button type="button" class="zoomto"></button></span>';
    info.querySelector(".per").textContent = r.per + " · " + r.region;
    info.querySelector("strong").textContent = r.name;
    info.querySelector(".v").textContent = r.vol;
    const tags = info.querySelector(".tags");
    [r.src, r.fin].forEach((t, i) => { const s = document.createElement("span"); s.className = "pill"; s.textContent = (i ? T.end + " : " : "") + t; tags.appendChild(s); });
    const a = info.querySelector(".go");
    a.href = "/" + LANG + "/" + r.page + "/";
    a.textContent = T.read + " →";
    const z = info.querySelector(".zoomto");
    z.textContent = T.zoomto;
    z.addEventListener("click", () => { const [x, y] = projection(POS[r.id]); zoomTo(x, y, 3); });
  }

  // ---------- Zoom et déplacement ----------
  let k = 1, tx = 0, ty = 0, dragged = false;
  const KMAX = 8;
  function clampT() {
    tx = Math.min(0, Math.max(W - W * k, tx));
    ty = Math.min(0, Math.max(H - H * k, ty));
  }
  function render(animate) {
    clampT();
    view.style.transition = animate && !reduceMotion ? "transform .35s ease" : "none";
    view.setAttribute("transform", `translate(${tx},${ty}) scale(${k})`);
    view.style.transform = `translate(${tx}px,${ty}px) scale(${k})`;
    for (const d of dotEls) { d.c.setAttribute("r", 6 / Math.sqrt(k)); d.hit.setAttribute("r", 13 / Math.sqrt(k)); }
    svg.style.touchAction = k > 1 ? "none" : "pan-y";
    box.querySelector(".map-reset").disabled = k === 1;
  }
  function svgPoint(clientX, clientY) {
    const b = svg.getBoundingClientRect();
    return [(clientX - b.left) * W / b.width, (clientY - b.top) * H / b.height];
  }
  function zoomAt(px, py, factor, animate) {
    const nk = Math.min(KMAX, Math.max(1, k * factor));
    tx = px - (px - tx) * nk / k;
    ty = py - (py - ty) * nk / k;
    k = nk;
    render(animate);
  }
  function zoomTo(x, y, nk) {
    k = Math.min(KMAX, Math.max(1, nk));
    tx = W / 2 - x * k;
    ty = H / 2 - y * k;
    render(true);
  }
  svg.addEventListener("wheel", e => {
    if (!e.ctrlKey && !e.metaKey && k === 1 && e.deltaY > 0) return; // laisse défiler la page
    e.preventDefault();
    const [px, py] = svgPoint(e.clientX, e.clientY);
    zoomAt(px, py, Math.exp(-e.deltaY * 0.0022));
  }, { passive: false });
  svg.addEventListener("dblclick", e => {
    const [px, py] = svgPoint(e.clientX, e.clientY);
    zoomAt(px, py, e.shiftKey ? 0.5 : 2, true);
  });
  const ptrs = new Map();
  let start = null;
  svg.addEventListener("pointerdown", e => {
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    dragged = false;
    start = { tx, ty, k, pts: [...ptrs.values()].map(p => p.slice()) };
  });
  svg.addEventListener("pointermove", e => {
    if (!ptrs.has(e.pointerId)) return;
    ptrs.set(e.pointerId, [e.clientX, e.clientY]);
    const pts = [...ptrs.values()];
    const b = svg.getBoundingClientRect(), sx = W / b.width;
    if (pts.length === 1 && start.pts.length === 1) {
      const dx = (pts[0][0] - start.pts[0][0]) * sx, dy = (pts[0][1] - start.pts[0][1]) * sx;
      if (!dragged && Math.hypot(dx, dy) < 4) return;
      if (k === 1 && e.pointerType !== "mouse") return; // à l'échelle 1, le doigt fait défiler la page
      dragged = true;
      svg.setPointerCapture(e.pointerId);
      tx = start.tx + dx; ty = start.ty + dy; render();
    } else if (pts.length === 2 && start.pts.length === 2) {
      dragged = true;
      const d0 = Math.hypot(start.pts[0][0] - start.pts[1][0], start.pts[0][1] - start.pts[1][1]);
      const d1 = Math.hypot(pts[0][0] - pts[1][0], pts[0][1] - pts[1][1]);
      const [cx, cy] = svgPoint((pts[0][0] + pts[1][0]) / 2, (pts[0][1] + pts[1][1]) / 2);
      k = start.k; tx = start.tx; ty = start.ty;
      zoomAt(cx, cy, d1 / d0);
    }
  });
  const endPtr = e => {
    ptrs.delete(e.pointerId);
    start = { tx, ty, k, pts: [...ptrs.values()].map(p => p.slice()) };
    setTimeout(() => { dragged = false; }, 0);
  };
  svg.addEventListener("pointerup", endPtr);
  svg.addEventListener("pointercancel", endPtr);
  box.querySelector(".map-zin").addEventListener("click", () => zoomAt(W / 2, H / 2, 1.6, true));
  box.querySelector(".map-zout").addEventListener("click", () => zoomAt(W / 2, H / 2, 1 / 1.6, true));
  box.querySelector(".map-reset").addEventListener("click", () => { k = 1; tx = 0; ty = 0; render(true); });

  // ---------- Filtres : époque et région ----------
  const slider = box.querySelector("#map-year");
  const out = box.querySelector("#map-year-out");
  const STEPS = [-3000, -2000, -1500, -1000, -700, -500, -300, -100, 1, 200, 400, 650, 800, 1000, 1200, 1350, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1880, 1900, 1950, 2000];
  slider.max = String(STEPS.length);
  slider.value = String(STEPS.length);
  let region = "";
  const chips = box.querySelector(".map-regions");
  const regions = [...new Set(D.map(r => r.region))];
  ["", ...regions].forEach(reg => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = reg || T.allregions;
    b.setAttribute("aria-pressed", reg === region ? "true" : "false");
    b.addEventListener("click", () => {
      region = reg;
      chips.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
      apply();
    });
    chips.appendChild(b);
  });
  function apply() {
    const i = +slider.value;
    const all = i >= STEPS.length;
    const year = all ? null : STEPS[i];
    out.textContent = all ? T.all : T.fmt(year);
    const on = r => (all || (r.start <= year && year <= r.end)) && (!region || r.region === region);
    dotEls.forEach(d => d.g.classList.toggle("off", !on(d.r)));
    routeEls.forEach(d => { d.p.classList.toggle("off", !on(d.r)); d.hit.style.pointerEvents = on(d.r) ? "" : "none"; });
    box.querySelector(".map-count").textContent = T.count(D.filter(on).length, D.length);
  }
  slider.addEventListener("input", () => { stop(); apply(); });

  // ---------- Lecture automatique ----------
  const play = box.querySelector(".map-play");
  let timer = null;
  function stop() { clearInterval(timer); timer = null; play.textContent = "▶ " + T.play; play.setAttribute("aria-pressed", "false"); }
  play.addEventListener("click", () => {
    if (timer) return stop();
    if (+slider.value >= STEPS.length) slider.value = "0";
    play.textContent = "❚❚ " + T.pause;
    play.setAttribute("aria-pressed", "true");
    apply();
    timer = setInterval(() => {
      const v = +slider.value + 1;
      slider.value = String(v);
      apply();
      if (v >= STEPS.length) stop();
    }, 900);
  });
  stop();
  if (reduceMotion) box.classList.add("no-anim");
  render();
  apply();
})();

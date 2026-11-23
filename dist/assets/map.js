/* Carte mondiale interactive des systèmes esclavagistes.
   Utilise le tableau D (défini dans app.<lang>.js), MAP_T (libellés traduits, injectés par le build),
   d3-geo et topojson-client (auto-hébergés dans /assets/vendor/). */
(function () {
  const box = document.getElementById("worldmap");
  if (!box || typeof D === "undefined" || !window.d3 || !window.topojson) return;
  const T = window.MAP_T;
  const LANG = document.documentElement.lang.slice(0, 2);

  // Position [longitude, latitude] de chaque système.
  const POS = {
    meso: [44.4, 33.0], egy: [31.2, 26.5], ath: [23.7, 38.0], spa: [22.4, 36.6], rome: [12.5, 41.9],
    chine: [110, 34], coree: [127.5, 37.0], inde: [78, 24], siam: [100.5, 14.5], asiec: [63.5, 40.5],
    orient: [42, 20], afr: [6, 12], eumed: [-2, 52.5], medit: [12.3, 45.4], otto: [29, 41],
    tatar: [34.5, 46.5], barb: [3, 36.8], russie: [37.6, 55.7], azt: [-99.1, 19.4], nwc: [-127, 52],
    amind: [-104, 33], atl: [-28, 8]
  };
  // Grandes routes de traite, rattachées au système correspondant.
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

  const W = 960, H = 470;
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", T.title);
  box.querySelector(".map-canvas").appendChild(svg);

  const projection = d3.geoNaturalEarth1().fitExtent([[6, 6], [W - 6, H - 6]], { type: "Sphere" });
  const path = d3.geoPath(projection);
  const el = (name, attrs, parent) => {
    const n = document.createElementNS(svgNS, name);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(n);
    return n;
  };

  el("path", { d: path({ type: "Sphere" }), class: "map-sea" });
  el("path", { d: path(d3.geoGraticule10()), class: "map-grat" });
  const land = el("g", {});
  const routesG = el("g", {});
  const dotsG = el("g", {});

  fetch("/assets/vendor/countries-110m.json").then(r => r.json()).then(topo => {
    const countries = topojson.feature(topo, topo.objects.countries);
    el("path", { d: path(countries), class: "map-land" }, land);
    el("path", { d: path(topojson.mesh(topo, topo.objects.countries, (a, b) => a !== b)), class: "map-border" }, land);
  }).catch(() => {});

  const routeEls = [];
  for (const R of ROUTES) {
    const r = byId[R.id];
    if (!r) continue;
    for (const line of R.lines) {
      const p = el("path", { d: path({ type: "LineString", coordinates: line }), class: "map-route" + (isRaceSys(r) ? " race" : "") }, routesG);
      p.dataset.id = r.id;
      routeEls.push({ p, r });
    }
  }

  const dotEls = [];
  for (const r of D) {
    const pos = POS[r.id];
    if (!pos) continue;
    const [x, y] = projection(pos);
    const g = el("g", { class: "map-dot" + (isRaceSys(r) ? " race" : ""), tabindex: "0", role: "button" }, dotsG);
    g.setAttribute("aria-label", r.name + ", " + r.per);
    el("circle", { cx: x, cy: y, r: 13, class: "hit" }, g);
    el("circle", { cx: x, cy: y, r: 6 }, g);
    const t = el("title", {}, g); t.textContent = r.name + " · " + r.per;
    g.addEventListener("click", () => select(r));
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(r); } });
    dotEls.push({ g, r });
  }

  const info = box.querySelector(".map-info");
  function select(r) {
    dotEls.forEach(d => d.g.classList.toggle("sel", d.r === r));
    info.innerHTML = '<span class="per"></span><strong></strong><span class="v"></span><a></a>';
    info.querySelector(".per").textContent = r.per + " · " + r.region;
    info.querySelector("strong").textContent = r.name;
    info.querySelector(".v").textContent = r.vol;
    const a = info.querySelector("a");
    a.href = "/" + LANG + "/" + r.page + "/";
    a.textContent = T.read + " →";
  }

  // Curseur chronologique : -3000 → 2000, position la plus à droite = toutes les époques.
  const slider = box.querySelector("#map-year");
  const out = box.querySelector("#map-year-out");
  const STEPS = [-3000, -2000, -1500, -1000, -700, -500, -300, -100, 1, 200, 400, 650, 800, 1000, 1200, 1350, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1880, 1900, 1950, 2000];
  slider.max = String(STEPS.length);
  slider.value = String(STEPS.length);
  function fmtYear(y) { return T.fmt(y); }
  function apply() {
    const i = +slider.value;
    const all = i >= STEPS.length;
    const year = all ? null : STEPS[i];
    out.textContent = all ? T.all : fmtYear(year);
    const on = r => all || (r.start <= year && year <= r.end);
    dotEls.forEach(d => d.g.classList.toggle("off", !on(d.r)));
    routeEls.forEach(d => d.p.classList.toggle("off", !on(d.r)));
    const n = D.filter(on).length;
    box.querySelector(".map-count").textContent = T.count(n, D.length);
  }
  slider.addEventListener("input", apply);
  apply();
})();

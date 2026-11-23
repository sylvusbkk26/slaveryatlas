"""Libellés de la carte mondiale, par langue (injectés en page d'accueil)."""
MAP = {
 'fr': dict(title="Carte des systèmes esclavagistes",
   intro="Chaque point est un système esclavagiste, chaque trait une grande route de traite. Faites glisser le curseur pour voir ce qui existait à une date donnée ; cliquez un point pour le détail.",
   year="Époque", all="Toutes les époques", read="Lire la page", hint="Cliquez un point sur la carte pour afficher le système.",
   lother="Statut fondé sur la guerre, la dette, la naissance ou la religion", lrace="Statut assigné par l'origine raciale", lroute="Route de traite",
   fmt="y=>y<0?(-y)+' av. J.-C.':String(y)", count="(n,t)=>n+' système'+(n>1?'s':'')+' sur '+t"),
 'en': dict(title="Map of slave systems",
   intro="Each dot is a slave system, each line a major slave-trade route. Drag the slider to see what existed at a given date; click a dot for details.",
   year="Period", all="All periods", read="Read the page", hint="Click a dot on the map to show the system.",
   lother="Status based on war, debt, birth or religion", lrace="Status assigned by racial origin", lroute="Slave-trade route",
   fmt="y=>y<0?(-y)+' BCE':String(y)", count="(n,t)=>n+' of '+t+' systems'"),
 'es': dict(title="Mapa de los sistemas esclavistas",
   intro="Cada punto es un sistema esclavista y cada línea una gran ruta de trata. Desliza el cursor para ver qué existía en una fecha dada; haz clic en un punto para ver el detalle.",
   year="Época", all="Todas las épocas", read="Leer la página", hint="Haz clic en un punto del mapa para ver el sistema.",
   lother="Estatus basado en la guerra, la deuda, el nacimiento o la religión", lrace="Estatus asignado por el origen racial", lroute="Ruta de trata",
   fmt="y=>y<0?(-y)+' a. C.':String(y)", count="(n,t)=>n+' de '+t+' sistemas'"),
 'de': dict(title="Karte der Sklavereisysteme",
   intro="Jeder Punkt ist ein Sklavereisystem, jede Linie eine große Route des Sklavenhandels. Ziehen Sie den Regler, um zu sehen, was zu einem bestimmten Zeitpunkt bestand; klicken Sie auf einen Punkt für Details.",
   year="Epoche", all="Alle Epochen", read="Seite lesen", hint="Klicken Sie auf einen Punkt der Karte, um das System anzuzeigen.",
   lother="Status durch Krieg, Schulden, Geburt oder Religion", lrace="Status nach rassischer Herkunft", lroute="Route des Sklavenhandels",
   fmt="y=>y<0?(-y)+' v. Chr.':String(y)", count="(n,t)=>n+' von '+t+' Systemen'"),
 'zh': dict(title="奴隶制度地图",
   intro="每个圆点代表一种奴隶制度，每条线代表一条主要的奴隶贸易路线。拖动滑块可查看某一年份存在的制度；点击圆点查看详情。",
   year="时期", all="所有时期", read="阅读页面", hint="点击地图上的圆点以显示该制度。",
   lother="基于战争、债务、出身或宗教的身份", lrace="按种族出身划定的身份", lroute="奴隶贸易路线",
   fmt="y=>y<0?'公元前'+(-y)+'年':y+'年'", count="(n,t)=>'显示'+n+'个制度（共'+t+'个）'"),
 'ru': dict(title="Карта систем рабства",
   intro="Каждая точка — система рабства, каждая линия — крупный путь работорговли. Передвиньте ползунок, чтобы увидеть, что существовало в выбранный год; нажмите на точку, чтобы узнать подробности.",
   year="Эпоха", all="Все эпохи", read="Читать страницу", hint="Нажмите на точку на карте, чтобы увидеть систему.",
   lother="Статус по войне, долгам, рождению или религии", lrace="Статус по расовому происхождению", lroute="Путь работорговли",
   fmt="y=>y<0?(-y)+' до н. э.':y+' г.'", count="(n,t)=>'Систем: '+n+' из '+t"),
}

def block(lang):
    m = MAP.get(lang, MAP['en'])
    return f'''<div class="stack" id="worldmap">
      <h2>{m["title"]}</h2>
      <p class="muted read">{m["intro"]}</p>
      <div class="map-wrap">
        <div class="map-canvas"></div>
        <div class="map-controls">
          <label for="map-year">{m["year"]}</label>
          <input type="range" id="map-year" min="0" max="29" step="1">
          <output id="map-year-out" for="map-year"></output>
          <span class="map-count"></span>
        </div>
        <div class="legend"><span><i style="background:var(--accent)"></i>{m["lother"]}</span><span><i style="background:var(--warn)"></i>{m["lrace"]}</span><span><i class="lr"></i>{m["lroute"]}</span></div>
      </div>
      <div class="map-info" aria-live="polite"><span class="muted">{m["hint"]}</span></div>
    </div>
    '''

def script(lang):
    m = MAP.get(lang, MAP['en'])
    import json
    s = {k: m[k] for k in ('title', 'all', 'read')}
    return f'<script>window.MAP_T=Object.assign({json.dumps(s, ensure_ascii=False)},{{fmt:{m["fmt"]},count:{m["count"]}}});</script>'

CSS = '''
.map-wrap{background:var(--panel);border:1px solid var(--rule);border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:10px}
.map-canvas svg{width:100%;height:auto;display:block}
.map-sea{fill:color-mix(in srgb,var(--accent) 6%,var(--panel));stroke:var(--rule)}
.map-grat{fill:none;stroke:var(--rule);stroke-width:.4;opacity:.6}
.map-land{fill:color-mix(in srgb,var(--ink) 16%,var(--panel))}
.map-border{fill:none;stroke:var(--panel);stroke-width:.6}
.map-route{fill:none;stroke:var(--ochre);stroke-width:1.6;stroke-dasharray:4 3;opacity:.85}
.map-route.race{stroke:var(--warn)}
.map-route.off{opacity:.08}
.map-dot{cursor:pointer;outline:none}
.map-dot circle{fill:var(--accent);stroke:var(--panel);stroke-width:1.5}
.map-dot.race circle{fill:var(--warn)}
.map-dot circle.hit{fill:transparent;stroke:none}
.map-dot:hover circle:not(.hit),.map-dot:focus-visible circle:not(.hit),.map-dot.sel circle:not(.hit){stroke:var(--ink);stroke-width:2.5}
.map-dot.off{opacity:.15}
.map-controls{display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:.88rem}
.map-controls input{flex:1;min-width:180px;accent-color:var(--ochre)}
.map-controls output{font-weight:600;font-variant-numeric:tabular-nums;min-width:9ch}
.map-count{color:var(--muted)}
.legend i.lr{background:none;border-top:2px dashed var(--ochre);height:0;border-radius:0}
.map-info{background:var(--panel);border:1px solid var(--rule);border-left:4px solid var(--ochre);border-radius:0 8px 8px 0;padding:12px 16px;display:flex;flex-direction:column;gap:4px;min-height:64px}
.map-info .per{font-size:.8rem;color:var(--muted)}
.map-info .v{font-size:.9rem}
'''

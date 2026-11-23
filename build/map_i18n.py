"""Libellés de la carte mondiale, par langue (injectés en page d'accueil)."""
MAP = {
 'fr': dict(play='Lecture', pause='Pause', allregions='Toutes les régions', zoomto='Zoomer ici', end='Fin', zin='Zoom avant', zout='Zoom arrière', reset="Vue d'ensemble", help='Molette ou pincement pour zoomer, glisser pour se déplacer, double-clic pour agrandir.',
   title="Carte des systèmes esclavagistes",
   intro="Chaque point est un système esclavagiste, chaque trait une grande route de traite. Faites glisser le curseur pour voir ce qui existait à une date donnée ; cliquez un point pour le détail.",
   year="Époque", all="Toutes les époques", read="Lire la page", hint="Cliquez un point sur la carte pour afficher le système.",
   lother="Statut fondé sur la guerre, la dette, la naissance ou la religion", lrace="Statut assigné par l'origine raciale", lroute="Route de traite",
   fmt="y=>y<0?(-y)+' av. J.-C.':String(y)", count="(n,t)=>n+' système'+(n>1?'s':'')+' sur '+t"),
 'en': dict(play='Play', pause='Pause', allregions='All regions', zoomto='Zoom here', end='End', zin='Zoom in', zout='Zoom out', reset='Whole world', help='Scroll or pinch to zoom, drag to pan, double-click to zoom in.',
   title="Map of slave systems",
   intro="Each dot is a slave system, each line a major slave-trade route. Drag the slider to see what existed at a given date; click a dot for details.",
   year="Period", all="All periods", read="Read the page", hint="Click a dot on the map to show the system.",
   lother="Status based on war, debt, birth or religion", lrace="Status assigned by racial origin", lroute="Slave-trade route",
   fmt="y=>y<0?(-y)+' BCE':String(y)", count="(n,t)=>n+' of '+t+' systems'"),
 'es': dict(play='Reproducir', pause='Pausa', allregions='Todas las regiones', zoomto='Ampliar aquí', end='Fin', zin='Acercar', zout='Alejar', reset='Vista general', help='Rueda o pellizco para ampliar, arrastrar para desplazarse, doble clic para acercar.',
   title="Mapa de los sistemas esclavistas",
   intro="Cada punto es un sistema esclavista y cada línea una gran ruta de trata. Desliza el cursor para ver qué existía en una fecha dada; haz clic en un punto para ver el detalle.",
   year="Época", all="Todas las épocas", read="Leer la página", hint="Haz clic en un punto del mapa para ver el sistema.",
   lother="Estatus basado en la guerra, la deuda, el nacimiento o la religión", lrace="Estatus asignado por el origen racial", lroute="Ruta de trata",
   fmt="y=>y<0?(-y)+' a. C.':String(y)", count="(n,t)=>n+' de '+t+' sistemas'"),
 'de': dict(play='Abspielen', pause='Pause', allregions='Alle Regionen', zoomto='Hierher zoomen', end='Ende', zin='Vergrößern', zout='Verkleinern', reset='Gesamtansicht', help='Mausrad oder Zwei-Finger-Geste zum Zoomen, Ziehen zum Verschieben, Doppelklick zum Vergrößern.',
   title="Karte der Sklavereisysteme",
   intro="Jeder Punkt ist ein Sklavereisystem, jede Linie eine große Route des Sklavenhandels. Ziehen Sie den Regler, um zu sehen, was zu einem bestimmten Zeitpunkt bestand; klicken Sie auf einen Punkt für Details.",
   year="Epoche", all="Alle Epochen", read="Seite lesen", hint="Klicken Sie auf einen Punkt der Karte, um das System anzuzeigen.",
   lother="Status durch Krieg, Schulden, Geburt oder Religion", lrace="Status nach rassischer Herkunft", lroute="Route des Sklavenhandels",
   fmt="y=>y<0?(-y)+' v. Chr.':String(y)", count="(n,t)=>n+' von '+t+' Systemen'"),
 'zh': dict(play='播放', pause='暂停', allregions='所有地区', zoomto='放大至此', end='终结', zin='放大', zout='缩小', reset='全图', help='滚轮或双指缩放，拖动平移，双击放大。',
   title="奴隶制度地图",
   intro="每个圆点代表一种奴隶制度，每条线代表一条主要的奴隶贸易路线。拖动滑块可查看某一年份存在的制度；点击圆点查看详情。",
   year="时期", all="所有时期", read="阅读页面", hint="点击地图上的圆点以显示该制度。",
   lother="基于战争、债务、出身或宗教的身份", lrace="按种族出身划定的身份", lroute="奴隶贸易路线",
   fmt="y=>y<0?'公元前'+(-y)+'年':y+'年'", count="(n,t)=>'显示'+n+'个制度（共'+t+'个）'"),
 'ru': dict(play='Воспроизвести', pause='Пауза', allregions='Все регионы', zoomto='Приблизить сюда', end='Конец', zin='Приблизить', zout='Отдалить', reset='Весь мир', help='Колесо мыши или щипок — масштаб, перетаскивание — перемещение, двойной щелчок — приблизить.',
   title="Карта систем рабства",
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
        <div class="map-regions" role="group"></div>
        <div class="map-canvas">
          <div class="map-zoom"><button type="button" class="map-zin" aria-label="{m["zin"]}" title="{m["zin"]}">+</button><button type="button" class="map-zout" aria-label="{m["zout"]}" title="{m["zout"]}">−</button><button type="button" class="map-reset" aria-label="{m["reset"]}" title="{m["reset"]}">⤢</button></div>
        </div>
        <div class="map-controls">
          <button type="button" class="map-play" aria-pressed="false"></button>
          <label for="map-year">{m["year"]}</label>
          <input type="range" id="map-year" min="0" max="29" step="1">
          <output id="map-year-out" for="map-year"></output>
          <span class="map-count"></span>
        </div>
        <p class="map-help">{m["help"]}</p>
        <div class="legend"><span><i style="background:var(--accent)"></i>{m["lother"]}</span><span><i style="background:var(--warn)"></i>{m["lrace"]}</span><span><i class="lr"></i>{m["lroute"]}</span></div>
      </div>
      <div class="map-info" aria-live="polite"><span class="muted">{m["hint"]}</span></div>
    </div>
    '''

def script(lang):
    m = MAP.get(lang, MAP['en'])
    import json
    s = {k: m[k] for k in ('title', 'all', 'read', 'play', 'pause', 'allregions', 'zoomto', 'end')}
    return f'<script>window.MAP_T=Object.assign({json.dumps(s, ensure_ascii=False)},{{fmt:{m["fmt"]},count:{m["count"]}}});</script>'

CSS = '''
.map-wrap{background:var(--panel);border:1px solid var(--rule);border-radius:8px;padding:12px;display:flex;flex-direction:column;gap:10px}
.map-canvas{position:relative}
.map-canvas svg{width:100%;height:auto;display:block;cursor:grab;user-select:none;-webkit-user-select:none}
.map-canvas svg:active{cursor:grabbing}
.map-canvas svg path,.map-canvas svg circle{vector-effect:non-scaling-stroke}
.map-zoom{position:absolute;top:8px;right:8px;display:flex;flex-direction:column;gap:4px;z-index:2}
.map-zoom button,.map-play,.map-info .zoomto{font:inherit;font-size:.9rem;border:1px solid var(--rule);background:var(--panel);color:var(--ink);border-radius:6px;cursor:pointer}
.map-zoom button{width:32px;height:32px;font-size:1.1rem;line-height:1}
.map-zoom button:disabled{opacity:.4;cursor:default}
.map-play{padding:6px 12px;font-weight:600;white-space:nowrap}
.map-play[aria-pressed="true"]{background:var(--chip)}
.map-regions{display:flex;flex-wrap:wrap;gap:6px}
.map-regions button{font:inherit;font-size:.8rem;padding:4px 10px;border-radius:999px;border:1px solid var(--rule);background:transparent;color:var(--muted);cursor:pointer}
.map-regions button[aria-pressed="true"]{background:var(--ink);color:var(--panel);border-color:var(--ink)}
.map-help{font-size:.78rem;color:var(--muted);margin:0}
.map-tip{position:absolute;pointer-events:none;z-index:3;max-width:260px;background:var(--panel);border:1px solid var(--rule);box-shadow:0 4px 14px rgba(0,0,0,.12);border-radius:6px;padding:8px 10px;font-size:.82rem;display:flex;flex-direction:column;gap:2px}
.map-tip[hidden]{display:none}
.map-tip span{color:var(--muted)}
.map-route-hit{fill:none;stroke:transparent;stroke-width:12;cursor:pointer}
.map-route.sel{stroke-width:3;opacity:1}
@keyframes mapflow{to{stroke-dashoffset:-14}}
.map-route{animation:mapflow 1.2s linear infinite}
.no-anim .map-route{animation:none}
@media (prefers-reduced-motion:reduce){.map-route{animation:none}}
.map-info .tags{display:flex;flex-wrap:wrap;gap:4px}
.map-info .links{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:4px}
.map-info .zoomto{padding:4px 10px;font-size:.82rem}
.map-sea{fill:color-mix(in srgb,var(--accent) 6%,var(--panel));stroke:var(--rule)}
.map-grat{fill:none;stroke:var(--rule);stroke-width:.4;opacity:.6}
.map-land{fill:color-mix(in srgb,var(--ink) 16%,var(--panel))}
.map-border{fill:none;stroke:var(--panel);stroke-width:.6}
.map-route{fill:none;stroke:var(--ochre);stroke-width:1.8;stroke-dasharray:5 4;opacity:.9;pointer-events:none}
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

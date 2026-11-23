
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Mesopotamia",region:"Antigüedad",start:-2100,end:-539,per:"III-I mil. a. C.",vol:"Ninguna estimación global",src:"Guerra, deudas, compra",her:"no establecido",race:"No",aff:"Liberación a los 3 años en caso de deudas (Hammurabi, ley 117)",fin:"—",flags:["fuente secundaria"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Antiguo Egipto",region:"Antigüedad",start:-3000,end:-30,per:"III mil. a. C. – 30 a. C.",vol:"Ninguna estimación; las pirámides, construidas por obreros pagados o requisados",src:"Guerra, deudas, venta de uno mismo o de los hijos",her:"variable",race:"No",aff:"Matrimonio, servicio en el templo",fin:"—",flags:["fuente secundaria"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"Atenas",region:"Antigüedad",start:-600,end:-300,per:"s. VI-IV a. C.",vol:"20 000 a 80 000 esclavos",src:"Guerra, piratería, comercio (sobre todo no griegos)",her:"oui",race:"No (étnico)",aff:"Frecuente en el s. IV",fin:"Solón prohíbe la esclavitud por deudas de los atenienses",flags:["discutido"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"Esparta (ilotas)",region:"Antigüedad",start:-700,end:-146,per:"s. VIII-II a. C.",vol:"170 000 a 224 000, muchos más que los ciudadanos",src:"Conquista de Laconia y Mesenia, nacimiento",her:"oui",race:"No",aff:"Servicio militar, rescate",fin:"Mesenia liberada en el 369 a. C.",flags:["fuente secundaria"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"Roma",region:"Antigüedad",start:-200,end:476,per:"s. II a. C. – s. V",vol:"Italia: 1-1,5 M (Scheidel) a 3 M (Brunt); Imperio: 10-15 %",src:"Guerra, nacimiento (≈ 3/4), niños expósitos, piratería",her:"oui",race:"No",aff:"Frecuente, otorga la ciudadanía",fin:"Deslizamiento hacia el colonato y la servidumbre",flags:["discutido"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"China",region:"Asia",start:-1600,end:1910,per:"Shang – 1909/1910",vol:"Proporción baja; ≈ 2 M en la conquista Qing",src:"Castigo, guerra, deudas, venta de niños",her:"parcial",race:"No",aff:"Emancipaciones imperiales (1723-1730)",fin:"1909-1910; prácticas hasta 1949",flags:["fuente secundaria"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"Corea (nobi)",region:"Asia",start:918,end:1894,per:"918 – 1894",vol:"≥ 30 % de la población (s. XV-XVII), hasta el 40 % en el sur",src:"Deudas, hambruna, nacimiento",her:"oui",race:"No",aff:"Rescate, servicio militar",fin:"1801, 1886, 1894",flags:["fuente secundaria","discutido"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"India",region:"Asia",start:1206,end:1861,per:"Sultanato de Delhi – 1861",vol:"1,1 M a 8-9 M hacia 1840 según la definición",src:"Guerra, impago de impuestos, servidumbre agraria de las castas bajas",her:"oui",race:"No (se solapa con la casta)",aff:"No establecido",fin:"1843, Código Penal de 1861",flags:["discutido"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"Siam",region:"Asia",start:1600,end:1915,per:"s. XVII – 1915",vol:"1/4 a 1/3 de la población hacia 1854 (Pallegoix)",src:"Sobre todo deudas, guerra, nacimiento",her:"posible",race:"No",aff:"Rescate por derecho",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"Jiva y Bujará",region:"Asia",start:1500,end:1873,per:"s. XVI – 1873",vol:"≈ 1 M de persas esclavizados (1.ª mitad del s. XIX)",src:"Incursiones turcomanas y kazajas",her:"no establecido",race:"Religioso (chiíes, cristianos)",aff:"No establecido",fin:"1873, bajo presión rusa",flags:["por verificar"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"Trata oriental",region:"África y mundo musulmán",start:650,end:1900,per:"650 – 1900 (y después)",vol:"8 M (Alencastro) a 17 M (Austen), 25 M (Bairoch); Sáhara: 7,42 M (Lovejoy)",src:"Incursiones, guerra, compra a Estados africanos",her:"variable",race:"Sobre todo religioso; prejuicio de color debatido",aff:"Frecuente, integración",fin:"1908 a 1981 según los países",flags:["discutido"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"Sociedades africanas (Sokoto, Dahomey…)",region:"África y mundo musulmán",start:1600,end:1942,per:"s. XVII – 1942 (Etiopía)",vol:"Sokoto hacia 1900: 1 a 2,5 M, de 1/4 a 1/2 de la población",src:"Guerra, incursiones, tributo, deudas",her:"a menudo",race:"No",aff:"Variable",fin:"1901 (norte de Nigeria), 1942 (Etiopía), 1981 (Mauritania)",flags:["fuente secundaria"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"Europa medieval y vikingos",region:"Europa y Mediterráneo",start:800,end:1334,per:"s. IX – XIV",vol:"≈ 10 % de la población inglesa en 1086",src:"Guerra, incursiones vikingas",her:"oui",race:"No (religioso)",aff:"Transición hacia la servidumbre",fin:"1102 (Inglaterra), 1334 (Suecia)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"Venecia, Génova, península ibérica",region:"Europa y Mediterráneo",start:1250,end:1798,per:"s. XIII – XVIII",vol:"Sevilla 1565: ≈ 7,4 % de la población",src:"Trata del mar Negro, guerra, África",her:"oui",race:"Religioso, y luego cada vez más africano",aff:"Posible",fin:"Malta 1798",flags:["fuente secundaria"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"Imperio otomano",region:"Europa y Mediterráneo",start:1350,end:1908,per:"s. XIV – 1908",vol:"≈ 1/5 de Constantinopla (s. XVI-XVII)",src:"Incursiones tártaras, devşirme, compras caucásicas y africanas",her:"no (hijos de concubinas)",race:"Precio y funciones según el origen",aff:"Frecuente, ascenso posible",fin:"1830-1908, en gran medida nominal",flags:["fuente secundaria"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"Incursiones de los tártaros de Crimea",region:"Europa y Mediterráneo",start:1441,end:1783,per:"1441 – 1783",vol:"2 M (İnalcık, 1500-1700) a 5 M (Charnysh y Lall)",src:"Incursiones en Polonia-Lituania y Moscovia",her:"—",race:"Religioso (cristianos)",aff:"Rescate",fin:"Anexión rusa de Crimea, 1783",flags:["discutido"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"Corsarios berberiscos",region:"Europa y Mediterráneo",start:1530,end:1830,per:"1530 – 1830",vol:"1 a 1,25 M (Davis); números atestiguados 25 000-35 000",src:"Corso en el mar, incursiones costeras",her:"no",race:"Religioso (cristianos)",aff:"Rescate, conversión",fin:"1816, 1830",flags:["discutido"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"Rusia (kholops, siervos)",region:"Europa y Mediterráneo",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10 % (Hellie); siervos privados 37,7 % en 1857",src:"Venta de uno mismo, deudas; servidumbre por ley (1649)",her:"oui",race:"No",aff:"Rara para los siervos",fin:"1861 (redenciones hasta 1907)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"Aztecas",region:"Américas",start:1325,end:1521,per:"s. XIV – XVI",vol:"Ninguna estimación",src:"Castigo, guerra, deudas, venta de uno mismo",her:"no",race:"No",aff:"Sí; hijos nacidos libres",fin:"Conquista española",flags:["fuente secundaria"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"Costa noroeste",region:"Américas",start:1500,end:1880,per:"Precolonial – s. XIX",vol:"Hasta 1/4 de la población en algunos grupos",src:"Incursiones, compra entre grupos",her:"no establecido",race:"No",aff:"No establecido",fin:"Colonización",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"Esclavitud de los amerindios",region:"Américas",start:1492,end:1900,per:"1492 – h. 1900",vol:"2,5 a 5 M (Reséndez, definición amplia)",src:"Guerra, incursiones, encomienda, peonaje",her:"variable",race:"Sí",aff:"Variable",fin:"Leyes españolas de 1542; pervivencias",flags:["discutido"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"Trata atlántica y colonias",region:"Américas",start:1501,end:1888,per:"1501 – 1888",vol:"12,5 M embarcados, 10,7 M desembarcados; Francia 1,38 M",src:"Compra a Estados y mercaderes africanos, guerra, incursiones",her:"oui",race:"Sí (color)",aff:"Escasa; muy escasa en los Estados Unidos",fin:"R. U. 1833, Francia 1848, Estados Unidos 1865, Brasil 1888",flags:["por verificar"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* Escala de la cronología: -3000→0 en el 22 %, 0→1500 en el 33 %, 1500→2000 en el 45 % */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? (-y)+" a. C." : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/es/comparer/?q="+encodeURIComponent(r.name); });
    t.appendChild(b); row.append(n,t); f.appendChild(row);
  });
  const ticks=document.getElementById("ticks");
  [-3000,-2000,-1000,0,500,1000,1500,1700,1800,1900,2000].forEach(y=>{
    const s=document.createElement("span"); s.style.left=x(y)+"%"; s.textContent=y===0?"0":fmt(y); ticks.appendChild(s);
  });
}
function buildCards(){
  const c=document.getElementById("cards");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const a=document.createElement("a"); a.className="card"+(r.page?" live":"");
    a.href="/es/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"Leer la página":"Página en preparación · ver la tabla"}</span>`;
    a.querySelector(".per").textContent=r.per; a.querySelector("strong").textContent=r.name;const v=document.createElement("span");v.className="vol";v.textContent=r.vol;a.insertBefore(v,a.querySelector(".soon"));
    c.appendChild(a);
  });
}

let sortKey=null, sortDir=1;
function render(){
  const q=document.getElementById("f-q").value.trim().toLowerCase();
  const reg=document.getElementById("f-region").value;
  const her=document.getElementById("f-her").checked, race=document.getElementById("f-race").checked;
  let rows=D.filter(r=>(!reg||r.region===reg)&&(!her||r.her==="oui")&&(!race||isRace(r))&&(!q||(r.name+" "+r.vol+" "+r.src+" "+r.region).toLowerCase().includes(q)));
  const desc=(fa)=>(a,b)=>{const x=fa(a),y=fa(b); if(x==null&&y==null) return a.start-b.start; if(x==null) return 1; if(y==null) return -1; return y-x;};
  const mode=document.getElementById("f-sort").value;
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"es")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "Clasificación según la estimación alta de cada intervalo. «Flujo» = total acumulado en todo el periodo; «número de personas» = número de esclavos presentes en un momento dado. Ambos no se comparan directamente. Sistemas sin estimación al final de la lista."
    : mode==="part" ? "Clasificación según la proporción máxima de población esclava en una fecha dada. Sistemas sin estimación al final de la lista." : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"flujo acumulado":"número de personas"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/es/${r.page}/">Leer</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">Sí</span>':r.her,
      isRace(r)?`<span class="yes"></span>`:r.race,
      r.aff, r.fin
    ];
    cells.forEach((h,i)=>{const td=document.createElement("td"); if(i===1) td.className="num";
      if(i===0){td.innerHTML=h; td.querySelector(".civ").textContent=r.name; td.querySelector(".pill").textContent=r.region;}
      else if(i===5&&isRace(r)){td.innerHTML=h; td.querySelector(".yes").textContent=r.race;}
      else if(i===4&&r.her==="oui"){td.innerHTML=h;}
      else td.textContent=h;
      tr.appendChild(td);});
    tb.appendChild(tr);
  });
  document.getElementById("count").textContent=rows.length+" sistema"+(rows.length!==1?"s":"")+" mostrado"+(rows.length!==1?"s":"")+" de "+D.length;
}
function initFilters(){
  const s=document.getElementById("f-region");
  [...new Set(D.map(r=>r.region))].forEach(r=>{const o=document.createElement("option"); o.value=r; o.textContent=r; s.appendChild(o);});
  ["f-q","f-region","f-her","f-race"].forEach(id=>document.getElementById(id).addEventListener("input",render));
  document.getElementById("f-sort").addEventListener("input",()=>{sortKey=null; render();});
  document.querySelectorAll("th button").forEach(b=>b.addEventListener("click",()=>{
    const k=b.dataset.sort; sortDir = sortKey===k? -sortDir : 1; sortKey=k; render();}));
}

function buildCivGroups(){
  const box=document.getElementById("civgroups"); const seen=new Set();
  [...new Set(D.map(r=>r.region))].forEach(reg=>{
    const g=document.createElement("div"); g.className="stack";
    const h=document.createElement("h2"); h.textContent=reg; g.appendChild(h);
    const c=document.createElement("div"); c.className="cards";
    D.filter(r=>r.region===reg).sort((a,b)=>a.start-b.start).forEach(r=>{
      if(seen.has(r.page)) return; seen.add(r.page);
      const same=D.filter(x=>x.page===r.page);
      const a=document.createElement("a"); a.className="card live"; a.href="/es/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">Leer la página</span>';
      a.querySelector(".per").textContent=same.map(x=>x.per).join(" · ");
      a.querySelector("strong").textContent=same.map(x=>x.name).join(", ");const v=document.createElement("span");v.className="vol";v.textContent=same.map(x=>x.vol).join(" · ");a.insertBefore(v,a.querySelector(".soon"));
      c.appendChild(a);
    });
    g.appendChild(c); box.appendChild(g);
  });
}

const $=id=>document.getElementById(id);
if($("frise")) buildFrise();
if($("cards")) buildCards();
if($("civgroups")) buildCivGroups();
if($("tbody")){ initFilters(); const q=new URLSearchParams(location.search).get("q"); if(q) $("f-q").value=q; render(); }


const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Mesopotamien",region:"Antike",start:-2100,end:-539,per:"3.–1. Jt. v. Chr.",vol:"Keine Gesamtschätzung",src:"Krieg, Schulden, Kauf",her:"nicht belegt",race:"Nein",aff:"Freilassung nach 3 Jahren bei Schulden (Hammurabi, Gesetz 117)",fin:"—",flags:["Sekundärquelle"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Altes Ägypten",region:"Antike",start:-3000,end:-30,per:"3. Jt. v. Chr. – 30 v. Chr.",vol:"Keine Schätzung; die Pyramiden wurden von bezahlten oder dienstverpflichteten Arbeitern erbaut",src:"Krieg, Schulden, Verkauf seiner selbst oder von Kindern",her:"unterschiedlich",race:"Nein",aff:"Heirat, Tempeldienst",fin:"—",flags:["Sekundärquelle"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"Athen",region:"Antike",start:-600,end:-300,per:"6.–4. Jh. v. Chr.",vol:"20.000 bis 80.000 Sklaven",src:"Krieg, Piraterie, Handel (vor allem Nichtgriechen)",her:"oui",race:"Nein (ethnisch)",aff:"Häufig im 4. Jh.",fin:"Solon verbietet die Schuldsklaverei von Athenern",flags:["umstritten"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"Sparta (Heloten)",region:"Antike",start:-700,end:-146,per:"8.–2. Jh. v. Chr.",vol:"170.000 bis 224.000, weit mehr als die Bürger",src:"Eroberung Lakoniens und Messeniens, Geburt",her:"oui",race:"Nein",aff:"Militärdienst, Freikauf",fin:"Messenien 369 v. Chr. befreit",flags:["Sekundärquelle"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"Rom",region:"Antike",start:-200,end:476,per:"2. Jh. v. Chr. – 5. Jh.",vol:"Italien: 1–1,5 Mio. (Scheidel) bis 3 Mio. (Brunt); Reich: 10–15 %",src:"Krieg, Geburt (≈ 3/4), ausgesetzte Kinder, Piraterie",her:"oui",race:"Nein",aff:"Häufig, verleiht das Bürgerrecht",fin:"Übergang zum Kolonat und zur Leibeigenschaft",flags:["umstritten"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"China",region:"Asien",start:-1600,end:1910,per:"Shang – 1909/1910",vol:"Geringer Anteil; ≈ 2 Mio. bei der Qing-Eroberung",src:"Strafe, Krieg, Schulden, Verkauf von Kindern",her:"teilweise",race:"Nein",aff:"Kaiserliche Emanzipationen (1723–1730)",fin:"1909–1910; Praktiken bis 1949",flags:["Sekundärquelle"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"Korea (Nobi)",region:"Asien",start:918,end:1894,per:"918 – 1894",vol:"≥ 30 % der Bevölkerung (15.–17. Jh.), im Süden bis zu 40 %",src:"Schulden, Hungersnot, Geburt",her:"oui",race:"Nein",aff:"Freikauf, Militärdienst",fin:"1801, 1886, 1894",flags:["Sekundärquelle","umstritten"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"Indien",region:"Asien",start:1206,end:1861,per:"Sultanat von Delhi – 1861",vol:"1,1 Mio. bis 8–9 Mio. um 1840, je nach Definition",src:"Krieg, Steuerschulden, agrarische Knechtschaft der niedrigen Kasten",her:"oui",race:"Nein (überschneidet sich mit der Kaste)",aff:"Nicht belegt",fin:"1843, Strafgesetzbuch von 1861",flags:["umstritten"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"Siam",region:"Asien",start:1600,end:1915,per:"17. Jh. – 1915",vol:"1/4 bis 1/3 der Bevölkerung um 1854 (Pallegoix)",src:"Vor allem Schulden, Krieg, Geburt",her:"möglich",race:"Nein",aff:"Rechtlich verbürgter Freikauf",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"Chiwa und Buchara",region:"Asien",start:1500,end:1873,per:"16. Jh. – 1873",vol:"≈ 1 Mio. versklavte Perser (1. Hälfte 19. Jh.)",src:"Raubzüge von Turkmenen und Kasachen",her:"nicht belegt",race:"Religiös (Schiiten, Christen)",aff:"Nicht belegt",fin:"1873, unter russischem Druck",flags:["zu prüfen"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"Orientalischer Sklavenhandel",region:"Afrika und islamische Welt",start:650,end:1900,per:"650 – 1900 (und darüber hinaus)",vol:"8 Mio. (Alencastro) bis 17 Mio. (Austen), 25 Mio. (Bairoch); Sahara: 7,42 Mio. (Lovejoy)",src:"Raubzüge, Krieg, Kauf von afrikanischen Staaten",her:"unterschiedlich",race:"Vor allem religiös; Farbvorurteil umstritten",aff:"Häufig, Integration",fin:"1908 bis 1981 je nach Land",flags:["umstritten"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"Afrikanische Gesellschaften (Sokoto, Dahomey …)",region:"Afrika und islamische Welt",start:1600,end:1942,per:"17. Jh. – 1942 (Äthiopien)",vol:"Sokoto um 1900: 1 bis 2,5 Mio., 1/4 bis 1/2 der Bevölkerung",src:"Krieg, Raubzüge, Tribut, Schulden",her:"häufig",race:"Nein",aff:"Unterschiedlich",fin:"1901 (Nordnigeria), 1942 (Äthiopien), 1981 (Mauretanien)",flags:["Sekundärquelle"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"Mittelalterliches Europa und Wikinger",region:"Europa und Mittelmeerraum",start:800,end:1334,per:"9.–14. Jh.",vol:"≈ 10 % der englischen Bevölkerung im Jahr 1086",src:"Krieg, Raubzüge der Wikinger",her:"oui",race:"Nein (religiös)",aff:"Übergang zur Leibeigenschaft",fin:"1102 (England), 1334 (Schweden)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"Venedig, Genua, Iberische Halbinsel",region:"Europa und Mittelmeerraum",start:1250,end:1798,per:"13.–18. Jh.",vol:"Sevilla 1565: ≈ 7,4 % der Bevölkerung",src:"Schwarzmeer-Sklavenhandel, Krieg, Afrika",her:"oui",race:"Religiös, dann zunehmend afrikanische Herkunft",aff:"Möglich",fin:"Malta 1798",flags:["Sekundärquelle"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"Osmanisches Reich",region:"Europa und Mittelmeerraum",start:1350,end:1908,per:"14. Jh. – 1908",vol:"≈ 1/5 Konstantinopels (16.–17. Jh.)",src:"Raubzüge der Tataren, Devşirme, Käufe im Kaukasus und in Afrika",her:"nein (Kinder von Konkubinen)",race:"Preise und Funktionen nach Herkunft",aff:"Häufig, Aufstieg möglich",fin:"1830–1908, weitgehend nominell",flags:["Sekundärquelle"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"Raubzüge der Krimtataren",region:"Europa und Mittelmeerraum",start:1441,end:1783,per:"1441 – 1783",vol:"2 Mio. (İnalcık, 1500–1700) bis 5 Mio. (Charnysh und Lall)",src:"Raubzüge in Polen-Litauen und im Moskauer Reich",her:"—",race:"Religiös (Christen)",aff:"Freikauf",fin:"Russische Annexion der Krim, 1783",flags:["umstritten"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"Barbareskenkorsaren",region:"Europa und Mittelmeerraum",start:1530,end:1830,per:"1530 – 1830",vol:"1 bis 1,25 Mio. (Davis); belegte Bestände 25.000–35.000",src:"Kaperfahrt auf See, Raubzüge an den Küsten",her:"nein",race:"Religiös (Christen)",aff:"Freikauf, Konversion",fin:"1816, 1830",flags:["umstritten"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"Russland (Kholops, Leibeigene)",region:"Europa und Mittelmeerraum",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10 % (Hellie); private Leibeigene 37,7 % im Jahr 1857",src:"Selbstverkauf, Schulden; Leibeigenschaft per Gesetz (1649)",her:"oui",race:"Nein",aff:"Selten bei Leibeigenen",fin:"1861 (Ablösezahlungen bis 1907)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"Azteken",region:"Amerika",start:1325,end:1521,per:"14.–16. Jh.",vol:"Keine Schätzung",src:"Strafe, Krieg, Schulden, Selbstverkauf",her:"nein",race:"Nein",aff:"Ja; Kinder frei geboren",fin:"Spanische Eroberung",flags:["Sekundärquelle"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"Nordwestküste",region:"Amerika",start:1500,end:1880,per:"Vorkolonial – 19. Jh.",vol:"Bis zu 1/4 der Bevölkerung in manchen Gruppen",src:"Raubzüge, Kauf zwischen Gruppen",her:"nicht belegt",race:"Nein",aff:"Nicht belegt",fin:"Kolonisierung",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"Versklavung der Indigenen Amerikas",region:"Amerika",start:1492,end:1900,per:"1492 – ca. 1900",vol:"2,5 bis 5 Mio. (Reséndez, weite Definition)",src:"Krieg, Raubzüge, Encomienda, Peonage",her:"unterschiedlich",race:"Ja",aff:"Unterschiedlich",fin:"Spanische Gesetze von 1542; Fortbestehen",flags:["umstritten"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"Transatlantischer Sklavenhandel und Kolonien",region:"Amerika",start:1501,end:1888,per:"1501 – 1888",vol:"12,5 Mio. eingeschifft, 10,7 Mio. angelandet; Frankreich 1,38 Mio.",src:"Kauf von afrikanischen Staaten und Händlern, Krieg, Raubzüge",her:"oui",race:"Ja (Hautfarbe)",aff:"Gering; sehr gering in den USA",fin:"Großbritannien 1833, Frankreich 1848, USA 1865, Brasilien 1888",flags:["zu prüfen"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* Maßstab der Zeitleiste: -3000→0 auf 22 %, 0→1500 auf 33 %, 1500→2000 auf 45 % */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? (-y)+" v. Chr." : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/de/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/de/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"Seite lesen":"Seite folgt · siehe Tabelle"}</span>`;
    a.querySelector(".per").textContent=r.per; a.querySelector("strong").textContent=r.name;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"de")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "Sortierung nach dem oberen Wert jeder Spanne. „Strom“ = kumulierte Summe über den gesamten Zeitraum; „Bestand“ = Zahl der zu einem bestimmten Zeitpunkt vorhandenen Sklaven. Beide lassen sich nicht direkt vergleichen. Systeme ohne Schätzung am Ende der Liste."
    : mode==="part" ? "Sortierung nach dem höchsten Anteil der unfreien Bevölkerung zu einem bestimmten Zeitpunkt. Systeme ohne Schätzung am Ende der Liste." : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"kumulierter Strom":"Bestand"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/de/${r.page}/">Lesen</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">Ja</span>':r.her,
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
  document.getElementById("count").textContent=rows.length+" von "+D.length+" Systemen angezeigt";
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
      const a=document.createElement("a"); a.className="card live"; a.href="/de/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">Seite lesen</span>';
      a.querySelector(".per").textContent=same.map(x=>x.per).join(" · ");
      a.querySelector("strong").textContent=same.map(x=>x.name).join(", ");
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

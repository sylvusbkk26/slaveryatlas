
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Mésopotamie",region:"Antiquité",start:-2100,end:-539,per:"IIIe-Ier mill. av. J.-C.",vol:"Aucune estimation globale",src:"Guerre, dettes, achat",her:"non établi",race:"Non",aff:"Libération après 3 ans pour dettes (Hammurabi, loi 117)",fin:"—",flags:["2nde main"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Égypte ancienne",region:"Antiquité",start:-3000,end:-30,per:"IIIe mill. av. J.-C. – 30 av. J.-C.",vol:"Aucune estimation ; les pyramides bâties par des ouvriers payés ou réquisitionnés",src:"Guerre, dettes, vente de soi ou d'enfants",her:"variable",race:"Non",aff:"Mariage, service au temple",fin:"—",flags:["2nde main"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"Athènes",region:"Antiquité",start:-600,end:-300,per:"VIe-IVe s. av. J.-C.",vol:"20 000 à 80 000 esclaves",src:"Guerre, piraterie, commerce (surtout non-Grecs)",her:"oui",race:"Non (ethnique)",aff:"Fréquent au IVe s.",fin:"Solon interdit l'esclavage pour dettes des Athéniens",flags:["contesté"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"Sparte (hilotes)",region:"Antiquité",start:-700,end:-146,per:"VIIIe-IIe s. av. J.-C.",vol:"170 000 à 224 000, bien plus que les citoyens",src:"Conquête de la Laconie et de la Messénie, naissance",her:"oui",race:"Non",aff:"Service militaire, rachat",fin:"Messénie libérée en 369 av. J.-C.",flags:["2nde main"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"Rome",region:"Antiquité",start:-200,end:476,per:"IIe s. av. J.-C. – Ve s.",vol:"Italie : 1-1,5 M (Scheidel) à 3 M (Brunt) ; Empire : 10-15 %",src:"Guerre, naissance (≈ 3/4), enfants exposés, piraterie",her:"oui",race:"Non",aff:"Fréquent, donne la citoyenneté",fin:"Glissement vers le colonat et le servage",flags:["contesté"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"Chine",region:"Asie",start:-1600,end:1910,per:"Shang – 1909/1910",vol:"Faible part ; ≈ 2 M à la conquête Qing",src:"Punition, guerre, dettes, vente d'enfants",her:"partiel",race:"Non",aff:"Émancipations impériales (1723-1730)",fin:"1909-1910 ; pratiques jusqu'en 1949",flags:["2nde main"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"Corée (nobi)",region:"Asie",start:918,end:1894,per:"918 – 1894",vol:"≥ 30 % de la population (XVe-XVIIe s.), jusqu'à 40 % au sud",src:"Dettes, famine, naissance",her:"oui",race:"Non",aff:"Rachat, service militaire",fin:"1801, 1886, 1894",flags:["2nde main","contesté"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"Inde",region:"Asie",start:1206,end:1861,per:"Sultanat de Delhi – 1861",vol:"1,1 M à 8-9 M vers 1840 selon la définition",src:"Guerre, défaut fiscal, servitude agraire des basses castes",her:"oui",race:"Non (recoupe la caste)",aff:"Non établi",fin:"1843, Code pénal de 1861",flags:["contesté"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"Siam",region:"Asie",start:1600,end:1915,per:"XVIIe s. – 1915",vol:"1/4 à 1/3 de la population vers 1854 (Pallegoix)",src:"Dettes surtout, guerre, naissance",her:"possible",race:"Non",aff:"Rachat de droit",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"Khiva et Boukhara",region:"Asie",start:1500,end:1873,per:"XVIe s. – 1873",vol:"≈ 1 M de Persans asservis (1re moitié XIXe s.)",src:"Raids turkmènes et kazakhs",her:"non établi",race:"Religieux (chiites, chrétiens)",aff:"Non établi",fin:"1873, sous pression russe",flags:["à vérifier"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"Traites orientales",region:"Afrique et monde musulman",start:650,end:1900,per:"650 – 1900 (et au-delà)",vol:"8 M (Alencastro) à 17 M (Austen), 25 M (Bairoch) ; Sahara : 7,42 M (Lovejoy)",src:"Razzias, guerre, achat aux États africains",her:"variable",race:"Religieux surtout ; préjugé de couleur débattu",aff:"Fréquent, intégration",fin:"1908 à 1981 selon les pays",flags:["contesté"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"Sociétés africaines (Sokoto, Dahomey…)",region:"Afrique et monde musulman",start:1600,end:1942,per:"XVIIe s. – 1942 (Éthiopie)",vol:"Sokoto vers 1900 : 1 à 2,5 M, 1/4 à 1/2 de la population",src:"Guerre, razzias, tribut, dettes",her:"souvent",race:"Non",aff:"Variable",fin:"1901 (Nigeria du Nord), 1942 (Éthiopie), 1981 (Mauritanie)",flags:["2nde main"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"Europe médiévale et Vikings",region:"Europe et Méditerranée",start:800,end:1334,per:"IXe – XIVe s.",vol:"≈ 10 % de la population anglaise en 1086",src:"Guerre, razzias vikings",her:"oui",race:"Non (religieux)",aff:"Transition vers le servage",fin:"1102 (Angleterre), 1334 (Suède)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"Venise, Gênes, Ibérie",region:"Europe et Méditerranée",start:1250,end:1798,per:"XIIIe – XVIIIe s.",vol:"Séville 1565 : ≈ 7,4 % de la population",src:"Traite de la mer Noire, guerre, Afrique",her:"oui",race:"Religieux, puis de plus en plus africain",aff:"Possible",fin:"Malte 1798",flags:["2nde main"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"Empire ottoman",region:"Europe et Méditerranée",start:1350,end:1908,per:"XIVe s. – 1908",vol:"≈ 1/5 de Constantinople (XVIe-XVIIe s.)",src:"Raids tatars, devchirmé, achats caucasiens et africains",her:"non (enfants de concubines)",race:"Prix et fonctions selon l'origine",aff:"Fréquent, ascension possible",fin:"1830-1908, largement nominal",flags:["2nde main"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"Raids tatars de Crimée",region:"Europe et Méditerranée",start:1441,end:1783,per:"1441 – 1783",vol:"2 M (İnalcık, 1500-1700) à 5 M (Charnysh et Lall)",src:"Razzias en Pologne-Lituanie et Moscovie",her:"—",race:"Religieux (chrétiens)",aff:"Rachat",fin:"Annexion russe de la Crimée, 1783",flags:["contesté"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"Corsaires barbaresques",region:"Europe et Méditerranée",start:1530,end:1830,per:"1530 – 1830",vol:"1 à 1,25 M (Davis) ; effectifs attestés 25 000-35 000",src:"Course en mer, razzias côtières",her:"non",race:"Religieux (chrétiens)",aff:"Rachat, conversion",fin:"1816, 1830",flags:["contesté"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"Russie (kholops, serfs)",region:"Europe et Méditerranée",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10 % (Hellie) ; serfs privés 37,7 % en 1857",src:"Vente de soi, dettes ; servage par la loi (1649)",her:"oui",race:"Non",aff:"Rare pour les serfs",fin:"1861 (rachats jusqu'en 1907)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"Aztèques",region:"Amériques",start:1325,end:1521,per:"XIVe – XVIe s.",vol:"Aucune estimation",src:"Punition, guerre, dettes, vente de soi",her:"non",race:"Non",aff:"Oui ; enfants nés libres",fin:"Conquête espagnole",flags:["2nde main"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"Côte Nord-Ouest",region:"Amériques",start:1500,end:1880,per:"Précolonial – XIXe s.",vol:"Jusqu'à 1/4 de la population dans certains groupes",src:"Raids, achat entre groupes",her:"non établi",race:"Non",aff:"Non établi",fin:"Colonisation",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"Esclavage des Amérindiens",region:"Amériques",start:1492,end:1900,per:"1492 – v. 1900",vol:"2,5 à 5 M (Reséndez, définition large)",src:"Guerre, razzias, encomienda, péonage",her:"variable",race:"Oui",aff:"Variable",fin:"Lois espagnoles de 1542 ; persistances",flags:["contesté"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"Traite atlantique et colonies",region:"Amériques",start:1501,end:1888,per:"1501 – 1888",vol:"12,5 M embarqués, 10,7 M débarqués ; France 1,38 M",src:"Achat aux États et marchands africains, guerre, razzias",her:"oui",race:"Oui (couleur)",aff:"Faible ; très faible aux États-Unis",fin:"G.-B. 1833, France 1848, États-Unis 1865, Brésil 1888",flags:["à vérifier"],page:"traite-atlantique"}
];
const isRace = r => r.race.startsWith("Oui");

/* Échelle de la frise : -3000→0 sur 22 %, 0→1500 sur 33 %, 1500→2000 sur 45 % */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? (-y)+" av." : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/fr/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/fr/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"Lire la page":"Page à venir · voir le tableau"}</span>`;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"fr")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "Classement sur l'estimation haute de chaque fourchette. « Flux » = total cumulé sur toute la période ; « effectif » = nombre d'esclaves présents à un moment donné. Les deux ne se comparent pas directement. Systèmes sans estimation en fin de liste."
    : mode==="part" ? "Classement sur la part maximale de la population servile, à une date donnée. Systèmes sans estimation en fin de liste." : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"flux cumulé":"effectif"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/fr/${r.page}/">Lire</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">Oui</span>':r.her,
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
  document.getElementById("count").textContent=rows.length+" système"+(rows.length>1?"s":"")+" affiché"+(rows.length>1?"s":"")+" sur "+D.length;
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
      const a=document.createElement("a"); a.className="card live"; a.href="/fr/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">Lire la page</span>';
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

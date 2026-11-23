
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Mesopotamia",region:"Antiquity",start:-2100,end:-539,per:"3rd-1st mill. BCE",vol:"No overall estimate",src:"War, debt, purchase",her:"not established",race:"No",aff:"Release after 3 years for debt (Hammurabi, law 117)",fin:"—",flags:["secondary source"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Ancient Egypt",region:"Antiquity",start:-3000,end:-30,per:"3rd mill. BCE – 30 BCE",vol:"No estimate; the pyramids were built by paid or conscripted workers",src:"War, debt, sale of oneself or of children",her:"variable",race:"No",aff:"Marriage, temple service",fin:"—",flags:["secondary source"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"Athens",region:"Antiquity",start:-600,end:-300,per:"6th-4th c. BCE",vol:"20,000 to 80,000 slaves",src:"War, piracy, trade (mostly non-Greeks)",her:"oui",race:"No (ethnic)",aff:"Frequent in the 4th c.",fin:"Solon bans the debt slavery of Athenians",flags:["disputed"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"Sparta (helots)",region:"Antiquity",start:-700,end:-146,per:"8th-2nd c. BCE",vol:"170,000 to 224,000, far more than the citizens",src:"Conquest of Laconia and Messenia, birth",her:"oui",race:"No",aff:"Military service, purchase of freedom",fin:"Messenia liberated in 369 BCE",flags:["secondary source"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"Rome",region:"Antiquity",start:-200,end:476,per:"2nd c. BCE – 5th c. CE",vol:"Italy: 1-1.5 M (Scheidel) to 3 M (Brunt); Empire: 10-15%",src:"War, birth (≈ 3/4), exposed children, piracy",her:"oui",race:"No",aff:"Frequent, conferred citizenship",fin:"Gradual shift to the colonate and serfdom",flags:["disputed"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"China",region:"Asia",start:-1600,end:1910,per:"Shang – 1909/1910",vol:"Small share; ≈ 2 M at the Qing conquest",src:"Punishment, war, debt, sale of children",her:"partial",race:"No",aff:"Imperial emancipations (1723-1730)",fin:"1909-1910; practices until 1949",flags:["secondary source"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"Korea (nobi)",region:"Asia",start:918,end:1894,per:"918 – 1894",vol:"≥ 30% of the population (15th-17th c.), up to 40% in the south",src:"Debt, famine, birth",her:"oui",race:"No",aff:"Purchase of freedom, military service",fin:"1801, 1886, 1894",flags:["secondary source","disputed"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"India",region:"Asia",start:1206,end:1861,per:"Delhi Sultanate – 1861",vol:"1.1 M to 8-9 M around 1840 depending on the definition",src:"War, tax default, agrarian servitude of the lower castes",her:"oui",race:"No (overlaps with caste)",aff:"Not established",fin:"1843, Penal Code of 1861",flags:["disputed"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"Siam",region:"Asia",start:1600,end:1915,per:"17th c. – 1915",vol:"1/4 to 1/3 of the population around 1854 (Pallegoix)",src:"Mainly debt, war, birth",her:"possible",race:"No",aff:"Purchase of freedom by right",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"Khiva and Bukhara",region:"Asia",start:1500,end:1873,per:"16th c. – 1873",vol:"≈ 1 M Persians enslaved (1st half of 19th c.)",src:"Turkmen and Kazakh raids",her:"not established",race:"Religious (Shiites, Christians)",aff:"Not established",fin:"1873, under Russian pressure",flags:["to be verified"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"Oriental slave trades",region:"Africa and the Muslim world",start:650,end:1900,per:"650 – 1900 (and beyond)",vol:"8 M (Alencastro) to 17 M (Austen), 25 M (Bairoch); Sahara: 7.42 M (Lovejoy)",src:"Raids, war, purchase from African states",her:"variable",race:"Mainly religious; color prejudice debated",aff:"Frequent, integration",fin:"1908 to 1981 depending on the country",flags:["disputed"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"African societies (Sokoto, Dahomey…)",region:"Africa and the Muslim world",start:1600,end:1942,per:"17th c. – 1942 (Ethiopia)",vol:"Sokoto around 1900: 1 to 2.5 M, 1/4 to 1/2 of the population",src:"War, raids, tribute, debt",her:"often",race:"No",aff:"Variable",fin:"1901 (Northern Nigeria), 1942 (Ethiopia), 1981 (Mauritania)",flags:["secondary source"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"Medieval Europe and the Vikings",region:"Europe and the Mediterranean",start:800,end:1334,per:"9th – 14th c.",vol:"≈ 10% of the English population in 1086",src:"War, Viking raids",her:"oui",race:"No (religious)",aff:"Transition to serfdom",fin:"1102 (England), 1334 (Sweden)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"Venice, Genoa, Iberia",region:"Europe and the Mediterranean",start:1250,end:1798,per:"13th – 18th c.",vol:"Seville 1565: ≈ 7.4% of the population",src:"Black Sea slave trade, war, Africa",her:"oui",race:"Religious, then increasingly African",aff:"Possible",fin:"Malta 1798",flags:["secondary source"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"Ottoman Empire",region:"Europe and the Mediterranean",start:1350,end:1908,per:"14th c. – 1908",vol:"≈ 1/5 of Constantinople (16th-17th c.)",src:"Tatar raids, devshirme, purchases from the Caucasus and Africa",her:"no (children of concubines)",race:"Prices and functions according to origin",aff:"Frequent, upward mobility possible",fin:"1830-1908, largely nominal",flags:["secondary source"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"Crimean Tatar raids",region:"Europe and the Mediterranean",start:1441,end:1783,per:"1441 – 1783",vol:"2 M (İnalcık, 1500-1700) to 5 M (Charnysh and Lall)",src:"Raids in Poland-Lithuania and Muscovy",her:"—",race:"Religious (Christians)",aff:"Ransom",fin:"Russian annexation of Crimea, 1783",flags:["disputed"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"Barbary corsairs",region:"Europe and the Mediterranean",start:1530,end:1830,per:"1530 – 1830",vol:"1 to 1.25 M (Davis); attested numbers 25,000-35,000",src:"Privateering at sea, coastal raids",her:"no",race:"Religious (Christians)",aff:"Ransom, conversion",fin:"1816, 1830",flags:["disputed"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"Russia (kholops, serfs)",region:"Europe and the Mediterranean",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10% (Hellie); privately owned serfs 37.7% in 1857",src:"Self-sale, debt; serfdom by law (1649)",her:"oui",race:"No",aff:"Rare for serfs",fin:"1861 (redemption payments until 1907)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"Aztecs",region:"Americas",start:1325,end:1521,per:"14th – 16th c.",vol:"No estimate",src:"Punishment, war, debt, self-sale",her:"no",race:"No",aff:"Yes; children born free",fin:"Spanish conquest",flags:["secondary source"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"Northwest Coast",region:"Americas",start:1500,end:1880,per:"Precolonial – 19th c.",vol:"Up to 1/4 of the population in some groups",src:"Raids, purchase between groups",her:"not established",race:"No",aff:"Not established",fin:"Colonization",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"Enslavement of Native Americans",region:"Americas",start:1492,end:1900,per:"1492 – c. 1900",vol:"2.5 to 5 M (Reséndez, broad definition)",src:"War, raids, encomienda, peonage",her:"variable",race:"Yes",aff:"Variable",fin:"Spanish laws of 1542; persistence",flags:["disputed"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"Transatlantic slave trade and colonies",region:"Americas",start:1501,end:1888,per:"1501 – 1888",vol:"12.5 M embarked, 10.7 M landed; France 1.38 M",src:"Purchase from African states and merchants, war, raids",her:"oui",race:"Yes (color)",aff:"Low; very low in the United States",fin:"Britain 1833, France 1848, United States 1865, Brazil 1888",flags:["to be verified"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* Timeline scale: -3000→0 over 22%, 0→1500 over 33%, 1500→2000 over 45% */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? (-y)+" BCE" : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/en/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/en/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"Read the page":"Page coming soon · see the table"}</span>`;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"en")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "Ranked by the upper estimate of each range. \"Cumulative flow\" = total over the entire period; \"stock\" = number of slaves present at a given moment. The two cannot be compared directly. Systems without an estimate are listed last."
    : mode==="part" ? "Ranked by the maximum share of the population enslaved at a given date. Systems without an estimate are listed last." : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"cumulative flow":"stock"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/en/${r.page}/">Read</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">Yes</span>':r.her,
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
  document.getElementById("count").textContent=rows.length+" system"+(rows.length===1?"":"s")+" shown out of "+D.length;
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
      const a=document.createElement("a"); a.className="card live"; a.href="/en/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">Read the page</span>';
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

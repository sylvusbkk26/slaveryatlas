
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Месопотамия",region:"Античность",start:-2100,end:-539,per:"III–I тыс. до н. э.",vol:"Общих оценок нет",src:"Война, долги, покупка",her:"не установлено",race:"Нет",aff:"Освобождение через 3 года при долговом рабстве (Хаммурапи, ст. 117)",fin:"—",flags:["вторичный источник"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"Древний Египет",region:"Античность",start:-3000,end:-30,per:"III тыс. до н. э. – 30 г. до н. э.",vol:"Оценок нет; пирамиды строили оплачиваемые или мобилизованные работники",src:"Война, долги, продажа себя или детей",her:"по-разному",race:"Нет",aff:"Брак, служба при храме",fin:"—",flags:["вторичный источник"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"Афины",region:"Античность",start:-600,end:-300,per:"VI–IV вв. до н. э.",vol:"20 000–80 000 рабов",src:"Война, пиратство, торговля (в основном негреки)",her:"oui",race:"Нет (этнический)",aff:"Част в IV в.",fin:"Солон запрещает долговое рабство афинян",flags:["оспаривается"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"Спарта (илоты)",region:"Античность",start:-700,end:-146,per:"VIII–II вв. до н. э.",vol:"170 000–224 000, намного больше, чем граждан",src:"Завоевание Лаконии и Мессении, рождение",her:"oui",race:"Нет",aff:"Военная служба, выкуп",fin:"Мессения освобождена в 369 г. до н. э.",flags:["вторичный источник"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"Рим",region:"Античность",start:-200,end:476,per:"II в. до н. э. – V в.",vol:"Италия: от 1–1,5 млн (Scheidel) до 3 млн (Brunt); Империя: 10–15 %",src:"Война, рождение (≈ 3/4), подкинутые дети, пиратство",her:"oui",race:"Нет",aff:"Частый, даёт гражданство",fin:"Постепенный переход к колонату и крепостной зависимости",flags:["оспаривается"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"Китай",region:"Азия",start:-1600,end:1910,per:"Шан – 1909/1910",vol:"Небольшая доля; ≈ 2 млн при завоевании Цин",src:"Наказание, война, долги, продажа детей",her:"частично",race:"Нет",aff:"Императорские освобождения (1723–1730)",fin:"1909–1910; практики до 1949 года",flags:["вторичный источник"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"Корея (ноби)",region:"Азия",start:918,end:1894,per:"918 – 1894",vol:"≥ 30 % населения (XV–XVII вв.), до 40 % на юге",src:"Долги, голод, рождение",her:"oui",race:"Нет",aff:"Выкуп, военная служба",fin:"1801, 1886, 1894",flags:["вторичный источник","оспаривается"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"Индия",region:"Азия",start:1206,end:1861,per:"Делийский султанат – 1861",vol:"от 1,1 млн до 8–9 млн около 1840 года в зависимости от определения",src:"Война, неуплата налогов, аграрная кабала низших каст",her:"oui",race:"Нет (совпадает с кастой)",aff:"Не установлено",fin:"1843, Уголовный кодекс 1861 года",flags:["оспаривается"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"Сиам",region:"Азия",start:1600,end:1915,per:"XVII в. – 1915",vol:"1/4–1/3 населения около 1854 года (Pallegoix)",src:"Прежде всего долги, война, рождение",her:"возможно",race:"Нет",aff:"Право на выкуп",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"Хива и Бухара",region:"Азия",start:1500,end:1873,per:"XVI в. – 1873",vol:"≈ 1 млн порабощённых персов (1-я половина XIX в.)",src:"Туркменские и казахские набеги",her:"не установлено",race:"Религиозный (шииты, христиане)",aff:"Не установлено",fin:"1873, под давлением России",flags:["требует проверки"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"Восточная работорговля",region:"Африка и мусульманский мир",start:650,end:1900,per:"650 – 1900 (и позже)",vol:"от 8 млн (Alencastro) до 17 млн (Austen), 25 млн (Bairoch); Сахара: 7,42 млн (Lovejoy)",src:"Набеги, война, покупка у африканских государств",her:"по-разному",race:"Прежде всего религиозный; цветовой предрассудок — предмет споров",aff:"Частый, интеграция",fin:"1908–1981 в зависимости от страны",flags:["оспаривается"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"Африканские общества (Сокото, Дагомея…)",region:"Африка и мусульманский мир",start:1600,end:1942,per:"XVII в. – 1942 (Эфиопия)",vol:"Сокото около 1900 года: 1–2,5 млн, 1/4–1/2 населения",src:"Война, набеги, дань, долги",her:"часто",race:"Нет",aff:"По-разному",fin:"1901 (Северная Нигерия), 1942 (Эфиопия), 1981 (Мавритания)",flags:["вторичный источник"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"Средневековая Европа и викинги",region:"Европа и Средиземноморье",start:800,end:1334,per:"IX – XIV вв.",vol:"≈ 10 % населения Англии в 1086 году",src:"Война, набеги викингов",her:"oui",race:"Нет (религиозный)",aff:"Переход к крепостной зависимости",fin:"1102 (Англия), 1334 (Швеция)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"Венеция, Генуя, Пиренейский полуостров",region:"Европа и Средиземноморье",start:1250,end:1798,per:"XIII – XVIII вв.",vol:"Севилья 1565: ≈ 7,4 % населения",src:"Черноморская работорговля, война, Африка",her:"oui",race:"Религиозный, затем всё больше африканское происхождение",aff:"Возможен",fin:"Мальта 1798",flags:["вторичный источник"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"Османская империя",region:"Европа и Средиземноморье",start:1350,end:1908,per:"XIV в. – 1908",vol:"≈ 1/5 населения Константинополя (XVI–XVII вв.)",src:"Татарские набеги, девширме, покупка на Кавказе и в Африке",her:"нет (дети наложниц)",race:"Цена и функции в зависимости от происхождения",aff:"Частый, возможен социальный подъём",fin:"1830–1908, во многом номинально",flags:["вторичный источник"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"Набеги крымских татар",region:"Европа и Средиземноморье",start:1441,end:1783,per:"1441 – 1783",vol:"от 2 млн (İnalcık, 1500–1700) до 5 млн (Charnysh и Lall)",src:"Набеги на Речь Посполитую и Московское государство",her:"—",race:"Религиозный (христиане)",aff:"Выкуп",fin:"Присоединение Крыма к России, 1783",flags:["оспаривается"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"Берберийские корсары",region:"Европа и Средиземноморье",start:1530,end:1830,per:"1530 – 1830",vol:"1–1,25 млн (Davis); засвидетельствованная численность 25 000–35 000",src:"Каперство на море, прибрежные набеги",her:"нет",race:"Религиозный (христиане)",aff:"Выкуп, обращение в ислам",fin:"1816, 1830",flags:["оспаривается"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"Россия (холопы, крепостные)",region:"Европа и Средиземноморье",start:1450,end:1861,per:"1450 – 1861",vol:"Холопы ≈ 10 % (Hellie); помещичьи крестьяне — 37,7 % в 1857 году",src:"Самопродажа, долги; крепостная зависимость по закону (1649)",her:"oui",race:"Нет",aff:"Редко для крепостных",fin:"1861 (выкупные платежи до 1907 года)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"Ацтеки",region:"Америка",start:1325,end:1521,per:"XIV – XVI вв.",vol:"Оценок нет",src:"Наказание, война, долги, самопродажа",her:"нет",race:"Нет",aff:"Да; дети рождались свободными",fin:"Испанское завоевание",flags:["вторичный источник"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"Северо-западное побережье",region:"Америка",start:1500,end:1880,per:"Доколониальный период – XIX в.",vol:"До 1/4 населения в некоторых группах",src:"Набеги, покупка у других групп",her:"не установлено",race:"Нет",aff:"Не установлено",fin:"Колонизация",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"Рабство индейцев",region:"Америка",start:1492,end:1900,per:"1492 – ок. 1900",vol:"2,5–5 млн (Reséndez, широкое определение)",src:"Война, набеги, энкомьенда, пеонаж",her:"по-разному",race:"Да",aff:"По-разному",fin:"Испанские законы 1542 года; пережитки",flags:["оспаривается"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"Трансатлантическая работорговля и колонии",region:"Америка",start:1501,end:1888,per:"1501 – 1888",vol:"12,5 млн погружено, 10,7 млн высажено; Франция — 1,38 млн",src:"Покупка у африканских государств и торговцев, война, набеги",her:"oui",race:"Да (цвет кожи)",aff:"Редкий; очень редкий в США",fin:"Великобритания 1833, Франция 1848, США 1865, Бразилия 1888",flags:["требует проверки"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* Шкала временной ленты: -3000→0 на 22 %, 0→1500 на 33 %, 1500→2000 на 45 % */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? (-y)+" до н. э." : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/ru/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/ru/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"Читать страницу":"Страница готовится · см. таблицу"}</span>`;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"ru")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "Сортировка по верхней оценке каждого диапазона. «Поток» — суммарный итог за весь период; «численность» — число рабов, имевшихся в определённый момент. Напрямую их сравнивать нельзя. Системы без оценки — в конце списка."
    : mode==="part" ? "Сортировка по максимальной доле подневольного населения на определённую дату. Системы без оценки — в конце списка." : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"накопленный поток":"численность"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/ru/${r.page}/">Читать</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">Да</span>':r.her,
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
  document.getElementById("count").textContent="Показано систем: "+rows.length+" из "+D.length;
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
      const a=document.createElement("a"); a.className="card live"; a.href="/ru/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">Читать страницу</span>';
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

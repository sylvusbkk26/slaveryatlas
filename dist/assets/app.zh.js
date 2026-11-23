
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"美索不达米亚",region:"古代",start:-2100,end:-539,per:"公元前3千纪至前1千纪",vol:"无整体估计",src:"战争、债务、购买",her:"未确定",race:"否",aff:"因债务为奴者三年后获释（汉谟拉比，第117条）",fin:"—",flags:["二手资料"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"古埃及",region:"古代",start:-3000,end:-30,per:"公元前3千纪 – 公元前30年",vol:"无估计；金字塔由领取报酬或被征调的工人建造",src:"战争、债务、卖身或出卖子女",her:"不一",race:"否",aff:"婚姻、神庙服役",fin:"—",flags:["二手资料"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"雅典",region:"古代",start:-600,end:-300,per:"公元前6世纪至前4世纪",vol:"2万至8万名奴隶",src:"战争、海盗、贸易（主要为非希腊人）",her:"oui",race:"否（族群）",aff:"公元前4世纪较常见",fin:"梭伦禁止雅典人因债务沦为奴隶",flags:["有争议"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"斯巴达（黑劳士）",region:"古代",start:-700,end:-146,per:"公元前8世纪至前2世纪",vol:"17万至22.4万，远多于公民",src:"征服拉科尼亚和美塞尼亚、出生",her:"oui",race:"否",aff:"服兵役、赎身",fin:"美塞尼亚于公元前369年获得解放",flags:["二手资料"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"罗马",region:"古代",start:-200,end:476,per:"公元前2世纪 – 公元5世纪",vol:"意大利：100万-150万（Scheidel）至300万（Brunt）；帝国：10%-15%",src:"战争、出生（≈ 3/4）、弃婴、海盗",her:"oui",race:"否",aff:"常见，可获得公民权",fin:"逐渐转向隶农制和农奴制",flags:["有争议"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"中国",region:"亚洲",start:-1600,end:1910,per:"商 – 1909/1910年",vol:"比例很低；清朝入关时≈ 200万",src:"刑罚、战争、债务、出卖子女",her:"部分",race:"否",aff:"皇帝的解放令（1723-1730年）",fin:"1909-1910年；相关做法延续至1949年",flags:["二手资料"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"朝鲜（nobi）",region:"亚洲",start:918,end:1894,per:"918 – 1894",vol:"≥ 人口的30%（15-17世纪），南部高达40%",src:"债务、饥荒、出生",her:"oui",race:"否",aff:"赎身、服兵役",fin:"1801年、1886年、1894年",flags:["二手资料","有争议"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"印度",region:"亚洲",start:1206,end:1861,per:"德里苏丹国 – 1861年",vol:"约1840年，依定义不同为110万至800万-900万",src:"战争、欠税、低种姓的农业奴役",her:"oui",race:"否（与种姓重叠）",aff:"未确定",fin:"1843年，1861年《刑法典》",flags:["有争议"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"暹罗",region:"亚洲",start:1600,end:1915,per:"17世纪 – 1915年",vol:"约1854年占人口的1/4至1/3（Pallegoix）",src:"以债务为主，战争、出生",her:"可能",race:"否",aff:"依法可赎身",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"希瓦与布哈拉",region:"亚洲",start:1500,end:1873,per:"16世纪 – 1873年",vol:"≈ 100万波斯人被奴役（19世纪上半叶）",src:"土库曼人和哈萨克人的袭击",her:"未确定",race:"宗教（什叶派、基督徒）",aff:"未确定",fin:"1873年，迫于俄国压力",flags:["待核实"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"东方奴隶贸易",region:"非洲与穆斯林世界",start:650,end:1900,per:"650 – 1900年（及以后）",vol:"800万（Alencastro）至1700万（Austen）、2500万（Bairoch）；撒哈拉：742万（Lovejoy）",src:"掠袭、战争、从非洲国家购买",her:"不一",race:"以宗教为主；肤色偏见存在争议",aff:"常见，融入社会",fin:"依国家不同，1908年至1981年",flags:["有争议"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"非洲社会（索科托、达荷美……）",region:"非洲与穆斯林世界",start:1600,end:1942,per:"17世纪 – 1942年（埃塞俄比亚）",vol:"约1900年的索科托：100万至250万，占人口的1/4至1/2",src:"战争、掠袭、贡赋、债务",her:"常见",race:"否",aff:"不一",fin:"1901年（北尼日利亚），1942年（埃塞俄比亚），1981年（毛里塔尼亚）",flags:["二手资料"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"中世纪欧洲与维京人",region:"欧洲与地中海",start:800,end:1334,per:"9世纪 – 14世纪",vol:"1086年≈ 英格兰人口的10%",src:"战争、维京人掠袭",her:"oui",race:"否（宗教）",aff:"向农奴制过渡",fin:"1102年（英格兰），1334年（瑞典）",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"威尼斯、热那亚、伊比利亚",region:"欧洲与地中海",start:1250,end:1798,per:"13世纪 – 18世纪",vol:"1565年的塞维利亚：≈ 人口的7.4%",src:"黑海奴隶贸易、战争、非洲",her:"oui",race:"宗教，后来日益以非洲出身为准",aff:"可能",fin:"马耳他1798年",flags:["二手资料"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"奥斯曼帝国",region:"欧洲与地中海",start:1350,end:1908,per:"14世纪 – 1908年",vol:"≈ 君士坦丁堡人口的1/5（16-17世纪）",src:"鞑靼人袭击、德夫希尔梅、购自高加索和非洲",her:"否（妾所生子女）",race:"价格与职能依出身而定",aff:"常见，可能实现社会上升",fin:"1830-1908年，很大程度上有名无实",flags:["二手资料"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"克里米亚鞑靼人的掠袭",region:"欧洲与地中海",start:1441,end:1783,per:"1441 – 1783",vol:"200万（İnalcık，1500-1700年）至500万（Charnysh与Lall）",src:"在波兰-立陶宛和莫斯科公国的掠袭",her:"—",race:"宗教（基督徒）",aff:"赎买",fin:"1783年俄国吞并克里米亚",flags:["有争议"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"巴巴里海盗",region:"欧洲与地中海",start:1530,end:1830,per:"1530 – 1830",vol:"100万至125万（Davis）；有据可查的人数为2.5万-3.5万",src:"海上劫掠、沿海掠袭",her:"否",race:"宗教（基督徒）",aff:"赎买、改宗",fin:"1816年、1830年",flags:["有争议"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"俄国（kholops、农奴）",region:"欧洲与地中海",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10%（Hellie）；1857年私有农奴占37.7%",src:"卖身、债务；依法律成为农奴（1649年）",her:"oui",race:"否",aff:"农奴中罕见",fin:"1861年（赎买延续至1907年）",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"阿兹特克人",region:"美洲",start:1325,end:1521,per:"14世纪 – 16世纪",vol:"无估计",src:"刑罚、战争、债务、卖身",her:"否",race:"否",aff:"是；子女生而自由",fin:"西班牙征服",flags:["二手资料"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"西北海岸",region:"美洲",start:1500,end:1880,per:"前殖民时期 – 19世纪",vol:"在某些群体中多达人口的1/4",src:"袭击、群体间购买",her:"未确定",race:"否",aff:"未确定",fin:"殖民化",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"对美洲原住民的奴役",region:"美洲",start:1492,end:1900,per:"1492 – 约1900年",vol:"250万至500万（Reséndez，宽泛定义）",src:"战争、掠袭、委托监护制、债务劳役",her:"不一",race:"是",aff:"不一",fin:"1542年西班牙法律；残余延续",flags:["有争议"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"大西洋奴隶贸易与殖民地",region:"美洲",start:1501,end:1888,per:"1501 – 1888",vol:"装船1250万，登岸1070万；法国138万",src:"从非洲国家和商人处购买、战争、掠袭",her:"oui",race:"是（肤色）",aff:"少；在美国极少",fin:"英国1833年，法国1848年，美国1865年，巴西1888年",flags:["待核实"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* 时间轴比例：-3000→0 占22%，0→1500 占33%，1500→2000 占45% */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? "前"+(-y) : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/zh/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/zh/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"阅读页面":"页面即将推出 · 查看表格"}</span>`;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"zh")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "按每个区间的高端估计值排序。“流量”= 整个时期的累计总数；“存量”= 某一时刻存在的奴隶人数。二者不能直接比较。没有估计值的制度排在列表末尾。"
    : mode==="part" ? "按某一日期奴隶人口所占的最高比例排序。没有估计值的制度排在列表末尾。" : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"累计流量":"存量"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/zh/${r.page}/">阅读</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">是</span>':r.her,
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
  document.getElementById("count").textContent="显示"+rows.length+"个制度（共"+D.length+"个）";
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
      const a=document.createElement("a"); a.className="card live"; a.href="/zh/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">阅读页面</span>';
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

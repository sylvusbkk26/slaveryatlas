
const D = [
 {id:"meso",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"เมโสโปเตเมีย",region:"สมัยโบราณ",start:-2100,end:-539,per:"สหัสวรรษที่ 3-1 ก่อน ค.ศ.",vol:"ไม่มีตัวเลขประมาณการโดยรวม",src:"สงคราม หนี้สิน การซื้อ",her:"ยังไม่มีหลักฐานชัดเจน",race:"ไม่",aff:"ปลดปล่อยหลัง 3 ปีสำหรับผู้เป็นทาสเพราะหนี้ (ฮัมมูราบี มาตรา 117)",fin:"—",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"egy",page:"mesopotamie-egypte",vmax:null,vtype:null,pmax:null,name:"อียิปต์โบราณ",region:"สมัยโบราณ",start:-3000,end:-30,per:"สหัสวรรษที่ 3 ก่อน ค.ศ. – 30 ก่อน ค.ศ.",vol:"ไม่มีตัวเลขประมาณการ ; พีระมิดสร้างโดยแรงงานที่ได้รับค่าจ้างหรือถูกเกณฑ์",src:"สงคราม หนี้สิน การขายตัวเองหรือขายบุตร",her:"แตกต่างกันไป",race:"ไม่",aff:"การแต่งงาน การรับใช้ในวิหาร",fin:"—",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"ath",page:"grece",vmax:0.08,vtype:"eff",pmax:null,name:"เอเธนส์",region:"สมัยโบราณ",start:-600,end:-300,per:"ศตวรรษที่ 6-4 ก่อน ค.ศ.",vol:"ทาส 20,000 ถึง 80,000 คน",src:"สงคราม การปล้นสะดมทางทะเล การค้า (ส่วนใหญ่ไม่ใช่ชาวกรีก)",her:"oui",race:"ไม่ (ชาติพันธุ์)",aff:"พบบ่อยในศตวรรษที่ 4",fin:"โซลอนห้ามการเป็นทาสเพราะหนี้ของชาวเอเธนส์",flags:["มีข้อโต้แย้ง"]},
 {id:"spa",page:"grece",vmax:0.224,vtype:"eff",pmax:null,name:"สปาร์ตา (เฮลอต)",region:"สมัยโบราณ",start:-700,end:-146,per:"ศตวรรษที่ 8-2 ก่อน ค.ศ.",vol:"170,000 ถึง 224,000 คน มากกว่าพลเมืองอย่างมาก",src:"การพิชิตลาโคเนียและเมสเซเนีย การเกิด",her:"oui",race:"ไม่",aff:"การรับราชการทหาร การไถ่ตัว",fin:"เมสเซเนียได้รับการปลดปล่อยในปี 369 ก่อน ค.ศ.",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"rome",page:"rome",vmax:3,vtype:"eff",pmax:15,name:"โรม",region:"สมัยโบราณ",start:-200,end:476,per:"ศตวรรษที่ 2 ก่อน ค.ศ. – ศตวรรษที่ 5",vol:"อิตาลี: 1-1.5 ล้าน (Scheidel) ถึง 3 ล้าน (Brunt) ; จักรวรรดิ: 10-15 %",src:"สงคราม การเกิด (≈ 3/4) เด็กที่ถูกทอดทิ้ง การปล้นสะดมทางทะเล",her:"oui",race:"ไม่",aff:"พบบ่อย ได้รับสถานะพลเมือง",fin:"ค่อยๆ เปลี่ยนไปเป็นระบบโคโลนัสและระบบข้าติดที่ดิน",flags:["มีข้อโต้แย้ง"]},
 {id:"chine",page:"chine",vmax:2,vtype:"eff",pmax:null,name:"จีน",region:"เอเชีย",start:-1600,end:1910,per:"ราชวงศ์ซาง – 1909/1910",vol:"สัดส่วนน้อย ; ≈ 2 ล้าน เมื่อราชวงศ์ชิงพิชิตจีน",src:"การลงโทษ สงคราม หนี้สิน การขายบุตร",her:"บางส่วน",race:"ไม่",aff:"การปลดปล่อยโดยจักรพรรดิ (1723-1730)",fin:"1909-1910 ; ยังมีการปฏิบัติจนถึงปี 1949",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"coree",page:"coree",vmax:null,vtype:null,pmax:40,name:"เกาหลี (nobi)",region:"เอเชีย",start:918,end:1894,per:"918 – 1894",vol:"≥ 30 % ของประชากร (ศตวรรษที่ 15-17) สูงถึง 40 % ในภาคใต้",src:"หนี้สิน ทุพภิกขภัย การเกิด",her:"oui",race:"ไม่",aff:"การไถ่ตัว การรับราชการทหาร",fin:"1801, 1886, 1894",flags:["แหล่งข้อมูลทุติยภูมิ","มีข้อโต้แย้ง"]},
 {id:"inde",page:"inde",vmax:9,vtype:"eff",pmax:null,name:"อินเดีย",region:"เอเชีย",start:1206,end:1861,per:"รัฐสุลต่านเดลี – 1861",vol:"1.1 ล้าน ถึง 8-9 ล้าน ราวปี 1840 ขึ้นอยู่กับนิยาม",src:"สงคราม การค้างชำระภาษี ความเป็นทาสในภาคเกษตรของวรรณะต่ำ",her:"oui",race:"ไม่ (ซ้อนทับกับวรรณะ)",aff:"ยังไม่มีหลักฐานชัดเจน",fin:"1843, ประมวลกฎหมายอาญาปี 1861",flags:["มีข้อโต้แย้ง"]},
 {id:"siam",page:"siam",vmax:null,vtype:null,pmax:33,name:"สยาม",region:"เอเชีย",start:1600,end:1915,per:"ศตวรรษที่ 17 – 1915",vol:"1/4 ถึง 1/3 ของประชากร ราวปี 1854 (Pallegoix)",src:"หนี้สินเป็นหลัก สงคราม การเกิด",her:"เป็นไปได้",race:"ไม่",aff:"ไถ่ตัวได้ตามกฎหมาย",fin:"1874 → 1905 → 1915",flags:[]},
 {id:"asiec",page:"asie-centrale",vmax:1,vtype:"flux",pmax:null,name:"คีวาและบูคารา",region:"เอเชีย",start:1500,end:1873,per:"ศตวรรษที่ 16 – 1873",vol:"≈ ชาวเปอร์เซีย 1 ล้านคนถูกจับเป็นทาส (ครึ่งแรกของศตวรรษที่ 19)",src:"การจู่โจมของชาวเติร์กเมนและคาซัค",her:"ยังไม่มีหลักฐานชัดเจน",race:"ศาสนา (ชีอะห์ คริสเตียน)",aff:"ยังไม่มีหลักฐานชัดเจน",fin:"1873 ภายใต้แรงกดดันของรัสเซีย",flags:["รอตรวจสอบ"]},
 {id:"orient",vmax:25,vtype:"flux",pmax:null,name:"การค้าทาสสายตะวันออก",region:"แอฟริกาและโลกมุสลิม",start:650,end:1900,per:"650 – 1900 (และหลังจากนั้น)",vol:"8 ล้าน (Alencastro) ถึง 17 ล้าน (Austen), 25 ล้าน (Bairoch) ; ซาฮารา: 7.42 ล้าน (Lovejoy)",src:"การจู่โจม สงคราม การซื้อจากรัฐในแอฟริกา",her:"แตกต่างกันไป",race:"ศาสนาเป็นหลัก ; อคติเรื่องสีผิวยังเป็นที่ถกเถียง",aff:"พบบ่อย มีการผสมกลมกลืน",fin:"1908 ถึง 1981 แล้วแต่ประเทศ",flags:["มีข้อโต้แย้ง"],page:"traites-orientales"},
 {id:"afr",page:"afrique",vmax:2.5,vtype:"eff",pmax:50,name:"สังคมในแอฟริกา (โซโกโต ดาโฮมีย์…)",region:"แอฟริกาและโลกมุสลิม",start:1600,end:1942,per:"ศตวรรษที่ 17 – 1942 (เอธิโอเปีย)",vol:"โซโกโต ราวปี 1900: 1 ถึง 2.5 ล้าน หรือ 1/4 ถึง 1/2 ของประชากร",src:"สงคราม การจู่โจม บรรณาการ หนี้สิน",her:"บ่อยครั้ง",race:"ไม่",aff:"แตกต่างกันไป",fin:"1901 (ไนจีเรียตอนเหนือ), 1942 (เอธิโอเปีย), 1981 (มอริเตเนีย)",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"eumed",page:"europe-medievale",vmax:null,vtype:null,pmax:10,name:"ยุโรปยุคกลางและไวกิง",region:"ยุโรปและเมดิเตอร์เรเนียน",start:800,end:1334,per:"ศตวรรษที่ 9 – 14",vol:"≈ 10 % ของประชากรอังกฤษในปี 1086",src:"สงคราม การจู่โจมของไวกิง",her:"oui",race:"ไม่ (ศาสนา)",aff:"เปลี่ยนผ่านสู่ระบบข้าติดที่ดิน",fin:"1102 (อังกฤษ), 1334 (สวีเดน)",flags:[]},
 {id:"medit",page:"europe-medievale",vmax:null,vtype:null,pmax:7.4,name:"เวนิส เจนัว ไอบีเรีย",region:"ยุโรปและเมดิเตอร์เรเนียน",start:1250,end:1798,per:"ศตวรรษที่ 13 – 18",vol:"เซบียา 1565: ≈ 7.4 % ของประชากร",src:"การค้าทาสในทะเลดำ สงคราม แอฟริกา",her:"oui",race:"ศาสนา แล้วจึงกลายเป็นชาวแอฟริกันมากขึ้นเรื่อยๆ",aff:"เป็นไปได้",fin:"มอลตา 1798",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"otto",page:"ottomans",vmax:null,vtype:null,pmax:20,name:"จักรวรรดิออตโตมัน",region:"ยุโรปและเมดิเตอร์เรเนียน",start:1350,end:1908,per:"ศตวรรษที่ 14 – 1908",vol:"≈ 1/5 ของคอนสแตนติโนเปิล (ศตวรรษที่ 16-17)",src:"การจู่โจมของชาวตาตาร์ ระบบเดฟชีร์เม การซื้อจากคอเคซัสและแอฟริกา",her:"ไม่ (บุตรของนางบำเรอ)",race:"ราคาและหน้าที่ขึ้นอยู่กับแหล่งกำเนิด",aff:"พบบ่อย เลื่อนสถานะได้",fin:"1830-1908 เป็นเพียงในนามเป็นส่วนใหญ่",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"tatar",page:"tatars",vmax:5,vtype:"flux",pmax:null,name:"การจู่โจมของชาวตาตาร์ไครเมีย",region:"ยุโรปและเมดิเตอร์เรเนียน",start:1441,end:1783,per:"1441 – 1783",vol:"2 ล้าน (İnalcık, 1500-1700) ถึง 5 ล้าน (Charnysh และ Lall)",src:"การจู่โจมในโปแลนด์-ลิทัวเนียและมัสโกวี",her:"—",race:"ศาสนา (คริสเตียน)",aff:"การไถ่ตัว",fin:"รัสเซียผนวกไครเมีย, 1783",flags:["มีข้อโต้แย้ง"]},
 {id:"barb",vmax:1.25,vtype:"flux",pmax:null,name:"โจรสลัดบาร์บารี",region:"ยุโรปและเมดิเตอร์เรเนียน",start:1530,end:1830,per:"1530 – 1830",vol:"1 ถึง 1.25 ล้าน (Davis) ; จำนวนที่มีหลักฐาน 25,000-35,000",src:"การปล้นในทะเล การจู่โจมชายฝั่ง",her:"ไม่",race:"ศาสนา (คริสเตียน)",aff:"การไถ่ตัว การเปลี่ยนศาสนา",fin:"1816, 1830",flags:["มีข้อโต้แย้ง"],page:"barbaresques"},
 {id:"russie",page:"russie",vmax:null,vtype:null,pmax:37.7,name:"รัสเซีย (kholops, ข้าติดที่ดิน)",region:"ยุโรปและเมดิเตอร์เรเนียน",start:1450,end:1861,per:"1450 – 1861",vol:"Kholops ≈ 10 % (Hellie) ; ข้าติดที่ดินของเอกชน 37.7 % ในปี 1857",src:"การขายตัวเอง หนี้สิน ; ระบบข้าติดที่ดินโดยกฎหมาย (1649)",her:"oui",race:"ไม่",aff:"พบน้อยสำหรับข้าติดที่ดิน",fin:"1861 (ผ่อนชำระค่าไถ่ถอนจนถึงปี 1907)",flags:[]},
 {id:"azt",page:"ameriques",vmax:null,vtype:null,pmax:null,name:"แอซเท็ก",region:"ทวีปอเมริกา",start:1325,end:1521,per:"ศตวรรษที่ 14 – 16",vol:"ไม่มีตัวเลขประมาณการ",src:"การลงโทษ สงคราม หนี้สิน การขายตัวเอง",her:"ไม่",race:"ไม่",aff:"ใช่ ; บุตรเกิดมาเป็นไท",fin:"สเปนพิชิต",flags:["แหล่งข้อมูลทุติยภูมิ"]},
 {id:"nwc",page:"ameriques",vmax:null,vtype:null,pmax:25,name:"ชายฝั่งตะวันตกเฉียงเหนือ",region:"ทวีปอเมริกา",start:1500,end:1880,per:"ก่อนยุคอาณานิคม – ศตวรรษที่ 19",vol:"สูงถึง 1/4 ของประชากรในบางกลุ่ม",src:"การจู่โจม การซื้อขายระหว่างกลุ่ม",her:"ยังไม่มีหลักฐานชัดเจน",race:"ไม่",aff:"ยังไม่มีหลักฐานชัดเจน",fin:"การล่าอาณานิคม",flags:[]},
 {id:"amind",page:"ameriques",vmax:5,vtype:"flux",pmax:null,name:"การบังคับชนพื้นเมืองอเมริกันเป็นทาส",region:"ทวีปอเมริกา",start:1492,end:1900,per:"1492 – ราว 1900",vol:"2.5 ถึง 5 ล้าน (Reséndez, นิยามแบบกว้าง)",src:"สงคราม การจู่โจม ระบบเอนโกมิเอนดา แรงงานขัดหนี้",her:"แตกต่างกันไป",race:"ใช่",aff:"แตกต่างกันไป",fin:"กฎหมายสเปนปี 1542 ; ยังคงหลงเหลืออยู่",flags:["มีข้อโต้แย้ง"]},
 {id:"atl",vmax:12.5,vtype:"flux",pmax:null,name:"การค้าทาสแอตแลนติกและอาณานิคม",region:"ทวีปอเมริกา",start:1501,end:1888,per:"1501 – 1888",vol:"ถูกนำขึ้นเรือ 12.5 ล้าน ขึ้นฝั่ง 10.7 ล้าน ; ฝรั่งเศส 1.38 ล้าน",src:"การซื้อจากรัฐและพ่อค้าชาวแอฟริกัน สงคราม การจู่โจม",her:"oui",race:"ใช่ (สีผิว)",aff:"น้อย ; น้อยมากในสหรัฐอเมริกา",fin:"สหราชอาณาจักร 1833, ฝรั่งเศส 1848, สหรัฐอเมริกา 1865, บราซิล 1888",flags:["รอตรวจสอบ"],page:"traite-atlantique"}
];
const isRace = r => ["amind","atl"].includes(r.id);

/* มาตราส่วนของเส้นเวลา: -3000→0 ใช้ 22 %, 0→1500 ใช้ 33 %, 1500→2000 ใช้ 45 % */
function x(y){
  if(y<0) return 22*(y+3000)/3000;
  if(y<1500) return 22+33*y/1500;
  return 55+45*(Math.min(y,2000)-1500)/500;
}
function fmt(y){return y<0? "−"+(-y) : String(y);}

function buildFrise(){
  const f=document.getElementById("frise");
  [...D].sort((a,b)=>a.start-b.start).forEach(r=>{
    const row=document.createElement("div"); row.className="frow";
    const n=document.createElement("span"); n.className="name"; n.textContent=r.name; n.title=r.name;
    const t=document.createElement("div"); t.className="track";
    const b=document.createElement("button"); b.type="button"; b.className="bar"+(isRace(r)?" race":"");
    b.style.left=x(r.start)+"%"; b.style.width=Math.max(.6,x(r.end)-x(r.start))+"%";
    b.setAttribute("aria-label",r.name+", "+r.per); b.title=r.name+" · "+r.per;
    b.addEventListener("click",()=>{ location.href="/th/comparer/?q="+encodeURIComponent(r.name); });
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
    a.href="/th/"+r.page+"/";
    
    a.innerHTML=`<span class="per"></span><strong></strong><span class="soon">${r.page?"อ่านหน้านี้":"หน้านี้กำลังจัดทำ · ดูในตาราง"}</span>`;
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
  if(sortKey==="name") rows.sort((a,b)=>a.name.localeCompare(b.name,"th")*sortDir);
  else if(sortKey) rows.sort((a,b)=>(a[sortKey]-b[sortKey])*sortDir);
  else if(mode==="vol") rows.sort(desc(r=>r.vmax));
  else if(mode==="part") rows.sort(desc(r=>r.pmax));
  else if(mode==="dur") rows.sort(desc(r=>r.end-r.start));
  else if(mode==="end") rows.sort(desc(r=>r.end));
  else rows.sort((a,b)=>a.start-b.start);
  const note=document.getElementById("sortnote");
  note.textContent = sortKey? "" : mode==="vol" ? "จัดอันดับตามตัวเลขประมาณการด้านสูงของแต่ละช่วง “ยอดสะสม” = ผลรวมตลอดทั้งช่วงเวลา ; “จำนวน ณ ขณะหนึ่ง” = จำนวนทาสที่มีอยู่ ณ เวลาใดเวลาหนึ่ง ตัวเลขทั้งสองแบบนำมาเทียบกันโดยตรงไม่ได้ ระบบที่ไม่มีตัวเลขประมาณการอยู่ท้ายรายการ"
    : mode==="part" ? "จัดอันดับตามสัดส่วนสูงสุดของประชากรทาส ณ ช่วงเวลาหนึ่ง ระบบที่ไม่มีตัวเลขประมาณการอยู่ท้ายรายการ" : "";
  const tb=document.getElementById("tbody"); tb.innerHTML="";
  rows.forEach(r=>{
    const tr=document.createElement("tr");
    const cells=[
      `<span class="civ"></span><br><span class="pill"></span>${r.vtype?`<span class="pill">${r.vtype==="flux"?"ยอดสะสม":"จำนวน ณ ขณะหนึ่ง"}</span>`:""}${r.flags.map(f=>`<span class="pill flag">${f}</span>`).join("")}${r.page?` <a href="/th/${r.page}/">อ่าน</a>`:""}`,
      r.per, r.vol, r.src,
      r.her==="oui"?'<span class="yes">ใช่</span>':r.her,
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
  document.getElementById("count").textContent="แสดง "+rows.length+" ระบบ จากทั้งหมด "+D.length+" ระบบ";
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
      const a=document.createElement("a"); a.className="card live"; a.href="/th/"+r.page+"/";
      a.innerHTML='<span class="per"></span><strong></strong><span class="soon">อ่านหน้านี้</span>';
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

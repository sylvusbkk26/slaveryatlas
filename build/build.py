import re, os, shutil, json
import pathlib
ROOT=pathlib.Path(__file__).resolve().parent.parent
SRC=str(ROOT/'src/prototype.html'); OUT=str(ROOT/'dist')
s=open(SRC).read()
shutil.rmtree(OUT,ignore_errors=True); os.makedirs(OUT+'/assets')
css=re.search(r'<style>(.*?)</style>',s,re.S).group(1)
css=css.replace('section.view{display:none}\nsection.view.active{display:block}','')
open(OUT+'/assets/site.css','w').write(css)
js=re.search(r'<script>(.*?)</script>',s,re.S).group(1)
# --- adapt JS for multi-page
fn=re.search(r'function buildCivGroups\(\)\{.*?\n\}\n',js,re.S).group(0)
js=js[:js.index('const CIV=')]+fn  # drop routing, keep civ groups
js=js.replace('location.hash="comparer"','location.href="/fr/comparer/?q="+encodeURIComponent(r.name)')
js=js.replace('document.getElementById("f-q").value=r.name; render(); location.href','location.href')
js=js.replace('a.href=r.page? "#"+r.page : "#comparer";','a.href="/fr/"+r.page+"/";')
js=js.replace('if(!r.page) a.addEventListener("click",()=>{document.getElementById("f-q").value=r.name; render();});','')
js=js.replace('a.className="card live"; a.href="#"+r.page;','a.className="card live"; a.href="/fr/"+r.page+"/";')
js=js.replace('<a href="#${r.page}">Lire</a>','<a href="/fr/${r.page}/">Lire</a>')
js+='''
const $=id=>document.getElementById(id);
if($("frise")) buildFrise();
if($("cards")) buildCards();
if($("civgroups")) buildCivGroups();
if($("tbody")){ initFilters(); const q=new URLSearchParams(location.search).get("q"); if(q) $("f-q").value=q; render(); }
'''
js=js.replace('buildFrise(); buildCards(); buildCivGroups();','')
open(OUT+'/assets/app.js','w').write(js)
# --- pages
secs=dict(re.findall(r'<section class="view" id="v-([a-z-]+)">(.*?)</section>',s,re.S))
proto=''
footer=re.search(r'<footer>.*?</footer>',s,re.S).group(0)
D_titles={}
def plain(h): return re.sub(r'\s+',' ',re.sub(r'<[^>]+>','',h)).strip()
NAV=[("","Accueil"),("comparer","Comparer"),("civilisations","Civilisations"),("abolitions","Abolitions"),("debat","Le débat"),("aujourdhui","Aujourd'hui"),("methode","Méthode")]
CIVPAGES=set(re.findall(r'page:"([a-z-]+)"',js))
BASE='https://slaveryatlas.org'
urls=[]
for pid,body in secs.items():
    slug='' if pid=='accueil' else pid
    path=f'/fr/{slug}/' if slug else '/fr/'
    urls.append(path)
    b=body
    b=re.sub(r'href="#accueil"','href="/fr/"',b)
    b=re.sub(r'href="#([a-z-]+)"',lambda m:f'href="/fr/{m.group(1)}/"',b)
    h1=plain(re.search(r'<h1>(.*?)</h1>',b,re.S).group(1))
    lead=re.search(r'<p class="lead">(.*?)</p>',b,re.S)
    desc=plain(lead.group(1)) if lead else h1
    if len(desc)>158: desc=desc[:155].rsplit(' ',1)[0]+'…'
    title=('Les esclavages du monde : histoire comparée de l\'esclavage' if pid=='accueil' else f'{h1} · Slavery Atlas')
    navkey='civilisations' if pid in CIVPAGES else slug
    nav=''.join(f'<a href="/fr/{k+"/" if k else ""}"{" aria-current=\"page\"" if k==navkey else ""}>{t}</a>' for k,t in NAV)
    html=f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc.replace('"','&quot;')}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{BASE}{path}">
<link rel="alternate" hreflang="fr" href="{BASE}{path}">
<link rel="alternate" hreflang="x-default" href="{BASE}{path}">
<meta property="og:title" content="{title.replace('"','&quot;')}">
<meta property="og:description" content="{desc.replace('"','&quot;')}">
<meta property="og:url" content="{BASE}{path}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<header class="top"><div class="wrap"><a class="brand" href="/fr/">Les esclavages du monde</a><nav class="main" aria-label="Navigation principale">{nav}</nav></div></header>
{proto}
<main><section class="view">{b}</section></main>
{footer}
<script src="/assets/app.js"></script>
</body>
</html>'''
    d=OUT+path; os.makedirs(d,exist_ok=True); open(d+'index.html','w').write(html)
# root redirect + 404
open(OUT+'/index.html','w').write('<!DOCTYPE html><html lang="fr"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/fr/"><link rel="canonical" href="https://slaveryatlas.org/fr/"><title>Slavery Atlas</title></head><body><a href="/fr/">Les esclavages du monde</a></body></html>')
open(OUT+'/404.html','w').write(open(OUT+'/fr/index.html').read().replace('<main>','<main><div class="wrap"><p class="lead">Page introuvable. Retour à <a href="/fr/">l\'accueil</a>.</p></div>',1))
open(OUT+'/robots.txt','w').write('User-agent: *\nAllow: /\nSitemap: https://slaveryatlas.org/sitemap.xml\n')
open(OUT+'/sitemap.xml','w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+''.join(f'<url><loc>{BASE}{u}</loc></url>\n' for u in urls)+'</urlset>\n')
print(len(urls),'pages')

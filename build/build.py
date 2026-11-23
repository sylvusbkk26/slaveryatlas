"""Construit le site statique multilingue dans dist/.

Sources : src/prototype.html (français, langue de référence) et
src/i18n/<lang>.html (copies traduites, même structure). Chaque langue
disponible produit /<lang>/<page>/index.html, avec hreflang croisés.
"""
import re, os, shutil, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'dist'
BASE = 'https://slaveryatlas.org'
LANGS = [  # code, libellé du sélecteur, locale Open Graph
    ('fr', 'FR', 'fr_FR'),
    ('en', 'EN', 'en_US'),
    ('es', 'ES', 'es_ES'),
    ('de', 'DE', 'de_DE'),
    ('zh', '中文', 'zh_CN'),
    ('ru', 'RU', 'ru_RU'),
]
HTML_LANG = {'zh': 'zh-Hans'}


def source_for(lang):
    p = ROOT / 'src' / ('prototype.html' if lang == 'fr' else f'i18n/{lang}.html')
    return p.read_text(encoding='utf-8') if p.exists() else None


def plain(h):
    return re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', h)).strip()


def esc(t):
    return t.replace('&', '&amp;').replace('"', '&quot;').replace('<', '&lt;')


def build_js(s, lang):
    js = re.search(r'<script>(.*?)</script>', s, re.S).group(1)
    fn = re.search(r'function buildCivGroups\(\)\{.*?\n\}\n', js, re.S).group(0)
    js = js[:js.index('const CIV=')] + fn  # retire le routage par #, garde l'index des civilisations
    L = f'/{lang}/'
    js = js.replace('location.hash="comparer"', f'location.href="{L}comparer/?q="+encodeURIComponent(r.name)')
    js = js.replace('document.getElementById("f-q").value=r.name; render(); location.href', 'location.href')
    js = js.replace('a.href=r.page? "#"+r.page : "#comparer";', f'a.href="{L}"+r.page+"/";')
    js = re.sub(r'if\(!r\.page\) a\.addEventListener\("click",\(\)=>\{document\.getElementById\("f-q"\)\.value=r\.name; render\(\);\}\);', '', js)
    js = js.replace('a.className="card live"; a.href="#"+r.page;', f'a.className="card live"; a.href="{L}"+r.page+"/";')
    js = re.sub(r'<a href="#\$\{r\.page\}">', f'<a href="{L}${{r.page}}/">', js)
    js = js.replace('buildFrise(); buildCards(); buildCivGroups();', '')
    js += '''
const $=id=>document.getElementById(id);
if($("frise")) buildFrise();
if($("cards")) buildCards();
if($("civgroups")) buildCivGroups();
if($("tbody")){ initFilters(); const q=new URLSearchParams(location.search).get("q"); if(q) $("f-q").value=q; render(); }
'''
    return js


def main():
    shutil.rmtree(OUT, ignore_errors=True)
    (OUT / 'assets').mkdir(parents=True)
    sources = {l: source_for(l) for l, _, _ in LANGS}
    avail = [(l, lab, loc) for l, lab, loc in LANGS if sources[l]]
    fr = sources['fr']
    css = re.search(r'<style>(.*?)</style>', fr, re.S).group(1)
    css = css.replace('section.view{display:none}\nsection.view.active{display:block}', '')
    css += '''
.langs{display:flex;gap:2px;flex-wrap:wrap;font-size:.8rem}
.langs a{color:var(--muted);text-decoration:none;padding:4px 7px;border-radius:5px;font-weight:500}
.langs a[aria-current="true"]{color:var(--ink);background:var(--chip)}
header.top .wrap{row-gap:4px}
'''
    (OUT / 'assets/site.css').write_text(css, encoding='utf-8')

    # pages par langue : {lang: {pid: body}}
    secs, meta = {}, {}
    for l, _, _ in avail:
        s = sources[l]
        secs[l] = dict(re.findall(r'<section class="view" id="v-([a-z-]+)">(.*?)</section>', s, re.S))
        navhtml = re.search(r'<nav class="main"[^>]*>(.*?)</nav>', s, re.S).group(1)
        meta[l] = {
            'nav': re.findall(r'<a href="#([a-z-]*)"[^>]*>(.*?)</a>', navhtml),
            'navlabel': re.search(r'<nav class="main" aria-label="([^"]*)"', s).group(1),
            'brand': plain(re.search(r'<a class="brand"[^>]*>(.*?)</a>', s, re.S).group(1)),
            'footer': re.search(r'<footer>.*?</footer>', s, re.S).group(0),
            'js': build_js(s, l),
        }
        (OUT / f'assets/app.{l}.js').write_text(meta[l]['js'], encoding='utf-8')

    civpages = set(re.findall(r'page:"([a-z-]+)"', meta['fr']['js']))
    urls = []

    def path_of(l, pid):
        return f'/{l}/' if pid == 'accueil' else f'/{l}/{pid}/'

    for l, _, loc in avail:
        m = meta[l]
        for pid, body in secs[l].items():
            path = path_of(l, pid)
            urls.append(path)
            b = body.replace('href="#accueil"', f'href="/{l}/"')
            b = re.sub(r'href="#([a-z-]+)"', lambda mm: f'href="/{l}/{mm.group(1)}/"', b)
            h1 = plain(re.search(r'<h1>(.*?)</h1>', b, re.S).group(1))
            lead = re.search(r'<p class="lead">(.*?)</p>', b, re.S)
            desc = plain(lead.group(1)) if lead else h1
            if len(desc) > 158:
                desc = desc[:155].rsplit(' ', 1)[0] + '…'
            title = f'{m["brand"]} · {h1}' if pid == 'accueil' else f'{h1} · {m["brand"]}'
            navkey = 'civilisations' if pid in civpages else ('' if pid == 'accueil' else pid)
            nav = ''.join(
                f'<a href="/{l}/{k + "/" if k and k != "accueil" else ""}"'
                f'{" aria-current=\"page\"" if (k if k != "accueil" else "") == navkey else ""}>{t}</a>'
                for k, t in m['nav'])
            alts = [(ol, path_of(ol, pid)) for ol, _, _ in avail if pid in secs[ol]]
            hreflang = ''.join(f'<link rel="alternate" hreflang="{HTML_LANG.get(ol, ol)}" href="{BASE}{p}">\n' for ol, p in alts)
            xdef = path_of('en' if any(ol == 'en' for ol, _ in alts) else 'fr', pid)
            hreflang += f'<link rel="alternate" hreflang="x-default" href="{BASE}{xdef}">\n'
            switch = ''.join(
                f'<a href="{p}" lang="{HTML_LANG.get(ol, ol)}"{" aria-current=\"true\"" if ol == l else ""}>{lab}</a>'
                for (ol, p), (_, lab, _) in zip(alts, [x for x in avail if pid in secs[x[0]]]))
            html = f'''<!DOCTYPE html>
<html lang="{HTML_LANG.get(l, l)}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="{BASE}{path}">
{hreflang}<meta property="og:title" content="{esc(title)}">
<meta property="og:description" content="{esc(desc)}">
<meta property="og:url" content="{BASE}{path}">
<meta property="og:type" content="website">
<meta property="og:locale" content="{loc}">
<meta property="og:site_name" content="Slavery Atlas">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/site.css">
</head>
<body>
<header class="top"><div class="wrap"><a class="brand" href="/{l}/">{m["brand"]}</a><nav class="main" aria-label="{esc(m["navlabel"])}">{nav}</nav><nav class="langs" aria-label="Language">{switch}</nav></div></header>
<main><section class="view">{b}</section></main>
{m["footer"]}
<script src="/assets/app.{l}.js"></script>
</body>
</html>'''
            d = OUT / path.strip('/')
            d.mkdir(parents=True, exist_ok=True)
            (d / 'index.html').write_text(html, encoding='utf-8')

    default = 'en' if sources['en'] else 'fr'
    (OUT / 'index.html').write_text(
        f'<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/{default}/">'
        f'<link rel="canonical" href="{BASE}/{default}/"><title>Slavery Atlas</title></head>'
        f'<body><a href="/{default}/">Slavery Atlas</a></body></html>', encoding='utf-8')
    home = (OUT / default / 'index.html').read_text(encoding='utf-8')
    (OUT / '404.html').write_text(re.sub(r'<main>.*?</main>', '<main><div class="wrap"><p class="lead">404 · <a href="/">Slavery Atlas</a></p></div></main>', home, flags=re.S), encoding='utf-8')
    (OUT / 'robots.txt').write_text(f'User-agent: *\nAllow: /\nSitemap: {BASE}/sitemap.xml\n')
    (OUT / 'sitemap.xml').write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + ''.join(f'<url><loc>{BASE}{u}</loc></url>\n' for u in urls) + '</urlset>\n', encoding='utf-8')
    print(f'{len(urls)} pages, langues : {", ".join(l for l, _, _ in avail)}')


if __name__ == '__main__':
    main()

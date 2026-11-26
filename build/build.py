"""Construit le site statique multilingue dans dist/.

Sources : src/prototype.html (français, langue de référence) et
src/i18n/<lang>.html (copies traduites, même structure). Chaque langue
disponible produit /<lang>/<page>/index.html, avec hreflang croisés.
"""
import re, os, shutil, pathlib, sys, json, datetime
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import map_i18n, consent_i18n, contact_i18n, about_i18n
TODAY = datetime.date.today()

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
    ('th', 'ไทย', 'th_TH'),
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
    # Chiffre clé (volume ou part de la population) sous le nom, dans les cartes.
    addvol = 'const v=document.createElement("span");v.className="vol";v.textContent=VOLTXT;a.insertBefore(v,a.querySelector(".soon"));'
    js = js.replace('a.querySelector("strong").textContent=r.name;',
                    'a.querySelector("strong").textContent=r.name;' + addvol.replace('VOLTXT', 'r.vol'), 1)
    js = js.replace('a.querySelector("strong").textContent=same.map(x=>x.name).join(", ");',
                    'a.querySelector("strong").textContent=same.map(x=>x.name).join(", ");' + addvol.replace('VOLTXT', 'same.map(x=>x.vol).join(" · ")'), 1)
    js += '''
const $=id=>document.getElementById(id);
if($("frise")) buildFrise();
if($("cards")) buildCards();
if($("civgroups")) buildCivGroups();
if($("tbody")){ initFilters(); const q=new URLSearchParams(location.search).get("q"); if(q) $("f-q").value=q; render(); }
'''
    return js


SKIP = {'fr': 'Aller au contenu', 'en': 'Skip to content', 'es': 'Ir al contenido', 'de': 'Zum Inhalt springen',
        'zh': '跳到正文', 'ru': 'Перейти к содержанию', 'th': 'ข้ามไปยังเนื้อหา'}
SEPS = [' : ', ': ', ' — ', ' – ', ', ', '：', '，']


def short_title(h1, brand, l, pid):
    """Titre ≤ 65 caractères : « h1 · marque », sinon h1 seul, sinon h1 coupé au premier séparateur."""
    for t in (f'{h1} · {brand}', h1):
        if len(t) <= 65:
            return t
    for sep in SEPS:
        if sep in h1 and len(h1.split(sep)[0]) >= 12:
            head = h1.split(sep)[0].strip()
            return f'{head} · {brand}' if len(head) + len(brand) + 3 <= 65 else head
    return SHORT.get((l, pid)) or h1[:62].rsplit(' ', 1)[0] + '…'


SHORT = {
    ('fr', 'pourquoi'): 'Pourquoi parle-t-on surtout de la traite atlantique ?',
    ('es', 'pourquoi'): '¿Por qué se habla sobre todo de la trata atlántica?',
    ('de', 'pourquoi'): 'Warum vor allem der transatlantische Sklavenhandel?',
    ('ru', 'pourquoi'): 'Почему говорят в основном об атлантической работорговле?',
    ('en', 'pourquoi'): 'Why do we mostly talk about the Atlantic slave trade?',
    ('fr', 'debat'): 'Le débat mémoriel sur la traite atlantique',
    ('es', 'debat'): 'El debate sobre la memoria de la trata atlántica',
    ('de', 'debat'): 'Die Erinnerungsdebatte um den Sklavenhandel',
    ('ru', 'debat'): 'Споры о памяти трансатлантической работорговли',
    ('en', 'debat'): 'The memory debate over the Atlantic slave trade',
}


def jsonld(l, pid, path, h1, desc, m, civpages, secs, body):
    lang = HTML_LANG.get(l, l)
    site = {'@type': 'WebSite', '@id': f'{BASE}/#website', 'name': 'Slavery Atlas', 'url': f'{BASE}/',
            'alternateName': m['brand']}
    org = {'@type': 'Organization', '@id': f'{BASE}/#org', 'name': 'Slavery Atlas', 'url': f'{BASE}/',
           **({'logo': f'{BASE}/assets/icon-512.png'} if (ROOT / 'src/static/icon-512.png').exists() else {})}
    if pid == 'accueil':
        page = dict(site, inLanguage=lang, description=desc, publisher={'@id': f'{BASE}/#org'})
        return json.dumps({'@context': 'https://schema.org', '@graph': [page, org]}, ensure_ascii=False).replace('</', '<\\/')
    typ = {'a-propos': 'AboutPage', 'contact': 'ContactPage'}.get(pid, 'Article')
    crumbs = [(m['brand'], f'{BASE}/{l}/')]
    if pid in civpages and 'civilisations' in secs[l]:
        cv = re.search(r'<h1>(.*?)</h1>', secs[l]['civilisations'], re.S)
        crumbs.append((plain(cv.group(1)) if cv else 'Civilisations', f'{BASE}/{l}/civilisations/'))
    crumbs.append((h1, f'{BASE}{path}'))
    page = {'@type': typ, '@id': f'{BASE}{path}#page', 'url': f'{BASE}{path}', 'inLanguage': lang,
            'description': desc, 'dateModified': TODAY.isoformat(), 'isPartOf': {'@id': f'{BASE}/#website'},
            'publisher': {'@id': f'{BASE}/#org'}}
    if typ == 'Article':
        page.update(headline=h1[:110], author={'@id': f'{BASE}/#org'})
        if (ROOT / f'src/static/og/{l}.png').exists():
            page['image'] = f'{BASE}/assets/og/{l}.png'
        refs = [plain(x) for x in re.findall(r'<li>(.*?)</li>', body.split('class="src', 1)[1], re.S)][:12] if 'class="src' in body else []
        if refs:
            page['citation'] = refs
    else:
        page['name'] = h1
    graph = [page, {'@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': u} for i, (n, u) in enumerate(crumbs)]}, site, org]
    if pid == 'comparer':
        graph.append({'@type': 'Dataset', 'name': h1, 'description': desc if len(desc) >= 50 else desc + ' — Slavery Atlas',
                      'url': f'{BASE}{path}', 'inLanguage': lang, 'creator': {'@id': f'{BASE}/#org'},
                      'temporalCoverage': '-3000/2026', 'spatialCoverage': 'World',
                      'variableMeasured': ['estimated number of enslaved people', 'period', 'region', 'heredity of status',
                                           'racial criterion', 'abolition date']})
    return json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False).replace('</', '<\\/')


def sitemap_url(u, pid, avail, secs):
    def p(ol):
        return f'/{ol}/' if pid == 'accueil' else f'/{ol}/{pid}/'
    alts = ''.join(f'<xhtml:link rel="alternate" hreflang="{HTML_LANG.get(ol, ol)}" href="{BASE}{p(ol)}"/>'
                   for ol, _, _ in avail if pid in secs[ol])
    return f'<url><loc>{BASE}{u}</loc><lastmod>{TODAY.isoformat()}</lastmod>{alts}</url>\n'


def write_llms(secs, meta, civpages):
    """llms.txt : présentation du site pour les assistants IA (anglais + français)."""
    def lines(l):
        out = []
        for pid, body in secs[l].items():
            h = re.search(r'<h1>(.*?)</h1>', body, re.S)
            ld = re.search(r'<p class="lead">(.*?)</p>', body, re.S)
            url = f'{BASE}/{l}/' if pid == 'accueil' else f'{BASE}/{l}/{pid}/'
            d = plain(ld.group(1))[:200] if ld else ''
            out.append(f'- [{plain(h.group(1)) if h else pid}]({url}){": " + d if d else ""}')
        return '\n'.join(out)
    txt = f"""# Slavery Atlas

> Comparative world history of slavery, civilisation by civilisation and era by era, from Mesopotamia to modern slavery. Each page gives orders of magnitude (as ranges where historians disagree) and cites its scholarly sources. Published in French (reference version), English, Spanish, German, Chinese, Russian and Thai. Last updated {TODAY.isoformat()}.

Figures come from preliminary documentary research and are being checked against the works cited. Debated questions (specific features of the Atlantic trade, memory debates) are presented with the arguments of the different schools.

## English pages

{lines('en')}

## Pages en français (version de référence)

{lines('fr')}

## Other languages

- Español: {BASE}/es/
- Deutsch: {BASE}/de/
- 中文: {BASE}/zh/
- Русский: {BASE}/ru/
- ไทย: {BASE}/th/
- Sitemap: {BASE}/sitemap.xml
"""
    (OUT / 'llms.txt').write_text(txt, encoding='utf-8')


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
.skip{position:absolute;left:8px;top:-60px;z-index:100;background:var(--ink);color:var(--paper);padding:8px 12px;border-radius:6px;text-decoration:none;font-weight:600}
.skip:focus{top:8px}
:lang(th){--body:"IBM Plex Sans Thai","IBM Plex Sans",system-ui,sans-serif}
:lang(th) h1,:lang(th) h2,:lang(th) h3,:lang(th) .brand{font-family:"IBM Plex Sans Thai","Source Serif 4",serif;line-height:1.35}
'''
    css += map_i18n.CSS + consent_i18n.CSS + contact_i18n.CSS
    (OUT / 'assets/site.css').write_text(css, encoding='utf-8')
    shutil.copytree(ROOT / 'src/static/vendor', OUT / 'assets/vendor')
    shutil.copy(ROOT / 'src/static/map.js', OUT / 'assets/map.js')
    shutil.copy(ROOT / 'src/static/consent.js', OUT / 'assets/consent.js')
    shutil.copy(ROOT / 'src/static/contact.js', OUT / 'assets/contact.js')
    shutil.copytree(ROOT / 'src/static/fonts', OUT / 'assets/fonts')

    # pages par langue : {lang: {pid: body}}
    secs, meta = {}, {}
    for l, _, _ in avail:
        s = sources[l]
        secs[l] = dict(re.findall(r'<section class="view" id="v-([a-z-]+)">(.*?)</section>', s, re.S))
        if l in contact_i18n.C:
            secs[l]['contact'] = contact_i18n.body(l)
        if l in about_i18n.A:
            secs[l]['a-propos'] = about_i18n.body(l, TODAY, contact_i18n.C[l]['link'])
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
            urls.append((path, pid))
            b = body.replace('href="#accueil"', f'href="/{l}/"')
            extra_js = contact_i18n.script(l) if pid == 'contact' else ''
            if pid == 'accueil' and '<div class="frise"' in b:
                i = b.rfind('<div class="stack">', 0, b.index('<div class="frise"'))
                b = b[:i] + map_i18n.block(l) + b[i:]
                extra_js = (map_i18n.script(l) + '\n<script src="/assets/vendor/d3-array.min.js"></script>'
                            '\n<script src="/assets/vendor/d3-geo.min.js"></script>'
                            '\n<script src="/assets/vendor/topojson-client.min.js"></script>'
                            '\n<script src="/assets/map.js"></script>')
            b = re.sub(r'href="#([a-z-]+)"', lambda mm: f'href="/{l}/{mm.group(1)}/"', b)
            h1 = plain(re.search(r'<h1>(.*?)</h1>', b, re.S).group(1))
            lead = re.search(r'<p class="lead">(.*?)</p>', b, re.S)
            desc = plain(lead.group(1)) if lead else h1
            if len(desc) > 158:
                desc = desc[:155].rsplit(' ', 1)[0] + '…'
            title = f'{m["brand"]} · {h1}' if pid == 'accueil' else short_title(h1, m["brand"], l, pid)
            ld = jsonld(l, pid, path, h1, desc, m, civpages, secs, b)
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
<meta property="article:modified_time" content="{TODAY.isoformat()}">
<link rel="preload" href="/assets/fonts/ibm-plex-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts/fonts.css">{'<link rel="stylesheet" href="/assets/fonts/fonts-thai.css">' if l == 'th' else ''}
<link rel="stylesheet" href="/assets/site.css">
<script type="application/ld+json">{ld}</script>
</head>
<body>
<a class="skip" href="#main">{SKIP.get(l, 'Skip to content')}</a>
<header class="top"><div class="wrap"><a class="brand" href="/{l}/">{m["brand"]}</a><nav class="main" aria-label="{esc(m["navlabel"])}">{nav}</nav><nav class="langs" aria-label="Language">{switch}</nav></div></header>
<main id="main" tabindex="-1"><section class="view">{b}</section></main>
{m["footer"].replace("</div></footer>", contact_i18n.footer_link(l) + about_i18n.footer_bits(l, TODAY) + consent_i18n.footer_link(l) + "</div></footer>")}
<script src="/assets/app.{l}.js"></script>
{consent_i18n.script(l)}
{extra_js}
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
        + ''.join(sitemap_url(u, pid, avail, secs) for u, pid in urls) + '</urlset>\n', encoding='utf-8')
    (OUT / 'sitemap.xml').write_text((OUT / 'sitemap.xml').read_text(encoding='utf-8').replace(
        'sitemaps.org/schemas/sitemap/0.9">', 'sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">', 1), encoding='utf-8')
    write_llms(secs, meta, civpages)
    print(f'{len(urls)} pages, langues : {", ".join(l for l, _, _ in avail)}')


if __name__ == '__main__':
    main()

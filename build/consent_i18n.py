import json
C = {
 'fr': dict(text="Ce site utilise Google Analytics pour mesurer son audience. Acceptez-vous les cookies de mesure ?", accept="Accepter", decline="Refuser", link="Cookies"),
 'en': dict(text="This site uses Google Analytics to measure its audience. Do you accept analytics cookies?", accept="Accept", decline="Decline", link="Cookies"),
 'es': dict(text="Este sitio utiliza Google Analytics para medir su audiencia. ¿Acepta las cookies de medición?", accept="Aceptar", decline="Rechazar", link="Cookies"),
 'de': dict(text="Diese Website nutzt Google Analytics zur Reichweitenmessung. Akzeptieren Sie Analyse-Cookies?", accept="Akzeptieren", decline="Ablehnen", link="Cookies"),
 'zh': dict(text="本网站使用 Google Analytics 统计访问量。您是否接受统计 Cookie？", accept="接受", decline="拒绝", link="Cookie 设置"),
 'th': dict(text="เว็บไซต์นี้ใช้ Google Analytics เพื่อวัดจำนวนผู้เข้าชม คุณยอมรับคุกกี้สำหรับการวิเคราะห์หรือไม่", accept="ยอมรับ", decline="ปฏิเสธ", link="คุกกี้"),
 'ru': dict(text="Этот сайт использует Google Analytics для измерения посещаемости. Вы принимаете аналитические файлы cookie?", accept="Принять", decline="Отклонить", link="Файлы cookie"),
}
def script(lang):
    c = C.get(lang, C['en'])
    return f'<script>window.CONSENT_T={json.dumps({k: c[k] for k in ("text","accept","decline")}, ensure_ascii=False)};</script>\n<script src="/assets/consent.js" defer></script>'
def footer_link(lang):
    c = C.get(lang, C['en'])
    return f' · <a href="#" data-consent-reset>{c["link"]}</a>'
CSS = '''
#consent{position:fixed;left:16px;right:16px;bottom:16px;z-index:50;max-width:640px;margin:0 auto;background:var(--panel);color:var(--ink);border:1px solid var(--rule);border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.18);padding:14px 16px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;font-size:.9rem}
#consent p{margin:0;flex:1 1 280px}
#consent div{display:flex;gap:8px}
#consent button{font:inherit;padding:7px 14px;border-radius:6px;border:1px solid var(--rule);background:transparent;color:var(--ink);cursor:pointer}
#consent button.yes{background:var(--accent);border-color:var(--accent);color:var(--panel);font-weight:600}
'''

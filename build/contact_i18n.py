"""Page Contact (6 langues) : formulaire envoyé à /api/contact (Worker), protégé par Turnstile."""
import json
SITEKEY = "0x4AAAAAAGQAatKyFXCKCX-A"
C = {
 'fr': dict(title="Contact", eyebrow="Écrire à l'équipe", lead="Une remarque, une correction, une source à proposer ? Écrivez-nous ; nous lisons chaque message.", name="Nom", email="E-mail", subject="Objet", message="Message", send="Envoyer", sending="Envoi…", ok="Merci, votre message a bien été envoyé.", err="L'envoi a échoué. Réessayez dans un instant.", privacy="Vos coordonnées servent uniquement à vous répondre et ne sont pas conservées sur le site.", ts="fr", link="Contact"),
 'en': dict(title="Contact", eyebrow="Write to the team", lead="A comment, a correction, a source to suggest? Write to us; we read every message.", name="Name", email="Email", subject="Subject", message="Message", send="Send", sending="Sending…", ok="Thank you, your message has been sent.", err="Sending failed. Please try again in a moment.", privacy="Your details are used only to reply to you and are not stored on the site.", ts="en", link="Contact"),
 'es': dict(title="Contacto", eyebrow="Escribir al equipo", lead="¿Un comentario, una corrección, una fuente que proponer? Escríbanos; leemos todos los mensajes.", name="Nombre", email="Correo electrónico", subject="Asunto", message="Mensaje", send="Enviar", sending="Enviando…", ok="Gracias, su mensaje se ha enviado.", err="El envío ha fallado. Inténtelo de nuevo en un momento.", privacy="Sus datos solo se usan para responderle y no se guardan en el sitio.", ts="es", link="Contacto"),
 'de': dict(title="Kontakt", eyebrow="An das Team schreiben", lead="Eine Anmerkung, eine Korrektur, eine Quelle als Vorschlag? Schreiben Sie uns; wir lesen jede Nachricht.", name="Name", email="E-Mail", subject="Betreff", message="Nachricht", send="Senden", sending="Wird gesendet…", ok="Danke, Ihre Nachricht wurde gesendet.", err="Das Senden ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.", privacy="Ihre Angaben dienen nur der Antwort und werden nicht auf der Website gespeichert.", ts="de", link="Kontakt"),
 'zh': dict(title="联系我们", eyebrow="给团队留言", lead="有意见、更正或想推荐的资料来源？请给我们留言，我们会阅读每一条消息。", name="姓名", email="电子邮箱", subject="主题", message="留言", send="发送", sending="正在发送…", ok="谢谢，您的消息已发送。", err="发送失败，请稍后再试。", privacy="您的信息仅用于回复您，不会保存在本网站上。", ts="zh-cn", link="联系我们"),
 'th': dict(title="ติดต่อเรา", eyebrow="เขียนถึงทีมงาน", lead="มีข้อคิดเห็น ข้อแก้ไข หรือแหล่งข้อมูลที่อยากแนะนำหรือไม่ เขียนถึงเราได้ เราอ่านทุกข้อความ", name="ชื่อ", email="อีเมล", subject="หัวข้อ", message="ข้อความ", send="ส่ง", sending="กำลังส่ง…", ok="ขอบคุณ ข้อความของคุณถูกส่งแล้ว", err="ส่งไม่สำเร็จ โปรดลองอีกครั้งในอีกสักครู่", privacy="ข้อมูลของคุณใช้เพื่อตอบกลับเท่านั้น และไม่ได้จัดเก็บไว้บนเว็บไซต์", ts="th", link="ติดต่อเรา"),
 'ru': dict(title="Контакты", eyebrow="Написать команде", lead="Замечание, исправление, источник, который стоит добавить? Напишите нам — мы читаем каждое сообщение.", name="Имя", email="Эл. почта", subject="Тема", message="Сообщение", send="Отправить", sending="Отправка…", ok="Спасибо, ваше сообщение отправлено.", err="Не удалось отправить. Попробуйте ещё раз чуть позже.", privacy="Ваши данные используются только для ответа и не хранятся на сайте.", ts="ru", link="Контакты"),
}

def body(lang):
    c = C[lang]
    return f'''<div class="wrap stack-lg"><div class="stack read"><span class="eyebrow">{c["eyebrow"]}</span><h1>{c["title"]}</h1><p class="lead">{c["lead"]}</p></div>
<form class="contact-form read" id="contact-form" data-lang="{lang}" novalidate>
  <div class="row2"><label for="cf-name">{c["name"]}<input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120"></label>
  <label for="cf-email">{c["email"]}<input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="200"></label></div>
  <label for="cf-subject">{c["subject"]}<input id="cf-subject" name="subject" type="text" required maxlength="200"></label>
  <label for="cf-message">{c["message"]}<textarea id="cf-message" name="message" rows="8" required maxlength="5000"></textarea></label>
  <label class="hp" aria-hidden="true">Website<input name="website" type="text" tabindex="-1" autocomplete="off"></label>
  <div class="cf-turnstile" data-sitekey="{SITEKEY}" data-language="{c["ts"]}"></div>
  <p class="muted small">{c["privacy"]}</p>
  <div><button type="submit" class="btn-send">{c["send"]}</button></div>
  <p class="cf-status" role="status" aria-live="polite"></p>
</form></div>'''

def script(lang):
    c = C[lang]
    t = {k: c[k] for k in ("send", "sending", "ok", "err")}
    return (f'<script>window.CONTACT_T={json.dumps(t, ensure_ascii=False)};</script>\n'
            '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>\n'
            '<script src="/assets/contact.js" defer></script>')

def footer_link(lang):
    return f' · <a href="/{lang}/contact/">{C[lang]["link"]}</a>'

CSS = '''
.contact-form{display:flex;flex-direction:column;gap:14px;background:var(--panel);border:1px solid var(--rule);border-radius:8px;padding:20px}
.contact-form label{display:flex;flex-direction:column;gap:5px;font-size:.88rem;font-weight:500;color:var(--muted)}
.contact-form input,.contact-form textarea{font:inherit;font-size:1rem;color:var(--ink);background:var(--paper);border:1px solid var(--rule);border-radius:6px;padding:9px 11px}
.contact-form textarea{resize:vertical;min-height:140px}
.contact-form .row2{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
.contact-form .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
.contact-form .small{font-size:.82rem}
.btn-send{font:inherit;font-weight:600;padding:10px 20px;border-radius:6px;border:0;background:var(--accent);color:var(--panel);cursor:pointer}
.btn-send:disabled{opacity:.6;cursor:default}
.cf-status{margin:0;font-weight:500}
.cf-status.ok{color:var(--accent)}
.cf-status.err{color:var(--warn)}
'''

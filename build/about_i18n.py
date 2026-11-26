"""Page « À propos », mention de mise à jour et dates, dans les 7 langues."""
import datetime

MONTHS = {
    'fr': 'janvier février mars avril mai juin juillet août septembre octobre novembre décembre'.split(),
    'en': 'January February March April May June July August September October November December'.split(),
    'es': 'enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre'.split(),
    'de': 'Januar Februar März April Mai Juni Juli August September Oktober November Dezember'.split(),
    'ru': 'января февраля марта апреля мая июня июля августа сентября октября ноября декабря'.split(),
    'th': 'มกราคม กุมภาพันธ์ มีนาคม เมษายน พฤษภาคม มิถุนายน กรกฎาคม สิงหาคม กันยายน ตุลาคม พฤศจิกายน ธันวาคม'.split(),
}


def fmt_date(d, l):
    if l == 'zh':
        return f'{d.year}年{d.month}月{d.day}日'
    m = MONTHS[l][d.month - 1]
    return {
        'fr': f'{d.day} {m} {d.year}',
        'en': f'{d.day} {m} {d.year}',
        'es': f'{d.day} de {m} de {d.year}',
        'de': f'{d.day}. {m} {d.year}',
        'ru': f'{d.day} {m} {d.year} г.',
        'th': f'{d.day} {m} {d.year + 543}',
    }[l]


A = {
 'fr': dict(link="À propos", updated="Mis à jour le", title="À propos", eyebrow="Le projet",
   lead="Slavery Atlas compare les systèmes esclavagistes de l'histoire, de la Mésopotamie à nos jours, civilisation par civilisation, avec leurs ordres de grandeur et leurs sources.",
   h=["Pourquoi ce site", "Méthode", "Statut des chiffres", "Langues et mises à jour"],
   p=["L'esclavage a existé sur tous les continents et à presque toutes les époques. Le débat public se concentre souvent sur la traite atlantique : ce site la replace parmi les autres systèmes, sans en minimiser la gravité ni les spécificités, pour permettre une comparaison fondée sur les faits.",
      "Chaque page cite ses sources savantes. Les volumes sont donnés en fourchettes quand les historiens divergent, et les points de débat sont présentés avec les arguments des différentes écoles. Le détail figure dans la page {methode}.",
      "Les chiffres proviennent d'une recherche documentaire préliminaire et sont en cours de vérification dans les ouvrages cités. Une erreur, une source à proposer ? Écrivez-nous via la page {contact}.",
      "Le site est publié en sept langues ; la version française fait référence. Dernière mise à jour : {date}."],
   methode="Méthode et sources"),
 'en': dict(link="About", updated="Updated", title="About", eyebrow="The project",
   lead="Slavery Atlas compares the slave systems of history, from Mesopotamia to the present day, civilisation by civilisation, with their orders of magnitude and their sources.",
   h=["Why this site", "Method", "Status of the figures", "Languages and updates"],
   p=["Slavery existed on every continent and in almost every era. Public debate often focuses on the transatlantic slave trade: this site places it among the other systems, without downplaying its gravity or its specific features, so that a fact-based comparison is possible.",
      "Every page cites its scholarly sources. Volumes are given as ranges where historians disagree, and debated points are presented with the arguments of the different schools. Details are on the {methode} page.",
      "The figures come from preliminary documentary research and are being checked against the works cited. Spotted an error, or have a source to suggest? Write to us via the {contact} page.",
      "The site is published in seven languages; the French version is the reference. Last updated: {date}."],
   methode="Method and sources"),
 'es': dict(link="Acerca de", updated="Actualizado el", title="Acerca de", eyebrow="El proyecto",
   lead="Slavery Atlas compara los sistemas esclavistas de la historia, de Mesopotamia a nuestros días, civilización por civilización, con sus órdenes de magnitud y sus fuentes.",
   h=["Por qué este sitio", "Método", "Estado de las cifras", "Idiomas y actualizaciones"],
   p=["La esclavitud existió en todos los continentes y en casi todas las épocas. El debate público suele centrarse en la trata atlántica: este sitio la sitúa entre los demás sistemas, sin minimizar su gravedad ni sus particularidades, para permitir una comparación basada en los hechos.",
      "Cada página cita sus fuentes académicas. Los volúmenes se dan en horquillas cuando los historiadores discrepan, y los puntos de debate se presentan con los argumentos de las distintas escuelas. El detalle está en la página {methode}.",
      "Las cifras proceden de una investigación documental preliminar y se están verificando en las obras citadas. ¿Un error, una fuente que proponer? Escríbanos desde la página {contact}.",
      "El sitio se publica en siete idiomas; la versión francesa es la de referencia. Última actualización: {date}."],
   methode="Método y fuentes"),
 'de': dict(link="Über uns", updated="Aktualisiert am", title="Über das Projekt", eyebrow="Das Projekt",
   lead="Slavery Atlas vergleicht die Sklavereisysteme der Geschichte, von Mesopotamien bis heute, Zivilisation für Zivilisation, mit ihren Größenordnungen und Quellen.",
   h=["Warum diese Website", "Methode", "Stand der Zahlen", "Sprachen und Aktualisierungen"],
   p=["Sklaverei gab es auf allen Kontinenten und in fast allen Epochen. Die öffentliche Debatte konzentriert sich oft auf den transatlantischen Sklavenhandel: Diese Website stellt ihn neben die anderen Systeme, ohne seine Schwere oder seine Besonderheiten zu verharmlosen, um einen faktenbasierten Vergleich zu ermöglichen.",
      "Jede Seite nennt ihre wissenschaftlichen Quellen. Zahlen werden als Spannen angegeben, wo Historiker uneins sind, und strittige Punkte werden mit den Argumenten der verschiedenen Schulen dargestellt. Einzelheiten auf der Seite {methode}.",
      "Die Zahlen stammen aus einer vorläufigen Literaturrecherche und werden anhand der zitierten Werke überprüft. Ein Fehler, eine Quelle als Vorschlag? Schreiben Sie uns über die Seite {contact}.",
      "Die Website erscheint in sieben Sprachen; maßgeblich ist die französische Fassung. Letzte Aktualisierung: {date}."],
   methode="Methode und Quellen"),
 'zh': dict(link="关于", updated="更新于", title="关于本站", eyebrow="项目介绍",
   lead="Slavery Atlas（奴隶制图谱）按文明逐一比较历史上的奴隶制体系，从美索不达米亚直到今天，并给出数量级与资料来源。",
   h=["为何建立本站", "方法", "数据现状", "语言与更新"],
   p=["奴隶制存在于每一个大陆、几乎每一个时代。公共讨论往往集中于大西洋奴隶贸易：本站将其置于其他体系之中加以比较，既不淡化其严重性，也不忽视其特殊性，以便进行基于事实的比较。",
      "每个页面都注明学术来源。在史学家意见不一时，数量以区间表示；有争议的问题会列出不同学派的论点。详见{methode}页面。",
      "这些数字来自初步的文献研究，目前正在依据所引著作进行核实。发现错误或想推荐资料？请通过{contact}页面联系我们。",
      "本站以七种语言发布，以法文版为准。最近更新：{date}。"],
   methode="方法与来源"),
 'ru': dict(link="О проекте", updated="Обновлено", title="О проекте", eyebrow="Проект",
   lead="Slavery Atlas сравнивает рабовладельческие системы истории — от Месопотамии до наших дней, цивилизацию за цивилизацией, с порядками величин и источниками.",
   h=["Зачем этот сайт", "Метод", "Статус цифр", "Языки и обновления"],
   p=["Рабство существовало на всех континентах и почти во все эпохи. Общественная дискуссия часто сосредоточена на трансатлантической работорговле: этот сайт ставит её в ряд других систем, не преуменьшая её тяжести и особенностей, чтобы сравнение опиралось на факты.",
      "Каждая страница указывает научные источники. Там, где историки расходятся, объёмы даны в виде диапазонов, а спорные вопросы изложены с аргументами разных школ. Подробности — на странице {methode}.",
      "Цифры получены в ходе предварительного изучения литературы и сейчас проверяются по цитируемым трудам. Нашли ошибку или хотите предложить источник? Напишите нам через страницу {contact}.",
      "Сайт публикуется на семи языках; эталонной считается французская версия. Последнее обновление: {date}."],
   methode="Метод и источники"),
 'th': dict(link="เกี่ยวกับเรา", updated="ปรับปรุงเมื่อ", title="เกี่ยวกับเว็บไซต์", eyebrow="โครงการ",
   lead="Slavery Atlas เปรียบเทียบระบบทาสในประวัติศาสตร์ ตั้งแต่เมโสโปเตเมียจนถึงปัจจุบัน ทีละอารยธรรม พร้อมขนาดโดยประมาณและแหล่งที่มา",
   h=["ทำไมจึงมีเว็บไซต์นี้", "วิธีการ", "สถานะของตัวเลข", "ภาษาและการปรับปรุง"],
   p=["ระบบทาสเคยมีอยู่ในทุกทวีปและแทบทุกยุคสมัย การถกเถียงในสังคมมักมุ่งไปที่การค้าทาสข้ามมหาสมุทรแอตแลนติก เว็บไซต์นี้จึงนำมาวางเทียบกับระบบอื่น ๆ โดยไม่ลดทอนความร้ายแรงหรือลักษณะเฉพาะของมัน เพื่อให้เปรียบเทียบกันได้บนพื้นฐานของข้อเท็จจริง",
      "ทุกหน้าระบุแหล่งอ้างอิงทางวิชาการ ตัวเลขแสดงเป็นช่วงเมื่อนักประวัติศาสตร์เห็นต่างกัน และประเด็นที่ยังถกเถียงจะนำเสนอพร้อมข้อโต้แย้งของแต่ละสำนัก รายละเอียดอยู่ในหน้า{methode}",
      "ตัวเลขมาจากการค้นคว้าเอกสารเบื้องต้น และกำลังตรวจสอบกับงานที่อ้างอิง พบข้อผิดพลาดหรืออยากแนะนำแหล่งข้อมูล? เขียนถึงเราได้ที่หน้า{contact}",
      "เว็บไซต์เผยแพร่เป็นเจ็ดภาษา โดยยึดฉบับภาษาฝรั่งเศสเป็นหลัก ปรับปรุงล่าสุด: {date}"],
   methode="วิธีการและแหล่งที่มา"),
}


def body(l, date, contact_label):
    a = A[l]
    lk = lambda pid, t: f'<a href="/{l}/{pid}/">{t}</a>'
    parts = ''.join(
        f'<h2>{h}</h2><p>{p.format(methode=lk("methode", a["methode"]), contact=lk("contact", contact_label), date=fmt_date(date, l))}</p>'
        for h, p in zip(a['h'], a['p']))
    return (f'<div class="wrap stack-lg"><div class="stack read"><span class="eyebrow">{a["eyebrow"]}</span><h1>{a["title"]}</h1>'
            f'<p class="lead">{a["lead"]}</p>{parts}</div></div>')


def footer_bits(l, date):
    a = A[l]
    return f' · <a href="/{l}/a-propos/">{a["link"]}</a> · {a["updated"]} {fmt_date(date, l)}'

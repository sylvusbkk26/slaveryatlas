import { EmailMessage } from "cloudflare:email";

const LANGS = ["fr", "en", "es", "de", "zh", "ru", "th"];
const DEFAULT = "en";
const FROM = "contact@slaveryatlas.org";

function pickLang(header) {
  for (const part of (header || "").split(",")) {
    const code = part.split(";")[0].trim().toLowerCase().slice(0, 2);
    if (LANGS.includes(code)) return code;
  }
  return DEFAULT;
}

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

// Encodage base64 UTF-8, découpé en lignes de 76 caractères (RFC 2045).
function b64(str) {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}
const wrap76 = s => s.replace(/(.{76})/g, "$1\r\n");
const oneLine = s => String(s || "").replace(/[\r\n]+/g, " ").trim();

async function handleContact(request, env) {
  if (request.method !== "POST") return json({ ok: false }, 405);
  const origin = request.headers.get("origin") || "";
  if (origin && !/^https:\/\/(www\.)?slaveryatlas\.org$/.test(origin)) return json({ ok: false }, 403);
  let d;
  try { d = await request.json(); } catch { return json({ ok: false, error: "bad_json" }, 400); }

  if (d.website) return json({ ok: true }); // pot de miel : robot, on ignore en silence
  const name = oneLine(d.name).slice(0, 120);
  const email = oneLine(d.email).slice(0, 200);
  const subject = oneLine(d.subject).slice(0, 200);
  const message = String(d.message || "").slice(0, 5000).trim();
  const lang = LANGS.includes(d.lang) ? d.lang : "?";
  if (!name || !subject || !message || !/^[^\s@<>()",;]+@[^\s@<>()",;]+\.[^\s@<>()",;]+$/.test(email)) {
    return json({ ok: false, error: "invalid" }, 400);
  }

  // Vérification Turnstile (anti-spam).
  const form = new FormData();
  form.append("secret", env.TURNSTILE_SECRET);
  form.append("response", String(d["cf-turnstile-response"] || ""));
  form.append("remoteip", request.headers.get("cf-connecting-ip") || "");
  const ts = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body: form })
    .then(r => r.json()).catch(() => ({ success: false }));
  if (!ts.success) return json({ ok: false, error: "captcha" }, 400);

  const to = env.CONTACT_TO;
  const body = `Nouveau message depuis le formulaire de slaveryatlas.org\r\n\r\n` +
    `Nom : ${name}\r\nE-mail : ${email}\r\nLangue du site : ${lang}\r\nObjet : ${subject}\r\n\r\n${message}\r\n`;
  const raw = [
    `From: "Slavery Atlas" <${FROM}>`,
    `To: <${to}>`,
    `Reply-To: ${JSON.stringify(name)} <${email}>`,
    `Subject: =?UTF-8?B?${b64("[slaveryatlas.org] " + subject)}?=`,
    `Message-ID: <${crypto.randomUUID()}@slaveryatlas.org>`,
    `Date: ${new Date().toUTCString()}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    wrap76(b64(body)),
  ].join("\r\n");

  try {
    await env.CONTACT.send(new EmailMessage(FROM, to, raw));
  } catch (e) {
    console.error("send_email failed", String(e));
    return json({ ok: false, error: "send" }, 502);
  }
  return json({ ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.slaveryatlas.org") {
      url.hostname = "slaveryatlas.org";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/api/contact") return handleContact(request, env);
    if (url.pathname === "/") {
      const lang = pickLang(request.headers.get("accept-language"));
      // Langue pas encore publiée : retomber sur le français.
      const probe = await env.ASSETS.fetch(new Request(url.origin + "/" + lang + "/"));
      const target = probe.ok ? lang : "fr";
      return new Response(null, { status: 302, headers: { location: "/" + target + "/", vary: "Accept-Language" } });
    }
    return env.ASSETS.fetch(request);
  }
};

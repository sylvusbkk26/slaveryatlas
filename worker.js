const LANGS = ["fr", "en", "es", "de", "zh", "ru"];
const DEFAULT = "en";

function pickLang(header) {
  for (const part of (header || "").split(",")) {
    const code = part.split(";")[0].trim().toLowerCase().slice(0, 2);
    if (LANGS.includes(code)) return code;
  }
  return DEFAULT;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.slaveryatlas.org") {
      url.hostname = "slaveryatlas.org";
      return Response.redirect(url.toString(), 301);
    }
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

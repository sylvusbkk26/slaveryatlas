export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.slaveryatlas.org") {
      url.hostname = "slaveryatlas.org";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/") return Response.redirect(url.origin + "/fr/", 302);
    return env.ASSETS.fetch(request);
  }
};

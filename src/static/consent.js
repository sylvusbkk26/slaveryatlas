/* Consentement + Google tag (GTM-T3T4QFVM). Rien n'est chargé tant que le visiteur n'a pas accepté. */
(function () {
  var TAG = "GTM-T3T4QFVM", KEY = "sa-consent";
  var T = window.CONSENT_T || {};
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  var loaded = false;
  function load() {
    if (loaded) return; loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied", analytics_storage: "granted" });
    gtag("js", new Date());
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtm.js?id=" + TAG;
    document.head.appendChild(s);
  }
  function banner() {
    if (document.getElementById("consent")) return;
    var d = document.createElement("div");
    d.id = "consent"; d.setAttribute("role", "dialog"); d.setAttribute("aria-live", "polite");
    d.innerHTML = '<p></p><div><button type="button" class="no"></button><button type="button" class="yes"></button></div>';
    d.querySelector("p").textContent = T.text;
    d.querySelector(".yes").textContent = T.accept;
    d.querySelector(".no").textContent = T.decline;
    d.querySelector(".yes").onclick = function () { set("yes"); d.remove(); load(); };
    d.querySelector(".no").onclick = function () { set("no"); d.remove(); };
    document.body.appendChild(d);
  }
  var c = get();
  if (c === "yes") load(); else if (c !== "no") banner();
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("[data-consent-reset]");
    if (a) { e.preventDefault(); set(""); banner(); }
  });
})();

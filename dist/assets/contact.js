(function () {
  var f = document.getElementById("contact-form");
  if (!f) return;
  var T = window.CONTACT_T, btn = f.querySelector(".btn-send"), st = f.querySelector(".cf-status");
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!f.reportValidity()) return;
    var data = Object.fromEntries(new FormData(f).entries());
    data.lang = f.dataset.lang;
    btn.disabled = true; btn.textContent = T.sending; st.textContent = ""; st.className = "cf-status";
    fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || !j.ok) throw 0; }); })
      .then(function () { f.reset(); st.textContent = T.ok; st.className = "cf-status ok"; })
      .catch(function () { st.textContent = T.err; st.className = "cf-status err"; })
      .finally(function () { btn.disabled = false; btn.textContent = T.send; if (window.turnstile) try { turnstile.reset(); } catch (x) {} });
  });
})();

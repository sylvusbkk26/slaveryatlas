# Slaveryatlas.org

Histoire comparée de l'esclavage par civilisation et par époque.

- `src/prototype.html` : source unique des pages (FR), avec les données du tableau comparatif.
- `src/gen/pages.py` : générateur des pages civilisation, abolitions, débat, aujourd'hui.
- `build/build.py` : produit le site statique multi-pages dans `dist/` (une page par URL, SEO, sitemap).
- `worker.js` + `wrangler.jsonc` : Worker Cloudflare (redirections www et racine, fichiers statiques de `dist/`).

Déploiement : Cloudflare Workers Builds, à chaque push sur `main` (`npx wrangler deploy`).
Reconstruire avant de committer : `python3 build/build.py`.

Dépôt relié à Cloudflare Workers Builds le 23/11/2026.

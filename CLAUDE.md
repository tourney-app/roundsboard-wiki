# CLAUDE.md — Roundsboard Wiki

Bilingual (EN + PL) documentation site. Stack: **Astro + Starlight**, deployed to **GitHub Pages**.

## Run locally

Uses **docker compose** — no system Node/npm needed.

```bash
docker compose up                                          # dev server on http://localhost:4321
docker compose run --rm wiki sh -c "npm run build"         # production build → dist/
```

- EN (root): `http://localhost:4321/`
- PL: `http://localhost:4321/pl/`

## Content rules

- All docs live in `src/content/docs/`.
- **English = root locale** (no URL prefix). Files go directly under `src/content/docs/`.
- **Polish = `/pl/`**. Mirror every EN file under `src/content/docs/pl/` with the **same relative path**.
  - e.g. `guide/getting-started.md` ↔ `pl/guide/getting-started.md`.
- Sidebar autogenerates from the `guide/` directory (see `astro.config.mjs`). Add sidebar
  sections there when you add new top-level content dirs.
- Home pages use `template: splash` (`index.mdx`).

## Deploy

- Repo: `tourney-app/roundsboard-wiki`. Live at <https://wiki.roundsboard.com>.
- Push to `main` triggers `.github/workflows/deploy.yml` (Astro → GitHub Pages).
- Custom domain kept via `public/CNAME` (copied to `dist/` on build).
- One-time setup: repo **Settings → Pages → Source: GitHub Actions**, and set custom domain
  `wiki.roundsboard.com` there. Plus DNS: CNAME `wiki` → `tourney-app.github.io`.

## Conventions

- Do **not** commit unless explicitly asked.

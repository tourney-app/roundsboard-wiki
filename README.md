# Roundsboard Wiki

Bilingual (English + Polish) documentation and guide for **Roundsboard**, plus general
tournament know-how — organizing, participating, handling clocks.

Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build),
deployed to GitHub Pages.

## Run locally

Requires only Docker (no system Node/npm).

```bash
docker compose up
```

Then open:

- English: <http://localhost:4321/>
- Polish: <http://localhost:4321/pl/>

Production build:

```bash
docker compose run --rm wiki sh -c "npm run build"   # output in dist/
```

## Add a bilingual page

1. Create the English page under `src/content/docs/`, e.g. `guide/clocks.md`.
2. Mirror it under `src/content/docs/pl/` with the **same relative path**, e.g. `pl/guide/clocks.md`.
3. Both appear automatically in the `guide/` sidebar section.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes
it to GitHub Pages.

**One-time setup before first deploy:**

1. Repo **Settings → Pages → Source: GitHub Actions**.
2. Set the real `site:` URL in `astro.config.mjs`.
3. Replace `OWNER` in the GitHub link in `astro.config.mjs`.

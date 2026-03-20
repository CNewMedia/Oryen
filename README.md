# ORYEN

Monorepo: `web/` (Next.js App Router) + `studio/` (Sanity).

- **Root `CNAME`**: kept for deployments that read it from the repo (e.g. GitHub Pages hostname).
- **`legacy/`**: old static HTML archived; not used by the app.

## Requirements

- Node 20+

## Setup

```bash
npm install
cp web/.env.example web/.env.local
cp studio/.env.example studio/.env
```

## Develop

```bash
npm run dev:web     # http://localhost:3000
npm run dev:studio  # http://localhost:3333
```

## Deploy

- **Web**: Vercel root directory `web/`.
- **Studio**: `cd studio && npm run deploy` (or workspace script from root).

Paths with spaces in the full repo path can cause minor Sanity CLI warnings; prefer a path without spaces for CI.

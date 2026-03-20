# ORYEN — web + Sanity

Monorepo: Next.js (App Router) + Sanity Studio at repository root (`web/`, `studio/`).

## Requirements

- Node 20+

## Setup

```bash
npm install
cp web/.env.example web/.env.local
cp studio/.env.example studio/.env
```

Fill in Sanity project ID, dataset, and tokens where indicated.

## Develop

```bash
npm run dev:web     # http://localhost:3000
npm run dev:studio  # http://localhost:3333
```

## Deploy

- **Web**: Vercel project rooted at `web/` (or monorepo with “Root Directory” = `web`).
- **Studio**: `npm run deploy --workspace=@oryen/studio` from repo root, or `cd studio && npm run deploy`.

Legacy static assets at repo root (`CNAME`, `stripinfo-doorloop-v3.html`) are unchanged.

## Note on paths

If the repository path contains spaces, some Sanity CLI tooling may emit harmless shell warnings. Using a path without spaces avoids that.

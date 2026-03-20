# ORYEN — web + Sanity

Monorepo: Next.js (App Router) + Sanity Studio.

## Requirements

- Node 20+

## Setup

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
cp apps/studio/.env.example apps/studio/.env
```

Fill in Sanity project ID, dataset, and API tokens where indicated.

## Develop

```bash
npm run dev:web     # http://localhost:3000
npm run dev:studio  # http://localhost:3333
```

## Deploy

- **Web**: Vercel project rooted at `apps/web` (or monorepo with app directory set to `apps/web`).
- **Studio**: `sanity deploy` from `apps/studio`, or host Studio separately.

Legacy static assets at repo root (`CNAME`, `stripinfo-doorloop-v3.html`) are unchanged.

## Note on paths

If the repository path contains spaces, some Sanity CLI tooling may emit harmless shell warnings. Using a path without spaces avoids that.

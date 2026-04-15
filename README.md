# ORYEN

Monorepo: **`web/`** (Next.js App Router + Tailwind) en **`studio/`** (Sanity CMS).

De **website in `web/` is opnieuw opgezet** als minimale basis — leeg canvas om verder te bouwen.

- **Root `CNAME`**: voor deployments die de hostname uit de repo lezen.

## Vereisten

- Node 20+

## Setup

```bash
npm install
cp studio/.env.example studio/.env
```

(Voor de webapp is geen `.env` verplicht tot je bv. Sanity weer koppelt.)

## Ontwikkelen

```bash
npm run dev:web     # http://localhost:3000
npm run dev:studio  # http://localhost:3333
```

## Deploy

- **Web**: Vercel met root directory `web/`.
- **Studio**: `cd studio && npm run deploy`.

Paden met spaties in het volledige pad kunnen Sanity CLI warnings geven; liever een pad zonder spaties voor CI.

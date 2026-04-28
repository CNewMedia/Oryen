/**
 * One-time cleanup: delete legacy singleton `oryen.realityCheck` (`realityCheckPage`)
 * from the dataset after removing that schema. Editorial content lives on `aanbodPage`.
 *
 * Same env as `seed-cms.ts` (NEXT_PUBLIC_SANITY_PROJECT_ID, SANITY_API_WRITE_TOKEN, …).
 *
 *   npm run delete:legacy-reality-check --workspace=@oryen/web
 */
import { config as loadEnv } from 'dotenv';
import { createClient } from '@sanity/client';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

function loadWebEnv(): void {
  const paths = [
    resolve(process.cwd(), '.env.local'),
    resolve(process.cwd(), '.env'),
    resolve(process.cwd(), 'web/.env.local'),
    resolve(process.cwd(), 'web/.env'),
  ];
  for (const p of paths) {
    if (existsSync(p)) loadEnv({ path: p });
  }
}

loadWebEnv();

const LEGACY_ID = 'oryen.realityCheck';

async function main(): Promise<void> {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
  const dataset =
    process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production';
  const token = process.env.SANITY_API_WRITE_TOKEN?.trim();

  if (!projectId) {
    console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID.');
    process.exit(1);
  }
  if (!token) {
    console.error('Missing SANITY_API_WRITE_TOKEN.');
    process.exit(1);
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
    token,
    useCdn: false,
  });

  const exists = await client.exists(LEGACY_ID);
  if (!exists) {
    console.log(`No document ${LEGACY_ID} — nothing to delete.`);
    return;
  }

  await client.delete(LEGACY_ID);
  console.log(`Deleted ${LEGACY_ID} from ${projectId}/${dataset}.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

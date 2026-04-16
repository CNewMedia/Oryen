import { existsSync } from 'fs';
import { resolve } from 'path';

import { config as loadEnv } from 'dotenv';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/** Next only auto-loads env from the app dir; merge sibling `studio/.env.local` when cwd is `web/`. */
const cwd = process.cwd();
for (const p of [
  resolve(cwd, '.env.local'),
  resolve(cwd, '.env'),
  resolve(cwd, '../studio/.env.local'),
  resolve(cwd, '../studio/.env'),
]) {
  if (existsSync(p)) loadEnv({ path: p });
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** Single source for the browser bundle (embedded Studio + public client). Use `||` so empty strings fall through (?? does not). */
const publicSanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() ||
  process.env.SANITY_STUDIO_PROJECT_ID?.trim() ||
  '';
const publicSanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() ||
  process.env.SANITY_STUDIO_DATASET?.trim() ||
  'production';

const nextConfig: NextConfig = {
  transpilePackages: ['next-sanity', 'sanity'],
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: publicSanityProjectId,
    NEXT_PUBLIC_SANITY_DATASET: publicSanityDataset,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
    ],
  },
};

export default withNextIntl(nextConfig);

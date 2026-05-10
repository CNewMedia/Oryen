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
  /**
   * Next 15.4+ segment explorer can trigger "SegmentViewNode not in React Client Manifest"
   * during `next dev` (RSC bundler). Disabling restores stable dev without losing app features.
   */
  experimental: {
    devtoolSegmentExplorer: false,
  },
  transpilePackages: ['next-sanity', 'sanity', 'next-intl'],
  /**
   * Keep server RSC/data loaders from splitting `@sanity/*` into flaky vendor chunks
   * (missing `./vendor-chunks/@sanity.js`). Cannot list `sanity`/`next-sanity` here —
   * they must stay in `transpilePackages` for embedded Studio.
   *
   * Do not list `next-intl` / `use-intl` / `intl-messageformat` here — it can cause duplicate React
   * (“Invalid hook call”) or missing numbered chunks (`./157.js`) next to generated `pages/_document`.
   */
  serverExternalPackages: ['@sanity/client', '@sanity/image-url'],
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: publicSanityProjectId,
    NEXT_PUBLIC_SANITY_DATASET: publicSanityDataset,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/images/**' },
      { protocol: 'https', hostname: 'cdn.eu.sanity.io', pathname: '/images/**' },
    ],
  },
  /**
   * Legacy CNIP → ORYEN (locale-prefixed routes). Non-matching URLs fall through to normal routing (404 where applicable).
   * `permanent: true` → cached permanent redirect (Next uses HTTP 308).
   */
  async redirects() {
    return [
      { source: '/algemeen/contacteer-cnip', destination: '/nl/contact', permanent: true },
      { source: '/algemeen/contact', destination: '/nl/contact', permanent: true },
      { source: '/en/contact-cnip', destination: '/en/contact', permanent: true },
      { source: '/algemeen/over-ons', destination: '/nl/team', permanent: true },
      { source: '/en/about-us', destination: '/en/team', permanent: true },
      { source: '/diensten/:path*', destination: '/nl/aanpak', permanent: true },
      { source: '/services/:path*', destination: '/en/approach', permanent: true },

      { source: '/blog/:path*', destination: '/nl', permanent: true },
      { source: '/en/blog/:path*', destination: '/en', permanent: true },

      { source: '/contact', destination: '/nl/contact', permanent: true },
      { source: '/home', destination: '/nl', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);

import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

import { PRODUCTION_SITE_URL } from '@/lib/site-url';

import './globals.css';

/**
 * Root-level `metadataBase` so Next never falls back to the Vercel deployment
 * URL (e.g. oryen-web.vercel.app) when resolving relative canonicals/OG URLs.
 * Always the production domain.
 */
export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_SITE_URL),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&family=Jost:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

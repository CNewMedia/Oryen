import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity';
import { Geist, Geist_Mono } from 'next/font/google';

import { SiteShell } from '@/components/layout/site-shell';
import { buildPageMetadata, rootTitleMetadata } from '@/lib/seo/metadata';
import { siteSettingsQuery } from '@/lib/sanity/queries';
import { sanityFetchIfConfigured } from '@/lib/sanity/fetch';
import type { SiteSettings } from '@/lib/sanity/types';

import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await sanityFetchIfConfigured<SiteSettings>({
    query: siteSettingsQuery,
    tags: ['siteSettings'],
  });
  const homeTitle = site?.siteTitle ?? 'ORYEN';
  return {
    ...rootTitleMetadata(site),
    ...buildPageMetadata({
      path: '/',
      site,
      pageTitle: homeTitle,
    }),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { isEnabled } = await draftMode();

  return (
    <html lang="nl" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <SiteShell>{children}</SiteShell>
        {isEnabled ? <VisualEditing /> : null}
      </body>
    </html>
  );
}

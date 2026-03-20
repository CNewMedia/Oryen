import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'About',
  ...buildPageMetadata({
    path: '/about',
    pageTitle: 'About',
  }),
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl font-medium tracking-tight">About</h1>
    </main>
  );
}

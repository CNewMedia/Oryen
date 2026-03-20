import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'Services',
  ...buildPageMetadata({
    path: '/services',
    pageTitle: 'Services',
  }),
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-2xl font-medium tracking-tight">Services</h1>
    </main>
  );
}

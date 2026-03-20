import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'contact',
  ...buildPageMetadata({
    path: '/contact',
    pageTitle: 'contact',
  }),
};

export default function ContactPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

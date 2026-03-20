import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'aanbod',
  ...buildPageMetadata({
    path: '/aanbod',
    pageTitle: 'aanbod',
  }),
};

export default function AanbodPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

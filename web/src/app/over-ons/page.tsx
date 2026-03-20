import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'over-ons',
  ...buildPageMetadata({
    path: '/over-ons',
    pageTitle: 'over-ons',
  }),
};

export default function OverOnsPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

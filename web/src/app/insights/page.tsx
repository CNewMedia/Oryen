import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'insights',
  ...buildPageMetadata({
    path: '/insights',
    pageTitle: 'insights',
  }),
};

export default function InsightsOverviewPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

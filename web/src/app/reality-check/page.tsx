import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'reality-check',
  ...buildPageMetadata({
    path: '/reality-check',
    pageTitle: 'reality-check',
  }),
};

export default function RealityCheckPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

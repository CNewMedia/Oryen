import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'casestudies',
  ...buildPageMetadata({
    path: '/casestudies',
    pageTitle: 'casestudies',
  }),
};

export default function CasestudiesOverviewPage() {
  return <main className="mx-auto max-w-3xl px-6 py-24" />;
}

import type { Metadata } from 'next';

import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'Reality Check',
  ...buildPageMetadata({
    path: '/reality-check',
    pageTitle: 'Reality Check',
  }),
};

export default function RealityCheckPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <PageSection>
        <h1 className="text-2xl font-medium tracking-tight">Reality Check</h1>
      </PageSection>
    </main>
  );
}

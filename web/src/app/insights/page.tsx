import type { Metadata } from 'next';

import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'Insights',
  ...buildPageMetadata({
    path: '/insights',
    pageTitle: 'Insights',
  }),
};

export default function InsightsOverviewPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <PageSection>
        <h1 className="text-2xl font-medium tracking-tight">Insights</h1>
      </PageSection>
    </main>
  );
}

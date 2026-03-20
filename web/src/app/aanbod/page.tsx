import type { Metadata } from 'next';

import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'Aanbod',
  ...buildPageMetadata({
    path: '/aanbod',
    pageTitle: 'Aanbod',
  }),
};

export default function AanbodPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <PageSection>
        <h1 className="text-2xl font-medium tracking-tight">Aanbod</h1>
      </PageSection>
    </main>
  );
}

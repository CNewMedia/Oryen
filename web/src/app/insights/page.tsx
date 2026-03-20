import type { Metadata } from 'next';

import { InsightsOverviewComposition } from '@/components/compositions/insights-overview';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'insights',
  ...buildPageMetadata({
    path: '/insights',
    pageTitle: 'insights',
  }),
};

export default function InsightsOverviewPage() {
  return <InsightsOverviewComposition />;
}

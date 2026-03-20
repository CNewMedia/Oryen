import type { Metadata } from 'next';

import { CasestudiesOverviewComposition } from '@/components/compositions/casestudies-overview';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'casestudies',
  ...buildPageMetadata({
    path: '/casestudies',
    pageTitle: 'casestudies',
  }),
};

export default function CasestudiesOverviewPage() {
  return <CasestudiesOverviewComposition />;
}

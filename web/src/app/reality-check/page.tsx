import type { Metadata } from 'next';

import { RealityCheckComposition } from '@/components/compositions/reality-check';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'reality-check',
  ...buildPageMetadata({
    path: '/reality-check',
    pageTitle: 'reality-check',
  }),
};

export default function RealityCheckPage() {
  return <RealityCheckComposition />;
}

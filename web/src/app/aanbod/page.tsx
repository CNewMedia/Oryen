import type { Metadata } from 'next';

import { AanbodComposition } from '@/components/compositions/aanbod';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'aanbod',
  ...buildPageMetadata({
    path: '/aanbod',
    pageTitle: 'aanbod',
  }),
};

export default function AanbodPage() {
  return <AanbodComposition />;
}

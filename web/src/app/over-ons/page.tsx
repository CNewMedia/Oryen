import type { Metadata } from 'next';

import { OverOnsComposition } from '@/components/compositions/over-ons';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'over-ons',
  ...buildPageMetadata({
    path: '/over-ons',
    pageTitle: 'over-ons',
  }),
};

export default function OverOnsPage() {
  return <OverOnsComposition />;
}

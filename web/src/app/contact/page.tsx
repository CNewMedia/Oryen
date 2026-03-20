import type { Metadata } from 'next';

import { ContactComposition } from '@/components/compositions/contact';
import { buildPageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = {
  title: 'contact',
  ...buildPageMetadata({
    path: '/contact',
    pageTitle: 'contact',
  }),
};

export default function ContactPage() {
  return <ContactComposition />;
}

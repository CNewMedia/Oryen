import Script from 'next/script';

import { buildFaqPageJsonLd } from '@/lib/aeo/faq-json-ld';
import type { FaqItem } from '@/types/aanbod';

type Props = {
  items: FaqItem[];
  /** Stable id per page locale for Next.js Script deduplication. */
  scriptId?: string;
};

export function FaqJsonLd({ items, scriptId = 'faq-json-ld' }: Props) {
  if (!items.length) return null;

  const schema = buildFaqPageJsonLd(items);

  return (
    <Script
      id={scriptId}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

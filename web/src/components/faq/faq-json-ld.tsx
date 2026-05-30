import { buildFaqPageJsonLd } from '@/lib/aeo/faq-json-ld';
import type { FaqItem } from '@/types/aanbod';

type Props = {
  items: FaqItem[];
  /** Optional id on the script tag (e.g. per locale). */
  scriptId?: string;
};

/** Server-rendered FAQPage JSON-LD — must appear in initial HTML for crawlers. */
export function FaqJsonLd({ items, scriptId = 'faq-json-ld' }: Props) {
  if (!items.length) return null;

  const schema = buildFaqPageJsonLd(items);

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

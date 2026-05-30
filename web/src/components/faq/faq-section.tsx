import type { AanbodFaq } from '@/types/aanbod';

type Props = {
  faq: AanbodFaq;
};

/**
 * Open FAQ list (no accordion) — readable for visitors and crawlers alike.
 */
export function FaqSection({ faq }: Props) {
  if (!faq.items.length) return null;

  return (
    <section className="aeo-faq has-spine spine-light" aria-labelledby="aeo-faq-heading">
      <div className="spine-grid">
        <div className="spine-label spine-label-light">
          <span>{faq.eyebrow?.trim() || 'FAQ'}</span>
        </div>
        <div className="spine-content aeo-faq-inner">
          <h2 id="aeo-faq-heading" className="aeo-faq-title reveal">
            {faq.eyebrow?.trim() || 'FAQ'}
          </h2>
          <dl className="aeo-faq-list">
            {faq.items.map((item, index) => (
              <div
                key={item.question}
                className={`aeo-faq-item reveal delay-${Math.min(index + 1, 3)}`}
              >
                <dt className="aeo-faq-question">{item.question}</dt>
                <dd className="aeo-faq-answer">
                  <p>{item.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

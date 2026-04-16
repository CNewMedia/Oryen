import { Link } from '@/i18n/navigation';

import { siteImages } from '@/lib/site-images';

import type { AanbodContent } from '@/types/aanbod';

type Props = { content: AanbodContent };

/**
 * Premium offer page — zelfde ORYEN-tokens als homepage,
 * andere compositie: duidelijke hiërarchie, minder spine-herhaling, rustiger interactie (zie PremiumChrome).
 */
export function AanbodPageView({ content }: Props) {
  const c = content;
  const { howItWorks, offerClarity } = c;

  return (
    <div className="aanbod-page">
      <section className="aanbod-hero hero">
        <div className="hero-bg">
          <img
            id="heroImg"
            src={siteImages.hero}
            alt=""
            className="loaded"
          />
        </div>
        <div className="hero-spine on" id="heroSpine" />
        <div className="hero-body">
          <div className="hero-spacer" />
          <div className="aanbod-hero-grid">
            <div className="aanbod-hero-main">
              <h1 className="hero-hl reveal">
                <span>{c.hero.headlineLine1}</span>
                <em>{c.hero.headlineLine2Em}</em>
              </h1>
              <p className="hero-claim reveal delay-1">{c.hero.sub}</p>
              <div className="hero-actions reveal delay-2">
                <Link className="btn-primary" href="/contact">
                  <span>{c.hero.primaryCta}</span>
                  <span className="btn-arrow" />
                </Link>
                <Link className="btn-ghost" href="/aanpak">
                  {c.hero.secondaryCta}
                </Link>
              </div>
            </div>
            <aside className="aanbod-offer-frame reveal delay-1" aria-label={c.hero.offerFrame.label}>
              <p className="aanbod-offer-frame-title">{c.hero.offerFrame.label}</p>
              <ul className="aanbod-offer-frame-list">
                {c.hero.offerFrame.pillars.map((line) => (
                  <li key={line.slice(0, 40)}>{line}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="aanbod-clarity s-stelling has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{offerClarity.eyebrow}</span>
          </div>
          <div className="spine-content aanbod-clarity-split">
            <div className="aanbod-clarity-col">
              <h2 className="aanbod-section-hl reveal">{offerClarity.leftTitle}</h2>
              <p className="stelling-p reveal delay-1">{offerClarity.leftBody}</p>
            </div>
            <div className="aanbod-clarity-col aanbod-clarity-col--right">
              <h2 className="aanbod-section-hl reveal">{offerClarity.rightTitle}</h2>
              <p className="aanbod-clarity-lead reveal delay-1">{offerClarity.rightLead}</p>
              <p className="stelling-p reveal delay-1">{offerClarity.forBody}</p>
              <p className="aanbod-mini-lbl reveal delay-2">{offerClarity.welLabel}</p>
              <ul className="aanbod-mini-list">
                {offerClarity.welItems.map((item) => (
                  <li key={item.slice(0, 24)} className="reveal delay-2">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="aanbod-mini-lbl reveal delay-2">{offerClarity.notForLabel}</p>
              <ul className="aanbod-mini-list aanbod-mini-list--muted">
                {offerClarity.notForItems.map((item) => (
                  <li key={item.slice(0, 24)} className="reveal delay-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="aanbod-deliverables">
        <div className="aanbod-deliverables-inner">
          <p className="aanbod-deliverables-eyebrow reveal">{c.whatYouGet.eyebrow}</p>
          <h2 className="aanbod-deliverables-hl reveal">{c.whatYouGet.headline}</h2>
          <p className="aanbod-deliverables-sub reveal delay-1">{c.whatYouGet.subline}</p>
          <ul className="aanbod-deliverables-grid">
            {c.whatYouGet.items.map((item, i) => (
              <li
                key={item.slice(0, 32)}
                className={`aanbod-deliverable-card reveal delay-${Math.min(i + 1, 3)}`}
              >
                <span className="aanbod-deliverable-n">{String(i + 1).padStart(2, '0')}</span>
                <p className="aanbod-deliverable-txt">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="aanbod-process">
        <div className="aanbod-process-inner">
          <h2 className="aanbod-process-hl reveal">{howItWorks.headline}</h2>
          <div className="aanbod-process-steps">
            {howItWorks.steps.map((step, i) => (
              <div
                key={step.n}
                className={`aanbod-process-step reveal${i > 0 ? ` delay-${Math.min(i, 2)}` : ''}`}
              >
                <span className="aanbod-process-n">
                  {howItWorks.stepPrefix} {step.n}
                </span>
                <h3 className="aanbod-process-title">{step.title}</h3>
                <p className="aanbod-process-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aanbod-after" aria-labelledby="aanbod-after-heading">
        <div className="aanbod-after-inner">
          <p className="aanbod-after-eyebrow reveal">{c.whatAfter.eyebrow}</p>
          <h2 className="aanbod-after-hl reveal" id="aanbod-after-heading">
            {c.whatAfter.headline}
          </h2>
          <p className="aanbod-after-body reveal delay-1">{c.whatAfter.body}</p>
          <ul className="aanbod-after-list">
            {c.whatAfter.items.map((line, i) => (
              <li
                key={line.slice(0, 40)}
                className={`reveal delay-${Math.min(i + 1, 3)}`}
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="aanbod-package s-offer has-spine spine-dark" id="pricing">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.pricing.spine}</span>
          </div>
          <div className="spine-content">
            <div className="aanbod-package-grid">
              <div className="aanbod-package-primary">
                <h2 className="offer-name reveal">{c.pricing.name}</h2>
                <p className="offer-price reveal delay-1">{c.pricing.priceLine}</p>
                <p className="offer-body reveal delay-2">{c.pricing.body}</p>
                <p className="aanbod-included-title reveal delay-2">{c.pricing.includedTitle}</p>
                <ul className="aanbod-included-list">
                  {c.pricing.includedItems.map((line) => (
                    <li key={line.slice(0, 32)} className="reveal delay-2">
                      {line}
                    </li>
                  ))}
                </ul>
                <span className="offer-line reveal delay-3" />
                <Link
                  className="offer-btn reveal delay-3"
                  href="/contact"
                >
                  <span>{c.hero.primaryCta}</span>
                  <span
                    className="btn-arrow"
                    style={{ background: 'var(--amber)' }}
                  />
                </Link>
              </div>
              <div className="aanbod-package-secondary reveal delay-1">
                <h3 className="offer-r-hl">{c.reassurance.headline}</h3>
                <p className="offer-r-body">{c.reassurance.body}</p>
                <p className="offer-note">{c.reassurance.note}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aanbod-closing">
        <div className="aanbod-closing-inner">
          <p className="aanbod-closing-line reveal">{c.closing.line1}</p>
          <p className="aanbod-closing-line aanbod-closing-line--em reveal delay-1">
            {c.closing.line2}
          </p>
          <div className="aanbod-closing-cta reveal delay-2">
            <Link className="btn-primary" href="/contact">
              <span>{c.closing.ctaLabel}</span>
              <span className="btn-arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

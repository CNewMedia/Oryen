import { Link } from '@/i18n/navigation';

import { siteImages } from '@/lib/site-images';

import type { AanbodContent } from '@/types/aanbod';

function BodyParagraphs({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/\n\n/).filter(Boolean);
  return (
    <>
      {parts.map((p) => (
        <p key={p.slice(0, 48)} className={className ?? 'stelling-p'}>
          {p}
        </p>
      ))}
    </>
  );
}

type Props = { content: AanbodContent };

/** Zelfde visuele taal als de homepage: pine/cream, spine, editorial type, geen extra animaties. */
export function AanbodPageView({ content }: Props) {
  const c = content;
  const { howItWorks } = c;

  return (
    <>
      <section className="hero">
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
          <div className="hero-text">
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
        </div>
      </section>

      <section className="s-stelling has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.whatItIs.spine}</span>
          </div>
          <div className="spine-content">
            <h2 className="bewijs-hl reveal">
              {c.whatItIs.headline}
            </h2>
            <p className="stelling-p reveal delay-1 max-w-prose">{c.whatItIs.body}</p>
          </div>
        </div>
      </section>

      <section className="s-selectie has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.whatYouGet.spine}</span>
          </div>
          <div className="spine-content">
            <h2 className="selectie-hl reveal">
              {c.whatYouGet.headline}
            </h2>
            <div className="selectie-list reveal delay-1 mt-8">
              {c.whatYouGet.items.map((item) => (
                <p key={item.slice(0, 40)} className="sel-item">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="s-stelling has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.forWho.spine}</span>
          </div>
          <div className="spine-content">
            <h2 className="bewijs-hl reveal max-w-[28ch]">
              {c.forWho.headline}
            </h2>
            <div className="reveal delay-1 mt-8 max-w-prose space-y-6">
              <BodyParagraphs text={c.forWho.body} />
            </div>
          </div>
        </div>
      </section>

      <section className="s-aanpak has-spine spine-dark" id="how-it-works">
        <div className="spine-grid aanbod-head-wrap">
          <div className="spine-label spine-label-dark">
            <span>{howItWorks.spine}</span>
          </div>
          <div className="spine-content aanpak-head">
            <h2 className="aanpak-hl reveal">{howItWorks.headline}</h2>
          </div>
        </div>
        <div className="aanpak-steps">
          <div className="aanpak-spacer" />
          {howItWorks.steps.map((step, i) => (
            <div
              key={step.n}
              className={`step reveal ${i > 0 ? `delay-${Math.min(i, 3)}` : ''}`}
            >
              <span className="step-n">
                {howItWorks.stepPrefix} {step.n}
              </span>
              <span className="step-name">{step.title}</span>
              <p className="step-q">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="s-offer has-spine spine-dark" id="pricing">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.pricing.spine}</span>
          </div>
          <div className="spine-content">
            <div className="offer-grid">
              <div>
                <h2 className="offer-name reveal">{c.pricing.name}</h2>
                <p className="offer-price reveal delay-1">{c.pricing.priceLine}</p>
                <p className="offer-body reveal delay-2">{c.pricing.body}</p>
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
              <div className="reveal delay-1">
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
        </div>
      </section>
    </>
  );
}

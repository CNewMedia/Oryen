import { Fragment } from 'react';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';
import { Link } from '@/i18n/navigation';

import type { AanbodContent } from '@/types/aanbod';

type Props = { content: AanbodContent; locale: string };

/** Split `\n` / `<br/>` zodat editorial regeleindes renderen als echte `<br />`. */
function RichBrLines({ text }: { text: string }) {
  const normalized = text.replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  const parts = normalized.split(/<br\s*\/?>|\r?\n/i);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 ? <br /> : null}
          {part}
        </Fragment>
      ))}
    </>
  );
}

function HeroBlueprintRc() {
  const pid = 'rcHeroGrid';
  return (
    <svg
      className="rc-tpl-blueprint"
      viewBox="0 0 900 700"
      preserveAspectRatio="xMaxYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id={pid} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(196,120,32,.13)"
            strokeWidth=".5"
          />
        </pattern>
      </defs>
      <rect width="900" height="700" fill={`url(#${pid})`} />
      <line
        x1="0"
        y1="350"
        x2="900"
        y2="350"
        stroke="rgba(196,120,32,.18)"
        strokeWidth=".6"
      />
      <line
        x1="450"
        y1="0"
        x2="450"
        y2="700"
        stroke="rgba(196,120,32,.18)"
        strokeWidth=".6"
      />
      <circle cx="450" cy="350" r="80" fill="none" stroke="rgba(196,120,32,.22)" strokeWidth=".6" />
      <circle cx="450" cy="350" r="160" fill="none" stroke="rgba(196,120,32,.18)" strokeWidth=".6" />
      <circle cx="450" cy="350" r="240" fill="none" stroke="rgba(196,120,32,.14)" strokeWidth=".6" />
      <circle cx="450" cy="350" r="6" fill="rgba(196,120,32,.7)" />
      <g transform="translate(580,260)" stroke="rgba(196,120,32,.5)" strokeWidth=".7" fill="none">
        <line x1="-10" y1="0" x2="-4" y2="0" />
        <line x1="4" y1="0" x2="10" y2="0" />
        <line x1="0" y1="-10" x2="0" y2="-4" />
        <line x1="0" y1="4" x2="0" y2="10" />
      </g>
    </svg>
  );
}

function ClosingResolutionRc() {
  const pid = 'rcCloseGrid';
  return (
    <svg
      className="rc-tpl-resolution"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <pattern id={pid} width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(196,120,32,.08)"
            strokeWidth=".5"
          />
        </pattern>
      </defs>
      <rect width="800" height="500" fill={`url(#${pid})`} />
      <circle cx="80" cy="360" r="16" fill="none" stroke="rgba(196,120,32,.45)" strokeWidth=".7" />
      <text
        x="80"
        y="366"
        textAnchor="middle"
        fill="rgba(196,120,32,.7)"
        fontFamily="DM Mono, monospace"
        fontSize="10"
        letterSpacing="1"
      >
        A
      </text>
      <path
        d="M 96 360 C 280 360, 360 220, 520 180 S 680 120, 720 120"
        fill="none"
        stroke="rgba(196,120,32,.72)"
        strokeWidth="1.1"
      />
      <circle cx="720" cy="120" r="22" fill="none" stroke="rgba(196,120,32,.7)" strokeWidth=".9" />
      <circle cx="720" cy="120" r="5" fill="rgba(196,120,32,.9)" />
      <circle cx="720" cy="120" r="44" fill="none" stroke="rgba(196,120,32,.22)" strokeWidth=".5" />
      <line x1="720" y1="70" x2="720" y2="100" stroke="rgba(196,120,32,.3)" strokeWidth=".5" />
      <line x1="740" y1="120" x2="770" y2="120" stroke="rgba(196,120,32,.3)" strokeWidth=".5" />
    </svg>
  );
}

/**
 * Reality Check / aanbod — slim template: hero, outputs, flow, fit, closing.
 */
export function AanbodPageView({ content, locale }: Props) {
  const c = content;
  const h = c.hero;
  const anchor = h.secondaryCtaAnchor?.replace(/^#/, '') ?? 'hoe-het-gaat';
  const showRail = Boolean(h.offerFrame?.pillars?.length);

  return (
    <div className="aanbod-page rc-tpl-page">
      <section className="hero rc-tpl-hero has-spine spine-dark">
        {c.heroImageUrl ? (
          <div className="hero-bg rc-tpl-hero-photo">
            <img id="heroImg" src={c.heroImageUrl} alt="" />
          </div>
        ) : null}
        <HeroBlueprintRc />
        <div className="hero-spine" id="heroSpine" />
        <div className="hero-body">
          <div className="hero-spacer" />
          <div className="spine-grid rc-tpl-hero-grid">
            <div className="spine-label spine-label-dark">
              <span>00 — Reality Check</span>
            </div>
            <div className={showRail ? 'rc-tpl-hero-layout' : 'rc-tpl-hero-layout rc-tpl-hero-layout--single'}>
              <div>
                <p className="rc-tpl-hero-eyebrow reveal">{h.eyebrow}</p>
                <h1 className="hero-hl rc-tpl-hero-hl reveal delay-1">
                  <span>{h.headlineLine1}</span>
                  <em>
                    <RichBrLines text={h.headlineLine2Em} />
                  </em>
                </h1>
                <p className="rc-tpl-hero-sub reveal delay-2">
                  <RichBrLines text={h.sub} />
                </p>
                <div className="rc-tpl-hero-character reveal delay-3">
                  {h.characterLines.map((line) => (
                    <p key={line.slice(0, 48)}>{line}</p>
                  ))}
                </div>
                <div className="hero-actions rc-tpl-hero-actions reveal delay-3">
                  <Link className="btn-primary" href="/contact">
                    <span>
                      <PrimaryRcCtaLabel locale={locale} label={h.primaryCta} />
                    </span>
                    <span className="btn-arrow" />
                  </Link>
                  {h.secondaryCtaHref?.trim() ? (
                    <Link className="btn-ghost" href={h.secondaryCtaHref as never}>
                      {h.secondaryCta}
                    </Link>
                  ) : (
                    <a className="btn-ghost" href={`#${anchor}`}>
                      {h.secondaryCta}
                    </a>
                  )}
                </div>
              </div>
              {showRail ? (
                <aside className="rc-tpl-hero-rail reveal delay-2" aria-label={h.offerFrame!.label}>
                  <p className="rc-tpl-hero-rail-title">{h.offerFrame!.label}</p>
                  <ul className="rc-tpl-hero-rail-list">
                    {h.offerFrame!.pillars.map((line) => (
                      <li key={line.slice(0, 40)}>{line}</li>
                    ))}
                  </ul>
                </aside>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {c.watHetIs ? (
      <section className="rc-tpl-s01 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.watHetIs.spine}</span>
          </div>
          <div className="spine-content">
            <p className="rc-tpl-s-eyebrow reveal">{c.watHetIs.eyebrow}</p>
            <h2 className="rc-tpl-s01-head reveal delay-1">
              <RichBrLines text={c.watHetIs.headlineLine1} />
              <br />
              <em>
                <RichBrLines text={c.watHetIs.headlineLine2Em} />
              </em>
            </h2>
            <p className="rc-tpl-s01-body reveal delay-2">
              <RichBrLines text={c.watHetIs.body} />
            </p>
          </div>
        </div>
      </section>
      ) : null}

      <section className="rc-tpl-s03 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.whatYouGet.spine ?? '01 — Wat u meeneemt'}</span>
          </div>
          <div className="spine-content">
            <p className="rc-tpl-s-eyebrow reveal">{c.whatYouGet.eyebrow}</p>
            <h2 className="rc-tpl-h-section reveal delay-1">
              <RichBrLines text={c.whatYouGet.headlineLine1} />
              <br />
              <em>
                <RichBrLines text={c.whatYouGet.headlineLine2Em} />
              </em>
            </h2>
            <p className="rc-tpl-p-lead reveal delay-2">{c.whatYouGet.subline}</p>
            <div className="rc-tpl-outputs">
              {c.whatYouGet.outputs.map((row, i) => (
                <div key={`${row.title.slice(0, 32)}-${i}`} className="rc-tpl-output-row reveal delay-2">
                  <span className="rc-tpl-output-num">— {String(i + 1).padStart(2, '0')}</span>
                  <div className="rc-tpl-output-body">
                    <h3 className="rc-tpl-output-title">{row.title}</h3>
                    {row.description ? (
                      <p className="rc-tpl-output-desc">{row.description}</p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rc-tpl-s02 has-spine spine-dark" id={anchor}>
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.howItWorks.spine}</span>
          </div>
          <div className="spine-content">
            <p className="rc-tpl-s-eyebrow rc-tpl-s-eyebrow--on-dark reveal">
              {c.howItWorks.eyebrow}
            </p>
            <h2 className="rc-tpl-h-section rc-tpl-h-section--on-dark reveal delay-1">
              <RichBrLines text={c.howItWorks.headlineLine1} />
              <br />
              <em>
                <RichBrLines text={c.howItWorks.headlineLine2Em} />
              </em>
            </h2>
            <div className="rc-tpl-phases">
              {c.howItWorks.steps.map((step, i) => (
                <div
                  key={step.n}
                  className={`rc-tpl-phase reveal delay-${Math.min(i + 1, 3)}`}
                >
                  <p className="rc-tpl-phase-num">
                    {c.howItWorks.stepPrefix} {step.n} — {step.title}
                  </p>
                  <h3 className="rc-tpl-phase-title">{step.title}</h3>
                  <p className="rc-tpl-phase-body" style={{ whiteSpace: 'pre-line' }}>
                    {step.body}
                  </p>
                  {step.includes ? (
                    <p className="rc-tpl-phase-includes">{step.includes}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rc-tpl-s04 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.offerClarity.spine}</span>
          </div>
          <div className="spine-content">
            <p className="rc-tpl-s-eyebrow reveal">{c.offerClarity.pastEyebrow}</p>
            <p className="rc-tpl-s04-intro reveal delay-1">{c.offerClarity.fitIntro}</p>
            {c.offerClarity.fitHeadlineLine1?.trim() ? (
              <h2 className="rc-tpl-h-section reveal delay-1">
                {c.offerClarity.fitHeadlineLine1}
                <br />
                <em>{c.offerClarity.fitHeadlineEm}</em>
                <br />
                {c.offerClarity.fitHeadlineLine2}
              </h2>
            ) : null}
            <div className="rc-tpl-fit-grid reveal delay-2">
              <div className="rc-tpl-fit-wel">
                <p className="rc-tpl-fit-col-head">{c.offerClarity.welLabel}</p>
                <ul className="rc-tpl-fit-list">
                  {c.offerClarity.welItems.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rc-tpl-fit-niet">
                <p className="rc-tpl-fit-col-head">{c.offerClarity.notForLabel}</p>
                <ul className="rc-tpl-fit-list">
                  {c.offerClarity.notForItems.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {c.offerClarity.fitOutro?.trim() ? (
              <p className="rc-tpl-s04-outro reveal delay-3">{c.offerClarity.fitOutro}</p>
            ) : null}
          </div>
        </div>
      </section>

      {c.whatAfter ? (
      <section className="rc-tpl-s05 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.whatAfter.spine}</span>
          </div>
          <div className="spine-content">
            <p className="rc-tpl-s-eyebrow reveal">{c.whatAfter.eyebrow}</p>
            <h2 className="rc-tpl-h-section reveal delay-1">
              {c.whatAfter.headlineLine1}
              <br />
              <em>{c.whatAfter.headlineEm}</em>
            </h2>
            <div className="rc-tpl-s05-body">
              {c.whatAfter.stanzas.map((stanza, i) => (
                <p
                  key={i}
                  className={`rc-tpl-p-body reveal delay-2${stanza.italic ? ' rc-tpl-p-body--emph' : ''}`}
                >
                  {stanza.text}
                </p>
              ))}
            </div>
            <div className="rc-tpl-guarantee-grid reveal delay-3">
              {c.whatAfter.guarantees.map((g) => (
                <div key={g.mark} className="rc-tpl-guarantee">
                  <span className="rc-tpl-guarantee-mark">{g.mark}</span>
                  <span className="rc-tpl-guarantee-text">{g.text}</span>
                </div>
              ))}
            </div>
            <p className="rc-tpl-s05-signature reveal delay-3">{c.whatAfter.signature}</p>
          </div>
        </div>
      </section>
      ) : null}

      <section className="rc-tpl-s06 has-spine spine-dark">
        <ClosingResolutionRc />
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.closing.spine}</span>
          </div>
          <div className="spine-content rc-tpl-s06-content">
            <h2 className="rc-tpl-h-section rc-tpl-h-section--on-dark reveal">
              <RichBrLines text={c.closing.headlineLine1} />
              {c.closing.headlineLine2?.trim() ? (
                <>
                  <br />
                  <RichBrLines text={c.closing.headlineLine2} />
                </>
              ) : null}
              {c.closing.headlineEm?.trim() ? (
                <>
                  <br />
                  <em>
                    <RichBrLines text={c.closing.headlineEm} />
                  </em>
                </>
              ) : null}
            </h2>
            <p className="rc-tpl-p-body rc-tpl-p-body--on-dark reveal delay-1">{c.closing.body1}</p>
            {c.closing.body2?.trim() ? (
              <p className="rc-tpl-p-body rc-tpl-p-body--on-dark reveal delay-1">{c.closing.body2}</p>
            ) : null}
            <div className="hero-actions rc-tpl-s06-actions reveal delay-2">
              <Link className="btn-primary" href="/contact">
                <span>
                  <PrimaryRcCtaLabel locale={locale} label={c.closing.primaryCta} />
                </span>
                <span className="btn-arrow" />
              </Link>
            </div>
            {c.closing.footnote?.trim() || c.closing.secondaryCta?.trim() ? (
            <div className="rc-tpl-s06-close reveal delay-3">
              {c.closing.footnote?.trim() ? (
                <span className="rc-tpl-s06-close-text">{c.closing.footnote}</span>
              ) : null}
              {c.closing.secondaryCta?.trim() ? (
              <Link
                className="btn-ghost"
                href={(c.closing.secondaryCtaHref ?? '/contact') as never}
              >
                {c.closing.secondaryCta}
              </Link>
              ) : null}
            </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

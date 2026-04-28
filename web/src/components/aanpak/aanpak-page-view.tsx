import { Link } from '@/i18n/navigation';

import type { AanpakPageContent } from '@/types/aanpak-page';

type Props = { content: AanpakPageContent };

function HeroBlueprint() {
  const pid = 'aanpakHeroBpGrid';
  return (
    <svg
      className="aanpak-tpl-blueprint"
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
            stroke="rgba(196,120,32,.15)"
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
        stroke="rgba(196,120,32,.22)"
        strokeWidth=".7"
      />
      <line
        x1="450"
        y1="0"
        x2="450"
        y2="700"
        stroke="rgba(196,120,32,.22)"
        strokeWidth=".7"
      />
      <circle cx="120" cy="420" r="18" fill="none" stroke="rgba(196,120,32,.55)" strokeWidth=".8" />
      <text
        x="120"
        y="426"
        textAnchor="middle"
        fill="rgba(196,120,32,.75)"
        fontFamily="DM Mono, monospace"
        fontSize="11"
        letterSpacing="1"
      >
        A
      </text>
      <circle cx="780" cy="140" r="18" fill="none" stroke="rgba(196,120,32,.55)" strokeWidth=".8" />
      <text
        x="780"
        y="146"
        textAnchor="middle"
        fill="rgba(196,120,32,.75)"
        fontFamily="DM Mono, monospace"
        fontSize="11"
        letterSpacing="1"
      >
        B
      </text>
      <path
        d="M 138 420 C 280 400, 300 180, 450 260 S 700 200, 762 140"
        fill="none"
        stroke="rgba(196,120,32,.48)"
        strokeWidth="1"
      />
      <path
        d="M 138 420 C 350 480, 500 420, 600 350 S 740 180, 762 140"
        fill="none"
        stroke="rgba(196,120,32,.32)"
        strokeWidth="1"
      />
      <path
        d="M 138 420 C 200 340, 420 500, 560 420 S 760 220, 762 140"
        fill="none"
        stroke="rgba(196,120,32,.2)"
        strokeWidth="1"
      />
      <circle cx="450" cy="350" r="5" fill="rgba(196,120,32,.7)" />
      <circle cx="450" cy="350" r="24" fill="none" stroke="rgba(196,120,32,.3)" strokeWidth=".6" />
      <g transform="translate(620,410)" stroke="rgba(196,120,32,.4)" strokeWidth=".6" fill="none">
        <line x1="-6" y1="0" x2="6" y2="0" />
        <line x1="0" y1="-6" x2="0" y2="6" />
      </g>
    </svg>
  );
}

function ClosingResolution() {
  const pid = 'aanpakCloseGrid';
  return (
    <svg
      className="aanpak-tpl-resolution"
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
 * Methodology page aligned with `oryen-aanpak-volledig.html`: blueprint hero,
 * stacked “waarom”, ruled observations, four-column steps, bridge, resolution close.
 */
export function AanpakPageView({ content }: Props) {
  const c = content;
  const b = c.methodBridge;
  const close = c.closing;
  const secondClosingPara = close.body2 ?? close.supportHook;
  const lensEm = c.lens.headlineEm ?? c.lens.headlineLine2;

  return (
    <div className="aanpak-page">
      <section className="hero aanpak-tpl-hero has-spine spine-dark">
        {c.heroImageUrl ? (
          <div className="hero-bg aanpak-tpl-hero-photo">
            <img id="heroImg" src={c.heroImageUrl} alt="" />
          </div>
        ) : null}
        <HeroBlueprint />
        <div className="hero-spine" id="heroSpine" />
        <div className="hero-body">
          <div className="hero-spacer" />
          <div className="spine-grid aanpak-tpl-hero-grid">
            <div className="spine-label spine-label-dark">
              <span>{`00 — ${c.hero.eyebrow}`}</span>
            </div>
            <div className="spine-content aanpak-tpl-hero-content">
              <p className="aanpak-tpl-hero-eyebrow reveal">{c.hero.eyebrow}</p>
              <h1 className="hero-hl aanpak-tpl-hero-hl reveal delay-1">
                <span>
                  {c.hero.headlineLine1}
                  <br />
                  {c.hero.headlineLine2 ? (
                    <>
                      {c.hero.headlineLine2}
                      <br />
                    </>
                  ) : null}
                </span>
                {c.hero.headlineEm ? <em>{c.hero.headlineEm}</em> : null}
              </h1>
              <div className="aanpak-tpl-hero-sub reveal delay-2">
                <p>{c.hero.body1}</p>
                <p>{c.hero.body2}</p>
              </div>
              <div className="hero-actions aanpak-tpl-hero-actions reveal delay-3">
                <Link className="btn-primary" href="/aanbod">
                  <span>{c.hero.primaryCta}</span>
                  <span className="btn-arrow" />
                </Link>
                <Link className="btn-ghost" href="/aanbod">
                  {c.hero.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aanpak-tpl-s01 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.why.eyebrow}</span>
          </div>
          <div className="spine-content aanpak-tpl-s01-inner">
            <div className="aanpak-tpl-s01-first">
              <h2 className="aanpak-tpl-h-section reveal">
                {c.why.headlineLine1}
                <br />
                <em>{c.why.headlineLine2}</em>
              </h2>
              <p className="aanpak-tpl-p-body reveal delay-1" style={{ whiteSpace: 'pre-line' }}>
                {c.why.body1}
              </p>
              <p className="aanpak-tpl-p-body reveal delay-1">{c.why.body2}</p>
            </div>
            {c.why.tail ? (
              <div className="aanpak-tpl-s01-second">
                <h3 className="aanpak-tpl-h-sub reveal">
                  {c.why.tail.headlineLine1}
                  {c.why.tail.headlineLine2Em ? (
                    <>
                      {' '}
                      <em>{c.why.tail.headlineLine2Em}</em>
                    </>
                  ) : null}
                </h3>
                <p className="aanpak-tpl-p-body reveal delay-1">{c.why.tail.body}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="aanpak-tpl-s02 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.lens.eyebrow}</span>
          </div>
          <div className="spine-content">
            <h2 className="aanpak-tpl-h-section reveal">
              {c.lens.headlineLine1}
              {lensEm ? (
                <>
                  <br />
                  <em>{lensEm}</em>
                </>
              ) : null}
            </h2>
            <p className="aanpak-tpl-p-lead reveal delay-1">{c.lens.leadIn}</p>
            {c.lens.lookAtIntro ? (
              <p className="aanpak-tpl-p-body reveal delay-2">{c.lens.lookAtIntro}</p>
            ) : null}
            <div className="aanpak-tpl-obs-list" role="list">
              {c.lens.lookAt.map((item, i) => (
                <div key={`${item.slice(0, 48)}-${i}`} className="aanpak-tpl-obs-row reveal delay-2" role="listitem">
                  <span className="aanpak-tpl-obs-num">— {String(i + 1).padStart(2, '0')}</span>
                  <span className="aanpak-tpl-obs-text">{item}</span>
                </div>
              ))}
            </div>
            <p className="aanpak-tpl-p-close reveal delay-3" style={{ whiteSpace: 'pre-line' }}>
              {c.lens.conclusion}
            </p>
          </div>
        </div>
      </section>

      <section className="aanpak-tpl-s03 has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.steps.eyebrow}</span>
          </div>
          <div className="spine-content aanpak-tpl-steps-wrap">
            <h2 className="aanpak-tpl-h-section aanpak-tpl-h-section--on-dark reveal">
              {c.steps.headline}
            </h2>
            <div className="aanpak-tpl-steps-grid">
              {c.steps.steps.map((step, i) => (
                <div
                  key={step.n}
                  className={`aanpak-tpl-step reveal delay-${Math.min(i + 1, 4)}${
                    i === c.steps.steps.length - 1 ? ' aanpak-tpl-step--active' : ''
                  }`}
                >
                  <p className="aanpak-tpl-step-num">
                    {c.steps.stepPrefix} {step.n}
                  </p>
                  <h3 className="aanpak-tpl-step-title">{step.title}</h3>
                  <p className="aanpak-tpl-step-body" style={{ whiteSpace: 'pre-line' }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="aanpak-tpl-s04 has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{b.eyebrow}</span>
          </div>
          <div className="spine-content aanpak-tpl-bridge-inner">
            {b.microEyebrow ? (
              <p className="aanpak-tpl-s04-eyebrow reveal">{b.microEyebrow}</p>
            ) : null}
            <p className="aanpak-tpl-bridge-summary reveal delay-1">{b.summary}</p>
            <div className="aanpak-tpl-hr-line reveal delay-1" aria-hidden />
            <h3 className="aanpak-tpl-h-sub reveal delay-2">{b.headline}</h3>
            <p className="aanpak-tpl-p-body reveal delay-2">{b.body1}</p>
            {b.body2 ? <p className="aanpak-tpl-p-body reveal delay-2">{b.body2}</p> : null}
            <p className="aanpak-tpl-s04-note reveal delay-3">{b.followTitle}</p>
            <p className="aanpak-tpl-p-body reveal delay-3">{b.followBody}</p>
            <div className="aanpak-tpl-s04-cta reveal delay-3">
              <Link
                className="btn-ghost aanpak-tpl-bridge-ghost"
                href={(b.secondaryCtaHref?.trim() ? b.secondaryCtaHref : '/aanbod') as never}
              >
                {b.secondaryCta ?? b.cta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="aanpak-tpl-s05 has-spine spine-dark">
        <ClosingResolution />
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{close.spineLabel ?? '—'}</span>
          </div>
          <div className="spine-content aanpak-tpl-s05-content">
            <h2 className="aanpak-tpl-h-section aanpak-tpl-h-section--on-dark reveal">
              {close.headlineLine1}
              <br />
              <em>{close.headlineLine2}</em>
            </h2>
            <p className="aanpak-tpl-p-body aanpak-tpl-p-body--on-dark reveal delay-1">{close.body1}</p>
            {secondClosingPara ? (
              <p
                className="aanpak-tpl-p-body aanpak-tpl-p-body--on-dark reveal delay-1"
                style={{ whiteSpace: 'pre-line' }}
              >
                {secondClosingPara}
              </p>
            ) : null}
            <div className="hero-actions aanpak-tpl-s05-primary reveal delay-2">
              <Link className="btn-primary" href={close.primaryCtaHref as never}>
                <span>{close.primaryCta}</span>
                <span className="btn-arrow" />
              </Link>
            </div>
            <div className="aanpak-tpl-s05-close reveal delay-3">
              {close.footnote ? <span className="aanpak-tpl-s05-close-text">{close.footnote}</span> : null}
              <Link className="btn-ghost" href={close.secondaryCtaHref as never}>
                {close.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

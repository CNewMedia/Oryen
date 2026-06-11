import Image from 'next/image';
import { Fragment } from 'react';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';
import { Link } from '@/i18n/navigation';

import type { TeamContent } from '@/types/team';

type Props = { content: TeamContent; locale: string };

const SOLUTIONS_URL = 'https://oryen.solutions';

function TeamHeroScaffold() {
  return (
    <svg
      className="team-hero-scaffold"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMaxYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="team-hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(196,120,32,.18)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#team-hero-grid)" />
      <line
        x1="0"
        y1="300"
        x2="800"
        y2="300"
        stroke="rgba(196,120,32,.22)"
        strokeWidth="0.8"
      />
      <line
        x1="500"
        y1="0"
        x2="500"
        y2="600"
        stroke="rgba(196,120,32,.22)"
        strokeWidth="0.8"
      />
      <circle cx="500" cy="300" r="4" fill="rgba(196,120,32,.55)" />
      <circle
        cx="500"
        cy="300"
        r="60"
        fill="none"
        stroke="rgba(196,120,32,.22)"
        strokeWidth="0.6"
      />
      <circle
        cx="500"
        cy="300"
        r="120"
        fill="none"
        stroke="rgba(196,120,32,.16)"
        strokeWidth="0.6"
      />
    </svg>
  );
}

function ParagraphWithSolutions({ text }: { text: string }) {
  if (!text.includes('ORYEN Solutions')) {
    return <p className="team-prose-p">{text}</p>;
  }
  const bits = text.split('ORYEN Solutions');
  return (
    <p className="team-prose-p">
      {bits.map((bit, i) => (
        <Fragment key={i}>
          {bit}
          {i < bits.length - 1 ? (
            <a
              className="team-solutions-link"
              href={SOLUTIONS_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              ORYEN Solutions
            </a>
          ) : null}
        </Fragment>
      ))}
    </p>
  );
}

function ProseBody({ text, linkSolutions }: { text: string; linkSolutions?: boolean }) {
  return (
    <>
      {text.split(/\n\n+/).map((block, i) =>
        linkSolutions ? (
          <ParagraphWithSolutions key={i} text={block} />
        ) : (
          <p key={i} className="team-prose-p">
            {block}
          </p>
        )
      )}
    </>
  );
}

function SectionBody({
  body,
  linkSolutions,
}: {
  body: string;
  linkSolutions?: boolean;
}) {
  return <ProseBody text={body} linkSolutions={linkSolutions} />;
}

export function TeamPageView({ content: c, locale }: Props) {
  return (
    <div className="team-page">
      <section className="team-hero-dark has-spine spine-dark" aria-labelledby="team-hero-heading">
        <TeamHeroScaffold />
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.hero.eyebrow}</span>
          </div>
          <div className="spine-content team-hero-dark-inner">
            <p className="team-hero-eyebrow-mono reveal">{c.hero.eyebrow}</p>
            <h1 className="team-editorial-hl reveal delay-1" id="team-hero-heading">
              {c.hero.headlineLine1}
              <br />
              <em>{c.hero.headlineLine2Em}</em>
            </h1>
            <p className="team-hero-lead reveal delay-2" style={{ whiteSpace: 'pre-line' }}>
              {c.hero.sub}
            </p>
          </div>
        </div>
      </section>

      <section
        className="team-christophe has-spine spine-light"
        aria-labelledby="team-christophe-heading"
      >
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.christophe.spineLabel}</span>
          </div>
          <div className="spine-content team-christophe-inner">
            <div className="team-christophe-grid">
              <figure className="team-christophe-photo reveal">
                <Image
                  src={c.christophe.photo}
                  alt={c.christophe.alt}
                  width={1920}
                  height={1080}
                  quality={92}
                  sizes="(max-width: 768px) 92vw, (max-width: 1100px) 46vw, 520px"
                  priority
                />
              </figure>
              <div className="team-christophe-copy">
                <h2 className="team-section-hl reveal" id="team-christophe-heading">
                  {c.christophe.heading}
                </h2>
                <div className="team-prose reveal delay-1">
                  <ProseBody text={c.christophe.body} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {c.sections.map((section, i) => (
        <section
          key={section.heading}
          className="team-prose-section has-spine spine-light"
          aria-labelledby={`team-section-${i}`}
        >
          <div className="spine-grid">
            <div className="spine-label spine-label-light" aria-hidden="true">
              <span />
            </div>
            <div className="spine-content team-prose-section-inner">
              <h2 className="team-section-hl reveal" id={`team-section-${i}`}>
                {section.heading}
              </h2>
              <div className={`team-prose reveal delay-${Math.min(i + 1, 3)}`}>
                <SectionBody body={section.body} linkSolutions={section.linkSolutions} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section
        className="team-network has-spine spine-light"
        aria-labelledby="team-network-heading"
      >
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.network.spineLabel}</span>
          </div>
          <div className="spine-content team-network-inner">
            <h2 className="team-section-hl reveal" id="team-network-heading">
              {c.network.heading}
            </h2>
            <p className="team-network-intro reveal delay-1">{c.network.intro}</p>
            <ul className="team-network-grid">
              {c.network.members.map((m, i) => (
                <li
                  key={m.slug}
                  className={`team-network-card reveal delay-${Math.min(i + 1, 3)}`}
                >
                  <figure className="team-network-photo">
                    <Image
                      src={m.photo}
                      alt={m.alt}
                      width={800}
                      height={800}
                      quality={88}
                      sizes="(max-width: 560px) 40vw, 140px"
                    />
                  </figure>
                  <p className="team-network-name">{m.name}</p>
                  <p className="team-network-role">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="team-closing-dark has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.closing.spineLabel}</span>
          </div>
          <div className="spine-content team-closing-dark-inner">
            <h2 className="team-closing-head reveal">{c.closing.heading}</h2>
            <p className="team-closing-lead reveal delay-1">{c.closing.body}</p>
            <div className="team-closing-actions reveal delay-2">
              <Link
                className="btn-primary"
                href={c.closing.primaryCtaHref as never}
                locale={locale}
              >
                <span>
                  <PrimaryRcCtaLabel locale={locale} label={c.closing.primaryCta} />
                </span>
                <span className="btn-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

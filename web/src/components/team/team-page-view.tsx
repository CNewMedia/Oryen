import Image from 'next/image';
import { Fragment } from 'react';

import { PrimaryRcCtaLabel } from '@/components/shell/reality-check-cta-label';
import { Link } from '@/i18n/navigation';

import type { TeamContent } from '@/types/team';

type Props = { content: TeamContent; locale: string };

const SOLUTIONS_URL = 'https://oryen.solutions';

function ParagraphWithSolutions({ text }: { text: string }) {
  if (!text.includes('ORYEN Solutions')) {
    return <p className="os-body">{text}</p>;
  }
  const bits = text.split('ORYEN Solutions');
  return (
    <p className="os-body">
      {bits.map((bit, i) => (
        <Fragment key={i}>
          {bit}
          {i < bits.length - 1 ? (
            <a
              className="os-link"
              href={SOLUTIONS_URL}
              rel="noopener noreferrer"
              target="_blank"
              style={{ border: 'none', padding: 0 }}
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
          <p key={i} className="os-body">
            {block}
          </p>
        )
      )}
    </>
  );
}

export function TeamPageView({ content: c, locale }: Props) {
  return (
    <div className="os-page os-team-page">
      <section className="os-section os-team-hero" aria-labelledby="team-hero-heading">
        <div className="os-container">
          <p className="os-eyebrow reveal">{c.hero.eyebrow}</p>
          <h1 className="os-display reveal delay-1" id="team-hero-heading">
            {c.hero.headlineLine1}
            <span className="os-h2-em">{c.hero.headlineLine2Em}</span>
          </h1>
          <p className="os-body reveal delay-2" style={{ whiteSpace: 'pre-line' }}>
            {c.hero.sub}
          </p>
        </div>
      </section>

      <section className="os-christophe" aria-labelledby="team-christophe-heading">
        <div className="os-container">
          <div className="os-christophe-grid">
            <figure className="os-christophe-photo reveal">
              <Image
                src={c.christophe.photo}
                alt={c.christophe.alt}
                width={1920}
                height={1080}
                quality={92}
                sizes="(max-width: 768px) 92vw, 480px"
                priority
              />
            </figure>
            <div>
              <h2 className="os-h2 reveal" id="team-christophe-heading">
                {c.christophe.heading}
              </h2>
              <div className="reveal delay-1">
                <ProseBody text={c.christophe.body} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {c.sections.map((section, i) => (
        <section
          key={section.heading}
          className="os-team-section"
          aria-labelledby={`team-section-${i}`}
        >
          <div className="os-container">
            <h2 className="os-h2 reveal" id={`team-section-${i}`}>
              {section.heading}
            </h2>
            <div className={`reveal delay-${Math.min(i + 1, 3)}`}>
              <ProseBody text={section.body} linkSolutions={section.linkSolutions} />
            </div>
          </div>
        </section>
      ))}

      <section className="os-team-section" aria-labelledby="team-network-heading">
        <div className="os-container">
          <h2 className="os-h2 reveal" id="team-network-heading">
            {c.network.heading}
          </h2>
          <p className="os-body reveal delay-1">{c.network.intro}</p>
          <ul className="os-network-grid">
            {c.network.members.map((m, i) => (
              <li
                key={m.slug}
                className={`os-network-card reveal delay-${Math.min(i + 1, 3)}`}
              >
                <figure className="os-network-photo">
                  <Image
                    src={m.photo}
                    alt={m.alt}
                    width={800}
                    height={800}
                    quality={88}
                    sizes="88px"
                  />
                </figure>
                <p className="os-network-name">{m.name}</p>
                <p className="os-network-role">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="os-section os-section--forest os-team-closing">
        <div className="os-container">
          <p className="os-eyebrow reveal">{c.closing.spineLabel}</p>
          <h2 className="os-h2 reveal delay-1">{c.closing.heading}</h2>
          <p className="os-body reveal delay-2">{c.closing.body}</p>
          <div className="os-actions reveal delay-3">
            <Link
              className="os-btn-primary btn-primary"
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
      </section>
    </div>
  );
}

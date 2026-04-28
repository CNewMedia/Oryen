import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import type { TeamContent } from '@/types/team';

type Props = { content: TeamContent };

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

export function TeamPageView({ content: c }: Props) {
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
        className="team-dark-grid has-spine spine-dark"
        aria-labelledby="team-grid-heading"
      >
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.team.spineLabel}</span>
          </div>
          <div className="spine-content team-dark-grid-inner">
            <h2 className="team-grid-intro-hl reveal" id="team-grid-heading">
              {c.team.intro}
            </h2>
            <div className="team-modules-grid">
              {c.team.members.map((m, i) => (
                <article
                  key={m.slug}
                  className={`team-module reveal delay-${Math.min(i + 1, 3)}${
                    i === 0 ? ' team-module--principal' : ''
                  }`}
                >
                  <figure className="team-module-photo">
                    <Image
                      src={m.photo}
                      alt={m.alt}
                      width={1920}
                      height={1080}
                      quality={92}
                      sizes="(max-width: 560px) 92vw, (max-width: 900px) 46vw, (max-width: 1100px) 32vw, 280px"
                      priority={i < 2}
                    />
                  </figure>
                  <p className="team-module-num">{m.num}</p>
                  <h3 className="team-module-name">{m.name}</h3>
                  <p className="team-module-role">{m.role}</p>
                  <div className="team-module-divider" aria-hidden="true" />
                  <p className="team-module-bio" style={{ whiteSpace: 'pre-line' }}>
                    {m.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="team-collab-strip has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.collaboration.spineLabel}</span>
          </div>
          <div className="spine-content team-collab-strip-inner">
            <h2 className="team-collab-head reveal">
              {c.collaboration.headlineLine1}
              <br />
              <em>{c.collaboration.headlineLine2Em}</em>
            </h2>
            <p className="team-collab-body reveal delay-1">{c.collaboration.lead}</p>
          </div>
        </div>
      </section>

      <section className="team-closing-dark has-spine spine-dark">
        <div className="spine-grid">
          <div className="spine-label spine-label-dark">
            <span>{c.closing.spineLabel}</span>
          </div>
          <div className="spine-content team-closing-dark-inner">
            <h2 className="team-closing-head reveal">
              {c.closing.headlineLine1}
              <br />
              <em>{c.closing.headlineLine2Em}</em>
            </h2>
            <p className="team-closing-lead reveal delay-1">{c.closing.body}</p>
            <div className="team-closing-actions reveal delay-2">
              <Link className="btn-primary" href={c.closing.primaryCtaHref as never}>
                <span>{c.closing.primaryCta}</span>
                <span className="btn-arrow" />
              </Link>
              <Link className="btn-ghost" href={c.closing.secondaryCtaHref as never}>
                {c.closing.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

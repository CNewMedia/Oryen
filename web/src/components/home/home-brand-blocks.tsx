type Props = { locale: string };

const SOLUTIONS_URL = 'https://oryen.solutions';

/** Execution bridge — directly after the Reality Check proposition (homepage only). */
export function HomeSolutionsBridge({ locale }: Props) {
  const isNl = locale === 'nl';

  return (
    <section className="s-solutions-bridge has-spine spine-light" aria-labelledby="solutions-bridge-heading">
      <div className="spine-grid">
        <div className="spine-label spine-label-light" aria-hidden="true">
          <span />
        </div>
        <div className="spine-content solutions-bridge-content">
          <h2 className="solutions-bridge-hl" id="solutions-bridge-heading">
            {isNl ? 'Van strategie naar digitale systemen' : 'From strategy to digital systems'}
          </h2>
          <p className="solutions-bridge-p stelling-p">
            {isNl ? (
              <>
                Wanneer uit de diagnose blijkt dat uw digitale infrastructuur, website of
                platform de groei blokkeert, zetten we de strategie om in tastbare producten
                via ons executielabel{' '}
                <a
                  className="solutions-bridge-link"
                  href={SOLUTIONS_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ORYEN Solutions
                </a>
                .
              </>
            ) : (
              <>
                When the diagnosis shows that your digital infrastructure, website or platform
                is blocking growth, we turn strategy into tangible products through our
                execution label{' '}
                <a
                  className="solutions-bridge-link"
                  href={SOLUTIONS_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  ORYEN Solutions
                </a>
                .
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

const ARCHITECTURE_CARDS = [
  {
    title: 'ORYEN',
    subtitleNl: 'strategic commercial intelligence',
    subtitleEn: 'Strategic commercial intelligence',
    href: 'https://oryen.be',
  },
  {
    title: 'ORYEN Solutions',
    subtitleNl: 'digital product builders',
    subtitleEn: 'Digital product builders',
    href: SOLUTIONS_URL,
  },
  {
    title: 'ORYEN.eu',
    subtitleNl: 'European brand presence',
    subtitleEn: 'European brand presence',
    href: 'https://oryen.eu',
  },
] as const;

/** Brand architecture — low visual weight, before the global footer. */
export function HomeBrandArchitecture({ locale }: Props) {
  const isNl = locale === 'nl';
  return (
    <section
      className="s-brand-architecture has-spine spine-light"
      aria-labelledby="brand-architecture-heading"
    >
      <div className="spine-grid">
        <div className="spine-label spine-label-light" aria-hidden="true">
          <span />
        </div>
        <div className="spine-content brand-architecture-content">
          <h2 className="brand-architecture-hl" id="brand-architecture-heading">
            The ORYEN architecture
          </h2>
          <p className="brand-architecture-intro stelling-p">
            {isNl ? (
              <>
                ORYEN helps companies identify where commercial growth gets stuck. ORYEN
                Solutions builds the digital products and systems that help remove that
                friction. ORYEN.eu anchors the European brand presence of ORYEN®.
              </>
            ) : (
              <>
                ORYEN identifies where commercial growth gets stuck. ORYEN Solutions builds
                the digital products and systems that help remove that friction. ORYEN.eu
                anchors the European brand presence of ORYEN®.
              </>
            )}
          </p>
          <ul className="brand-architecture-cards">
            {ARCHITECTURE_CARDS.map((card) => (
              <li key={card.href}>
                <a
                  className="brand-architecture-card"
                  href={card.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="brand-architecture-card-title">{card.title}</span>
                  <span className="brand-architecture-card-sub">
                    {isNl ? card.subtitleNl : card.subtitleEn}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

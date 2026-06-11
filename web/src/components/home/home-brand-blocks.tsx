type Props = { locale: string };

const SOLUTIONS_URL = 'https://oryen.solutions';

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
                ORYEN bepaalt waar commerciële groei vastloopt. ORYEN Solutions bouwt de
                digitale producten en systemen die helpen om die frictie weg te nemen.
                ORYEN.eu verankert de Europese merkaanwezigheid van ORYEN®.
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
                  <span className="brand-architecture-card-sub">{card.subtitleEn}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

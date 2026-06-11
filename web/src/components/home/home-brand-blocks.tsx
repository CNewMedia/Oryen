type Props = { locale: string };

const SOLUTIONS_URL = 'https://oryen.solutions';

const ARCHITECTURE_CARDS = [
  {
    title: 'ORYEN',
    subtitle: 'Strategic commercial intelligence',
    href: 'https://oryen.be',
  },
  {
    title: 'ORYEN Solutions',
    subtitle: 'Digital product builders',
    href: SOLUTIONS_URL,
  },
  {
    title: 'ORYEN.eu',
    subtitle: 'European brand presence',
    href: 'https://oryen.eu',
  },
] as const;

export function HomeBrandArchitecture({ locale: _locale }: Props) {
  return (
    <section
      className="os-section os-section--compact"
      aria-labelledby="brand-architecture-heading"
    >
      <div className="os-container">
        <h2 className="os-h2" id="brand-architecture-heading" style={{ fontSize: '1.125rem' }}>
          The ORYEN architecture
        </h2>
        <p className="os-body">
          {_locale === 'nl' ? (
            <>
              ORYEN bepaalt waar commerciële groei vastloopt. ORYEN Solutions bouwt de digitale
              producten en systemen die helpen om die frictie weg te nemen. ORYEN.eu verankert de
              Europese merkaanwezigheid van ORYEN®.
            </>
          ) : (
            <>
              ORYEN identifies where commercial growth gets stuck. ORYEN Solutions builds the
              digital products and systems that help remove that friction. ORYEN.eu anchors the
              European brand presence of ORYEN®.
            </>
          )}
        </p>
        <ul className="os-arch-grid">
          {ARCHITECTURE_CARDS.map((card) => (
            <li key={card.href}>
              <a
                className="os-arch-card"
                href={card.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="os-arch-card-title">{card.title}</span>
                <span className="os-arch-card-sub">{card.subtitle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

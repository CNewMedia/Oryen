import { Link } from '@/i18n/navigation';

type Props = {
  locale: string;
  label?: string;
};

const DEFAULT_LABEL = 'Plan een Reality Check-gesprek met Christophe';

/** Article footer CTA — locale-aware contact link, orange button with arrow. */
export function RealityCheckCTA({
  locale,
  label = DEFAULT_LABEL,
}: Props) {
  return (
    <div className="insight-rc-cta-wrap">
      <Link className="insight-rc-cta-btn" href="/contact" locale={locale}>
        <span className="insight-rc-cta-text">{label}</span>
        <span className="insight-rc-cta-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </div>
  );
}

import { Link } from '@/i18n/navigation';

type Props = {
  brandWordmark: string;
  tagline: string;
  ctaLabel: string;
};

/** Copy comes from Sanity `siteSettings` (per locale), merged in layout. */
export function SiteHeader({ brandWordmark, tagline, ctaLabel }: Props) {
  return (
    <nav className="nav" id="mainNav">
      <Link className="nav-logo" href="/">
        <span className="nav-logo-name">{brandWordmark}</span>
        <span className="nav-logo-line" />
        <span className="nav-logo-sub">{tagline}</span>
      </Link>
      <Link className="nav-cta" href="/aanbod">
        {ctaLabel}
      </Link>
    </nav>
  );
}

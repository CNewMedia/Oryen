import { Link } from '@/i18n/navigation';
import type { PathnameHref } from '@/i18n/routing';

export type FooterNavItem = { label: string; href: PathnameHref };

type Props = {
  brandShort: string;
  tagline: string;
  domain: string;
  /** Primary site links surfaced in the footer utility nav (labels localized upstream). */
  primaryLinks?: FooterNavItem[];
  primaryLabel?: string;
  /** Legal rows (Privacy, Cookies, …). Baseline is guaranteed by the site-settings bootstrap. */
  legalLinks?: { label: string; href: string }[];
  legalLabel?: string;
  socialLinks?: { label: string; url: string }[];
};

export function SiteFooter({
  brandShort,
  tagline,
  domain,
  primaryLinks = [],
  primaryLabel = 'Site',
  legalLinks = [],
  legalLabel = 'Legal',
  socialLinks = [],
}: Props) {
  return (
    <footer>
      <div className="footer-left">
        <span className="footer-brand">{brandShort}</span>
        {primaryLinks.length > 0 ? (
          <nav className="footer-nav" aria-label={primaryLabel}>
            <ul>
              {primaryLinks.map((l) => (
                <li key={`p-${l.href}-${l.label}`}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
        {legalLinks.length > 0 ? (
          <nav className="footer-legal" aria-label={legalLabel}>
            <ul>
              {legalLinks.map((l) => (
                <li key={`l-${l.href}-${l.label}`}>
                  {l.href.startsWith('http') ? (
                    <a href={l.href} rel="noopener noreferrer" target="_blank">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href as never}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
      <div className="footer-right">
        <span className="footer-base">
          {tagline} — {domain}
        </span>
        {socialLinks.length > 0 ? (
          <nav className="footer-social" aria-label="Social">
            <ul>
              {socialLinks.map((s) => (
                <li key={`${s.url}-${s.label}`}>
                  <a href={s.url} rel="noopener noreferrer" target="_blank">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </footer>
  );
}

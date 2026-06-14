import { FooterCookiePreferences } from '@/components/shell/footer-cookie-preferences';
import { FooterLanguageSwitch } from '@/components/shell/footer-language-switch';
import { Link } from '@/i18n/navigation';
import type { StaticPathnameHref } from '@/i18n/routing';

export type FooterNavItem = { label: string; href: StaticPathnameHref };

type Props = {
  brandShort: string;
  tagline: string;
  domain: string;
  locale?: string;
  /** Primary site links surfaced in the footer utility nav (labels localized upstream). */
  primaryLinks?: FooterNavItem[];
  primaryLabel?: string;
  /** Legal rows (Privacy, Cookies, …). Baseline is guaranteed by the site-settings bootstrap. */
  legalLinks?: { label: string; href: string }[];
  legalLabel?: string;
  socialLinks?: { label: string; url: string }[];
};

const FOOTER_BRAND_LINKS = [
  { label: 'ORYEN.eu', href: 'https://oryen.eu' },
  { label: 'ORYEN Solutions', href: 'https://oryen.solutions' },
] as const;

const FOOTER_TRADEMARK_NL =
  'ORYEN® is een geregistreerd Benelux-woordmerk (no. 1535652) van CNIP bv. © 2026';

const FOOTER_TRADEMARK_EN =
  'ORYEN® is a registered Benelux word mark (no. 1535652) owned by CNIP bv. © 2026';

export function SiteFooter({
  brandShort,
  tagline: _tagline,
  domain: _domain,
  locale = 'nl',
  primaryLinks = [],
  primaryLabel = 'Site',
  legalLinks = [],
  legalLabel = 'Legal',
  socialLinks = [],
}: Props) {
  return (
    <footer>
      <div className="oryen-site-container mx-auto max-w-[1200px] px-6">
        <div className="footer-inner">
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
            <FooterLanguageSwitch />
            <FooterCookiePreferences />
            <div className="footer-brand-arch">
              <p>ORYEN® is a strategic commercial intelligence brand by CNIP bv.</p>
              <p>ORYEN.eu is the European brand presence of ORYEN®.</p>
              <p>
                ORYEN Solutions is the digital product and systems label within the ORYEN®
                brand architecture.
              </p>
              <nav className="footer-brand-arch-links" aria-label="ORYEN brand family">
                <ul>
                  {FOOTER_BRAND_LINKS.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} rel="noopener noreferrer" target="_blank">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer-right">
            <span className="footer-base footer-trademark">
              {locale === 'en' ? FOOTER_TRADEMARK_EN : FOOTER_TRADEMARK_NL}
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
        </div>
      </div>
    </footer>
  );
}

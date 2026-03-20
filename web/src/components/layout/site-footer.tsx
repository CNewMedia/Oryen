import Link from 'next/link';

import { routes } from '@/lib/routes';

import { Container } from './container';

const footerColumns = [
  {
    title: 'Index',
    links: [
      { href: routes.realityCheck, label: 'Reality Check' },
      { href: routes.aanbod, label: 'Aanbod' },
      { href: routes.casestudies, label: 'Casestudies' },
    ],
  },
  {
    title: 'Studio',
    links: [
      { href: routes.overOns, label: 'Over ons' },
      { href: routes.insights, label: 'Insights' },
      { href: routes.contact, label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-canvas-muted">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="font-display text-xl font-medium text-ink">ORYEN</p>
            <p className="mt-4 max-w-sm text-body-sm leading-relaxed text-ink-muted">
              [Brand descriptor — ~18 words. Final copy pending.]
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <p className="text-label font-medium uppercase text-ink-muted">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line/80 pt-8 text-body-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ORYEN</p>
          <div className="flex flex-wrap gap-4">
            <span>[Juridisch — link]</span>
            <span>[Privacy — link]</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

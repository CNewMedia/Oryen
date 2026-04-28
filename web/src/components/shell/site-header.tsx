'use client';

import { useEffect, useState } from 'react';

import { Link, usePathname } from '@/i18n/navigation';
import { localizedPathnames, type PathnameHref } from '@/i18n/routing';

export type HeaderNavItem = { label: string; href: PathnameHref };

type Props = {
  brandWordmark: string;
  tagline: string;
  ctaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  primaryLabel: string;
  navItems: HeaderNavItem[];
};

function stripTrailing(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

/**
 * Path segments (no locale prefix) whose first screen is a full-viewport dark
 * pine hero. Includes NL/EN localized segments for `/aanbod` and `/aanpak`
 * so `usePathname()` matches regardless of locale URL shape.
 */
const DARK_HERO_ROUTES = new Set<string>([
  '/',
  localizedPathnames['/aanbod'].nl,
  localizedPathnames['/aanbod'].en,
  localizedPathnames['/aanpak'].nl,
  localizedPathnames['/aanpak'].en,
  localizedPathnames['/team'],
]);

export function SiteHeader({
  brandWordmark,
  tagline,
  ctaLabel,
  openMenuLabel,
  closeMenuLabel,
  primaryLabel,
  navItems,
}: Props) {
  const pathname = stripTrailing(usePathname());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const isDarkHero = DARK_HERO_ROUTES.has(pathname);

  return (
    <nav
      className={`nav${isDarkHero ? ' nav--over-dark' : ''}`}
      id="mainNav"
      aria-label={primaryLabel}
    >
      <Link className="nav-logo" href="/">
        <span className="nav-logo-name">{brandWordmark}</span>
        <span className="nav-logo-line" />
        <span className="nav-logo-sub">{tagline}</span>
      </Link>

      <ul className="nav-primary" role="list">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`nav-link${isActive(item.href) ? ' is-active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-end">
        <Link className="nav-cta" href="/aanbod">
          {ctaLabel}
        </Link>
        <button
          type="button"
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-expanded={open}
          aria-controls="navDrawer"
          aria-label={open ? closeMenuLabel : openMenuLabel}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div
        id="navDrawer"
        className={`nav-drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        aria-label={primaryLabel}
      >
        <ul role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={isActive(item.href) ? 'is-active' : undefined}
                tabIndex={open ? 0 : -1}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="nav-drawer-cta-row">
            <Link
              href="/aanbod"
              onClick={() => setOpen(false)}
              className="nav-drawer-cta"
              tabIndex={open ? 0 : -1}
            >
              {ctaLabel}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

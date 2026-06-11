'use client';

import { useEffect, useState } from 'react';

import { Link, usePathname } from '@/i18n/navigation';
import { localizedPathnames, type StaticPathnameHref } from '@/i18n/routing';

export type HeaderNavItem = { label: string; href: StaticPathnameHref };

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
  localizedPathnames['/aanbod'].nl,
  localizedPathnames['/aanbod'].en,
  localizedPathnames['/aanpak'].nl,
  localizedPathnames['/aanpak'].en,
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
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
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
    <>
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
          {/* Hit area ≥44px via .nav-toggle (see oryen-premium.css); icon stays visually compact. */}
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
      </nav>

      {/* Outside <nav> so position:fixed is viewport-relative (nav uses backdrop-filter). */}
      <div
        id="navDrawer"
        className={`nav-drawer${open ? ' is-open' : ''}`}
        role={open ? 'dialog' : undefined}
        aria-modal={open ? true : undefined}
        aria-hidden={!open}
        aria-label={primaryLabel}
      >
        <div className="nav-drawer-top">
          <span className="nav-drawer-top-spacer" aria-hidden="true" />
          <button
            type="button"
            className="nav-drawer-close"
            aria-label={closeMenuLabel}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            <span className="nav-drawer-close-icon" aria-hidden="true" />
          </button>
        </div>
        <ul role="list">
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
        </ul>
      </div>
    </>
  );
}

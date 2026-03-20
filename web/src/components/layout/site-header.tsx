'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ButtonLink } from '@/components/ui/button-link';
import { primaryNav } from '@/lib/nav';
import { cn } from '@/lib/utils/cn';

import { Container } from './container';

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-[4.25rem]">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          ORYEN
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-sm px-3 py-2 text-body-sm text-ink-muted transition-colors hover:text-ink',
                  active && 'text-ink'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Contact
          </ButtonLink>

          <details className="relative lg:hidden">
            <summary className="cursor-pointer list-none rounded-sm border border-line px-3 py-2 text-body-sm text-ink">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-sm border border-line bg-canvas p-2 shadow-lg">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-sm px-3 py-2 text-body-sm text-ink-muted hover:bg-canvas-muted hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

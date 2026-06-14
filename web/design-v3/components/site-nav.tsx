'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CTAButton } from './cta-button'

const links = [
  { label: 'Aanpak', href: '/aanpak' },
  { label: 'Cases', href: '/cases' },
  { label: 'Aanbod', href: '/aanbod' },
  { label: 'Inzichten', href: '/inzichten' },
  { label: 'Over ORYEN', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-pine/95 backdrop-blur-md border-b border-pine-hairline'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-[26px] font-semibold tracking-[0.12em] text-pine-foreground">
            ORYEN
          </span>
          <span className="mt-1 font-display text-[11px] italic tracking-[0.14em] text-pine-foreground/55">
            Direction before action.
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-underline text-[14px] text-pine-foreground/80 transition-colors hover:text-pine-foreground focus-visible:outline-none focus-visible:text-amber"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CTAButton href="/reality-check" variant="amber" withArrow={false}>
            Reality Check
          </CTAButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Sluit menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-pine-foreground md:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-px w-6 bg-current transition-transform ${
                open ? 'top-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-px w-6 bg-current transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-current transition-transform ${
                open ? 'top-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-pine-hairline bg-pine/98 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[16px] text-pine-foreground/85"
              >
                {link.label}
              </Link>
            ))}
            <CTAButton href="/reality-check" variant="amber" className="mt-2">
              Reality Check
            </CTAButton>
          </nav>
        </div>
      )}
    </header>
  )
}

import Link from 'next/link'

const links = [
  { label: 'Aanpak', href: '/aanpak' },
  { label: 'Cases', href: '/cases' },
  { label: 'Aanbod', href: '/aanbod' },
  { label: 'Inzichten', href: '/inzichten' },
  { label: 'Over ORYEN', href: '/team' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Cookies', href: '#' },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-pine text-pine-foreground">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-display text-[32px] font-semibold tracking-[0.12em] text-pine-foreground">
              ORYEN
            </span>
            <p className="mt-3 font-display text-[20px] italic text-amber">
              Direction before action.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-8 gap-y-3 md:justify-end">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[14px] text-pine-foreground/80 transition-colors hover:text-amber focus-visible:outline-none focus-visible:text-amber"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4 text-[13px] uppercase tracking-[0.14em] text-pine-foreground/55">
              <button type="button" className="transition-colors hover:text-pine-foreground">
                NLD
              </button>
              <span aria-hidden="true" className="text-pine-foreground/30">
                /
              </span>
              <button type="button" className="transition-colors hover:text-pine-foreground">
                ENG
              </button>
              <span aria-hidden="true" className="text-pine-foreground/30">
                ·
              </span>
              <button type="button" className="transition-colors hover:text-pine-foreground">
                Cookievoorkeuren
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-3 border-t border-pine-hairline pt-8 text-[13px] leading-relaxed text-pine-foreground/55 md:max-w-[820px]">
          <p>
            ORYEN® is een strategisch merk voor commerciële helderheid van CNIP
            bv.
          </p>
          <p>ORYEN.eu is de Europese merkaanwezigheid van ORYEN®.</p>
          <p>
            ORYEN Solutions is het digitale product- en systeemlabel binnen de
            ORYEN®-merkarchitectuur.
          </p>
          <p className="mt-3 text-pine-foreground/45">
            ORYEN® is een geregistreerd Benelux-woordmerk van CNIP bv. © 2026
          </p>
        </div>
      </div>
    </footer>
  )
}

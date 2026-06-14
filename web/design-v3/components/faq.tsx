'use client'

import { useState } from 'react'

type FaqItem = { q: string; a: React.ReactNode }

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-[19px] font-medium text-ink">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-hairline text-ink transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen
                  ? 'grid-rows-[1fr] pb-6 opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-[680px] text-[16px] leading-relaxed text-ink/75">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

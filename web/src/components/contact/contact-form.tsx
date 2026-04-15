'use client';

import { useLocale, useTranslations } from 'next-intl';

export function ContactForm() {
  const locale = useLocale();
  const t = useTranslations('ContactForm');

  return (
    <form
      action="/api/contact"
      method="post"
      className="mt-10 max-w-xl space-y-6 border-t border-[var(--rule)] pt-10"
    >
      <input type="hidden" name="locale" value={locale} />
      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-['DM_Mono',monospace] text-[0.55rem] uppercase tracking-[0.14em] text-[var(--ink3)]"
        >
          {t('name')}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full border border-[var(--rule)] bg-white/60 px-4 py-3 text-[0.95rem] font-light text-[var(--ink)] outline-none ring-0 transition focus:border-[var(--ink3)]"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-2 block font-['DM_Mono',monospace] text-[0.55rem] uppercase tracking-[0.14em] text-[var(--ink3)]"
        >
          {t('email')}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full border border-[var(--rule)] bg-white/60 px-4 py-3 text-[0.95rem] font-light text-[var(--ink)] outline-none transition focus:border-[var(--ink3)]"
        />
      </div>
      <div>
        <label
          htmlFor="company"
          className="mb-2 block font-['DM_Mono',monospace] text-[0.55rem] uppercase tracking-[0.14em] text-[var(--ink3)]"
        >
          {t('company')}{' '}
          <span className="text-[var(--ink3)]/60">{t('companyOptional')}</span>
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className="w-full border border-[var(--rule)] bg-white/60 px-4 py-3 text-[0.95rem] font-light text-[var(--ink)] outline-none transition focus:border-[var(--ink3)]"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-['DM_Mono',monospace] text-[0.55rem] uppercase tracking-[0.14em] text-[var(--ink3)]"
        >
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y border border-[var(--rule)] bg-white/60 px-4 py-3 text-[0.95rem] font-light text-[var(--ink)] outline-none transition focus:border-[var(--ink3)]"
        />
      </div>
      <button type="submit" className="btn-primary !bg-[var(--ink)] !text-[var(--cream)]">
        <span>{t('submit')}</span>
        <span className="btn-arrow !bg-[var(--amber)]" />
      </button>
    </form>
  );
}

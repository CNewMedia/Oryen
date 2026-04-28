'use client';

import type { ContactFormLabels } from '@/types/cms-page';

type Props = {
  locale: string;
  labels: ContactFormLabels;
};

export function ContactForm({ locale, labels }: Props) {
  return (
    <form
      id="contact-form"
      action="/api/contact"
      method="post"
      className="contact-form"
    >
      <input type="hidden" name="locale" value={locale} />

      <div className="contact-field">
        <label htmlFor="name" className="contact-label">
          {labels.name}
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="email" className="contact-label">
          {labels.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="company" className="contact-label">
          {labels.company}{' '}
          <span className="contact-label-optional">{labels.optional}</span>
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="phone" className="contact-label">
          {labels.phone}{' '}
          <span className="contact-label-optional">{labels.optional}</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="contact-input"
        />
      </div>

      <div className="contact-field">
        <label htmlFor="message" className="contact-label">
          {labels.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="contact-input contact-textarea"
        />
      </div>

      <button type="submit" className="btn-primary contact-submit">
        <span>{labels.submit}</span>
        <span className="btn-arrow" />
      </button>
    </form>
  );
}

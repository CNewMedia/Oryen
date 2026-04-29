import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact/contact-form';
import {
  alternatesForPath,
  documentTitleAbsolute,
  ogImagesForPage,
} from '@/lib/metadata/defaults';
import {
  getCachedContactPage,
  getCachedSiteSettings,
} from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [{ seo }, settings] = await Promise.all([
    getCachedContactPage(locale),
    getCachedSiteSettings(locale),
  ]);
  const images = ogImagesForPage(undefined);
  return {
    title: documentTitleAbsolute(seo.title),
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    alternates: alternatesForPath(locale, '/contact'),
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
      siteName: settings.siteTitle,
      ...(images ? { images } : {}),
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const [c, settings] = await Promise.all([
    getCachedContactPage(locale),
    getCachedSiteSettings(locale),
  ]);

  const addressLines = (settings.contactAddress ?? '')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const brand = settings.headerBrandWordmark || settings.siteTitle || 'ORYEN';
  const mailEmail = settings.contactEmail ?? 'info@oryen.be';

  return (
    <div className="contact-page">
      <section className="contact-hero has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.hero.eyebrow}</span>
          </div>
          <div className="spine-content contact-hero-content">
            <div className="contact-hero-split">
              <div className="contact-hero-copy">
                <p className="contact-eyebrow reveal">{c.hero.eyebrow}</p>
                <h1 className="stelling-hl contact-hero-headline reveal delay-1">
                  {c.hero.headline}
                </h1>
                <p className="contact-hero-sub reveal delay-2">{c.hero.sub}</p>
              </div>
              <div className="contact-hero-form-col reveal delay-2">
                <h2 className="contact-form-sr-title">{c.form.headline}</h2>
                <ContactForm locale={locale} labels={c.form.labels} />
              </div>
            </div>

            <div className="contact-mailto-strip reveal delay-3">
              <p className="contact-mailto-prompt">{c.mailto.prompt}</p>
              <a href={`mailto:${mailEmail}`} className="contact-mailto-link">
                {mailEmail}
              </a>
              <p className="contact-mailto-note">{c.mailto.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-expectations has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{c.expectations.headline}</span>
          </div>
          <div className="spine-content contact-expectations-content">
            <h2 className="contact-section-hl">{c.expectations.headline}</h2>
            <p className="contact-expectations-body">{c.expectations.body}</p>
          </div>
        </div>
      </section>

      <section className="contact-reassurance has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>ORYEN</span>
          </div>
          <div className="spine-content contact-reassurance-content">
            <p className="contact-reassurance-body">{c.reassurance.body}</p>
            <p className="contact-reassurance-note">{c.reassurance.note}</p>
          </div>
        </div>
      </section>

      <section className="contact-details contact-details--footer has-spine spine-light">
        <div className="spine-grid">
          <div className="spine-label spine-label-light">
            <span>{locale === 'en' ? 'Details' : 'Gegevens'}</span>
          </div>
          <div className="spine-content contact-details-content">
            <dl className="contact-details-grid">
              <div className="contact-details-row">
                <dt className="contact-details-label">
                  {locale === 'en' ? 'Brand' : 'Merk'}
                </dt>
                <dd className="contact-details-value">{brand}</dd>
              </div>

              <div className="contact-details-row">
                <dt className="contact-details-label">
                  {locale === 'en' ? 'Email' : 'E-mail'}
                </dt>
                <dd className="contact-details-value">
                  <a href={`mailto:${mailEmail}`} className="contact-details-link">
                    {mailEmail}
                  </a>
                </dd>
              </div>

              {settings.contactPhone ? (
                <div className="contact-details-row">
                  <dt className="contact-details-label">
                    {locale === 'en' ? 'Phone' : 'Telefoon'}
                  </dt>
                  <dd className="contact-details-value">
                    <a
                      href={`tel:${settings.contactPhone.replace(/\s+/g, '')}`}
                      className="contact-details-link"
                    >
                      {settings.contactPhone}
                    </a>
                  </dd>
                </div>
              ) : null}

              {addressLines.length ? (
                <div className="contact-details-row">
                  <dt className="contact-details-label">
                    {locale === 'en' ? 'Address' : 'Adres'}
                  </dt>
                  <dd className="contact-details-value">
                    {addressLines.map((line, i) => (
                      <span key={`${line}-${i}`} className="contact-details-line">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

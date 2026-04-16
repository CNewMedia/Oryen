import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact/contact-form';
import { InnerPage } from '@/components/ui/inner-page';
import { getCachedContactPage } from '@/lib/sanity/cached-loaders';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const { seo } = await getCachedContactPage(locale);
  return {
    title: seo.title,
    description: seo.description,
    robots: seo.robotsIndex ? undefined : { index: false, follow: false },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      locale,
      type: 'website',
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const c = await getCachedContactPage(locale);

  return (
    <InnerPage eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <ContactForm />
    </InnerPage>
  );
}

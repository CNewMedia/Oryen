import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ContactForm } from '@/components/contact/contact-form';
import { InnerPage } from '@/components/ui/inner-page';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Pages' });
  return {
    title: `${t('contact.title')} | ORYEN`,
    description: t('contact.intro'),
  };
}

export default async function ContactPage({ params }: Props) {
  await params;
  const t = await getTranslations('Pages');

  return (
      <InnerPage
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        intro={t('contact.intro')}
      >
        <ContactForm />
      </InnerPage>
  );
}

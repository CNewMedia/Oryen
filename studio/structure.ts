import type { StructureResolver } from 'sanity/structure';

function singleton(
  S: Parameters<StructureResolver>[0],
  documentId: string,
  schemaType: string,
  title: string
) {
  return S.listItem()
    .title(title)
    .id(`singleton-${documentId}`)
    .child(
      S.document().schemaType(schemaType).documentId(documentId).title(title)
    );
}

/** Fixed IDs match `web/scripts/seed-cms.ts` (createOrReplace). */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('ORYEN')
    .items([
      S.listItem()
        .title('Site-wide')
        .id('site-wide')
        .child(
          S.list()
            .title('Site-wide')
            .items([
              singleton(
                S,
                'oryen.realityCheck',
                'realityCheckPage',
                'Reality Check'
              ),
              singleton(S, 'oryen.overOns', 'overOnsPage', 'Over ons'),
            ])
        ),
      S.listItem()
        .title('Nederlands')
        .id('locale-nl')
        .child(
          S.list()
            .title('Nederlands')
            .items([
              singleton(
                S,
                'oryen.siteSettings.nl',
                'siteSettings',
                'Site settings'
              ),
              singleton(S, 'oryen.homepage.nl', 'homepage', 'Homepage'),
              singleton(S, 'oryen.aanbod.nl', 'aanbodPage', 'Aanbod'),
              singleton(
                S,
                'oryen.insightsOverview.nl',
                'insightsOverviewPage',
                'Insights — overview'
              ),
              singleton(
                S,
                'oryen.casestudiesOverview.nl',
                'casestudiesOverviewPage',
                'Cases — overview'
              ),
              singleton(S, 'oryen.contact.nl', 'contactPage', 'Contact'),
              singleton(
                S,
                'oryen.thankYou.nl',
                'thankYouPage',
                'Thank you'
              ),
              singleton(
                S,
                'oryen.legal.nl.privacy',
                'legalPage',
                'Privacy'
              ),
              singleton(
                S,
                'oryen.legal.nl.cookies',
                'legalPage',
                'Cookies'
              ),
            ])
        ),
      S.listItem()
        .title('English')
        .id('locale-en')
        .child(
          S.list()
            .title('English')
            .items([
              singleton(
                S,
                'oryen.siteSettings.en',
                'siteSettings',
                'Site settings'
              ),
              singleton(S, 'oryen.homepage.en', 'homepage', 'Homepage'),
              singleton(S, 'oryen.aanbod.en', 'aanbodPage', 'Aanbod'),
              singleton(
                S,
                'oryen.insightsOverview.en',
                'insightsOverviewPage',
                'Insights — overview'
              ),
              singleton(
                S,
                'oryen.casestudiesOverview.en',
                'casestudiesOverviewPage',
                'Cases — overview'
              ),
              singleton(S, 'oryen.contact.en', 'contactPage', 'Contact'),
              singleton(
                S,
                'oryen.thankYou.en',
                'thankYouPage',
                'Thank you'
              ),
              singleton(
                S,
                'oryen.legal.en.privacy',
                'legalPage',
                'Privacy'
              ),
              singleton(
                S,
                'oryen.legal.en.cookies',
                'legalPage',
                'Cookies'
              ),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('caseStudy').title('Case studies'),
      S.documentTypeListItem('insightArticle').title('Insight articles'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('teamMember').title('Team'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
    ]);

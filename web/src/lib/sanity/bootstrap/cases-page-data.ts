import type { CasesPageContent } from '@/types/cases-page';

export const CASES_PAGE_NL = {
  meta: {
    title: 'Cases — ORYEN',
    description:
      'Drie voorbeelden van richting vóór uitvoering: Hof van Cleve, Willems Veranda, en een industrieel B2B/B2C-traject.',
  },
  hero: {
    spine: '00 — CASES',
    eyebrow: 'VAN RUIS NAAR BEWIJS',
    headlineBefore: 'Niet wat we doen.',
    headlineEm: 'Wat het oplevert.',
    sub:
      'Elke case begon met een keuze: eerst de richting bepalen, dan het systeem bouwen. Dit zijn de resultaten.',
  },
  disclaimer: {
    eyebrow: 'MEER CASES BESCHIKBAAR',
    body:
      'Veel van het werk dat ORYEN doet, gebeurt onder vertrouwelijkheid. Sectorgevoelige trajecten, interne herstructureringen of strategische heroriëntaties komen niet publiek. Voor referenties die passen bij uw eigen sector of context, plan een gesprek met Christophe.',
    ctaLabel: 'Plan een Reality Check-gesprek met Christophe',
  },
  cases: [
    {
      slug: 'hof-van-cleve',
      title: 'HOF VAN CLEVE',
      categoryLabel: 'DISTRIBUTIE & MERKHEFBOOM',
      tagline: 'Van bijna offline naar 52K volgers.',
      situation:
        'Vijf jaar geleden was Hof van Cleve een driesterrenrestaurant met een onaantastbare reputatie offline — en nauwelijks aanwezigheid online. Een community ontbrak. Geen herkenbare stijl, geen consequente aanwezigheid. Het toekomstig clienteel — een jongere generatie met andere mediagewoonten — bouwde geen binding op met het merk.',
      metrics: [
        { value: '52K', label: 'VOLGERS (organisch)' },
        { value: '297K', label: 'IMPRESSIES/MAAND' },
        { value: '6.9K', label: 'INTERACTIES/MAAND' },
        { value: '0€', label: 'ADS-BUDGET' },
      ],
      oryenLine:
        'Niet commercieel zichtbaarder maken. Wel het merk aantrekkelijk maken bij een nieuwe generatie zonder de klasse te verliezen.',
      outcome:
        'Vier jaar gericht werken aan betrokkenheid en jeugdiger merkgevoel. Geen wedstrijden, geen kortingen, geen harde push — wel een duidelijke lijn in beeldtaal, consequente aanwezigheid, openheid over het proces in de keuken en ruimte voor het verhaal van Peter, Lieve en het team. Tot een jongere overnemer de fakkel kon overnemen, met een community die mee overstapte.',
      displayMode: 'photo',
      imageSrc: '/images/cases/hof-van-cleve.jpg',
      videoSrc: '/videos/hvc20.mov',
    },
    {
      slug: 'willems-veranda',
      title: 'WILLEMS VERANDA',
      categoryLabel: 'VINDBAARHEID ALS SYSTEEM',
      tagline: '6 jaar SEO-dominantie in een verzadigde markt.',
      situation:
        'Sterk vakmanschap, een degelijk product, een loyale klantenkring. Maar online nauwelijks vindbaar in een sector waarin klanten hun keuze vandaag online voorbereiden. Concurrenten met grotere advertentiebudgetten domineerden de eerste pagina van Google. Verkoop hing af van mond-tot-mond en lokale reputatie — niet van een herhaalbaar systeem.',
      metrics: [
        { value: '51', label: 'KEYWORDS TOP 3' },
        { value: '332', label: 'TOTAAL RANKINGS' },
        { value: '6', label: 'JAAR PARTNERSHIP' },
        { value: '3×', label: 'MERK VAN HET JAAR' },
      ],
      oryenLine:
        'Niet eerst meer reclame. Eerst de digitale aansluiting maken die er nog niet was.',
      outcome:
        'Eén strategische keuze: thema-architectuur boven losse content. Geen losse campagnes, geen advertentiebudget als hefboom — wel een systeem dat gebouwd werd om te blijven werken, ook zonder voortdurende heractivering. Zes jaar later blijven tientallen kernzoektermen bovenaan, drie jaar op rij Merk van het Jaar in de sector, en groeit het bedrijf vanuit instroom in plaats van inspanning.',
      displayMode: 'photo',
      imageSrc: '/images/cases/willems-veranda.jpg',
      videoSrc: null,
    },
    {
      slug: 'industrial-b2b-b2c',
      title: 'INDUSTRIEEL BEDRIJF (B2B & B2C)',
      categoryLabel: 'INSTROOMMACHINE (CRM-READY)',
      tagline: 'Van chaos naar systeem. 240 leads per maand.',
      situation:
        'Een industrieel bedrijf met activiteiten in zowel B2B (industriële verbindingssystemen voor de bouwsector) als B2C (eindgebruikers via gespecialiseerde dealers). Sterk product, gevestigde reputatie, een loyaal klantenbestand opgebouwd over jaren. Maar de commerciële instroom liep grillig: leads kwamen vanuit verschillende kanalen zonder samenhang, opvolging gebeurde ad-hoc, en niemand had overzicht over wat werkelijk werkte. Het management voelde dat er meer in zat — maar wist niet waar de blokkade zat.',
      metrics: [
        { value: '240', label: 'LEADS/MAAND' },
        { value: '4', label: 'KANALEN GEÏNTEGREERD' },
        { value: '40%', label: 'INBOUND + SEO' },
      ],
      oryenLine:
        'Niet meer kanalen toevoegen. Eerst de bestaande pipeline zichtbaar maken.',
      outcome:
        'De Reality Check toonde dat het probleem niet zat in zichtbaarheid of vraag — wel in opvolging en samenhang tussen B2B en B2C-werking. Daarna pas: pipeline opgezet, vier kanalen geïntegreerd, CRM ingericht voor beide commerciële sporen. 240 leads per maand, meetbaar, opvolgbaar, en met 40% van de instroom uit inbound en SEO — een verschuiving van afhankelijkheid naar systeem. Op vraag van de klant blijft de naam confidentieel.',
      displayMode: 'typographic',
      imageSrc: null,
      videoSrc: null,
    },
  ],
} satisfies CasesPageContent;

export const CASES_PAGE_EN = {
  meta: {
    title: 'Cases — ORYEN',
    description:
      'Three examples of direction before execution: Hof van Cleve, Willems Veranda, and an industrial B2B/B2C trajectory.',
  },
  hero: {
    spine: '00 — CASES',
    eyebrow: 'FROM NOISE TO PROOF',
    headlineBefore: 'Not what we do.',
    headlineEm: 'What it delivers.',
    sub:
      'Every case began with a choice: first determine direction, then build the system. These are the results.',
  },
  disclaimer: {
    eyebrow: 'MORE CASES AVAILABLE',
    body:
      "Much of ORYEN's work happens under confidentiality. Sector-sensitive trajectories, internal restructurings, or strategic reorientations don't go public. For references that fit your own sector or context, book a conversation with Christophe.",
    ctaLabel: 'Book a Reality Check conversation with Christophe',
  },
  cases: [
    {
      slug: 'hof-van-cleve',
      title: 'HOF VAN CLEVE',
      categoryLabel: 'DISTRIBUTION & BRAND LEVERAGE',
      tagline: 'From nearly offline to 52K followers.',
      situation:
        'Five years ago, Hof van Cleve was a three-Michelin-starred restaurant with an untouchable offline reputation — and barely any online presence. No community. No recognisable style, no consistent presence. The future clientele — a younger generation with different media habits — was not building any connection with the brand.',
      metrics: [
        { value: '52K', label: 'FOLLOWERS (organic)' },
        { value: '297K', label: 'IMPRESSIONS/MONTH' },
        { value: '6.9K', label: 'INTERACTIONS/MONTH' },
        { value: '0€', label: 'ADS BUDGET' },
      ],
      oryenLine:
        'Not making the brand commercially more visible. Instead, making it appealing to a new generation without losing its class.',
      outcome:
        'Four years of focused work on engagement and a younger brand sentiment. No contests, no discounts, no hard push — but a clear visual line, consistent presence, openness about what happens in the kitchen, and room for the story of Peter, Lieve and the team. Until a younger successor could take over the torch, with a community that came along.',
      displayMode: 'photo',
      imageSrc: '/images/cases/hof-van-cleve.jpg',
      videoSrc: '/videos/hvc20.mov',
    },
    {
      slug: 'willems-veranda',
      title: 'WILLEMS VERANDA',
      categoryLabel: 'FINDABILITY AS A SYSTEM',
      tagline: '6 years of SEO dominance in a saturated market.',
      situation:
        'Strong craftsmanship, a solid product, a loyal customer base. But hardly findable online in a sector where customers prepare their decisions on Google first. Competitors with larger advertising budgets dominated the first page. Sales depended on word-of-mouth and local reputation — not on a repeatable system.',
      metrics: [
        { value: '51', label: 'KEYWORDS TOP 3' },
        { value: '332', label: 'TOTAL RANKINGS' },
        { value: '6', label: 'YEARS PARTNERSHIP' },
        { value: '3×', label: 'BRAND OF THE YEAR' },
      ],
      oryenLine:
        "Not more advertising first. First building the digital connection that wasn't there yet.",
      outcome:
        'One strategic choice: theme-architecture above loose content. No scattered campaigns, no advertising budget as a lever — but a system built to keep working, even without continuous reactivation. Six years later, dozens of core search terms remain at the top, three consecutive years Brand of the Year in the sector, and the company grows from inflow rather than effort.',
      displayMode: 'photo',
      imageSrc: '/images/cases/willems-veranda.jpg',
      videoSrc: null,
    },
    {
      slug: 'industrial-b2b-b2c',
      title: 'INDUSTRIAL COMPANY (B2B & B2C)',
      categoryLabel: 'INFLOW MACHINE (CRM-READY)',
      tagline: 'From chaos to system. 240 leads per month.',
      situation:
        'An industrial company with activities in both B2B (industrial connection systems for the construction sector) and B2C (end users via specialised dealers). Strong product, established reputation, a loyal customer base built over years. But commercial inflow was erratic: leads came from various channels without coherence, follow-up happened ad-hoc, and no one had an overview of what actually worked. Management felt there was more in it — but didn\'t know where the blockage sat.',
      metrics: [
        { value: '240', label: 'LEADS/MONTH' },
        { value: '4', label: 'CHANNELS INTEGRATED' },
        { value: '40%', label: 'INBOUND + SEO' },
      ],
      oryenLine:
        'Not adding more channels. First making the existing pipeline visible.',
      outcome:
        "The Reality Check showed that the problem wasn't in visibility or demand — it sat in follow-up and coherence between B2B and B2C operations. Only then: pipeline set up, four channels integrated, CRM configured for both commercial tracks. 240 leads per month, measurable, traceable, with 40% of inflow coming from inbound and SEO — a shift from dependence to system. At the client's request, the name remains confidential.",
      displayMode: 'typographic',
      imageSrc: null,
      videoSrc: null,
    },
  ],
} satisfies CasesPageContent;

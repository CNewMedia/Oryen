import type { TeamContent, TeamNetworkMember } from '@/types/team';

const PHOTO = {
  christophe: '/images/team/christophecnip.jpg',
  esthel: '/images/team/esthel.jpeg',
  filip: '/images/team/filip.png',
  koen: '/images/team/koen-verniers.jpeg',
  myrthille: '/images/team/myrthille.jpeg',
  stevie: '/images/team/stevie.jpeg',
} as const;

const NETWORK_NL: TeamNetworkMember[] = [
  {
    slug: 'esthel',
    name: 'Esthel Vandenbulcke',
    role: 'Commerciële opvolging & klantrealiteit',
    photo: PHOTO.esthel,
    alt: 'Portret van Esthel Vandenbulcke',
  },
  {
    slug: 'filip',
    name: 'Filip VandeCasteye',
    role: 'Verhaal, inhoud & positionering',
    photo: PHOTO.filip,
    alt: 'Portret van Filip VandeCasteye',
  },
  {
    slug: 'stevie',
    name: 'Stevie Van Meirhaeghe',
    role: 'Sales leadership & verkoopstructuur',
    photo: PHOTO.stevie,
    alt: 'Portret van Stevie Van Meirhaeghe',
  },
  {
    slug: 'koen',
    name: 'Koen Verniers',
    role: 'Strategische leiding & prioriteiten',
    photo: PHOTO.koen,
    alt: 'Portret van Koen Verniers',
  },
  {
    slug: 'myrthille',
    name: 'Myrthille Versteghen',
    role: 'Marketingflow & coördinatie',
    photo: PHOTO.myrthille,
    alt: 'Portret van Myrthille Versteghen',
  },
];

const NETWORK_EN: TeamNetworkMember[] = [
  {
    slug: 'esthel',
    name: 'Esthel Vandenbulcke',
    role: 'Commercial follow-up & customer reality',
    photo: PHOTO.esthel,
    alt: 'Portrait of Esthel Vandenbulcke',
  },
  {
    slug: 'filip',
    name: 'Filip VandeCasteye',
    role: 'Narrative, content & positioning',
    photo: PHOTO.filip,
    alt: 'Portrait of Filip VandeCasteye',
  },
  {
    slug: 'stevie',
    name: 'Stevie Van Meirhaeghe',
    role: 'Sales leadership & sales structure',
    photo: PHOTO.stevie,
    alt: 'Portrait of Stevie Van Meirhaeghe',
  },
  {
    slug: 'koen',
    name: 'Koen Verniers',
    role: 'Strategic leadership & priorities',
    photo: PHOTO.koen,
    alt: 'Portrait of Koen Verniers',
  },
  {
    slug: 'myrthille',
    name: 'Myrthille Versteghen',
    role: 'Marketing flow & coordination',
    photo: PHOTO.myrthille,
    alt: 'Portrait of Myrthille Versteghen',
  },
];

const NL: TeamContent = {
  meta: {
    title: 'Over ORYEN — ORYEN',
    description:
      'ORYEN bestaat om scherp te krijgen waar commercieel resultaat achterblijft — vóór er opnieuw wordt geïnvesteerd. Christophe Dejaeghere als strategisch ankerpunt.',
  },
  hero: {
    eyebrow: 'Over ORYEN',
    headlineLine1: 'Over ORYEN',
    headlineLine2Em: 'Richting vóór uitvoering.',
    sub:
      'ORYEN is ontstaan uit één eenvoudige vaststelling: bedrijven doen vaak al veel, maar weten niet altijd waarom het commerciële resultaat achterblijft.\n\nEr wordt geïnvesteerd in marketing, sales, websites, tools, campagnes en opvolging. Toch blijft dezelfde vraag terugkomen: waarom brengt dit niet op wat het zou moeten opbrengen?\n\nORYEN bestaat om die vraag scherp te krijgen vóór er opnieuw wordt geïnvesteerd.',
  },
  christophe: {
    spineLabel: 'Ankerpunt',
    heading: 'Christophe als strategisch ankerpunt',
    body:
      'ORYEN wordt geleid door Christophe Dejaeghere. Christophe werkt al meer dan 23 jaar op het kruispunt van merken, marketing, digitale systemen en commerciële groei. Hij kent uitvoering van binnenuit: positionering, websites, content, CRM, HubSpot, campagnes en commerciële opvolging.\n\nMaar ORYEN vertrekt niet vanuit uitvoering. De kracht zit in het herkennen van patronen: zien waar losse initiatieven elkaar versterken — of net tegenwerken. Waar marketing zichtbaar is, maar geen beweging brengt. Waar sales inzet toont, maar opvolging versnipperd raakt. Waar tools aanwezig zijn, maar geen grip geven.\n\nDe vraag is zelden: wat moeten we nog meer doen? De betere vraag is meestal: wat klopt er vandaag niet in de volgorde?',
    photo: PHOTO.christophe,
    alt: 'Portret van Christophe Dejaeghere',
  },
  sections: [
    {
      heading: 'Geen klassieke bureaustructuur',
      body:
        'ORYEN werkt niet met accountmanagement, doorschuifsystemen of lagen tussen analyse en beslissing. U werkt rechtstreeks met Christophe als strategisch ankerpunt. Afhankelijk van de vraag worden mensen uit het ORYEN-netwerk betrokken waar hun ervaring werkelijk iets toevoegt.\n\nNiet om het groter te maken dan nodig. Wel om scherper te kijken naar sales, opvolging, marketing, structuur, inhoud of digitale systemen.',
    },
    {
      heading: 'Waar ORYEN naar kijkt',
      body:
        'ORYEN kijkt naar de volledige commerciële keten: positionering, marketing, sales, opvolging, digitale systemen, interne afstemming, en keuzes die te vroeg of zonder samenhang werden gemaakt.\n\nNiet om overal tegelijk aan te werken. Wel om te bepalen waar het vandaag echt vastloopt.',
    },
    {
      heading: 'Van diagnose naar uitvoering',
      body:
        'Wanneer uit de diagnose blijkt dat een website, platform, CRM-flow of digitaal systeem de groei blokkeert, kan ORYEN de richting vertalen naar tastbare digitale producten via ORYEN Solutions. ORYEN bepaalt waar het commercieel vastloopt. ORYEN Solutions helpt bouwen wat nodig is om die frictie weg te nemen.',
      linkSolutions: true,
    },
  ],
  network: {
    spineLabel: 'Netwerk',
    heading: 'Mensen rond ORYEN',
    intro:
      'ORYEN werkt met een klein netwerk van vertrouwde profielen. Afhankelijk van de vraag kan Christophe mensen betrekken met ervaring in sales, commerciële opvolging, positionering, bedrijfsleiding, marketingcoördinatie of digitale uitvoering. Niet als vaste bureaulaag. Wel als gerichte versterking wanneer dat nodig is.',
    members: NETWORK_NL,
  },
  closing: {
    spineLabel: 'Volgende stap',
    heading: 'Volgende stap',
    body:
      'De Reality Check is het eerste betaalde moment waarin ORYEN scherp krijgt waar sales, marketing en opvolging resultaat verliezen — en welke ingreep eerst verschil maakt. Geen vrijblijvende intake. Geen verkoopgesprek in vermomming. Geen automatisch traject.',
    primaryCta: 'Plan een Reality Check met Christophe',
    primaryCtaHref: '/aanbod',
  },
};

const EN: TeamContent = {
  meta: {
    title: 'About ORYEN — ORYEN',
    description:
      'ORYEN exists to sharpen where commercial results fall short — before more is invested. Christophe Dejaeghere as strategic anchor.',
  },
  hero: {
    eyebrow: 'About ORYEN',
    headlineLine1: 'About ORYEN',
    headlineLine2Em: 'Direction before action.',
    sub:
      "ORYEN grew out of one simple observation: companies are often already doing a lot, but don't always know why their commercial results fall short.\n\nThere's investment in marketing, sales, websites, tools, campaigns and follow-up. And still the same question keeps coming back: why isn't this returning what it should?\n\nORYEN exists to sharpen that question before more is invested.",
  },
  christophe: {
    spineLabel: 'Anchor',
    heading: 'Christophe as strategic anchor',
    body:
      "ORYEN is led by Christophe Dejaeghere. For more than 23 years, Christophe has worked at the intersection of brands, marketing, digital systems and commercial growth. He knows execution from the inside: positioning, websites, content, CRM, HubSpot, campaigns and commercial follow-up.\n\nBut ORYEN doesn't start from execution. The strength lies in recognising patterns: seeing where separate initiatives reinforce one another — or work against each other. Where marketing is visible but creates no movement. Where sales shows effort but follow-up fragments. Where tools are present but offer no grip.\n\nThe question is rarely: what more should we do? The better question is usually: what's wrong in today's order of things?",
    photo: PHOTO.christophe,
    alt: 'Portrait of Christophe Dejaeghere',
  },
  sections: [
    {
      heading: 'No classic agency structure',
      body:
        "ORYEN doesn't work with account management, hand-off systems or layers between analysis and decision. You work directly with Christophe as strategic anchor. Depending on the question, people from the ORYEN network are brought in where their experience genuinely adds something.\n\nNot to make it bigger than necessary. But to look more sharply at sales, follow-up, marketing, structure, content or digital systems.",
    },
    {
      heading: 'What ORYEN looks at',
      body:
        'ORYEN looks at the full commercial chain: positioning, marketing, sales, follow-up, digital systems, internal alignment, and choices made too early or without coherence.\n\nNot to work on everything at once. But to determine where it really stalls today.',
    },
    {
      heading: 'From diagnosis to execution',
      body:
        "When the diagnosis shows that a website, platform, CRM flow or digital system is blocking growth, ORYEN can translate the direction into tangible digital products through ORYEN Solutions. ORYEN determines where commercial growth stalls. ORYEN Solutions helps build what's needed to remove that friction.",
      linkSolutions: true,
    },
  ],
  network: {
    spineLabel: 'Network',
    heading: 'People around ORYEN',
    intro:
      'ORYEN works with a small network of trusted profiles. Depending on the question, Christophe can bring in people with experience in sales, commercial follow-up, positioning, business leadership, marketing coordination or digital execution. Not as a fixed agency layer. But as focused reinforcement when needed.',
    members: NETWORK_EN,
  },
  closing: {
    spineLabel: 'Next step',
    heading: 'Next step',
    body:
      'The Reality Check is the first paid moment in which ORYEN pinpoints where sales, marketing and follow-up are losing results — and which move makes the difference first. No non-committal intake. No sales conversation in disguise. No automatic trajectory.',
    primaryCta: 'Book a Reality Check with Christophe',
    primaryCtaHref: '/offer',
  },
};

export function getTeamContent(locale: string): TeamContent {
  return locale === 'en' ? EN : NL;
}

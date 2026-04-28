import type { TeamContent, TeamMember } from '@/types/team';

import oryEn from '@/lib/sanity/bootstrap/content/oryen-en.json';
import oryNl from '@/lib/sanity/bootstrap/content/oryen-nl.json';

type TeamBootstrap = {
  Team: {
    christophe: { body: string; italicLine?: string; bodyAfter?: string };
    closing: { body: string };
  };
};

function teamStrings(locale: string) {
  const raw = (locale === 'en' ? oryEn : oryNl) as TeamBootstrap;
  return raw.Team;
}

/** Source files copied to `public/images/team/` from `web/Images/`. */
const PHOTO = {
  christophe: '/images/team/christophecnip.jpg',
  esthel: '/images/team/esthel.jpeg',
  filip: '/images/team/filip.png',
  koen: '/images/team/koen-verniers.jpeg',
  myrthille: '/images/team/myrthille.jpeg',
  stevie: '/images/team/stevie.jpeg',
} as const;

function christopheMember(locale: 'nl' | 'en'): TeamMember {
  const c = teamStrings(locale).christophe;
  return {
    slug: 'christophe',
    num: '01',
    name: 'Christophe Dejaeghere',
    role:
      locale === 'en' ? 'Founder & strategic anchor' : 'Founder & strategisch ankerpunt',
    body: c.body,
    ...(c.italicLine != null
      ? { italicLine: c.italicLine, bodyAfter: c.bodyAfter ?? '' }
      : {}),
    photo: PHOTO.christophe,
    alt: locale === 'en' ? 'Portrait of Christophe Dejaeghere' : 'Portret van Christophe Dejaeghere',
  };
}

const CHRISTOPHE_NL = christopheMember('nl');
const CHRISTOPHE_EN = christopheMember('en');

const TEAM_NL_REST: TeamMember[] = [
  {
    slug: 'esthel',
    num: '02',
    name: 'Esthel Vandenbulcke',
    role: 'Commerciële opvolging & klantrealiteit',
    body:
      'Brengt jaren ervaring mee uit commerciële verantwoordelijkheid op de vloer, zowel in retail als in B2B-sales. Ziet snel waar verkoopkansen blijven liggen, waar opvolging verslapt en waar commerciële discipline ontbreekt.',
    photo: PHOTO.esthel,
    alt: 'Portret van Esthel Vandenbulcke',
  },
  {
    slug: 'filip',
    num: '03',
    name: 'Filip VandeCasteye',
    role: 'Verhaal, inhoud & positionering',
    body:
      'Helpt bedrijven helder verwoorden wat ze doen, waarom het relevant is en waar het verschil zit. Denkt mee over positionering, website-structuur, cases en salesmateriaal zodat de boodschap klopt met de realiteit van het bedrijf.',
    photo: PHOTO.filip,
    alt: 'Portret van Filip VandeCasteye',
  },
  {
    slug: 'stevie',
    num: '04',
    name: 'Stevie Van Meirhaeghe',
    role: 'Sales leadership & verkoopstructuur',
    body:
      'Brengt decennialange ervaring mee in verkoop en het aansturen van verkoopteams. Kijkt hoe sales beter kan worden opgevolgd, consistenter kan renderen en minder afhankelijk wordt van toevallige inspanningen.',
    photo: PHOTO.stevie,
    alt: 'Portret van Stevie Van Meirhaeghe',
  },
  {
    slug: 'koen',
    num: '05',
    name: 'Koen Verniers',
    role: 'Strategische leiding & prioriteiten',
    body:
      'Brengt ervaring mee uit directie en bedrijfsleiding. Helpt keuzes scherp stellen, prioriteiten bewaken en plannen vertalen naar haalbare stappen. Zorgt voor bestuurlijke rust wanneer richting en volgorde belangrijker zijn dan snelheid.',
    photo: PHOTO.koen,
    alt: 'Portret van Koen Verniers',
  },
  {
    slug: 'myrthille',
    num: '06',
    name: 'Myrthille Versteghen',
    role: 'Marketingflow & coördinatie',
    body:
      'Zorgt dat afgesproken acties ook effectief vooruitgaan. Bewaakt deadlines, stemt af met externe partners en houdt de marketingflow op de rails. Verbindt planning en uitvoering zonder extra lagen of vertraging.',
    photo: PHOTO.myrthille,
    alt: 'Portret van Myrthille Versteghen',
  },
];

const TEAM_EN_REST: TeamMember[] = [
  {
    slug: 'esthel',
    num: '02',
    name: 'Esthel Vandenbulcke',
    role: 'Commercial follow-up & customer reality',
    body:
      'Brings years of experience from commercial responsibility on the floor, both in retail and in B2B sales. Quickly sees where sales opportunities slip, where follow-up weakens and where commercial discipline is missing.',
    photo: PHOTO.esthel,
    alt: 'Portrait of Esthel Vandenbulcke',
  },
  {
    slug: 'filip',
    num: '03',
    name: 'Filip VandeCasteye',
    role: 'Narrative, content & positioning',
    body:
      'Helps companies articulate clearly what they do, why it matters and where the real difference lies. Thinks along on positioning, website structure, case studies and sales material so the message fits the reality of the business.',
    photo: PHOTO.filip,
    alt: 'Portrait of Filip VandeCasteye',
  },
  {
    slug: 'stevie',
    num: '04',
    name: 'Stevie Van Meirhaeghe',
    role: 'Sales leadership & sales structure',
    body:
      'Brings decades of experience in sales and leading sales organisations. Looks at how sales can follow up better, deliver more consistently and rely less on one-off effort.',
    photo: PHOTO.stevie,
    alt: 'Portrait of Stevie Van Meirhaeghe',
  },
  {
    slug: 'koen',
    num: '05',
    name: 'Koen Verniers',
    role: 'Strategic leadership & priorities',
    body:
      'Brings experience from leadership and board roles. Helps sharpen choices, guard priorities and translate plans into workable steps. Provides steady judgement when direction matters more than speed.',
    photo: PHOTO.koen,
    alt: 'Portrait of Koen Verniers',
  },
  {
    slug: 'myrthille',
    num: '06',
    name: 'Myrthille Versteghen',
    role: 'Marketing flow & coordination',
    body:
      'Makes sure agreed actions actually move forward. Guards deadlines, aligns with external partners and keeps the marketing flow on track. Connects planning and execution without extra layers or delay.',
    photo: PHOTO.myrthille,
    alt: 'Portrait of Myrthille Versteghen',
  },
];

const NL: TeamContent = {
  meta: {
    title: 'Team — ORYEN',
    description:
      'Het kernteam achter ORYEN: ervaring met sales, marketing en bedrijfsvoering, strategische scherpte en praktijkinzicht — met Christophe als ankerpunt.',
  },
  hero: {
    eyebrow: 'Team',
    headlineLine1: 'Een klein kernteam.',
    headlineLine2Em: 'Geen lagen ertussen.',
    sub:
      'ORYEN werkt niet met accountmanagement of klassieke bureaustructuur. U werkt met de mensen die het werk ook effectief doen — met Christophe als strategisch ankerpunt.\n\nGeen klassieke bureaustructuur. Geen lagen van accountmanagement. Wel een klein kernteam met ervaring in sales, opvolging, marketing, structuur en bedrijfsleiding.',
  },
  team: {
    spineLabel: 'Team',
    intro: 'Zes mensen. Elk een duidelijke sterkte. Aanspreekbaar, zonder filter.',
    members: [CHRISTOPHE_NL, ...TEAM_NL_REST],
  },
  collaboration: {
    spineLabel: 'Samenwerking',
    headlineLine1: 'Klein in structuur.',
    headlineLine2Em: 'Breed genoeg in inzicht.',
    lead:
      'Christophe bewaakt de strategische lijn. De mensen rond hem worden betrokken waar hun ervaring het meeste waarde toevoegt. Wanneer een opdracht bijkomende expertise vraagt, schakelen we gericht extra specialisten in — geen doorschuifsysteem, geen overbodige lagen.',
  },
  closing: {
    spineLabel: 'Volgende stap',
    headlineLine1: 'Eén gesprek dat',
    headlineLine2Em: 'richting geeft.',
    body: teamStrings('nl').closing.body,
    primaryCta: 'Plan een Reality Check-gesprek met Christophe',
    primaryCtaHref: '/aanbod',
    secondaryCta: 'Contact',
    secondaryCtaHref: '/contact',
  },
};

const EN: TeamContent = {
  meta: {
    title: 'Team — ORYEN',
    description:
      'The core team behind ORYEN: experience in sales, marketing and operations, strategic sharpness and judgement on the floor — with Christophe as anchor.',
  },
  hero: {
    eyebrow: 'Team',
    headlineLine1: 'A small core team.',
    headlineLine2Em: 'No layers in between.',
    sub:
      'ORYEN does not run on account management or a classic agency structure. You work with the people who actually do the work — with Christophe as the strategic anchor.\n\nNo classic agency structure. No layers of account management. A small core team with experience in sales, follow-up, marketing, structure and leadership.',
  },
  team: {
    spineLabel: 'Team',
    intro: 'Six people. Each with a clear strength. Reachable, without filters.',
    members: [CHRISTOPHE_EN, ...TEAM_EN_REST],
  },
  collaboration: {
    spineLabel: 'Collaboration',
    headlineLine1: 'Small in structure.',
    headlineLine2Em: 'Broad enough in judgement.',
    lead:
      'Christophe guards the strategic line. People around him are involved where their experience adds the most value. When a project needs extra expertise, we bring in specialists deliberately — no hand-off chains, no unnecessary layers.',
  },
  closing: {
    spineLabel: 'Next step',
    headlineLine1: 'One conversation that',
    headlineLine2Em: 'sets direction.',
    body: teamStrings('en').closing.body,
    primaryCta: 'Book a Reality Check conversation with Christophe',
    primaryCtaHref: '/aanbod',
    secondaryCta: 'Contact',
    secondaryCtaHref: '/contact',
  },
};

export function getTeamContent(locale: string): TeamContent {
  return locale === 'en' ? EN : NL;
}

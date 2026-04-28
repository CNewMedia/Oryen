/**
 * Standard bootstrap copy for ORYEN's legal pages (privacy + cookies).
 *
 * Operator: ORYEN is a registered trade name of CNIP bv
 * (BE 0478.506.146, Ottergemsesteenweg Zuid 808 b125, 9000 Gent, info@cnip.be).
 *
 * Tracking in use on the public site:
 * - Google Analytics 4
 * - Google Ads (incl. remarketing)
 * - Meta/Facebook Pixel
 * - LinkedIn Insight Tag
 *
 * No proprietary commercial or profiling cookies are set by ORYEN itself.
 *
 * The output is shaped as Portable Text blocks so the existing
 * `<SanityRichText />` renderer can display it unchanged; Sanity-authored
 * content overrides the bootstrap copy when a `legalPage` document exists.
 */

type PtSpan = { _type: 'span'; _key: string; text: string; marks: string[] };
type PtBlock = {
  _type: 'block';
  _key: string;
  style: 'normal' | 'h2' | 'h3' | 'blockquote';
  markDefs: unknown[];
  children: PtSpan[];
  listItem?: 'bullet' | 'number';
  level?: number;
};

let _k = 0;
const k = () => `b${++_k}`;

function block(style: PtBlock['style'], text: string): PtBlock {
  return {
    _type: 'block',
    _key: k(),
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: k(), text, marks: [] }],
  };
}

function p(text: string): PtBlock {
  return block('normal', text);
}
function h2(text: string): PtBlock {
  return block('h2', text);
}
function bullet(text: string): PtBlock {
  return { ...block('normal', text), listItem: 'bullet', level: 1 };
}

const operatorNl =
  'ORYEN is een geregistreerd handelsmerk van CNIP bv, met ondernemingsnummer BE 0478.506.146 en maatschappelijke zetel te Ottergemsesteenweg Zuid 808 b125, 9000 Gent, België. In dit document verwijzen "ORYEN", "wij" of "ons" naar CNIP bv, handelend onder de merknaam ORYEN. Contact: info@cnip.be.';

const operatorEn =
  'ORYEN is a registered trade name of CNIP bv, company number BE 0478.506.146, registered office at Ottergemsesteenweg Zuid 808 b125, 9000 Ghent, Belgium. In this document, "ORYEN", "we" or "us" refers to CNIP bv, operating under the ORYEN brand. Contact: info@cnip.be.';

function privacyNl(): PtBlock[] {
  return [
    h2('Wie we zijn'),
    p(operatorNl),

    h2('Welke gegevens wij verwerken'),
    bullet(
      'Contactgegevens die u zelf doorgeeft — naam, bedrijf, e-mailadres, telefoonnummer en inhoud van uw bericht — wanneer u ons contactformulier invult, een Reality Check aanvraagt of op een andere manier contact opneemt.'
    ),
    bullet(
      'Technische gegevens die automatisch worden gegenereerd wanneer u de website bezoekt: IP-adres, browsertype, apparaat, bezochte pagina\u2019s, verwijzende URL en timestamps.'
    ),
    bullet(
      'Meet- en marketinggegevens die via analytische en advertentie-tools van derden worden verzameld (zie het Cookiebeleid voor de gebruikte diensten).'
    ),

    h2('Doeleinden en rechtsgronden'),
    bullet(
      'Beantwoorden van uw vraag of opvolgen van uw aanvraag (uitvoering overeenkomst of precontractuele stap).'
    ),
    bullet('Leveren van onze dienstverlening aan klanten (uitvoering overeenkomst).'),
    bullet('Beveiligen en optimaliseren van de website (gerechtvaardigd belang).'),
    bullet(
      'Meten en verbeteren van de werking van de website en van onze marketing (gerechtvaardigd belang of toestemming, afhankelijk van het kanaal).'
    ),
    bullet('Voldoen aan wettelijke verplichtingen (zoals fiscale bewaarplichten).'),

    h2('Ontvangers'),
    p(
      'Een beperkt aantal verwerkers helpt ons de dienstverlening te leveren: hosting en e-mail, CRM, analytische platformen en advertentieplatformen. Wij selecteren partijen die een passend beschermingsniveau bieden en sluiten de nodige verwerkersovereenkomsten af. Wij verkopen uw gegevens niet.'
    ),

    h2('Internationale doorgiften'),
    p(
      'Sommige van deze verwerkers (waaronder Google, Meta en LinkedIn) zijn gevestigd buiten de Europese Economische Ruimte. Waar doorgifte nodig is, steunen wij op de standaardcontractsbepalingen van de Europese Commissie en waar nodig op aanvullende maatregelen conform de GDPR.'
    ),

    h2('Bewaartermijn'),
    p(
      'Gegevens uit een contactaanvraag worden bewaard zolang nodig om uw vraag te behandelen en, indien dit tot een opdracht leidt, zolang de commerciële relatie loopt plus de wettelijke bewaartermijnen (doorgaans maximaal zeven jaar voor administratieve documenten). Analytische en marketinggegevens worden beperkt in tijd bewaard volgens de instellingen van het gebruikte platform.'
    ),

    h2('Uw rechten'),
    p(
      'U heeft op elk moment recht op inzage, verbetering, verwijdering, beperking, bezwaar en overdraagbaarheid van uw persoonsgegevens, en het recht om een gegeven toestemming opnieuw in te trekken. Uw verzoek richt u aan info@cnip.be; wij behandelen het binnen de wettelijke termijn. U kan ook klacht indienen bij de Gegevensbeschermingsautoriteit (gegevensbeschermingsautoriteit.be).'
    ),

    h2('Cookies'),
    p(
      'Voor een overzicht van de analytische en advertentieservices van derden die op deze website worden gebruikt en hoe u uw voorkeuren beheert, verwijzen wij naar het afzonderlijke Cookiebeleid op oryen.be/cookies.'
    ),

    h2('Contact'),
    p(
      'Vragen over dit privacybeleid of over uw persoonsgegevens kunnen steeds worden gesteld aan CNIP bv (ORYEN), Ottergemsesteenweg Zuid 808 b125, 9000 Gent, info@cnip.be.'
    ),

    h2('Wijzigingen'),
    p(
      'Dit privacybeleid kan worden aangepast wanneer onze werking, onze partners of de toepasselijke regelgeving wijzigen. De meest recente versie is altijd raadpleegbaar op oryen.be/privacy.'
    ),

    p('ORYEN is een geregistreerd merk van CNIP BV.'),
  ];
}

function privacyEn(): PtBlock[] {
  return [
    h2('Who we are'),
    p(operatorEn),

    h2('What data we process'),
    bullet(
      'Contact details you share with us — name, company, email, phone and the content of your message — when you submit the contact form, request a Reality Check or otherwise reach out.'
    ),
    bullet(
      'Technical data automatically generated when you visit the site: IP address, browser type, device, pages visited, referring URL and timestamps.'
    ),
    bullet(
      'Measurement and marketing data collected through third-party analytics and advertising tools (see the Cookie Policy for the services in use).'
    ),

    h2('Purposes and legal bases'),
    bullet(
      'Responding to your enquiry or following up on your request (performance of a contract or pre-contractual step).'
    ),
    bullet('Delivering our services to clients (performance of a contract).'),
    bullet('Securing and improving the website (legitimate interest).'),
    bullet(
      'Measuring and improving the website and our marketing (legitimate interest or consent, depending on the channel).'
    ),
    bullet('Complying with legal obligations (including accounting retention).'),

    h2('Recipients'),
    p(
      'A limited number of processors help us deliver our services: hosting and email, CRM, analytics and advertising platforms. We select providers that offer an appropriate level of protection and conclude the required data processing agreements. We do not sell your data.'
    ),

    h2('International transfers'),
    p(
      'Some of these processors (including Google, Meta and LinkedIn) are located outside the European Economic Area. Where transfers are necessary, we rely on the European Commission\u2019s Standard Contractual Clauses and, where relevant, on additional safeguards in line with the GDPR.'
    ),

    h2('Retention'),
    p(
      'Data from a contact request is kept for as long as needed to handle your request and, if it leads to an engagement, for the duration of the commercial relationship plus the applicable legal retention periods (typically up to seven years for administrative records). Analytics and marketing data are kept for a limited period according to the platform settings.'
    ),

    h2('Your rights'),
    p(
      'You have the right to access, rectify, erase, restrict, object to and port your personal data at any time, and to withdraw consent where processing is based on it. Requests can be addressed to info@cnip.be and will be handled within the legal timeframe. You may also lodge a complaint with the Belgian Data Protection Authority (gegevensbeschermingsautoriteit.be).'
    ),

    h2('Cookies'),
    p(
      'For an overview of the third-party analytics and advertising services used on this site and how you can manage your preferences, please refer to the separate Cookie Policy on oryen.be/cookies.'
    ),

    h2('Contact'),
    p(
      'Questions about this privacy statement or about your personal data can be addressed to CNIP bv (ORYEN), Ottergemsesteenweg Zuid 808 b125, 9000 Ghent, info@cnip.be.'
    ),

    h2('Changes'),
    p(
      'This privacy statement may be updated when our operations, our partners or applicable legislation change. The most recent version is always available at oryen.be/privacy.'
    ),

    p('ORYEN is a registered trademark of CNIP BV.'),
  ];
}

function cookiesNl(): PtBlock[] {
  return [
    h2('Wie is verantwoordelijk'),
    p(operatorNl),

    h2('Eigen cookies'),
    p(
      'ORYEN plaatst zelf geen commerciële of profileringscookies. De enige cookies die rechtstreeks vanuit deze website kunnen worden geplaatst zijn strikt noodzakelijke cookies — bijvoorbeeld voor taalkeuze, sessiebeheer en beveiliging. Deze cookies zijn nodig voor de werking van de website en vereisen geen toestemming.'
    ),

    h2('Analyse en advertentieservices van derden'),
    p(
      'Voor het meten en bijsturen van de werking van de website en van onze marketing gebruikt ORYEN de volgende services. Deze services plaatsen zelf cookies of zetten vergelijkbare technologieën in (pixels, tags). Gegevens worden onder de verantwoordelijkheid van elke aanbieder verwerkt conform hun privacybeleid.'
    ),
    bullet(
      'Google Analytics 4 — Google Ireland Ltd. Doel: statistieken over bezoek en gebruik van de website.'
    ),
    bullet(
      'Google Ads — Google Ireland Ltd. Doel: meten van advertentieresultaten en remarketing via het Google-netwerk.'
    ),
    bullet(
      'Meta Pixel — Meta Platforms Ireland Ltd. Doel: meten van advertentieresultaten en remarketing op Facebook en Instagram.'
    ),
    bullet(
      'LinkedIn Insight Tag — LinkedIn Ireland Unlimited Company. Doel: meten van advertentieresultaten en remarketing op LinkedIn.'
    ),

    h2('Uw keuze'),
    p(
      'U kan tracking-cookies van derden op elk moment beheren. Dat kan op drie manieren:'
    ),
    bullet('Via de cookie- of privacy-instellingen van uw browser.'),
    bullet(
      'Via de persoonlijke instellingen van elk platform: Google (adssettings.google.com), Meta (facebook.com/adpreferences) en LinkedIn (linkedin.com/psettings/guest-controls/retargeting-opt-out).'
    ),
    bullet(
      'Via browserextensies zoals de Google Analytics Opt-out Add-on of algemene tracker-blockers.'
    ),

    h2('Bewaartermijn van cookies'),
    p(
      'De bewaartermijn van elke cookie wordt bepaald door de aanbieder van de betrokken service. Voor de actuele termijnen verwijzen wij naar het privacybeleid van Google, Meta en LinkedIn.'
    ),

    h2('Wijzigingen'),
    p(
      'Dit cookiebeleid kan worden aangepast wanneer de gebruikte tools of de toepasselijke regelgeving wijzigen. De meest recente versie is altijd raadpleegbaar op oryen.be/cookies.'
    ),

    h2('Contact'),
    p(
      'Vragen over dit cookiebeleid kunnen worden gericht aan CNIP bv (ORYEN), Ottergemsesteenweg Zuid 808 b125, 9000 Gent, info@cnip.be.'
    ),

    p('ORYEN is een geregistreerd merk van CNIP BV.'),
  ];
}

function cookiesEn(): PtBlock[] {
  return [
    h2('Who is responsible'),
    p(operatorEn),

    h2('Our own cookies'),
    p(
      'ORYEN does not set any commercial or profiling cookies of its own. The only cookies that can be placed directly by this website are strictly necessary cookies — for example for language selection, session handling and security. These cookies are required for the website to function and do not need consent.'
    ),

    h2('Third-party analytics and advertising services'),
    p(
      'To measure and refine how the website and our marketing perform, ORYEN uses the following services. These services set their own cookies or use comparable technologies (pixels, tags). The resulting data is processed under each provider\u2019s own responsibility and in accordance with their privacy policy.'
    ),
    bullet(
      'Google Analytics 4 — Google Ireland Ltd. Purpose: statistics about website visits and usage.'
    ),
    bullet(
      'Google Ads — Google Ireland Ltd. Purpose: measuring advertising performance and remarketing across the Google network.'
    ),
    bullet(
      'Meta Pixel — Meta Platforms Ireland Ltd. Purpose: measuring advertising performance and remarketing on Facebook and Instagram.'
    ),
    bullet(
      'LinkedIn Insight Tag — LinkedIn Ireland Unlimited Company. Purpose: measuring advertising performance and remarketing on LinkedIn.'
    ),

    h2('Your choice'),
    p('You can manage third-party tracking cookies at any time. You can do so in three ways:'),
    bullet('Through the cookie or privacy settings of your browser.'),
    bullet(
      'Through the personal settings of each platform: Google (adssettings.google.com), Meta (facebook.com/adpreferences) and LinkedIn (linkedin.com/psettings/guest-controls/retargeting-opt-out).'
    ),
    bullet(
      'Through browser extensions such as the Google Analytics Opt-out Add-on or general tracker blockers.'
    ),

    h2('Cookie retention'),
    p(
      'The retention period of each cookie is set by the provider of the service involved. For the current periods we refer to the privacy policies of Google, Meta and LinkedIn.'
    ),

    h2('Changes'),
    p(
      'This cookie policy may be updated when the tools we use or the applicable legislation change. The most recent version is always available at oryen.be/cookies.'
    ),

    h2('Contact'),
    p(
      'Questions about this cookie policy can be addressed to CNIP bv (ORYEN), Ottergemsesteenweg Zuid 808 b125, 9000 Ghent, info@cnip.be.'
    ),

    p('ORYEN is a registered trademark of CNIP BV.'),
  ];
}

export function getLegalPageBody(
  locale: string,
  key: 'privacy' | 'cookies'
): unknown[] {
  // Reset key counter per call so each render is deterministic and keys are
  // locally unique; PortableText only needs keys to be unique within the
  // rendered array.
  _k = 0;
  if (key === 'privacy') {
    return locale === 'en' ? privacyEn() : privacyNl();
  }
  return locale === 'en' ? cookiesEn() : cookiesNl();
}

/** One-line description used for `<meta name="description">`. */
export function getLegalPageDescription(
  locale: string,
  key: 'privacy' | 'cookies'
): string {
  if (key === 'privacy') {
    return locale === 'en'
      ? 'How ORYEN (CNIP bv, BE 0478.506.146) processes personal data and which rights apply under the GDPR.'
      : 'Hoe ORYEN (CNIP bv, BE 0478.506.146) persoonsgegevens verwerkt en welke rechten u heeft onder de GDPR.';
  }
  return locale === 'en'
    ? 'ORYEN does not use its own commercial cookies. Overview of the third-party analytics and advertising services in use and how to manage them.'
    : 'ORYEN plaatst zelf geen commerciële cookies. Overzicht van de analytische en advertentieservices van derden en hoe u ze beheert.';
}

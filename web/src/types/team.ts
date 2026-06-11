/**
 * Over ORYEN page content — in-repo (no CMS).
 * Route stays `/team` for SEO; labels read "Over ORYEN" / "About ORYEN".
 */

export type TeamNetworkMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  alt: string;
};

export type TeamProseSection = {
  heading: string;
  body: string;
  /** When true, link "ORYEN Solutions" inside the body. */
  linkSolutions?: boolean;
};

export type TeamContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Em: string;
    sub: string;
  };
  christophe: {
    spineLabel: string;
    heading: string;
    body: string;
    photo: string;
    alt: string;
  };
  sections: TeamProseSection[];
  network: {
    spineLabel: string;
    heading: string;
    intro: string;
    members: TeamNetworkMember[];
  };
  closing: {
    spineLabel: string;
    heading: string;
    body: string;
    primaryCta: string;
    primaryCtaHref: string;
  };
};

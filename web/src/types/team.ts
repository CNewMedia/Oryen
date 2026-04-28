/**
 * Team page content — lightweight, locally-sourced (no CMS wiring yet).
 * If/when `teamMember` schema is wired, this module can be replaced by a loader.
 */

export type TeamMember = {
  /** Stable slug used for keys; also used if we later add anchors. */
  slug: string;
  /** Display index, e.g. "01" (shown above the name). */
  num: string;
  name: string;
  role: string;
  body: string;
  /** Optional italic line between `body` and `bodyAfter` (e.g. Christophe’s quote). */
  italicLine?: string;
  /** Remaining bio after `italicLine`; supports `\n\n` paragraphs. */
  bodyAfter?: string;
  photo: string;
  /** Alt text for the portrait. */
  alt: string;
};

export type TeamContent = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2Em: string;
    sub: string;
  };
  team: {
    spineLabel: string;
    /** Short editorial line above the grid (serves as section heading). */
    intro: string;
    members: TeamMember[];
  };
  collaboration: {
    spineLabel: string;
    headlineLine1: string;
    headlineLine2Em: string;
    lead: string;
  };
  closing: {
    spineLabel: string;
    headlineLine1: string;
    headlineLine2Em: string;
    body: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
  };
};

export type AanbodStep = {
  n: string;
  title: string;
  body: string;
};

export type AanbodContent = {
  meta: { title: string; description: string };
  hero: {
    headlineLine1: string;
    headlineLine2Em: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
  };
  whatItIs: { spine: string; headline: string; body: string };
  whatYouGet: { spine: string; headline: string; items: string[] };
  forWho: { spine: string; headline: string; body: string };
  howItWorks: {
    spine: string;
    headline: string;
    stepPrefix: string;
    steps: AanbodStep[];
  };
  pricing: { spine: string; name: string; priceLine: string; body: string };
  reassurance: { headline: string; body: string; note: string };
  closing: { line1: string; line2: string };
};

/**
 * Primary Reality Check booking CTA: short label on narrow viewports (under 768px),
 * full label from md up — avoids clipped uppercase button text on mobile.
 */
export function RealityCheckCtaLabel({ locale }: { locale: string }) {
  const isEn = locale === 'en';
  return (
    <>
      {isEn ? (
        <>
          Book a Reality Check
          <span className="cta-rc-suffix"> conversation with Christophe</span>
        </>
      ) : (
        <>
          Plan een Reality Check
          <span className="cta-rc-suffix">-gesprek met Christophe</span>
        </>
      )}
    </>
  );
}

/** Use responsive RC label when CMS copy is the long NL/EN booking phrase; otherwise show `label`. */
export function PrimaryRcCtaLabel({ locale, label }: { locale: string; label: string }) {
  const isLongNl = label.includes('Reality Check-gesprek met Christophe');
  const isLongEn = label.includes('conversation with Christophe');
  if (isLongNl || isLongEn) {
    return <RealityCheckCtaLabel locale={locale} />;
  }
  return <>{label}</>;
}

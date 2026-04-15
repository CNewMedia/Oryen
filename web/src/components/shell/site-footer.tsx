type Props = {
  brandShort: string;
  tagline: string;
  domain: string;
};

/** Teksten komen uit `messages` → `Global.footer` (via layout). */
export function SiteFooter({ brandShort, tagline, domain }: Props) {
  return (
    <footer>
      <span className="footer-brand">{brandShort}</span>
      <span className="footer-base">
        {tagline} — {domain}
      </span>
    </footer>
  );
}

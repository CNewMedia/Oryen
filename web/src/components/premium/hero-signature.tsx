/** SVG — marketing / sales / opvolging (hero links). */
export function HeroSignature() {
  return (
    <svg
      className="hero-sig"
      id="heroSig"
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <text className="sig-label" x="30" y="138" id="lbl1">
        marketing
      </text>
      <text className="sig-label" x="30" y="218" id="lbl2">
        sales
      </text>
      <text className="sig-label" x="30" y="298" id="lbl3">
        opvolging
      </text>
      <line className="sig-line" id="line1" x1="130" y1="135" x2="520" y2="135" />
      <line className="sig-line" id="line2" x1="130" y1="215" x2="400" y2="215" />
      <line className="sig-line" id="line3" x1="130" y1="295" x2="460" y2="295" />
      <circle className="sig-dot" id="sigDot" cx="130" cy="215" r="0" />
      <line className="sig-vline" id="sigVline" x1="130" y1="100" x2="130" y2="330" />
    </svg>
  );
}

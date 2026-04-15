export function DiagLine({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 800 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-8 w-full"
      >
        <line
          x1="0"
          y1="6"
          x2="460"
          y2="6"
          stroke="rgba(196,120,32,.36)"
          strokeWidth="1.3"
        />
        <line
          x1="0"
          y1="16"
          x2="320"
          y2="16"
          stroke="rgba(196,120,32,.28)"
          strokeWidth="1.3"
        />
        <line
          x1="0"
          y1="26"
          x2="580"
          y2="26"
          stroke="rgba(196,120,32,.22)"
          strokeWidth="1.3"
        />
        <line
          x1="460"
          y1="6"
          x2="700"
          y2="16"
          stroke="rgba(196,120,32,.14)"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <line
          x1="320"
          y1="16"
          x2="700"
          y2="16"
          stroke="rgba(196,120,32,.14)"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <line
          x1="580"
          y1="26"
          x2="700"
          y2="16"
          stroke="rgba(196,120,32,.14)"
          strokeWidth="1"
          strokeDasharray="5 5"
        />
        <rect
          x="696"
          y="12"
          width="8"
          height="8"
          fill="none"
          stroke="rgba(196,120,32,.36)"
          strokeWidth="1.1"
        />
      </svg>
    </div>
  );
}

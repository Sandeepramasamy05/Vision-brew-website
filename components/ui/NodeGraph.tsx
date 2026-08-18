export function NodeGraph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
    >
      <title>Idea to product graph</title>
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* connecting paths */}
      <g
        stroke="#0F766E"
        strokeWidth="1.15"
        strokeLinecap="round"
        className="animate-dash"
        style={{ strokeDasharray: "6 10" }}
      >
        <path d="M72 118 C140 118, 160 180, 228 214" opacity="0.85" />
        <path d="M88 248 C150 240, 170 230, 228 214" opacity="0.55" />
        <path d="M64 340 C140 320, 180 260, 228 214" opacity="0.4" />
        <path d="M228 214 C300 188, 320 140, 392 128" />
        <path d="M228 214 C290 230, 330 250, 404 268" />
        <path d="M228 214 C280 270, 320 330, 388 372" opacity="0.7" />
        <path d="M392 128 C430 148, 440 200, 404 268" opacity="0.45" />
        <path d="M404 268 C430 300, 430 340, 388 372" opacity="0.45" />
        <path d="M392 128 C450 90, 500 110, 520 86" opacity="0.35" />
        <path d="M388 372 C450 390, 500 360, 528 394" opacity="0.35" />
      </g>

      {/* faint grid of idea nodes (left) */}
      <g fill="#9A958C">
        <circle cx="72" cy="118" r="4.5" className="animate-pulseNode" />
        <circle cx="48" cy="176" r="3" opacity="0.5" />
        <circle cx="96" cy="196" r="2.5" opacity="0.4" />
        <circle cx="88" cy="248" r="4" className="animate-pulseNode" style={{ animationDelay: "0.6s" }} />
        <circle cx="40" cy="292" r="2.5" opacity="0.45" />
        <circle cx="64" cy="340" r="4" className="animate-pulseNode" style={{ animationDelay: "1.2s" }} />
        <circle cx="112" cy="312" r="2.2" opacity="0.35" />
        <circle cx="36" cy="88" r="2" opacity="0.3" />
      </g>

      {/* synthesis node */}
      <g filter="url(#glow)">
        <circle cx="228" cy="214" r="9" fill="#0B0B0B" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="228" cy="214" r="3.5" fill="#14B8A6" className="animate-pulseNode" />
      </g>

      {/* product cluster (right) */}
      <g>
        <circle cx="392" cy="128" r="7" fill="#0B0B0B" stroke="#0F766E" strokeWidth="1.4" />
        <circle cx="392" cy="128" r="2.6" fill="#0F766E" />
        <circle cx="404" cy="268" r="8" fill="#0B0B0B" stroke="#14B8A6" strokeWidth="1.5" />
        <circle cx="404" cy="268" r="3" fill="#14B8A6" />
        <circle cx="388" cy="372" r="7" fill="#0B0B0B" stroke="#0F766E" strokeWidth="1.4" />
        <circle cx="388" cy="372" r="2.6" fill="#0F766E" />
        <circle cx="454" cy="198" r="4" fill="#9A958C" opacity="0.55" />
        <circle cx="468" cy="312" r="3.5" fill="#9A958C" opacity="0.45" />
        <circle cx="520" cy="86" r="3" fill="#9A958C" opacity="0.35" />
        <circle cx="528" cy="394" r="3" fill="#9A958C" opacity="0.35" />
        <circle cx="500" cy="240" r="2.5" fill="#0F766E" opacity="0.7" />
      </g>

      {/* labels */}
      <g fill="#9A958C" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="0.16em">
        <text x="28" y="430">IDEA</text>
        <text x="250" y="52">SYSTEM</text>
        <text x="456" y="430">PRODUCT</text>
      </g>
    </svg>
  );
}

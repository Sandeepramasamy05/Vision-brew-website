import type { CaseStudy } from "@/lib/content";

function OpsVisual() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#111111" />
      <rect x="32" y="28" width="180" height="344" fill="#161616" stroke="#262626" />
      <rect x="52" y="52" width="80" height="8" fill="#0F766E" opacity="0.85" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="52" y={88 + i * 36} width={i === 2 ? 120 : 96} height="8" fill="#262626" />
      ))}
      <rect x="232" y="28" width="376" height="160" fill="#161616" stroke="#262626" />
      <rect x="256" y="52" width="140" height="10" fill="#EDEAE3" opacity="0.7" />
      <rect x="256" y="80" width="220" height="6" fill="#9A958C" opacity="0.4" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={256 + i * 110} y="112" width="96" height="52" fill="#0B0B0B" stroke="#262626" />
      ))}
      <rect x="232" y="208" width="376" height="164" fill="#161616" stroke="#262626" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="256" y={228 + i * 32} width="328" height="22" fill="#0B0B0B" />
          <rect x="268" y={234 + i * 32} width={80 + i * 24} height="8" fill={i === 1 ? "#0F766E" : "#262626"} />
        </g>
      ))}
    </svg>
  );
}

function CounselVisual() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#111111" />
      <rect x="40" y="40" width="280" height="320" fill="#161616" stroke="#262626" />
      <rect x="64" y="64" width="160" height="10" fill="#EDEAE3" opacity="0.75" />
      <rect x="64" y="92" width="200" height="6" fill="#9A958C" opacity="0.35" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="64" y={128 + i * 48} width="232" height="36" fill="#0B0B0B" stroke="#262626" />
      ))}
      <rect x="344" y="40" width="256" height="320" fill="#161616" stroke="#262626" />
      <circle cx="472" cy="150" r="48" fill="none" stroke="#0F766E" strokeWidth="2" />
      <path d="M472 118v64M440 150h64" stroke="#0F766E" strokeWidth="1.2" />
      <rect x="384" y="230" width="176" height="8" fill="#262626" />
      <rect x="384" y="254" width="120" height="8" fill="#0F766E" opacity="0.7" />
      <rect x="384" y="278" width="152" height="8" fill="#262626" />
    </svg>
  );
}

function StoreVisual() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#111111" />
      {[0, 1, 2].map((col) =>
        [0, 1].map((row) => (
          <rect
            key={`${col}-${row}`}
            x={36 + col * 200}
            y={32 + row * 180}
            width="176"
            height="156"
            fill="#161616"
            stroke="#262626"
          />
        ))
      )}
      <rect x="56" y="52" width="80" height="64" fill="#0B0B0B" />
      <rect x="56" y="128" width="120" height="8" fill="#EDEAE3" opacity="0.6" />
      <rect x="256" y="52" width="80" height="64" fill="#0B0B0B" />
      <rect x="256" y="128" width="96" height="8" fill="#0F766E" />
      <rect x="456" y="52" width="80" height="64" fill="#0B0B0B" />
      <rect x="56" y="232" width="80" height="64" fill="#0B0B0B" />
      <rect x="256" y="232" width="80" height="64" fill="#0B0B0B" />
      <rect x="456" y="232" width="80" height="64" fill="#0B0B0B" />
    </svg>
  );
}

function InsightVisual() {
  return (
    <svg viewBox="0 0 640 400" className="h-full w-full" aria-hidden>
      <rect width="640" height="400" fill="#111111" />
      <rect x="32" y="28" width="576" height="80" fill="#161616" stroke="#262626" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={52 + i * 140} y="48" width="112" height="40" fill="#0B0B0B" stroke="#262626" />
      ))}
      <rect x="32" y="128" width="360" height="244" fill="#161616" stroke="#262626" />
      <polyline
        points="64,320 120,260 180,280 240,200 300,220 360,160"
        fill="none"
        stroke="#0F766E"
        strokeWidth="2"
      />
      <rect x="412" y="128" width="196" height="244" fill="#161616" stroke="#262626" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={436 + i * 32}
          y={180 + (4 - i) * 18}
          width="20"
          height={160 - (4 - i) * 18}
          fill={i === 3 ? "#0F766E" : "#262626"}
        />
      ))}
    </svg>
  );
}

const visuals = {
  ops: OpsVisual,
  counsel: CounselVisual,
  store: StoreVisual,
  insight: InsightVisual,
};

export function CaseVisual({
  visual,
  className = "",
}: {
  visual: CaseStudy["visual"];
  className?: string;
}) {
  const Visual = visuals[visual];
  return (
    <div className={`overflow-hidden border border-line bg-charcoal ${className}`}>
      <Visual />
    </div>
  );
}

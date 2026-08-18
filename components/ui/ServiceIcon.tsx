const icons: Record<string, React.ReactNode> = {
  "custom-software": (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <rect x="8" y="10" width="32" height="22" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 28h32" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 38h12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 32v6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 18h8M16 22h5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "web-development": (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 24h28" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 10c4 4.5 6.5 9.5 6.5 14S28 33.5 24 38c-4-4.5-6.5-9.5-6.5-14S20 14.5 24 10Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "ui-ux-design": (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <rect x="10" y="12" width="20" height="26" stroke="currentColor" strokeWidth="1.4" />
      <path d="M30 18h8v18H18" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 20h8M16 24h5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "ai-automation": (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <circle cx="16" cy="24" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="34" cy="16" r="4" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="34" cy="32" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M21 22l9-5M21 26l9 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "data-analytics": (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <path d="M10 36V12M10 36h28" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 28v8M24 20v16M32 24v12" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 28l8-8 8 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  ecommerce: (
    <svg viewBox="0 0 48 48" fill="none" className="h-10 w-10" aria-hidden>
      <path d="M12 16h24l-2 16H14L12 16Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M16 16V14a8 8 0 0 1 16 0v2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
};

export function ServiceIcon({ slug }: { slug: string }) {
  return <span className="text-teal">{icons[slug]}</span>;
}

import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "invert" | "invert-secondary";

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-paper hover:bg-teal-bright focus-visible:bg-teal-bright",
  secondary:
    "border border-line text-mist hover:border-mist/50 hover:bg-charcoal",
  ghost: "text-mist hover:text-teal-bright",
  invert: "bg-teal text-paper hover:bg-teal-bright",
  "invert-secondary":
    "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5",
};

type ButtonProps = {
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center min-h-11 px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "onNavy";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-sand-50 hover:bg-navy-700 hover:shadow-lg hover:shadow-navy-900/15 active:scale-[0.98]",
  secondary:
    "border border-navy-800/20 bg-transparent text-navy-800 hover:border-navy-800/50 hover:bg-navy-800/[0.04] active:scale-[0.98]",
  ghost:
    "text-navy-800 hover:text-crimson-700 underline-offset-4 hover:underline",
  onNavy:
    "bg-gold-400 text-navy-900 hover:bg-gold-300 hover:shadow-lg hover:shadow-black/20 active:scale-[0.98]",
};

const sizes = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-6",
  lg: "h-13 px-8 text-[15px]",
};

export type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external,
  type = "button",
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}

/** Arrow that slides on hover — pair with any Button. */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cn(
        "h-3.5 w-3.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1",
        className,
      )}
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

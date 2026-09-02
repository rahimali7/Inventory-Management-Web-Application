import { cn } from "@/lib/cn";

/**
 * The eight-pointed star (khatim) from the masjid's logo, redrawn as a clean
 * SVG so it can be used as a decorative motif at any size without the raster
 * logo's weight. Two overlapping squares rotated 45° from each other.
 */
export function StarFrame({
  className,
  strokeWidth = 1.25,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
      className={cn("h-full w-full", className)}
    >
      <rect
        x="18"
        y="18"
        width="64"
        height="64"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <rect
        x="18"
        y="18"
        width="64"
        height="64"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        transform="rotate(45 50 50)"
      />
    </svg>
  );
}

/** A single small diamond — the logo's repeating punctuation mark. */
export function Diamond({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block rotate-45 bg-current", className)}
    />
  );
}

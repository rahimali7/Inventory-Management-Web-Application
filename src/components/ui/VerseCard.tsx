import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { Diamond } from "@/components/ui/StarFrame";
import { verse as getVerse } from "@/data/verses";

/**
 * Displays a Qur'anic verse: Arabic in Amiri, then the English translation,
 * then the reference. Arabic text is rendered in full — never truncated.
 *
 * `surface` controls the container (a raised card, or nothing at all);
 * `scheme` controls the text colours and must match the background the card
 * is placed on. They are separate props because a plain, chrome-less verse
 * is used on both light and dark bands.
 */
export function VerseCard({
  slug,
  surface = "card",
  scheme = "light",
  size = "default",
  className,
}: {
  slug: string;
  surface?: "card" | "plain";
  /** "light" = dark text for light backgrounds. "dark" = light text for navy. */
  scheme?: "light" | "dark";
  size?: "compact" | "default";
  className?: string;
}) {
  const v = getVerse(slug);
  const onDark = scheme === "dark";

  const surfaceClasses =
    surface === "card"
      ? cn(
          "rounded-2xl px-7 py-10 sm:px-10 sm:py-12",
          onDark
            ? "bg-navy-900/40 border border-gold-400/15 backdrop-blur-sm"
            : "bg-white border border-navy-800/8 shadow-[0_1px_2px_rgba(0,30,66,0.04),0_12px_32px_-16px_rgba(0,30,66,0.15)]",
        )
      : "";

  const arabicColor = onDark ? "text-sand-50" : "text-navy-800";
  const enColor = onDark ? "text-sand-200/90" : "text-muted";
  const refColor = onDark ? "text-gold-300" : "text-gold-600";
  const arabicSize =
    size === "compact"
      ? "text-[clamp(1.25rem,2.6vw,1.75rem)]"
      : "text-[clamp(1.5rem,3.4vw,2.25rem)]";

  return (
    <Reveal from="up">
      <figure className={cn(surfaceClasses, className)}>
        <p
          lang="ar"
          dir="rtl"
          className={cn("text-center font-normal", arabicSize, arabicColor)}
        >
          {v.arabic}
        </p>

        <div className="my-8 flex items-center justify-center gap-3" aria-hidden>
          <span className="h-px w-12 rule-gold" />
          <Diamond className="h-1.5 w-1.5 text-gold-400" />
          <span className="h-px w-12 rule-gold" />
        </div>

        <blockquote
          className={cn(
            "text-center font-display text-[1.0625rem] italic leading-relaxed text-pretty sm:text-lg",
            enColor,
          )}
        >
          {v.translation}
        </blockquote>

        <figcaption className={cn("mt-6 text-center eyebrow", refColor)}>
          {v.reference}
        </figcaption>
      </figure>
    </Reveal>
  );
}

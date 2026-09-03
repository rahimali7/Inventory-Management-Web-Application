import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/motion/Reveal";
import { SplitWords } from "@/components/motion/SplitWords";

/**
 * The site's standard section heading: small-caps gold eyebrow, a large
 * display headline whose second line is set in gold italic, then optional
 * supporting copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  children,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  /** Second line, set in gold italic — the site's signature heading move. */
  accent?: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-sand-50" : "text-navy-800";
  const bodyColor = tone === "light" ? "text-sand-200" : "text-muted";
  const eyebrowColor = tone === "light" ? "text-gold-300" : "text-gold-600";
  const size =
    Tag === "h1"
      ? "text-[clamp(2.75rem,7vw,5.25rem)]"
      : "text-[clamp(2.25rem,5vw,4rem)]";

  return (
    <div
      className={cn(
        "flex flex-col",
        isCenter && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal from="none" duration={0.6}>
          <div className={cn("flex items-center gap-3", isCenter && "justify-center")}>
            <span className={cn("eyebrow", eyebrowColor)}>{eyebrow}</span>
          </div>
          <div
            className={cn(
              "mt-3 h-px w-14 rule-gold",
              isCenter && "mx-auto",
            )}
          />
        </Reveal>
      )}

      <Tag
        className={cn(
          "mt-6 font-display font-normal leading-[0.95] tracking-[-0.02em] text-balance",
          size,
          titleColor,
        )}
      >
        <SplitWords text={title} />
        {accent && (
          <>
            <br />
            <span className="italic text-gold-500">
              <SplitWords text={accent} delay={0.12} />
            </span>
          </>
        )}
      </Tag>

      {children && (
        <Reveal from="up" delay={0.15}>
          <div
            className={cn(
              "mt-7 max-w-2xl text-[1.0625rem] leading-relaxed text-pretty",
              bodyColor,
              isCenter && "mx-auto",
            )}
          >
            {children}
          </div>
        </Reveal>
      )}
    </div>
  );
}

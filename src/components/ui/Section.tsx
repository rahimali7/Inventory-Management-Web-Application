import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** A full-width band. Vertical rhythm lives here so pages stay consistent. */
export function Section({
  children,
  className,
  id,
  tone = "sand",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "sand" | "white" | "navy" | "transparent";
  size?: "compact" | "default" | "tall";
}) {
  const tones = {
    sand: "bg-sand-50 text-ink",
    white: "bg-white text-ink",
    navy: "bg-navy-800 text-sand-50",
    transparent: "",
  }[tone];

  const padding = {
    compact: "py-16 sm:py-20",
    default: "py-24 sm:py-32",
    tall: "py-32 sm:py-44",
  }[size];

  return (
    <section id={id} className={cn(tones, padding, className)}>
      {children}
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { ProgramIcon } from "@/components/ui/ProgramIcon";

/**
 * The card used across Programs and Services: a tinted icon tile, a
 * small-caps label in the opposite corner, then heading and copy.
 */
export function IconCard({
  icon,
  eyebrow,
  title,
  children,
  meta,
  badge,
  className,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  /** Rows shown under a hairline at the foot of the card. */
  meta?: { label: string; value: string }[];
  badge?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-navy-800/10 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold-400/60 hover:shadow-[0_24px_60px_-40px_rgba(0,30,66,0.45)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-crimson-700/[0.07] text-navy-800 transition-colors duration-500 group-hover:bg-gold-400/20">
          <ProgramIcon name={icon} className="h-5 w-5" />
        </span>
        <span className="eyebrow pt-1 text-right">{eyebrow}</span>
      </div>

      <h3 className="mt-8 font-display text-2xl leading-snug text-navy-800">
        {title}
      </h3>

      {badge && (
        <span className="mt-3 inline-flex w-fit rounded-full bg-gold-400/20 px-3 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-gold-700">
          {badge}
        </span>
      )}

      <div className="mt-4 leading-relaxed text-muted text-pretty">
        {children}
      </div>

      {meta && meta.length > 0 && (
        <dl className="mt-auto space-y-2 border-t border-navy-800/8 pt-5 text-sm">
          {meta.map((m) => (
            <div key={m.label} className="flex gap-2">
              <dt className="shrink-0 text-navy-800">{m.label}</dt>
              <dd className="text-muted">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}

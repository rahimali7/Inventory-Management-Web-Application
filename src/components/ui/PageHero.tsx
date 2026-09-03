import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarFrame } from "@/components/ui/StarFrame";

/** Standard interior-page header. */
export function PageHero({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-sand-50 pt-40 pb-20 sm:pt-48 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[80vmin] w-[80vmin] text-navy-800/[0.04]"
      >
        <StarFrame strokeWidth={0.4} />
      </div>
      <Container className="relative z-10">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          accent={accent}
        >
          {children}
        </SectionHeading>
      </Container>
    </section>
  );
}

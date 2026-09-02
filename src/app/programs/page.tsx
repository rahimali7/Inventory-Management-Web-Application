import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { VerseBand } from "@/components/sections/VerseBand";
import { DonateCta } from "@/components/sections/DonateCta";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { programCategories, programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Qur'an memorization, tajweed, weekend school, Arabic, youth halaqa, and new Muslim classes at Masjid Bilal Islamic Center.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Education" title="Programs &" accent="classes">
        The masjid teaches year-round, from a child&rsquo;s first letters of the
        Qur&rsquo;an to adult study circles. Everyone is welcome, at every level.
      </PageHero>

      <VerseBand slug="knowledge" />

      {programCategories.map((cat, index) => {
        const inCategory = programs.filter((p) => p.category === cat.id);
        if (inCategory.length === 0) return null;

        return (
          <Section
            key={cat.id}
            tone={index % 2 === 0 ? "white" : "sand"}
            size="compact"
          >
            <Container>
              <SectionHeading eyebrow={cat.label} title={cat.label} as="h2" />

              <Stagger className="mt-12 grid gap-8 lg:grid-cols-2">
                {inCategory.map((p) => (
                  <StaggerItem
                    key={p.slug}
                    as="article"
                    id={p.slug}
                    className="group rounded-2xl border border-navy-800/10 bg-white/60 p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold-400/50 hover:bg-white hover:shadow-[0_20px_50px_-30px_rgba(0,30,66,0.4)] sm:p-10"
                  >
                    <p className="eyebrow">{p.audience}</p>
                    <h3 className="mt-4 font-display text-2xl text-navy-800 sm:text-[1.75rem]">
                      {p.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted text-pretty">
                      {p.detail}
                    </p>
                    <p className="mt-6 border-t border-navy-800/8 pt-5 text-sm text-muted">
                      <span className="text-navy-800">Schedule:</span>{" "}
                      {p.schedule}
                    </p>
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <DonateCta />
    </>
  );
}

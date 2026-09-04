import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerseBand } from "@/components/sections/VerseBand";
import { DonateCta } from "@/components/sections/DonateCta";
import { WhatsAppBand } from "@/components/sections/WhatsAppBand";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { IconCard } from "@/components/ui/IconCard";
import { programCategories, programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Qur'an memorization, online Qur'an classes, Seerah, Islamic studies, hadith, monthly halaqah and new Muslim classes at Masjid Bilal Islamic Center in Louisville, Kentucky.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero eyebrow="Education" title="Programs &" accent="classes">
        The masjid teaches year-round — Qur&rsquo;an memorization for every age,
        weekend studies, and weekly circles. Everyone is welcome, at every
        level.
      </PageHero>

      <VerseBand slug="knowledge" />

      {programCategories.map((cat, index) => {
        const inCategory = programs.filter((p) => p.category === cat.id);
        if (inCategory.length === 0) return null;

        return (
          <Section
            key={cat.id}
            id={cat.id}
            tone={index % 2 === 0 ? "white" : "sand"}
            size="compact"
          >
            <Container>
              <SectionHeading eyebrow="Programs" title={cat.label} as="h2">
                {cat.blurb}
              </SectionHeading>

              <Stagger className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {inCategory.map((p) => (
                  <StaggerItem key={p.slug} id={p.slug} className="scroll-mt-32">
                    <IconCard
                      icon={p.icon}
                      eyebrow={p.eyebrow}
                      title={p.title}
                      badge={p.status === "coming-soon" ? "Coming soon" : undefined}
                      meta={
                        p.status === "coming-soon"
                          ? [{ label: "Who", value: p.audience }]
                          : [
                              { label: "When", value: p.schedule },
                              { label: "Who", value: p.audience },
                            ]
                      }
                    >
                      {p.summary}
                    </IconCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        );
      })}

      <WhatsAppBand />
      <DonateCta />
    </>
  );
}

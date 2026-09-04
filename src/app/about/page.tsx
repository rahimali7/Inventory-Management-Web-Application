import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { VerseBand } from "@/components/sections/VerseBand";
import { HistoryTimeline } from "@/components/sections/HistoryTimeline";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { locations } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The history of Masjid Bilal Islamic Center — from a community's vision to two masjids serving Louisville, Kentucky.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="Built by a" accent="community">
        Masjid Bilal Islamic Center grew out of the Somali community of
        Louisville and its search for a permanent home for worship, education,
        and one another.
      </PageHero>

      <VerseBand slug="houses-raised" />

      {/* Timeline */}
      <Section tone="white">
        <Container>
          <SectionHeading eyebrow="History" title="How we" accent="got here" />

          <div className="mt-20">
            <HistoryTimeline />
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section tone="sand">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal from="up">
              <ImagePanel ratio="4/5" tone="navy" />
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Our Mission"
                title="Worship, learning,"
                accent="and care"
              >
                <p>
                  We exist to keep the doors open — for the five daily prayers,
                  for Jumu&rsquo;ah, for the child learning their first surah,
                  and for the neighbour who walks in needing help.
                </p>
                <p className="mt-5">
                  The masjid is open twenty-four hours a day. There is no hour at
                  which a Muslim in Louisville has nowhere to pray.
                </p>
              </SectionHeading>
            </div>
          </div>
        </Container>
      </Section>

      {/* Locations detail */}
      <Section tone="white" size="compact">
        <Container>
          <SectionHeading eyebrow="Visit" title="Where to" accent="find us" />
          <Stagger className="mt-14 grid gap-10 md:grid-cols-2">
            {locations.map((loc) => (
              <StaggerItem key={loc.slug} as="article">
                <h3 className="font-display text-2xl text-navy-800">
                  {loc.name}
                </h3>
                <p className="mt-3 text-muted">
                  {loc.street}
                  <br />
                  {loc.city}, {loc.region}
                  {loc.postalCode ? ` ${loc.postalCode}` : ""}
                </p>
                <p className="mt-5 leading-relaxed text-muted text-pretty">
                  {loc.blurb}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <VerseBand slug="founded-on-taqwa" />
    </>
  );
}

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { locations } from "@/data/site";

export function LocationsBand() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeading
          eyebrow="Two Locations"
          title="One community,"
          accent="two homes"
        >
          Masjid Bilal serves Louisville from two facilities, both open around
          the clock for prayer, study, and anyone who needs a place to go.
        </SectionHeading>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2" stagger={0.12}>
          {locations.map((loc, i) => (
            <StaggerItem key={loc.slug} as="article" className="group">
              <ImagePanel
                ratio="16/9"
                tone={i === 0 ? "navy" : "crimson"}
                className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
              />
              <div className="mt-7">
                <p className="eyebrow">Established {loc.established}</p>
                <h3 className="mt-3 font-display text-2xl text-navy-800 sm:text-3xl">
                  {loc.name}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {loc.street}, {loc.city}, {loc.region}
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-muted text-pretty">
                  {loc.blurb}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

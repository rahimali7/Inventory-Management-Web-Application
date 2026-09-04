import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { ImagePanel } from "@/components/ui/ImagePanel";
import { Button, ArrowRight } from "@/components/ui/Button";
import { contact, primaryLocation } from "@/data/site";

/** Where to find the masjid. One location — see the note in data/site.ts. */
export function LocationsBand() {
  const loc = primaryLocation;

  return (
    <Section tone="white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal from="up">
            <ImagePanel ratio="4/5" tone="navy" />
          </Reveal>

          <div>
            <SectionHeading eyebrow="Visit" title="Where to" accent="find us">
              {loc.blurb}
            </SectionHeading>

            <Reveal from="up" delay={0.15}>
              <address className="mt-9 not-italic">
                <span className="block font-display text-2xl text-navy-800">
                  {loc.name}
                </span>
                <span className="mt-2 block leading-relaxed text-muted">
                  {loc.street}
                  <br />
                  {loc.city}, {loc.region} {loc.postalCode}
                </span>
              </address>

              <p className="mt-6 text-muted">{contact.hours}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${loc.street}, ${loc.city}, ${loc.region} ${loc.postalCode}`,
                  )}`}
                  external
                >
                  Open in Maps
                  <ArrowRight />
                </Button>
                <Button href="/prayer-times" variant="secondary">
                  Prayer times
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

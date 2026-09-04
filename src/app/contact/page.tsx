import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerseBand } from "@/components/sections/VerseBand";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { Button, ArrowRight } from "@/components/ui/Button";
import { IconCard } from "@/components/ui/IconCard";
import { WhatsAppBand } from "@/components/sections/WhatsAppBand";
import { services } from "@/data/services";
import { contact, locations } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Services",
  description:
    "Contact Masjid Bilal Islamic Center in Louisville, Kentucky. Nikah, janazah, shahada, and community counseling services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact &" accent="services">
        The masjid is open twenty-four hours a day. Call, email, or simply come
        by — someone is always here.
      </PageHero>

      {/* Contact details */}
      <Section tone="white" size="compact">
        <Container>
          <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard label="Phone" value={contact.phone} href={contact.phoneHref} />
            <ContactCard
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactCard label="Hours" value={contact.hours} />
            <ContactCard
              label="Where"
              value={`${locations[0]?.city ?? "Louisville"}, ${locations[0]?.region ?? "KY"}`}
            />
          </Stagger>

          <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
            {locations.map((loc) => (
              <StaggerItem
                key={loc.slug}
                as="article"
                className="rounded-2xl border border-navy-800/10 bg-sand-50 p-8 sm:p-10"
              >
                <p className="eyebrow">Established {loc.established}</p>
                <h2 className="mt-3 font-display text-2xl text-navy-800">
                  {loc.name}
                </h2>
                <address className="mt-4 not-italic leading-relaxed text-muted">
                  {loc.street}
                  <br />
                  {loc.city}, {loc.region}
                  {loc.postalCode ? ` ${loc.postalCode}` : ""}
                </address>
                <Button
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${loc.street}, ${loc.city}, ${loc.region}`,
                  )}`}
                  external
                  variant="secondary"
                  size="sm"
                  className="mt-7"
                >
                  Open in Maps
                  <ArrowRight />
                </Button>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Services */}
      <Section tone="sand">
        <Container>
          <SectionHeading eyebrow="How we help" title="Community" accent="services">
            These services are offered to the whole community, member or not.
            For janazah, call at any hour — day or night.
          </SectionHeading>

          <Stagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.id} id={s.anchor} className="scroll-mt-32">
                <IconCard icon={s.icon} eyebrow={s.eyebrow} title={s.title}>
                  <p className="font-display text-lg italic text-gold-600">
                    {s.summary}
                  </p>
                  <p className="mt-4">{s.detail}</p>
                </IconCard>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal from="up">
            <div className="mt-14 flex flex-col items-start gap-3 sm:flex-row">
              <Button href={contact.phoneHref} external size="lg">
                Call {contact.phone}
                <ArrowRight />
              </Button>
              <Button
                href={`mailto:${contact.email}`}
                external
                variant="secondary"
                size="lg"
              >
                Send an email
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <WhatsAppBand />

      <VerseBand slug="know-one-another" />
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <StaggerItem>
      <p className="eyebrow">{label}</p>
      <div className="mt-3 h-px w-10 rule-gold" />
      {href ? (
        <a
          href={href}
          className="mt-5 block break-words font-display text-xl text-navy-800 transition-colors hover:text-crimson-700"
        >
          {value}
        </a>
      ) : (
        <p className="mt-5 break-words font-display text-xl text-navy-800">
          {value}
        </p>
      )}
    </StaggerItem>
  );
}

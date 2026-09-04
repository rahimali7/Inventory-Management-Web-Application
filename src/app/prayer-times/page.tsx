import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { VerseBand } from "@/components/sections/VerseBand";
import { DailyPrayerTimes } from "@/components/sections/DailyPrayerTimes";
import { MasjidalWidget } from "@/components/sections/MasjidalWidget";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { hasMasjidalWidget, jumuah } from "@/data/prayer";
import { contact, primaryLocation } from "@/data/site";

export const metadata: Metadata = {
  title: "Prayer Times",
  description:
    "Daily prayer times and Jumu'ah schedule for Masjid Bilal Islamic Center in Louisville, Kentucky.",
};

export default function PrayerTimesPage() {
  return (
    <>
      <PageHero eyebrow="Salah" title="Prayer" accent="times">
        {primaryLocation.name} is open twenty-four hours a day. Adhan times are
        calculated for our location and update automatically; iqamah times are
        set by the masjid.
      </PageHero>

      <Section tone="white" size="compact">
        <Container>
          <Reveal from="up">
            {/* The masjid's published Masjidal widget takes precedence once it
                is configured; otherwise the calculated table is shown. */}
            {hasMasjidalWidget() ? <MasjidalWidget /> : <DailyPrayerTimes />}
          </Reveal>
        </Container>
      </Section>

      {/* Jumu'ah */}
      <Section tone="sand" size="compact">
        <Container>
          <SectionHeading eyebrow="Friday" title="Jumu'ah" accent="prayer" />

          <Stagger className="mt-14 grid gap-8 md:grid-cols-2">
            {jumuah.map((j) => (
              <StaggerItem
                key={j.label}
                as="article"
                className="rounded-2xl border border-navy-800/10 bg-white p-8 sm:p-10"
              >
                <p className="eyebrow">{j.label}</p>
                <h3 className="mt-3 font-display text-2xl text-navy-800">
                  {j.location}
                </h3>
                <dl className="mt-7 grid grid-cols-2 gap-6">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted/70">
                      Khutbah
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-navy-800">
                      {j.khutbah ?? "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted/70">
                      Prayer
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-navy-800">
                      {j.prayer ?? "—"}
                    </dd>
                  </div>
                </dl>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal from="up">
            <p className="mt-10 text-sm text-muted">
              Questions about the schedule? Call{" "}
              <a
                href={contact.phoneHref}
                className="text-crimson-700 underline underline-offset-4"
              >
                {contact.phone}
              </a>
              .
            </p>
          </Reveal>
        </Container>
      </Section>

      <VerseBand slug="masajid-lillah" />
    </>
  );
}

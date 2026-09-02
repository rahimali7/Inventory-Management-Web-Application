import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/ui/PageHero";
import { VerseBand } from "@/components/sections/VerseBand";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { MasjidalWidget } from "@/components/sections/MasjidalWidget";
import {
  hasPrayerWidget,
  jumuah,
  prayerConfig,
  prayerFallback,
} from "@/data/prayer";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Prayer Times",
  description:
    "Daily prayer and iqamah times and Jumu'ah schedule for Masjid Bilal Islamic Center in Louisville, Kentucky.",
};

export default function PrayerTimesPage() {
  return (
    <>
      <PageHero eyebrow="Salah" title="Prayer" accent="times">
        Both masjids are open twenty-four hours a day. Iqamah times are set by
        the masjid and may shift with the season — check here before you travel.
      </PageHero>

      <Section tone="white" size="compact">
        <Container>
          {/* Live Masjidal widget once configured; otherwise the manually
              maintained table, so the page is never empty. */}
          {hasPrayerWidget() ? (
            <Reveal from="up">
              <MasjidalWidget />
            </Reveal>
          ) : (
            <PrayerTable />
          )}
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
                      {j.khutbah}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.16em] text-muted/70">
                      Prayer
                    </dt>
                    <dd className="mt-2 font-display text-2xl text-navy-800">
                      {j.prayer}
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

function PrayerTable() {
  return (
    <Reveal from="up">
      <div className="overflow-hidden rounded-2xl border border-navy-800/10">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Daily adhan and iqamah times at Masjid Bilal Islamic Center
          </caption>
          <thead>
            <tr className="bg-navy-800 text-sand-50">
              <th scope="col" className="px-6 py-5 text-xs uppercase tracking-[0.16em] font-medium sm:px-8">
                Prayer
              </th>
              <th scope="col" className="px-6 py-5 text-xs uppercase tracking-[0.16em] font-medium sm:px-8">
                Adhan
              </th>
              <th scope="col" className="px-6 py-5 text-xs uppercase tracking-[0.16em] font-medium sm:px-8">
                Iqamah
              </th>
            </tr>
          </thead>
          <tbody>
            {prayerFallback.map((row, i) => (
              <tr
                key={row.name}
                className={i % 2 === 0 ? "bg-white" : "bg-sand-50"}
              >
                <th scope="row" className="px-6 py-6 font-normal sm:px-8">
                  <span className="block font-display text-xl text-navy-800">
                    {row.name}
                  </span>
                  <span
                    lang="ar"
                    dir="rtl"
                    className="mt-1 block text-lg text-gold-600"
                  >
                    {row.arabic}
                  </span>
                </th>
                <td className="px-6 py-6 font-display text-2xl text-navy-800 sm:px-8">
                  {row.adhan}
                </td>
                <td className="px-6 py-6 font-display text-2xl text-crimson-700 sm:px-8">
                  {row.iqamah}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-sm text-muted">
        Times last updated: {prayerConfig.lastUpdated}.
      </p>
    </Reveal>
  );
}

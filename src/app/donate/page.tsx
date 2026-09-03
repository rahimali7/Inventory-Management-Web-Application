import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { VerseCard } from "@/components/ui/VerseCard";
import { VerseBand } from "@/components/sections/VerseBand";
import { DonatePanel } from "@/components/sections/DonatePanel";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, donations } from "@/data/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Masjid Bilal Islamic Center in Louisville, Kentucky. Give your sadaqah or zakat by Zelle.",
};

/**
 * Impact statements.
 * PLACEHOLDER — replace with figures the masjid can actually stand behind.
 * Do not publish impact claims that have not been verified.
 */
const impact = [
  { amount: "$25", detail: "Helps cover a week of utilities across both masjids" },
  { amount: "$100", detail: "Supports a student's Qur'an education for a month" },
  { amount: "$500", detail: "Funds a community program or outreach event" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Sadaqah & Zakat" title="Support our" accent="mission">
        Your generosity keeps both masjids open, funds our classes, and extends
        our care to families who need it. Every contribution matters, whatever
        its size.
      </PageHero>

      <Section tone="white" size="compact">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left: why give */}
            <div className="min-w-0">
              <Reveal from="right">
                <blockquote className="border-l-2 border-gold-400 pl-6">
                  <p className="font-display text-xl italic leading-relaxed text-navy-800 text-pretty sm:text-2xl">
                    &ldquo;Who is it that would loan Allah a goodly loan so He
                    may multiply it for him many times over?&rdquo;
                  </p>
                  <footer className="eyebrow mt-4">
                    Surah Al-Baqarah, 2:245
                  </footer>
                </blockquote>
              </Reveal>

              <Reveal from="up" delay={0.1}>
                <h2 className="eyebrow mt-14">Your impact</h2>
              </Reveal>

              <Stagger as="ul" className="mt-7 space-y-6">
                {impact.map((row) => (
                  <StaggerItem
                    key={row.amount}
                    as="li"
                    className="flex items-baseline gap-6 border-b border-navy-800/8 pb-6"
                  >
                    <span className="w-20 shrink-0 font-display text-2xl text-gold-600">
                      {row.amount}
                    </span>
                    <span className="leading-relaxed text-muted text-pretty">
                      {row.detail}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>

              <Reveal from="up" delay={0.15}>
                <div className="mt-12 rounded-2xl border border-navy-800/10 bg-sand-50 p-7">
                  <p className="eyebrow">Questions about giving?</p>
                  <p className="mt-4 leading-relaxed text-muted">
                    For zakat guidance, large gifts, or to arrange a donation in
                    person, call{" "}
                    <a
                      href={contact.phoneHref}
                      className="text-crimson-700 underline underline-offset-4"
                    >
                      {contact.phone}
                    </a>{" "}
                    or email{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="break-all text-crimson-700 underline underline-offset-4"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                  {donations.taxDeductible === null && (
                    /* Intentionally NOT claiming tax-deductibility until the
                       masjid's 501(c)(3) status and EIN are confirmed. */
                    <p className="mt-5 text-xs leading-relaxed text-muted/70">
                      For questions about the tax treatment of your donation,
                      please contact the masjid directly.
                    </p>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right: the panel */}
            {/* Deliberately not sticky: the panel is taller than a laptop
                viewport, and a sticky element that overflows the viewport makes
                its own bottom (the Zelle number) unreachable. */}
            <div className="min-w-0">
              <Reveal from="left">
                <DonatePanel />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="sand" size="compact">
        <Container size="narrow">
          <SectionHeading
            eyebrow="The reward of giving"
            title="A single seed,"
            accent="seven ears"
            align="center"
          />
          <div className="mt-14">
            <VerseCard slug="seed-grain" />
          </div>
        </Container>
      </Section>

      <VerseBand slug="spend-in-secret" />
    </>
  );
}

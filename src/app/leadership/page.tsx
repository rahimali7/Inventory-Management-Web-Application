import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VerseBand } from "@/components/sections/VerseBand";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Reveal } from "@/components/motion/Reveal";
import { StarFrame } from "@/components/ui/StarFrame";
import { Button, ArrowRight } from "@/components/ui/Button";
import { leadership, orgOverview, type Person } from "@/data/leadership";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "Leadership & Organization",
  description:
    "The imams, board of directors, and committees who lead and serve Masjid Bilal Islamic Center.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Those who"
        accent="serve"
      >
        Masjid Bilal is led by its imams and governed by a board drawn from the
        congregation, with the day-to-day work carried by volunteers.
      </PageHero>

      {/* Governance overview */}
      <Section tone="white" size="compact">
        <Container size="narrow">
          <Reveal from="up">
            <div className="relative overflow-hidden rounded-2xl border border-navy-800/10 bg-sand-50 p-10 sm:p-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 text-navy-800/[0.05]"
              >
                <StarFrame strokeWidth={0.7} />
              </div>
              <p className="eyebrow relative">Organization</p>
              <p className="relative mt-6 font-display text-xl leading-relaxed text-navy-800 text-pretty sm:text-2xl">
                {orgOverview.structure}
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {leadership.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "sand" : "white"}
          size="compact"
        >
          <Container>
            <SectionHeading eyebrow="Leadership" title={group.title}>
              {group.intro}
            </SectionHeading>

            <Stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {group.people.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </Stagger>
          </Container>
        </Section>
      ))}

      {/* Contact the leadership */}
      <Section tone="white" size="compact">
        <Container size="narrow">
          <Reveal from="up">
            <div className="text-center">
              <h2 className="font-display text-3xl text-navy-800 sm:text-4xl">
                Reach the leadership
              </h2>
              <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted text-pretty">
                For questions about governance, to volunteer for a committee, or
                to raise a concern with the board, get in touch.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={`mailto:${contact.email}`} external>
                  Email the masjid
                  <ArrowRight />
                </Button>
                <Button href={contact.phoneHref} variant="secondary" external>
                  {contact.phone}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <VerseBand slug="rope-of-allah" />
    </>
  );
}

function PersonCard({ person }: { person: Person }) {
  // Monogram fallback until real headshots are supplied.
  const initials = person.name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <StaggerItem
      as="article"
      className="group rounded-2xl border border-navy-800/10 bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-gold-400/50 hover:shadow-[0_20px_50px_-30px_rgba(0,30,66,0.4)]"
    >
      <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-navy-800 text-gold-400">
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center text-gold-400/25"
        >
          <StarFrame className="h-full w-full" strokeWidth={1.5} />
        </span>
        <span className="relative font-roman text-lg tracking-widest">
          {initials || "—"}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl text-navy-800">{person.name}</h3>
      <p className="eyebrow mt-2">{person.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted text-pretty">
        {person.bio}
      </p>
    </StaggerItem>
  );
}

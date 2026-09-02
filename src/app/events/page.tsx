import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { VerseBand } from "@/components/sections/VerseBand";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { events } from "@/data/events";
import { formatDay, formatFull, formatMonth, isUpcoming } from "@/lib/date";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming community events, youth programs, and seminars at Masjid Bilal Islamic Center in Louisville, Kentucky.",
};

const categoryColor: Record<string, string> = {
  Community: "text-gold-600",
  Youth: "text-navy-500",
  Education: "text-crimson-700",
  Fundraising: "text-gold-700",
};

export default function EventsPage() {
  const upcoming = events
    .filter((e) => isUpcoming(e.date))
    .sort((a, b) => a.date.localeCompare(b.date));
  const past = events
    .filter((e) => !isUpcoming(e.date))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero eyebrow="Community" title="Events &" accent="gatherings">
        Iftars, seminars, youth workshops, and the everyday gatherings that make
        a masjid more than a building.
      </PageHero>

      <Section tone="white" size="compact">
        <Container>
          {upcoming.length > 0 ? (
            <Stagger as="ul" className="border-t border-navy-800/10">
              {upcoming.map((e) => (
                <StaggerItem key={e.slug} as="li">
                  <article className="flex flex-col gap-6 border-b border-navy-800/10 py-10 sm:flex-row sm:gap-12">
                    <div className="flex shrink-0 items-baseline gap-3 sm:w-28 sm:flex-col sm:items-start sm:gap-0">
                      <span className="font-display text-5xl leading-none text-navy-800">
                        {formatDay(e.date)}
                      </span>
                      <span className="eyebrow sm:mt-2">
                        {formatMonth(e.date)}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span
                          className={cn(
                            "eyebrow",
                            categoryColor[e.category] ?? "text-gold-600",
                          )}
                        >
                          {e.category}
                        </span>
                      </div>
                      <h2 className="mt-3 font-display text-[1.75rem] leading-snug text-navy-800 sm:text-3xl">
                        {e.title}
                      </h2>
                      <p className="mt-4 max-w-2xl leading-relaxed text-muted text-pretty">
                        {e.summary}
                      </p>
                      <dl className="mt-6 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-8">
                        <div className="flex gap-2">
                          <dt className="text-navy-800">When</dt>
                          <dd>
                            <time dateTime={e.date}>{formatFull(e.date)}</time>,{" "}
                            {e.time}
                          </dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="text-navy-800">Where</dt>
                          <dd>{e.location}</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <p className="text-lg text-muted">
              No upcoming events are scheduled right now. Check back soon, or
              call the masjid to ask what is coming up.
            </p>
          )}
        </Container>
      </Section>

      {past.length > 0 && (
        <Section tone="sand" size="compact">
          <Container>
            <SectionHeading eyebrow="Archive" title="Past" accent="events" />
            <ul className="mt-12 space-y-5">
              {past.map((e) => (
                <li
                  key={e.slug}
                  className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b border-navy-800/8 pb-5 text-muted"
                >
                  <time dateTime={e.date} className="text-sm tabular-nums">
                    {formatFull(e.date)}
                  </time>
                  <span className="font-display text-lg text-navy-800/70">
                    {e.title}
                  </span>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      )}

      <VerseBand slug="symbols" />
    </>
  );
}

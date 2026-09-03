import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button, ArrowRight } from "@/components/ui/Button";
import { events } from "@/data/events";
import { formatDay, formatMonth, formatWeekday, isUpcoming } from "@/lib/date";
import { cn } from "@/lib/cn";

const categoryColor: Record<string, string> = {
  Community: "text-gold-600",
  Youth: "text-navy-500",
  Education: "text-crimson-700",
  Fundraising: "text-gold-700",
};

export function EventsPreview() {
  const upcoming = events.filter((e) => isUpcoming(e.date)).slice(0, 3);

  return (
    <Section tone="white">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Upcoming"
            title="Events &"
            accent="gatherings"
            className="lg:max-w-xl"
          />
          <Button href="/events" variant="secondary" className="shrink-0">
            All events
            <ArrowRight />
          </Button>
        </div>

        {upcoming.length > 0 ? (
          <Stagger as="ul" className="mt-16 border-t border-navy-800/10">
            {upcoming.map((e) => (
              <StaggerItem key={e.slug} as="li">
                <Link
                  href="/events"
                  className="group flex flex-col gap-5 border-b border-navy-800/10 py-9 transition-colors duration-500 hover:bg-sand-50/70 sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <div className="flex shrink-0 items-baseline gap-3 sm:w-24 sm:flex-col sm:items-start sm:gap-0">
                    <span className="font-display text-4xl leading-none text-navy-800">
                      {formatDay(e.date)}
                    </span>
                    <span className="eyebrow sm:mt-1">{formatMonth(e.date)}</span>
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
                      <span className="text-xs text-muted/60">·</span>
                      <span className="text-xs text-muted">
                        {formatWeekday(e.date)} · {e.time}
                      </span>
                    </div>
                    <h3 className="mt-2.5 font-display text-2xl text-navy-800 sm:text-[1.75rem]">
                      {e.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl leading-relaxed text-muted text-pretty">
                      {e.summary}
                    </p>
                    <p className="mt-3 text-sm text-muted/70">{e.location}</p>
                  </div>

                  <ArrowRight className="hidden shrink-0 self-center text-navy-800/30 transition-colors group-hover:text-crimson-700 sm:block" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <p className="mt-16 text-muted">
            No upcoming events are scheduled right now. Check back soon.
          </p>
        )}
      </Container>
    </Section>
  );
}

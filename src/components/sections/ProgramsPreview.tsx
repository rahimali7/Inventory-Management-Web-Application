import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Button, ArrowRight } from "@/components/ui/Button";
import { programs } from "@/data/programs";

export function ProgramsPreview() {
  const featured = programs.slice(0, 4);

  return (
    <Section tone="sand">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Learn"
            title="Education at"
            accent="every age"
            className="lg:max-w-2xl"
          >
            From a child&rsquo;s first letters of the Qur&rsquo;an to adult study
            circles, the masjid teaches year-round.
          </SectionHeading>

          <Button href="/programs" variant="secondary" className="shrink-0">
            All programs
            <ArrowRight />
          </Button>
        </div>

        <Stagger className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-navy-800/10 bg-navy-800/10 sm:grid-cols-2">
          {featured.map((p) => (
            <StaggerItem
              key={p.slug}
              as="article"
              className="group bg-sand-50 p-8 transition-colors duration-500 hover:bg-white sm:p-10"
            >
              <p className="eyebrow">{p.audience}</p>
              <h3 className="mt-4 font-display text-2xl leading-snug text-navy-800">
                {p.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted text-pretty">
                {p.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm text-crimson-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                Details
                <ArrowRight />
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}

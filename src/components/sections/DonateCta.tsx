import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StarFrame } from "@/components/ui/StarFrame";

export function DonateCta() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-28 text-sand-50 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/2 h-[90vmin] w-[90vmin] -translate-y-1/2 text-gold-400/[0.07]"
      >
        <StarFrame strokeWidth={0.4} />
      </div>

      <Container className="relative z-10">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Sadaqah & Zakat"
            title="Support the"
            accent="masjid"
            tone="light"
          >
            Your generosity keeps the masjid open, funds our classes, and extends
            our care to families who need it. Every contribution matters,
            whatever its size.
          </SectionHeading>

          <Reveal from="up" delay={0.2}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <Button href="/donate" variant="onNavy" size="lg">
                Give with Zelle
                <ArrowRight />
              </Button>
              <Button
                href="/contact"
                size="lg"
                className="border border-sand-50/25 bg-transparent text-sand-50 hover:bg-sand-50/10"
              >
                Other ways to help
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { VerseCard } from "@/components/ui/VerseCard";
import { StarFrame } from "@/components/ui/StarFrame";
import { Parallax } from "@/components/motion/Parallax";

/** Full-width navy band carrying a single verse. Used to punctuate pages. */
export function VerseBand({ slug }: { slug: string }) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-28 sm:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/2 h-[110vmin] w-[110vmin] -translate-y-1/2 text-gold-400/[0.06]"
      >
        <Parallax strength={40}>
          <StarFrame strokeWidth={0.4} />
        </Parallax>
      </div>

      <Container size="narrow" className="relative z-10">
        <VerseCard slug={slug} surface="plain" scheme="dark" />
      </Container>
    </section>
  );
}

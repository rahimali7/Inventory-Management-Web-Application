"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { SplitWords } from "@/components/motion/SplitWords";
import { StarFrame } from "@/components/ui/StarFrame";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useSafeReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // The hero recedes as the next section rises over it.
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const emblemScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-sand-50 pt-28 pb-20"
    >
      {/* Oversized star motif from the logo, drifting almost imperceptibly. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[150vmin] w-[150vmin] -translate-x-1/2 -translate-y-1/2 text-navy-800/[0.045]"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
      >
        <StarFrame strokeWidth={0.35} />
      </motion.div>

      {/* Warm wash so the centre reads lighter than the edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,theme(colors.white)_0%,transparent_62%)]"
      />

      <Container className="relative z-10">
        <motion.div style={reduced ? undefined : { opacity, y }}>
          <div className="flex flex-col items-center text-center">
            <motion.div
              className="relative h-28 w-28 sm:h-36 sm:w-36"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={reduced ? undefined : { scale: emblemScale }}
            >
              <Image
                src="/brand/logo-mark-flat.png"
                alt="Masjid Bilal Islamic Center emblem"
                fill
                sizes="(min-width: 640px) 144px, 112px"
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.p
              className="eyebrow mt-9"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Louisville, Kentucky · Open 24 hours
            </motion.p>

            <h1 className="mt-7 font-display text-[clamp(3rem,9vw,7rem)] font-normal leading-[0.9] tracking-[-0.025em] text-navy-800">
              <SplitWords text="Masjid Bilal" delay={0.35} />
              <br />
              <span className="italic text-gold-500">
                <SplitWords text="Islamic Center" delay={0.5} />
              </span>
            </h1>

            <motion.p
              className="mt-9 max-w-xl text-[1.0625rem] leading-relaxed text-muted text-pretty sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              A house of worship serving Louisville&rsquo;s Muslim community — daily
              prayer, Qur&rsquo;anic education, and care for one another.
            </motion.p>

            <motion.div
              className="mt-11 flex flex-col items-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button href="/prayer-times" size="lg">
                Prayer Times
                <ArrowRight />
              </Button>
              <Button href="/programs" variant="secondary" size="lg">
                Explore Programs
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <motion.span
          className="h-10 w-px bg-gradient-to-b from-transparent via-gold-400 to-transparent"
          animate={reduced ? undefined : { opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

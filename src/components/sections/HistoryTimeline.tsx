"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/cn";
import { useSafeReducedMotion } from "@/lib/useSafeReducedMotion";
import { timeline, type Milestone } from "@/data/timeline";

/**
 * Scroll-driven checkpoint timeline.
 *
 * A vertical spine runs down the section. A gold fill tracks the reader's
 * scroll position, and each checkpoint lights up as the fill reaches it —
 * so the history reads as progress through the masjid's story rather than
 * as a static list.
 *
 * Layout is a three-column grid on desktop (content | node | content) with
 * milestones alternating sides, collapsing to node-then-content on mobile.
 * The spine sits at the node column's centre in both layouts.
 */
export function HistoryTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useSafeReducedMotion();

  // Start filling once the top of the list reaches ~80% down the viewport,
  // and finish as its end passes ~55% — so the fill sits slightly ahead of
  // whichever milestone the reader is looking at.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });

  // Spring-smoothed so the fill glides rather than tracking the wheel 1:1.
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const fillHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  // For reduced-motion visitors the spine is simply shown complete. Done in an
  // effect rather than in the rendered output, so the server HTML and the
  // first client render stay identical (see MotionProvider).
  useEffect(() => {
    if (reduced) progress.set(1);
  }, [reduced, progress]);

  return (
    <div ref={ref} className="relative">
      {/* Spine: faint full-length track, with the gold progress fill over it. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-6 w-px -translate-x-1/2 bg-navy-800/12 md:left-1/2"
      />
      <motion.div
        aria-hidden
        style={{ height: fillHeight }}
        className="absolute top-0 left-6 w-px -translate-x-1/2 bg-gold-400 md:left-1/2"
      />

      <ol className="relative space-y-16 md:space-y-24">
        {timeline.map((milestone, i) => (
          <Checkpoint
            key={milestone.year}
            milestone={milestone}
            side={i % 2 === 0 ? "left" : "right"}
          />
        ))}
      </ol>
    </div>
  );
}

function Checkpoint({
  milestone,
  side,
}: {
  milestone: Milestone;
  side: "left" | "right";
}) {
  const ref = useRef<HTMLLIElement>(null);

  // Reached once the checkpoint rises into the upper 70% of the viewport,
  // and it stays lit — a checkpoint you have passed does not un-pass.
  const active = useInView(ref, { once: true, margin: "0px 0px -30% 0px" });

  const isLeft = side === "left";

  return (
    <li
      ref={ref}
      className="grid grid-cols-[3rem_1fr] items-start gap-x-4 md:grid-cols-[1fr_3rem_1fr] md:gap-x-0"
    >
      {/* Node — column 1 on mobile, the centre column on desktop. */}
      <div className="col-start-1 row-start-1 flex justify-center pt-2 md:col-start-2">
        <motion.span
          className={cn(
            "relative flex h-4 w-4 items-center justify-center rounded-full border transition-colors duration-500",
            active
              ? "border-gold-500 bg-gold-400"
              : "border-navy-800/25 bg-sand-50",
          )}
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft halo once reached. */}
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-gold-400/30"
            initial={false}
            animate={{ scale: active ? 2.4 : 1, opacity: active ? 1 : 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.span>
      </div>

      {/* Content — column 2 on mobile; alternates sides on desktop. */}
      <motion.div
        className={cn(
          "col-start-2 row-start-1",
          isLeft
            ? "md:col-start-1 md:pr-16 md:text-right"
            : "md:col-start-3 md:pl-16",
        )}
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: active ? 1 : 0, y: active ? 0 : 26 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-display text-3xl leading-none italic text-gold-500 sm:text-4xl">
          {milestone.year}
        </p>
        <h3 className="mt-3 font-display text-xl text-navy-800 sm:text-2xl">
          {milestone.title}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted text-pretty md:max-w-none">
          {milestone.body}
        </p>
        {milestone.address && (
          <p
            className={cn(
              "mt-5 flex items-center gap-2 text-sm text-muted/80",
              isLeft && "md:justify-end",
            )}
          >
            <span aria-hidden className="inline-block h-px w-6 bg-gold-400" />
            <span>{milestone.address}</span>
          </p>
        )}
      </motion.div>
    </li>
  );
}

"use client";

import { motion } from "motion/react";

/**
 * Reveals a headline word by word, each word rising from behind a mask.
 * Used only for the largest display headings — overusing it cheapens it.
 *
 * The markup is identical regardless of motion preference. Visitors who ask
 * for reduced motion have the travel suppressed by <MotionProvider>, not by
 * rendering something different here: branching markup on the client-only
 * `useReducedMotion()` hook is what causes hydration mismatches.
 */
export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.055,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          // The mask: each word sits in an overflow-hidden box and slides up into it.
          className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.85,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

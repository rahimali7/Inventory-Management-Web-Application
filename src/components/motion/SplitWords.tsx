"use client";

import { Fragment } from "react";
import { motion } from "motion/react";

/**
 * Reveals a headline word by word, each word rising from behind a mask.
 * Used only for the largest display headings — overusing it cheapens it.
 *
 * The inter-word space is rendered BETWEEN the word wrappers, never inside
 * them. CSS strips trailing white space at the end of an inline-block, so a
 * space kept inside the mask disappears and the words run together
 * ("MasjidBilal"). Keeping it outside makes it an ordinary text node in a
 * normal inline context, where it survives.
 *
 * The markup does not vary with motion preference — <MotionProvider> handles
 * that — because branching markup on a client-only value breaks hydration.
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
        <Fragment key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
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
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

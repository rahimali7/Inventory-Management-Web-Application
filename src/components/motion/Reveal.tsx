"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const OFFSET: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
};

export type RevealProps = {
  children: ReactNode;
  /** Direction the content travels *from*. */
  from?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  id?: string;
  /** Re-animate every time it scrolls into view instead of only once. */
  repeat?: boolean;
  as?: "div" | "section" | "li" | "article" | "span";
};

/**
 * Fade-and-rise on scroll into view. The workhorse of the site's motion.
 * Honours prefers-reduced-motion by rendering the content statically.
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.7,
  className,
  id,
  repeat = false,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const Component = motion[as];

  if (reduced) {
    const Static = as;
    return (
      <Static className={className} id={id}>
        {children}
      </Static>
    );
  }

  const { x, y } = OFFSET[from];
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Component
      className={className}
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeat, margin: "0px 0px -12% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}

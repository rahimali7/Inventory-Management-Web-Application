"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * `reducedMotion="user"` makes Motion respect the visitor's OS setting for
 * every animation below it — transform and layout animations are skipped,
 * opacity is kept.
 *
 * This exists so that individual components never branch their *rendered
 * markup* on `useReducedMotion()`. That hook is client-only: the server has
 * no idea what the visitor prefers, so any markup that depends on it
 * produces a hydration mismatch (React error #418) for exactly the people
 * who asked for less motion.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

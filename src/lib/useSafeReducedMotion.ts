"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * `prefers-reduced-motion`, read in a way that is safe to branch rendered
 * markup on.
 *
 * Motion's own `useReducedMotion()` returns the real value immediately on the
 * client, but the server cannot know it — so any component whose markup
 * depends on it renders one thing on the server and another in the browser,
 * and React throws a hydration mismatch (#418) for precisely the visitors who
 * asked for less motion.
 *
 * `useSyncExternalStore` exists for this: React uses the server snapshot
 * (false) for the hydration pass, then re-renders with the real value. Same
 * HTML both sides, correct behaviour a tick later, and it stays live if the
 * visitor changes the setting.
 */
export function useSafeReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

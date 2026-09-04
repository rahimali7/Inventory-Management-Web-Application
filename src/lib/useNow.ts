"use client";

import { useSyncExternalStore } from "react";

// Cached so getSnapshot returns a referentially stable value between ticks —
// returning a fresh Date every call would loop React forever.
let cached: Date | null = null;
let cachedKey = "";

function getSnapshot(): Date {
  const d = new Date();
  const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}`;
  if (key !== cachedKey) {
    cachedKey = key;
    cached = d;
  }
  return cached as Date;
}

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 20_000);
  return () => clearInterval(id);
}

/**
 * The current time, updating about once a minute.
 *
 * Returns null on the server and during hydration. Prayer times depend on
 * "now", which the server cannot know — rendering a server-computed time and
 * then a different client-computed one is a hydration mismatch. Callers show
 * a placeholder while this is null.
 */
export function useNow(): Date | null {
  return useSyncExternalStore(subscribe, getSnapshot, () => null);
}

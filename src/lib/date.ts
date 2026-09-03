/** Formats an ISO date (YYYY-MM-DD) without timezone drift. */
export function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function formatDay(iso: string): string {
  return parseISODate(iso).toLocaleDateString("en-US", { day: "numeric" });
}

export function formatMonth(iso: string): string {
  return parseISODate(iso)
    .toLocaleDateString("en-US", { month: "short" })
    .toUpperCase();
}

export function formatWeekday(iso: string): string {
  return parseISODate(iso).toLocaleDateString("en-US", { weekday: "long" });
}

export function formatFull(iso: string): string {
  return parseISODate(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** True when the date is today or later. */
export function isUpcoming(iso: string, now = new Date()): boolean {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return parseISODate(iso) >= today;
}

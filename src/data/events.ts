/**
 * Upcoming events.
 *
 * PLACEHOLDER CONTENT. To update: edit this array. Dates are ISO strings
 * (YYYY-MM-DD); anything in the past is filtered out automatically by the
 * events page, so old entries can be left in place as an archive.
 */

export type MasjidEvent = {
  slug: string;
  title: string;
  /** ISO date, e.g. "2026-09-18" */
  date: string;
  /** Free-text time, e.g. "After Maghrib" or "7:00 PM" */
  time: string;
  category: "Community" | "Youth" | "Education" | "Fundraising";
  location: string;
  summary: string;
};

export const events: MasjidEvent[] = [
  {
    slug: "community-iftar-potluck",
    title: "Community Iftar & Potluck",
    date: "2026-09-18",
    time: "After Maghrib",
    category: "Community",
    location: "Main Hall — Masjid Bilal South Side",
    summary:
      "A shared meal and fellowship after Maghrib prayer. All families welcome; bring a dish if you are able.",
  },
  {
    slug: "youth-leadership-workshop",
    title: "Youth Leadership Workshop",
    date: "2026-09-20",
    time: "2:00 PM",
    category: "Youth",
    location: "Youth Center — Masjid Bilal South Side",
    summary:
      "An interactive session on leadership skills rooted in Islamic principles, for ages 13–18.",
  },
  {
    slug: "marriage-family-seminar",
    title: "Marriage & Family Seminar",
    date: "2026-09-25",
    time: "6:30 PM",
    category: "Education",
    location: "Conference Room — Masjid Bilal South Side",
    summary:
      "A comprehensive seminar on building strong families within an Islamic framework.",
  },
];

/**
 * Prayer times.
 *
 * The masjid uses an external prayer-time service (MOHID / Masjidal — to be
 * confirmed). Once you have the embed URL from that service's admin panel,
 * paste it into `embedUrl` below and the site will render the live widget
 * instead of the manual table.
 *
 * Until then the manual table below is displayed. It is a FALLBACK with
 * PLACEHOLDER times — replace every value with the masjid's real schedule,
 * or supply the embed URL, before launch.
 */

export const prayerConfig = {
  /** Paste the iframe src from your prayer-time provider here. */
  embedUrl: null as string | null,
  /** Height of the embedded widget in pixels. */
  embedHeight: 720,
  provider: null as string | null,
  /**
   * Shown under the times so visitors know when the schedule last changed.
   * Update whenever you edit the table below.
   */
  lastUpdated: "Not yet set",
};

export type PrayerRow = {
  name: string;
  arabic: string;
  /** Adhan (beginning of the prayer window). */
  adhan: string;
  /** Iqamah / jamaah — the congregation time set by the masjid. */
  iqamah: string;
};

export const prayerFallback: PrayerRow[] = [
  { name: "Fajr", arabic: "الفجر", adhan: "—", iqamah: "—" },
  { name: "Dhuhr", arabic: "الظهر", adhan: "—", iqamah: "—" },
  { name: "Asr", arabic: "العصر", adhan: "—", iqamah: "—" },
  { name: "Maghrib", arabic: "المغرب", adhan: "—", iqamah: "—" },
  { name: "Isha", arabic: "العشاء", adhan: "—", iqamah: "—" },
];

export type JumuahService = {
  label: string;
  location: string;
  khutbah: string;
  prayer: string;
};

/** PLACEHOLDER — confirm how many khutbahs are held, where, and at what time. */
export const jumuah: JumuahService[] = [
  {
    label: "First Jumu'ah",
    location: "Masjid Bilal West",
    khutbah: "—",
    prayer: "—",
  },
  {
    label: "Second Jumu'ah",
    location: "Masjid Bilal South Side",
    khutbah: "—",
    prayer: "—",
  },
];

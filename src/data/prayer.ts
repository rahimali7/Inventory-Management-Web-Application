/**
 * Prayer times.
 *
 * The masjid uses Masjidal. Two steps to go live:
 *   1. The widget library is already wired up (see `scriptSrc`).
 *   2. Publish a widget in the Masjidal platform, press "Embed", and paste
 *      the markup into `embedHtml` below.
 *
 * Until `embedHtml` (or `embedUrl`) is set, the manual table below is shown.
 * It is a FALLBACK with PLACEHOLDER times — replace every value with the
 * masjid's real schedule, or finish the Masjidal setup, before launch.
 */

export const prayerConfig = {
  provider: "Masjidal",

  /**
   * Masjidal's widget library. Loading it is step one of their install
   * instructions; it hydrates whatever widget markup is on the page.
   * Loaded only on the prayer times page rather than site-wide, so other
   * pages do not pay for a third-party script they never use.
   */
  scriptSrc: "https://widgets.masjidal.com/timetable/v0/widget.js",

  /**
   * Step two: publish a widget in the Masjidal platform, press "Embed", and
   * paste the markup it gives you here (the container element only — a
   * <script> tag pasted here would not execute; the loader above is what
   * runs). Once this is set, the site renders the live widget instead of the
   * manual table below.
   *
   * This is injected as raw HTML. That is safe because the value comes from
   * this repository file, which only developers can change — never from user
   * input or a URL parameter. Do not wire this field to anything else.
   */
  embedHtml: null as string | null,

  /**
   * Alternative to embedHtml: a plain iframe URL, if the provider gives you
   * one instead of inline markup.
   */
  embedUrl: null as string | null,
  embedHeight: 720,

  /**
   * Masjidal API key, read from the environment — deliberately NOT hardcoded,
   * because this repository is public.
   *
   * Currently unused: Masjidal's documented widget install flow is just the
   * loader script plus the markup from their "Embed" button, and references
   * no key. This slot exists so the key has somewhere to live once we know
   * which call actually needs it (likely their REST API rather than the
   * widget). See .env.example.
   */
  apiKey: process.env.NEXT_PUBLIC_MASJIDAL_API_KEY ?? null,

  /**
   * Shown under the manual table so visitors know when it last changed.
   * Only used while the widget is not configured.
   */
  lastUpdated: "Not yet set",
};

/** True once a Masjidal widget (or iframe URL) has been configured. */
export function hasPrayerWidget(): boolean {
  return Boolean(prayerConfig.embedHtml || prayerConfig.embedUrl);
}

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

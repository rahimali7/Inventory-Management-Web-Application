/**
 * Programs and classes, as described by the masjid.
 *
 * `icon` is a key resolved in src/components/ui/ProgramIcon.tsx — add the
 * mapping there if you introduce a new one.
 * `status` marks a programme the masjid has announced but not yet started;
 * those render with a "Coming soon" badge instead of a schedule.
 */

export type ProgramStatus = "running" | "coming-soon";

export type Program = {
  slug: string;
  title: string;
  /** Small-caps label in the corner of the card. */
  eyebrow: string;
  icon: string;
  audience: string;
  schedule: string;
  summary: string;
  status: ProgramStatus;
  category: "quran" | "study" | "youth" | "community" | "support";
};

export const programs: Program[] = [
  {
    slug: "tahfiz-part-time",
    title: "Qur'an Memorization — Part-time",
    eyebrow: "Memorize",
    icon: "book-open",
    audience: "All age groups",
    schedule: "Saturdays & Sundays, 10:00 AM – 2:00 PM",
    summary:
      "Weekend Tahfiz for part-time students, open to every age group, working through memorization at a pace that fits each student.",
    status: "running",
    category: "quran",
  },
  {
    slug: "tahfiz-full-time",
    title: "Qur'an Memorization — Full-time",
    eyebrow: "Commit",
    icon: "book-marked",
    audience: "Full-time students",
    schedule: "Five days a week",
    summary:
      "An intensive five-day programme for students devoting themselves to memorizing the Qur'an.",
    status: "running",
    category: "quran",
  },
  {
    slug: "quran-online",
    title: "Online Qur'an Classes",
    eyebrow: "From home",
    icon: "video",
    audience: "All ages",
    schedule: "Held over Zoom — contact the masjid to join",
    summary:
      "Qur'an instruction over Zoom for anyone who cannot attend in person.",
    status: "running",
    category: "quran",
  },
  {
    slug: "quran-adults",
    title: "Qur'an Classes for Adults",
    eyebrow: "Begin",
    icon: "graduation-cap",
    audience: "Adults",
    schedule: "Starting soon",
    summary:
      "A dedicated adult track, for those beginning or returning to the Qur'an later in life. Starting soon, insha'Allah.",
    status: "coming-soon",
    category: "quran",
  },
  {
    slug: "seerah",
    title: "Seerah",
    eyebrow: "Follow",
    icon: "compass",
    audience: "All welcome",
    schedule: "Saturdays & Sundays, after Fajr",
    summary:
      "The life of the Prophet Muhammad ﷺ, studied after Fajr on weekend mornings.",
    status: "running",
    category: "study",
  },
  {
    slug: "islamic-studies",
    title: "Islamic Studies",
    eyebrow: "Learn",
    icon: "scroll-text",
    audience: "All ages",
    schedule: "Saturdays & Sundays",
    summary:
      "Weekend classes covering the foundations of the religion — belief, worship, and character.",
    status: "running",
    category: "study",
  },
  {
    slug: "hadith",
    title: "Hadith Class",
    eyebrow: "Reflect",
    icon: "quote",
    audience: "All welcome",
    schedule: "Every Sunday, after Maghrib",
    summary:
      "One hadith each session, read and explained — a short, steady weekly study.",
    status: "running",
    category: "study",
  },
  {
    slug: "monthly-halaqah",
    title: "Monthly Halaqah",
    eyebrow: "Gather",
    icon: "users",
    audience: "The whole community",
    schedule: "Once a month",
    summary:
      "A monthly gathering for reminder and discussion, open to the whole community.",
    status: "running",
    category: "community",
  },
  {
    slug: "arabic",
    title: "Arabic Language",
    eyebrow: "Understand",
    icon: "languages",
    audience: "Teens and adults",
    schedule: "Starting soon",
    summary:
      "Arabic taught for understanding the Qur'an and the Sunnah rather than conversation. Starting soon, insha'Allah.",
    status: "coming-soon",
    category: "study",
  },
  {
    slug: "new-muslim",
    title: "New Muslim Foundations",
    eyebrow: "Welcome",
    icon: "heart-handshake",
    audience: "New Muslims and those exploring Islam",
    schedule: "Every Friday, after Jumu'ah prayer",
    summary:
      "A patient, judgement-free starting point: purification, prayer, and the essentials of belief, at whatever pace is comfortable.",
    status: "running",
    category: "support",
  },
  {
    slug: "marriage-counseling",
    title: "Marriage Counseling",
    eyebrow: "Find clarity",
    icon: "message-circle",
    audience: "Couples and families",
    schedule: "By appointment",
    summary:
      "Confidential sessions with the masjid's leadership on marriage and family matters, arranged by appointment.",
    status: "running",
    category: "support",
  },
];

export const programCategories: {
  id: Program["category"];
  label: string;
  blurb: string;
}[] = [
  {
    id: "quran",
    label: "Qur'an",
    blurb: "Memorization and recitation, in person and online.",
  },
  {
    id: "study",
    label: "Islamic Studies",
    blurb: "Seerah, hadith, foundations, and the Arabic behind them.",
  },
  {
    id: "community",
    label: "Community",
    blurb: "Gatherings that bring the congregation together.",
  },
  {
    id: "support",
    label: "Support",
    blurb: "Guidance for new Muslims and for families.",
  },
];

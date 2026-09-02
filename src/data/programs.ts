/**
 * Programs and classes.
 *
 * PLACEHOLDER CONTENT — every entry below is a reasonable guess based on
 * what the masjid appears to offer. Replace the details (days, times, ages,
 * instructors) with the real schedule before launch, and delete anything
 * that is not actually offered.
 */

export type Program = {
  slug: string;
  title: string;
  audience: string;
  schedule: string;
  summary: string;
  /** Longer copy for the program detail card. */
  detail: string;
  category: "quran" | "youth" | "adults" | "new-muslims" | "arabic";
};

export const programs: Program[] = [
  {
    slug: "quran-memorization",
    title: "Qur'an Memorization (Hifz)",
    audience: "Ages 6 and up",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "Structured memorization with qualified huffaz, paced to each student rather than to a class average.",
    detail:
      "Students work through the Qur'an at their own pace under the supervision of qualified huffaz, with regular revision cycles and one-on-one recitation. Placement is by assessment, not by age.",
    category: "quran",
  },
  {
    slug: "quran-recitation",
    title: "Tajweed & Recitation",
    audience: "All ages",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "The rules of recitation taught from the ground up, from letter articulation to fluent reading.",
    detail:
      "Beginning with the correct articulation points of each letter and building toward fluent, rule-observant recitation. Separate tracks for children and adults.",
    category: "quran",
  },
  {
    slug: "weekend-school",
    title: "Weekend Islamic School",
    audience: "Ages 5–14",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "Qur'an, aqeedah, seerah, and Islamic manners in a structured weekly curriculum.",
    detail:
      "A full weekend curriculum covering Qur'an, basic beliefs, the life of the Prophet ﷺ, and Islamic character, taught in age-grouped classes.",
    category: "youth",
  },
  {
    slug: "arabic-language",
    title: "Arabic Language",
    audience: "Teens and adults",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "Classical Arabic taught for comprehension of the Qur'an and the Sunnah.",
    detail:
      "Grammar, vocabulary, and reading built specifically toward understanding the Qur'an and hadith rather than conversational fluency. Beginner and intermediate levels.",
    category: "arabic",
  },
  {
    slug: "youth-halaqa",
    title: "Youth Halaqa",
    audience: "Ages 13–18",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "A weekly circle where young Muslims work through faith, identity, and the questions that actually come up.",
    detail:
      "An open discussion circle for teenagers covering belief, character, and the practical questions of growing up Muslim in Louisville. Separate sessions for brothers and sisters.",
    category: "youth",
  },
  {
    slug: "new-muslim",
    title: "New Muslim Foundations",
    audience: "New Muslims and those exploring Islam",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "A patient, judgement-free starting point: purification, prayer, and the essentials of belief.",
    detail:
      "A one-on-one and small-group program covering wudu, salah, the pillars of faith, and the first steps of practice — at whatever pace is comfortable. No prior knowledge assumed.",
    category: "new-muslims",
  },
  {
    slug: "sisters-circle",
    title: "Sisters' Circle",
    audience: "Women of all ages",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "Regular study and community for the women of the masjid.",
    detail:
      "A recurring gathering combining Qur'an study, discussion, and community support, organized by and for the sisters of the congregation.",
    category: "adults",
  },
  {
    slug: "tafsir",
    title: "Weekly Tafsir",
    audience: "Adults",
    schedule: "PLACEHOLDER — confirm days and times",
    summary:
      "Working through the Qur'an verse by verse with context and commentary.",
    detail:
      "A sustained study of the Qur'an in order, drawing on classical commentary to unpack meaning, context, and application.",
    category: "adults",
  },
];

export const programCategories: { id: Program["category"]; label: string }[] = [
  { id: "quran", label: "Qur'an" },
  { id: "youth", label: "Children & Youth" },
  { id: "arabic", label: "Arabic" },
  { id: "adults", label: "Adults" },
  { id: "new-muslims", label: "New Muslims" },
];

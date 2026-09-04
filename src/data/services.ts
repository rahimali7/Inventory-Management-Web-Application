/**
 * Community services. `icon` keys resolve in ProgramIcon.tsx.
 * Confirm the details with the masjid before launch.
 */

export type Service = {
  id: string;
  anchor: string;
  title: string;
  eyebrow: string;
  icon: string;
  summary: string;
  detail: string;
};

export const services: Service[] = [
  {
    id: "nikah",
    anchor: "nikah",
    title: "Nikah & Weddings",
    eyebrow: "Celebrate",
    icon: "calendar-days",
    summary: "Marriage ceremonies performed according to the Sunnah.",
    detail:
      "The masjid performs nikah ceremonies, including the marriage contract and witnesses, and offers a welcoming setting for the occasion. Contact the office to discuss requirements and arrange a date.",
  },
  {
    id: "janazah",
    anchor: "janazah",
    title: "Funeral & Janazah",
    eyebrow: "Any hour",
    icon: "heart-handshake",
    summary: "Ghusl, kafan, janazah prayer, and burial support.",
    detail:
      "The masjid assists families through every step — washing, shrouding, the janazah prayer, and burial arrangements. Call immediately; this is available around the clock.",
  },
  {
    id: "shahada",
    anchor: "shahada",
    title: "Shahada & New Muslims",
    eyebrow: "Welcome",
    icon: "sparkles",
    summary: "Take your shahada, and find a community that walks with you after.",
    detail:
      "Anyone wishing to accept Islam is welcome at any time. We witness the shahada and connect new Muslims with mentorship and the New Muslim Foundations class held every Friday after Jumu'ah.",
  },
  {
    id: "counseling",
    anchor: "counseling",
    title: "Counseling & Guidance",
    eyebrow: "Find clarity",
    icon: "message-circle",
    summary: "Confidential conversations on marriage, family, and personal matters.",
    detail:
      "Confidential guidance with the masjid's leadership on marital, family, and personal difficulties. Marriage counseling sessions are arranged by appointment.",
  },
  {
    id: "education",
    anchor: "education",
    title: "Qur'an & Islamic Learning",
    eyebrow: "Learn",
    icon: "book-open",
    summary: "Memorization, Seerah, hadith, and Islamic studies for every age.",
    detail:
      "Weekend and full-time Tahfiz, online Qur'an classes, Seerah after Fajr, Islamic studies, and a weekly hadith class. See the Programs page for the full schedule.",
  },
  {
    id: "community",
    anchor: "community",
    title: "Community Gatherings",
    eyebrow: "Connect",
    icon: "users",
    summary: "Monthly halaqah, Eid celebrations, and time with neighbours.",
    detail:
      "A monthly halaqah, Eid gatherings, and community events through the year. Announcements go out first on the masjid's WhatsApp group.",
  },
];

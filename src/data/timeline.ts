/**
 * The masjid's history.
 * Sourced from the previous Base44 draft — NEEDS-CONFIRMATION against the
 * masjid's own records before launch.
 */

export type Milestone = {
  year: string;
  title: string;
  body: string;
};

export const timeline: Milestone[] = [
  {
    year: "Early years",
    title: "A community's vision",
    body: "The Somali community in Louisville sets out to find a permanent religious and social home — a place to meet growing needs in worship, Qur'anic education, and community life.",
  },
  {
    year: "2013",
    title: "Masjid Bilal West",
    body: "The community purchases its first facility at 1701 Dumesnil Street: a permanent home for prayer, Qur'anic study, and the strengthening of community ties.",
  },
  {
    year: "2021",
    title: "Masjid Bilal South Side",
    body: "As families move to south Louisville, a second and larger facility is purchased at 6200 S 3rd Street to serve children, youth, and families with prayers, classes, and programs.",
  },
  {
    year: "Today",
    title: "Two houses, one community",
    body: "Both masjids remain open around the clock, serving daily prayers, Jumu'ah, year-round education, and the families who have made Louisville home.",
  },
];

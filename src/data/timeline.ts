/**
 * The masjid's history.
 *
 * Summarised from the history document supplied by Masjid Bilal Islamic
 * Center ("History and Development of Masjid Bilal Islamic Center — Somali
 * Community, Louisville, Kentucky"). Addresses and years come from that
 * document.
 */

export type Milestone = {
  /** Large display label — a year, or a phase like "Early Years". */
  year: string;
  title: string;
  body: string;
  /** Optional address shown under the body, for milestones about a building. */
  address?: string;
};

export const timeline: Milestone[] = [
  {
    year: "Early Years",
    title: "A Community's Vision",
    body: "The Somali community in Louisville sets out to find religious and social centers that can meet its growing needs — worship, raising children, Qur'anic education, and the everyday networks that hold a community together.",
  },
  {
    year: "2013",
    title: "Masjid Bilal West",
    body: "The community purchases its first facility — an important step, and a permanent place to pray, to study the Qur'an and Islam, and to strengthen the ties and unity of the community.",
    address: "1701 Dumesnil Street, Louisville, KY 40210",
  },
  {
    year: "2021",
    title: "Masjid Bilal South Side",
    body: "As the community grows and many families move to the south side of Louisville, a larger facility is purchased closer to where those families live — with room for prayers, classes, youth programs, and family gatherings.",
    address: "6200 S 3rd Street, Louisville, KY 40214",
  },
  {
    year: "Today",
    title: "Two Centers, One Mission",
    body: "Both masjids reflect the dedication and vision of Louisville's Somali community. The goal was never only a place to worship, but centers that nurture generations, teach the religion, support families, guide youth, and strengthen brotherhood and service across the city.",
  },
];

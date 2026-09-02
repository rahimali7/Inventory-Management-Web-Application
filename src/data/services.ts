/**
 * Community services offered by the masjid.
 * PLACEHOLDER descriptions — confirm what is actually offered, and how to
 * request each service, before launch.
 */

export type Service = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  /** Anchor id used from the footer links. */
  anchor: string;
};

export const services: Service[] = [
  {
    id: "nikah",
    anchor: "nikah",
    title: "Nikah Services",
    summary: "Marriage ceremonies performed and documented according to the Sunnah.",
    detail:
      "The imam performs nikah ceremonies for members of the community, including the marriage contract and witnesses. Contact the masjid to discuss requirements and arrange a date.",
  },
  {
    id: "janazah",
    anchor: "janazah",
    title: "Funeral & Janazah",
    summary: "Ghusl, kafan, janazah prayer, and burial support — available at any hour.",
    detail:
      "The masjid assists families with every step of the funeral process, from washing and shrouding through the janazah prayer and burial arrangements. Call the masjid immediately; this service is available around the clock.",
  },
  {
    id: "shahada",
    anchor: "shahada",
    title: "Shahada & New Muslims",
    summary: "Take your shahada, and find a community that will walk with you afterward.",
    detail:
      "Anyone wishing to accept Islam is welcome to come to the masjid at any time. We witness the shahada and then connect new Muslims with mentorship, foundational classes, and community support.",
  },
  {
    id: "counseling",
    anchor: "counseling",
    title: "Community Counseling",
    summary: "Confidential guidance on family, marriage, and personal matters.",
    detail:
      "Confidential counseling with the imam on marital, family, and personal difficulties, grounded in Islamic guidance. Appointments can be arranged by phone or in person.",
  },
];

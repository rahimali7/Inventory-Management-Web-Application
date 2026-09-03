/**
 * Leadership and organizational structure.
 *
 * PLACEHOLDER — the masjid will supply real names, titles, and biographies.
 * Every entry below is a structural placeholder, not a real person. Replace
 * them all, or delete the ones that do not apply, before launch.
 */

export type Person = {
  slug: string;
  name: string;
  role: string;
  /** Optional headshot in /public/img. Leave null for a monogram fallback. */
  photo: string | null;
  bio: string;
};

export type LeadershipGroup = {
  id: string;
  title: string;
  intro: string;
  people: Person[];
};

export const leadership: LeadershipGroup[] = [
  {
    id: "religious",
    title: "Religious Leadership",
    intro:
      "The imams who lead prayers, deliver the khutbah, teach, and answer the community's questions.",
    people: [
      {
        slug: "imam-placeholder",
        name: "Name to be provided",
        role: "Imam",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
    ],
  },
  {
    id: "board",
    title: "Board of Directors",
    intro:
      "The board sets direction, safeguards the masjid's assets, and is accountable to the congregation.",
    people: [
      {
        slug: "chair-placeholder",
        name: "Name to be provided",
        role: "Chairperson",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
      {
        slug: "vice-chair-placeholder",
        name: "Name to be provided",
        role: "Vice Chairperson",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
      {
        slug: "treasurer-placeholder",
        name: "Name to be provided",
        role: "Treasurer",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
      {
        slug: "secretary-placeholder",
        name: "Name to be provided",
        role: "Secretary",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
    ],
  },
  {
    id: "committees",
    title: "Committees",
    intro:
      "Volunteers who carry the day-to-day work of education, events, facilities, and outreach.",
    people: [
      {
        slug: "education-placeholder",
        name: "Name to be provided",
        role: "Education Committee Lead",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
      {
        slug: "youth-placeholder",
        name: "Name to be provided",
        role: "Youth Committee Lead",
        photo: null,
        bio: "Biography to be provided by the masjid.",
      },
    ],
  },
];

/** Short description of how the organization is structured and governed. */
export const orgOverview = {
  /** TODO: confirm legal entity name and nonprofit status. */
  legalName: "Masjid Bilal Islamic Center",
  structure:
    "Masjid Bilal Islamic Center is governed by a board of directors elected from the congregation, with religious guidance provided by the imams and day-to-day work carried out by volunteer committees.",
  note: "Organizational details to be confirmed and expanded by the masjid.",
};

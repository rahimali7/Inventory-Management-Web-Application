/**
 * Central site configuration.
 *
 * Everything a non-developer is likely to change lives in this folder.
 * Items marked NEEDS-CONFIRMATION were taken from the Base44 demo
 * screenshots and have NOT been verified with the masjid — check them
 * before the site goes live.
 */

export const site = {
  name: "Masjid Bilal Islamic Center",
  shortName: "Masjid Bilal",
  tagline: "Serving Louisville with faith, knowledge, and compassion.",
  description:
    "Masjid Bilal Islamic Center serves the Muslim community of Louisville, Kentucky with daily prayers, Qur'anic education, youth programs, and community services. Open 24 hours a day.",
  // TODO: replace with the real production domain once it is pointed at the site.
  url: "https://bilalislamiccenter.org",
  locale: "en-US",
  city: "Louisville",
  region: "KY",
  regionName: "Kentucky",
  country: "US",
  founded: 2013,
} as const;

export const contact = {
  email: "masjidbilaal2022@gmail.com",
  /**
   * Confirmed by the masjid as the public number. It is the same number
   * used for Zelle donations, so keep the two in sync if it ever changes
   * (the Zelle copy is in `donations.zelle` below).
   */
  phone: "+1 (502) 457-9902",
  phoneHref: "tel:+15024579902",
  hours: "Open 24 hours, every day",
} as const;

export const donations = {
  zelle: {
    label: "Zelle",
    phone: "(502) 457-9902",
    /** Digits only — used for the copy-to-clipboard button. */
    raw: "5024579902",
    recipientName: "Masjid Bilal Islamic Center",
  },
  /** Additional processors will be added once accounts are set up. */
  comingSoon: ["Credit / debit card", "Apple Pay", "Bank transfer (ACH)"],
  /**
   * NEEDS-CONFIRMATION: do not advertise tax-deductible receipts until the
   * masjid's 501(c)(3) determination letter and EIN are confirmed.
   */
  taxDeductible: null as null | { ein: string },
} as const;

export type Location = {
  slug: string;
  name: string;
  street: string;
  city: string;
  region: string;
  postalCode: string | null;
  established: number;
  blurb: string;
  /**
   * Both masjids are active. `featured` controls which one the site leads
   * with for "come here" surfaces — the footer, the contact page, and the
   * schema.org data search engines and maps read.
   *
   * Right now only the newer South Side centre is featured, at the masjid's
   * request. Flip this to true for West to list both again; nothing else
   * needs to change. West still appears in the history timeline either way,
   * because it is part of the story regardless.
   */
  featured: boolean;
};

export const locations: Location[] = [
  {
    slug: "west",
    name: "Masjid Bilal West",
    street: "1701 Dumesnil Street",
    city: "Louisville",
    region: "KY",
    postalCode: "40210", // confirmed by the masjid
    established: 2013,
    blurb:
      "Our first permanent home, purchased in 2013 — a house for prayer, Qur'anic study, and the ties that hold a community together.",
    featured: false,
  },
  {
    slug: "south-side",
    name: "Masjid Bilal South Side",
    street: "6200 S 3rd Street",
    city: "Louisville",
    region: "KY",
    postalCode: "40214", // confirmed by the masjid
    established: 2021,
    blurb:
      "Opened in 2021 as families moved south — a larger facility built around children, youth, and family programming.",
    featured: true,
  },
];

/** The locations the site actively directs visitors to. See `featured`. */
export const featuredLocations: Location[] = locations.filter((l) => l.featured);

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Prayer Times", href: "/prayer-times" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavItem[] = [
  { label: "Nikah Services", href: "/contact#nikah" },
  { label: "Funeral & Janazah", href: "/contact#janazah" },
  { label: "Shahada & New Muslims", href: "/contact#shahada" },
  { label: "Community Counseling", href: "/contact#counseling" },
];

/** TODO: add real social profiles, or delete the ones that do not exist. */
export const social: NavItem[] = [];

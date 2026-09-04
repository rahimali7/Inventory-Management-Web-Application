/**
 * Frequently asked questions.
 *
 * These power BOTH the static FAQ page (which search engines can read) and
 * the assistant, so there is one source of truth. To add a question, add an
 * entry here — nothing else needs to change.
 *
 * `keywords` are what the assistant matches against. Include the words a
 * visitor would actually type, misspellings and all.
 *
 * SCOPE: the masjid's own logistics, plus basic, well-established
 * information about Islam. Anything requiring a ruling — whether something
 * is permissible, how to handle a specific personal situation — is
 * deliberately NOT answered here and is redirected to the imam. See
 * `rulingRedirect` at the bottom.
 */

export type FaqCategory =
  | "prayer"
  | "programs"
  | "visiting"
  | "services"
  | "giving"
  | "basics";

export type FaqEntry = {
  id: string;
  category: FaqCategory;
  question: string;
  /** Plain text. Keep it short — this is read in a chat bubble too. */
  answer: string;
  keywords: string[];
};

export const faqCategories: { id: FaqCategory; label: string }[] = [
  { id: "prayer", label: "Prayer" },
  { id: "programs", label: "Classes & programs" },
  { id: "visiting", label: "Visiting" },
  { id: "services", label: "Services" },
  { id: "giving", label: "Giving" },
  { id: "basics", label: "New to Islam" },
];

export const faqs: FaqEntry[] = [
  // ---- Prayer -----------------------------------------------------------
  {
    id: "prayer-times",
    category: "prayer",
    question: "What are today's prayer times?",
    answer:
      "Today's times are on the Prayer Times page, calculated for the masjid's location and updated automatically each day.",
    keywords: ["prayer", "time", "times", "salah", "salat", "namaz", "adhan", "athan", "today", "schedule", "fajr", "dhuhr", "zuhr", "asr", "maghrib", "isha"],
  },
  {
    id: "jumuah",
    category: "prayer",
    question: "What time is Jumu'ah?",
    answer:
      "Jumu'ah is held every Friday at Masjid Bilal South Side. The khutbah and prayer times are listed on the Prayer Times page — please call the masjid to confirm, as the schedule can shift with the season.",
    keywords: ["jumuah", "jumah", "juma", "jummah", "friday", "khutbah", "khutba", "sermon", "jummah prayer", "jumuah prayer", "juma prayer", "friday prayer"],
  },
  {
    id: "iqamah",
    category: "prayer",
    question: "What are the iqamah times?",
    answer:
      "Iqamah times are set by the masjid rather than calculated. They are not published on the site yet — please call the masjid for the current congregation times.",
    keywords: ["iqamah", "iqama", "jamaah", "jamat", "congregation", "iqaamah"],
  },
  {
    id: "womens-space",
    category: "prayer",
    question: "Is there a prayer space for women?",
    answer:
      "Please contact the masjid about the women's prayer area and access — the office can tell you exactly what is available.",
    keywords: ["women", "woman", "sisters", "sister", "ladies", "female", "musallah"],
  },

  // ---- Programs ---------------------------------------------------------
  {
    id: "quran-classes",
    category: "programs",
    question: "Do you offer Qur'an classes?",
    answer:
      "Yes. Part-time Tahfiz runs Saturdays and Sundays from 10:00 AM to 2:00 PM for all age groups, and there is a full-time five-day memorization programme. Online classes are held over Zoom, and a dedicated adult class is starting soon.",
    keywords: ["quran", "qur'an", "koran", "tahfiz", "tahfeez", "hifz", "memorize", "memorization", "recitation", "tajweed", "class", "classes"],
  },
  {
    id: "class-cost",
    category: "programs",
    question: "How much do the classes cost?",
    answer:
      "Fees are not listed on the site. Please contact the masjid at (502) 457-9902 - the office can tell you about costs, and about help if cost is a barrier.",
    keywords: ["cost", "costs", "fee", "fees", "price", "pay", "payment", "expensive", "free", "tuition", "how much", "afford", "charge", "how much is", "how much does", "how much do", "cost of", "is it free", "much is the"],
  },
  {
    id: "kids-classes",
    category: "programs",
    question: "Are there classes for children?",
    answer:
      "Yes. Weekend Tahfiz is open to all age groups, Saturdays and Sundays from 10:00 AM to 2:00 PM, and Islamic Studies runs on the same days.",
    keywords: ["kid", "kids", "child", "children", "son", "daughter", "youth", "teen", "school", "weekend", "class", "classes", "quran", "quran for kids", "classes for kids", "kids quran", "children quran"],
  },
  {
    id: "online-classes",
    category: "programs",
    question: "Do you have online classes?",
    answer:
      "Yes — Qur'an classes are held over Zoom for anyone who cannot attend in person. Contact the masjid to be added.",
    keywords: ["online", "zoom", "remote", "virtual", "video", "distance", "class", "classes", "online class", "online classes", "zoom class", "zoom classes", "online quran", "quran online"],
  },
  {
    id: "adult-classes",
    category: "programs",
    question: "Are there classes for adults?",
    answer:
      "Seerah runs Saturdays and Sundays after Fajr, there is a hadith class every Sunday after Maghrib, and a monthly halaqah. A dedicated adult Qur'an class and Arabic classes are both starting soon.",
    keywords: ["adult", "adults", "grown", "men", "women", "seerah", "seera", "hadith", "halaqah", "halaqa", "arabic"],
  },
  {
    id: "seerah",
    category: "programs",
    question: "When is the Seerah class?",
    answer:
      "Seerah — the life of the Prophet Muhammad ﷺ — is studied on Saturdays and Sundays after Fajr prayer.",
    keywords: ["seerah", "seera", "sira", "biography", "prophet", "muhammad"],
  },
  {
    id: "hadith",
    category: "programs",
    question: "When is the hadith class?",
    answer:
      "Every Sunday after Maghrib, one hadith per session.",
    keywords: ["hadith", "hadeeth", "sunnah", "sunday"],
  },
  {
    id: "arabic",
    category: "programs",
    question: "Do you teach Arabic?",
    answer:
      "Arabic language classes are starting soon, insha'Allah. Contact the masjid to be told when they begin.",
    keywords: ["arabic", "language", "learn arabic", "fusha"],
  },

  // ---- Visiting ---------------------------------------------------------
  {
    id: "address",
    category: "visiting",
    question: "Where is the masjid?",
    answer:
      "Masjid Bilal South Side, 6200 S 3rd Street, Louisville, KY 40214.",
    keywords: ["where", "address", "location", "located", "directions", "map", "street", "find"],
  },
  {
    id: "hours",
    category: "visiting",
    question: "When is the masjid open?",
    answer:
      "The masjid is open twenty-four hours a day, every day.",
    keywords: ["open", "hours", "close", "closed", "opening", "when open", "24"],
  },
  {
    id: "non-muslim-visit",
    category: "visiting",
    question: "Can I visit if I'm not Muslim?",
    answer:
      "Yes, you are welcome. Visitors of any faith are welcome to come, ask questions, and see the masjid. Dress modestly, and shoes come off before entering the prayer hall.",
    keywords: ["visit", "visitor", "non muslim", "not muslim", "christian", "tour", "welcome", "guest", "allowed"],
  },
  {
    id: "contact",
    category: "visiting",
    question: "How do I contact the masjid?",
    answer:
      "Call (502) 457-9902 or email masjidbilaal2022@gmail.com. You can also join the community WhatsApp group for announcements.",
    keywords: ["contact", "phone", "call", "email", "reach", "number", "whatsapp", "message"],
  },
  {
    id: "whatsapp",
    category: "visiting",
    question: "Is there a WhatsApp group?",
    answer:
      "Yes — the Masjid Bilal Southside WhatsApp group carries announcements, class reminders, and event news. The join link and a QR code are on the Programs page.",
    keywords: ["whatsapp", "group", "chat", "announcement", "announcements", "updates", "community group"],
  },

  // ---- Services ---------------------------------------------------------
  {
    id: "nikah",
    category: "services",
    question: "Can I have my nikah at the masjid?",
    answer:
      "Yes. The masjid performs nikah ceremonies and offers a setting for the occasion. Contact the office to discuss requirements and arrange a date.",
    keywords: ["nikah", "nikkah", "marriage", "married", "wedding", "marry"],
  },
  {
    id: "janazah",
    category: "services",
    question: "Do you handle funerals and janazah?",
    answer:
      "Yes — ghusl, kafan, the janazah prayer, and burial arrangements. Please call the masjid immediately; this is available at any hour.",
    keywords: ["janazah", "janaza", "funeral", "burial", "death", "died", "passed away", "ghusl", "kafan"],
  },
  {
    id: "counseling",
    category: "services",
    question: "Do you offer marriage counseling?",
    answer:
      "Yes. Confidential marriage and family counseling sessions are arranged by appointment — call the masjid to set one up.",
    keywords: ["counseling", "counselling", "counsellor", "advice", "marriage problem", "family", "appointment", "therapy"],
  },
  {
    id: "shahada",
    category: "services",
    question: "How do I accept Islam / take my shahada?",
    answer:
      "You are welcome to come to the masjid at any time. Someone will witness your shahada, and the New Muslim Foundations class meets every Friday after Jumu'ah to help you get started.",
    keywords: ["shahada", "shahadah", "convert", "revert", "become muslim", "accept islam", "new muslim", "embrace"],
  },

  // ---- Giving -----------------------------------------------------------
  {
    id: "donate",
    category: "giving",
    question: "How can I donate?",
    answer:
      "Through Zelle, to (502) 457-9902. The Donate page lets you pick an amount and a fund, and gives you the exact details to enter. More payment options are coming.",
    keywords: ["donate", "donation", "give", "giving", "sadaqah", "sadaqa", "zakat", "zakah", "charity", "zelle", "money", "contribute", "support", "zelle number", "donation number", "where do i send"],
  },
  {
    id: "tax-deductible",
    category: "giving",
    question: "Are donations tax-deductible?",
    answer:
      "Please contact the masjid directly about the tax treatment of your donation.",
    keywords: ["tax", "deductible", "receipt", "write off", "501c3", "nonprofit"],
  },

  // ---- Basics -----------------------------------------------------------
  {
    id: "five-prayers",
    category: "basics",
    question: "How many daily prayers are there?",
    answer:
      "Five: Fajr before sunrise, Dhuhr after midday, Asr in the afternoon, Maghrib just after sunset, and Isha at night.",
    keywords: ["how many prayer", "five prayer", "5 prayers", "daily prayer", "number of prayers"],
  },
  {
    id: "what-is-jumuah",
    category: "basics",
    question: "What is Jumu'ah?",
    answer:
      "The Friday congregational prayer, which replaces Dhuhr on Fridays. It includes a khutbah (sermon) followed by a two-rak'ah prayer in congregation.",
    keywords: ["what is jumuah", "what is friday prayer", "why friday"],
  },
  {
    id: "what-is-ramadan",
    category: "basics",
    question: "What is Ramadan?",
    answer:
      "The ninth month of the Islamic lunar calendar, during which Muslims fast from dawn until sunset. The masjid holds nightly prayers and community iftars during it.",
    keywords: ["ramadan", "ramadhan", "fasting", "fast", "iftar", "suhoor", "taraweeh", "tarawih"],
  },
  {
    id: "first-visit",
    category: "basics",
    question: "I've never been to a masjid. What should I expect?",
    answer:
      "Come as you are, dressed modestly. Shoes come off before the carpeted prayer hall. You are welcome to sit and observe — no one expects you to know what to do, and people will be glad to help.",
    keywords: ["first time", "never been", "what to expect", "what should i wear", "dress", "shoes", "etiquette", "nervous"],
  },
];

/**
 * Shown when a question looks like it needs a religious ruling. The assistant
 * must not answer these — a wrong ruling attributed to the masjid is a real
 * harm, and it is not the assistant's place.
 */
export const rulingRedirect =
  "That's a question for the imam rather than me — rulings depend on details I can't judge, and I don't want to give you a wrong answer. Please call the masjid at (502) 457-9902 or come by; someone will be glad to sit with you.";

/** Words that signal a request for a ruling rather than information. */
export const rulingSignals = [
  "halal", "haram", "haraam", "permissible", "permitted", "allowed to", "is it ok to",
  "is it okay to", "sinful", "sin ", "fatwa", "ruling", "makruh", "wajib", "fard",
  "obligatory", "can i still", "do i have to", "does it break", "invalidate",
  "divorce", "talaq", "inheritance", "should i", "am i allowed",
  // Multi-word on purpose: a bare "wudu" or "ghusl" would hijack legitimate
  // questions like "do you perform ghusl for funerals".
  "break my wudu", "break wudu", "breaks wudu", "invalidate my", "nullify",
  "break my fast", "break the fast", "breaks the fast", "break my prayer",
  "is it a sin", "will i be punished", "what does islam say about",
];

/** Shown when nothing matches well enough. */
export const noMatchAnswer =
  "I don't have an answer for that one. The masjid can help directly — call (502) 457-9902 or email masjidbilaal2022@gmail.com.";

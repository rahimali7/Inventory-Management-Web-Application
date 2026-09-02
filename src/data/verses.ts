import raw from "./verses.json";

export type Verse = {
  slug: string;
  topic: string;
  title: string;
  surah: number;
  ayah: number;
  surahName: string;
  surahTransliteration: string;
  reference: string;
  arabic: string;
  translation: string;
};

const doc = raw as { _source: Record<string, string>; verses: Verse[] };

export const verseSource = doc._source;
export const verses: Verse[] = doc.verses;

const bySlug = new Map(verses.map((v) => [v.slug, v]));

/** Look up a verse by slug. Throws at build time if the slug is wrong. */
export function verse(slug: string): Verse {
  const found = bySlug.get(slug);
  if (!found) {
    throw new Error(
      `Unknown verse slug "${slug}". Available: ${verses.map((v) => v.slug).join(", ")}`,
    );
  }
  return found;
}

export function versesByTopic(topic: Verse["topic"]): Verse[] {
  return verses.filter((v) => v.topic === topic);
}

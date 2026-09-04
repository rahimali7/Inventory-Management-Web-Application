import { faqs, rulingSignals, type FaqEntry } from "@/data/faq";

const STOP = new Set([
  "the", "a", "an", "is", "are", "was", "do", "does", "did", "i", "you", "we",
  "my", "your", "at", "in", "on", "of", "for", "to", "and", "or", "it", "me",
  "can", "could", "would", "please", "there", "any", "what", "when", "where",
  "how", "who", "have", "has", "get", "got", "with", "about", "from", "this",
]);

function normalise(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(input: string): string[] {
  return normalise(input)
    .split(" ")
    .filter((w) => w.length > 1 && !STOP.has(w));
}

/** True when the question is asking for a religious ruling. */
export function looksLikeRulingRequest(input: string): boolean {
  const n = normalise(input);
  return rulingSignals.some((sig) => n.includes(normalise(sig)));
}

/**
 * How many FAQ entries use each single-word keyword.
 *
 * A word used by one entry ("zoom", "jummah") identifies it almost on its
 * own. A word used by six ("prayer", "class") barely narrows anything.
 * Weighting by rarity is what stops "when is jummah prayer" landing on the
 * general prayer-times entry just because "prayer" is a common keyword.
 */
const documentFrequency = (() => {
  const df = new Map<string, number>();
  for (const entry of faqs) {
    const seen = new Set<string>();
    for (const kw of entry.keywords) {
      const k = normalise(kw);
      if (k && !k.includes(" ")) seen.add(k);
    }
    for (const k of seen) df.set(k, (df.get(k) ?? 0) + 1);
  }
  return df;
})();

/** Rare keywords are worth more than common ones. */
function weight(keyword: string): number {
  return 1 + 3 / (documentFrequency.get(keyword) ?? 1);
}

/**
 * Score one FAQ entry against a question. Multi-word keywords are the
 * strongest signal, then rare single words, then plain overlap with the
 * question text.
 */
function score(entry: FaqEntry, input: string, inputTokens: string[]): number {
  const n = normalise(input);
  let s = 0;

  for (const kw of entry.keywords) {
    const k = normalise(kw);
    if (!k) continue;
    if (k.includes(" ")) {
      if (n.includes(k)) s += 5;
    } else if (inputTokens.includes(k)) {
      s += weight(k);
    } else if (k.length > 4 && n.includes(k)) {
      // catches plurals and light misspellings ("donations" vs "donate")
      s += weight(k) * 0.5;
    }
  }

  const questionTokens = tokens(entry.question);
  s += inputTokens.filter((t) => questionTokens.includes(t)).length;

  return s;
}

export type MatchResult =
  | { kind: "answer"; entry: FaqEntry; alternates: FaqEntry[] }
  | { kind: "ruling" }
  | { kind: "none"; alternates: FaqEntry[] };

/**
 * Find the best curated answer for a question.
 *
 * Deliberately conservative: below the confidence threshold it returns
 * "none" with suggestions rather than guessing. Answering the wrong question
 * confidently is worse than admitting it does not know.
 */
export function matchFaq(input: string): MatchResult {
  const trimmed = input.trim();
  if (!trimmed) return { kind: "none", alternates: [] };

  if (looksLikeRulingRequest(trimmed)) return { kind: "ruling" };

  const inputTokens = tokens(trimmed);
  const ranked = faqs
    .map((entry) => ({ entry, s: score(entry, trimmed, inputTokens) }))
    .sort((a, b) => b.s - a.s);

  const best = ranked[0];
  if (!best || best.s < 3) {
    return { kind: "none", alternates: ranked.slice(0, 3).filter((r) => r.s > 0).map((r) => r.entry) };
  }

  return {
    kind: "answer",
    entry: best.entry,
    alternates: ranked.slice(1, 3).filter((r) => r.s >= best.s * 0.5).map((r) => r.entry),
  };
}

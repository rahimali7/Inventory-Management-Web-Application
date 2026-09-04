"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { matchFaq } from "@/lib/faqMatch";
import { faqs, noMatchAnswer, rulingRedirect } from "@/data/faq";
import { contact } from "@/data/site";
import { cn } from "@/lib/cn";

type Turn = {
  id: number;
  role: "you" | "assistant";
  text: string;
  /** Follow-up questions offered under an assistant reply. */
  suggestions?: string[];
};

const OPENERS = [
  "What are today's prayer times?",
  "Do you offer Qur'an classes?",
  "Where is the masjid?",
  "How can I donate?",
];

/**
 * Answers frequently asked questions from the curated set in data/faq.ts.
 *
 * Deliberately NOT a language model: it either returns an answer the masjid
 * has approved, redirects a religious ruling to the imam, or admits it does
 * not know. It cannot invent a prayer time, and it costs nothing to run.
 */
export function FaqAssistant() {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState("");
  const nextId = useRef(0);
  const logRef = useRef<HTMLDivElement>(null);

  function ask(question: string) {
    const q = question.trim();
    if (!q) return;

    const result = matchFaq(q);
    const reply: Omit<Turn, "id" | "role"> =
      result.kind === "ruling"
        ? { text: rulingRedirect }
        : result.kind === "answer"
          ? {
              text: result.entry.answer,
              suggestions: result.alternates.map((a) => a.question),
            }
          : {
              text: noMatchAnswer,
              suggestions: result.alternates.length
                ? result.alternates.map((a) => a.question)
                : OPENERS.slice(0, 3),
            };

    setTurns((prev) => [
      ...prev,
      { id: nextId.current++, role: "you", text: q },
      { id: nextId.current++, role: "assistant", ...reply },
    ]);
    setDraft("");

    // Let the new turns paint, then bring them into view.
    requestAnimationFrame(() => {
      logRef.current?.scrollTo({
        top: logRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }

  const started = turns.length > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-navy-800/10 bg-white shadow-[0_1px_2px_rgba(0,30,66,0.04),0_24px_60px_-45px_rgba(0,30,66,0.4)]">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-navy-800/8 bg-sand-50 px-7 py-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/20 text-navy-800">
          <Sparkles className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <div>
          <p className="font-display text-xl text-navy-800">Masjid Assistant</p>
          <p className="text-sm text-muted">
            Answers about prayer times, classes, and visiting
          </p>
        </div>
      </div>

      {/* Conversation */}
      <div
        ref={logRef}
        className="max-h-[26rem] overflow-y-auto px-7 py-8"
        role="log"
        aria-live="polite"
        aria-label="Assistant conversation"
      >
        {!started && (
          <div className="text-center">
            <p className="font-display text-2xl text-navy-800">
              As-salamu alaykum
            </p>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted text-pretty">
              Ask about prayer times, classes, visiting, or how to give. For
              religious questions, the imam is the right person — I&rsquo;ll
              point you to him.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {OPENERS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => ask(q)}
                  className="rounded-xl border border-navy-800/12 px-5 py-4 text-left text-sm text-navy-800 transition-all duration-300 hover:border-gold-400/70 hover:bg-sand-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <AnimatePresence initial={false}>
          {turns.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={cn("mb-5 flex", t.role === "you" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-5 py-4 leading-relaxed",
                  t.role === "you"
                    ? "bg-navy-800 text-sand-50"
                    : "bg-sand-50 text-ink",
                )}
              >
                <p className="text-pretty">{t.text}</p>

                {t.suggestions && t.suggestions.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.suggestions.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => ask(s)}
                        className="rounded-full border border-navy-800/15 bg-white px-3.5 py-1.5 text-xs text-navy-800 transition-colors hover:border-gold-400/70 hover:bg-gold-400/10"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(draft);
        }}
        className="flex items-center gap-3 border-t border-navy-800/8 px-5 py-5 sm:px-7"
      >
        <label htmlFor="assistant-input" className="sr-only">
          Ask a question
        </label>
        <input
          id="assistant-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Ask about prayer times, classes, visiting…"
          autoComplete="off"
          className="h-12 min-w-0 flex-1 rounded-full border border-navy-800/15 bg-transparent px-5 text-navy-800 outline-none transition-colors placeholder:text-muted/60 focus:border-gold-500"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-800 text-sand-50 transition-all duration-300 hover:bg-navy-700 disabled:opacity-40"
          aria-label="Send question"
        >
          <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
            <path
              d="M2 8h11M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>

      <p className="border-t border-navy-800/8 px-7 py-4 text-xs leading-relaxed text-muted">
        Answers come from a set written by the masjid — {faqs.length} of them —
        not from an AI model, so nothing here is invented. If you need
        something it cannot answer, call{" "}
        <a href={contact.phoneHref} className="underline underline-offset-2">
          {contact.phone}
        </a>
        .
      </p>
    </div>
  );
}

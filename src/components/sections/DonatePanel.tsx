"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CopyButton } from "@/components/ui/CopyButton";
import { Diamond } from "@/components/ui/StarFrame";
import { donations } from "@/data/site";
import { cn } from "@/lib/cn";

const TIERS = [25, 50, 100, 250, 500, 1000];

const FUNDS = [
  "General Fund",
  "Zakat",
  "Sadaqah",
  "Masjid Maintenance",
  "Education & Qur'an School",
  "Youth Programs",
] as const;

/**
 * Builds a Zelle payment instruction from the visitor's selections.
 *
 * Zelle has no public payment-request URL scheme, so this cannot hand off to
 * the bank app directly — it prepares the exact details to enter instead.
 * When a card processor is added later, this panel is where it plugs in.
 */
export function DonatePanel() {
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [fund, setFund] = useState<string>(FUNDS[0]);

  const customValue = Number.parseFloat(custom);
  const effective =
    custom.trim() !== "" && Number.isFinite(customValue) && customValue > 0
      ? customValue
      : amount;

  const ready = effective !== null && effective > 0;
  const formatted = ready
    ? effective.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: effective % 1 === 0 ? 0 : 2,
      })
    : null;

  const memo = `${fund}${frequency === "monthly" ? " — monthly" : ""}`;

  return (
    <div className="rounded-2xl border border-navy-800/10 bg-white p-8 shadow-[0_1px_2px_rgba(0,30,66,0.04),0_24px_60px_-40px_rgba(0,30,66,0.45)] sm:p-10">
      <p className="eyebrow">Make a donation</p>

      {/* Amount tiers */}
      <fieldset className="mt-7">
        <legend className="sr-only">Choose an amount</legend>
        <div className="grid grid-cols-3 gap-3">
          {TIERS.map((tier) => {
            const selected = amount === tier && custom.trim() === "";
            return (
              <button
                key={tier}
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  setAmount(tier);
                  setCustom("");
                }}
                className={cn(
                  "h-14 rounded-xl border font-display text-xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  selected
                    ? "border-gold-500 bg-gold-400/15 text-navy-800"
                    : "border-navy-800/15 text-navy-800/80 hover:border-navy-800/40 hover:bg-sand-50",
                )}
              >
                ${tier}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Custom amount */}
      <div className="mt-4">
        <label htmlFor="custom-amount" className="sr-only">
          Custom amount in US dollars
        </label>
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted"
          >
            $
          </span>
          <input
            id="custom-amount"
            type="number"
            inputMode="decimal"
            min="1"
            step="1"
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              if (e.target.value.trim() !== "") setAmount(null);
            }}
            className="h-14 w-full rounded-xl border border-navy-800/15 bg-transparent pl-10 pr-5 text-navy-800 outline-none transition-colors placeholder:text-muted/60 focus:border-gold-500"
          />
        </div>
      </div>

      {/* Frequency */}
      <fieldset className="mt-4">
        <legend className="sr-only">Giving frequency</legend>
        <div className="grid grid-cols-2 gap-3">
          {(["one-time", "monthly"] as const).map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={frequency === f}
              onClick={() => setFrequency(f)}
              className={cn(
                "h-13 rounded-xl border py-4 text-sm transition-all duration-300",
                frequency === f
                  ? "border-gold-500 bg-gold-400/15 text-navy-800"
                  : "border-navy-800/15 text-navy-800/70 hover:border-navy-800/40",
              )}
            >
              {f === "one-time" ? "One-time" : "Monthly"}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Designation */}
      <div className="mt-7">
        <label
          htmlFor="fund"
          className="eyebrow block"
        >
          Designate your gift
        </label>
        <select
          id="fund"
          value={fund}
          onChange={(e) => setFund(e.target.value)}
          // min-w-0 matters: a <select> is sized by its longest option, which
          // would otherwise force the whole grid wider than a small viewport.
          className="mt-3 h-14 w-full min-w-0 rounded-xl border border-navy-800/15 bg-transparent px-5 text-navy-800 outline-none transition-colors focus:border-gold-500"
        >
          {FUNDS.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </div>

      {/* Zelle instructions */}
      <div className="mt-8 rounded-xl bg-navy-800 p-7 text-sand-50">
        <div className="flex items-center gap-2.5">
          <Diamond className="h-1.5 w-1.5 text-gold-400" />
          <p className="eyebrow text-gold-300">Send with Zelle</p>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-sand-200/85">
          Open your banking app, choose Zelle, and send
          {formatted ? (
            <>
              {" "}
              <span className="font-display text-lg text-gold-300">
                {formatted}
              </span>
            </>
          ) : (
            " your gift"
          )}{" "}
          to the number below.
        </p>

        <div className="mt-6 space-y-4">
          <Row
            label="Zelle number"
            value={donations.zelle.phone}
            copyValue={donations.zelle.raw}
          />
          <Row label="Recipient" value={donations.zelle.recipientName} />
          <Row label="Memo" value={memo} copyValue={memo} />
        </div>

        <AnimatePresence>
          {frequency === "monthly" && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden text-sm leading-relaxed text-sand-200/70"
            >
              <span className="mt-5 block">
                For monthly giving, set up a recurring Zelle payment in your
                banking app — most banks offer this under &ldquo;repeat&rdquo;
                or &ldquo;recurring&rdquo; payments.
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-muted">
        Zelle transfers go directly between banks and are not reversible, so
        please double-check the number before sending. More payment options are
        coming soon: {donations.comingSoon.join(", ")}.
      </p>
    </div>
  );
}

function Row({
  label,
  value,
  copyValue,
}: {
  label: string;
  value: string;
  copyValue?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-sand-50/10 pb-4 last:border-0 last:pb-0">
      <div className="min-w-0">
        <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-sand-200/50">
          {label}
        </p>
        <p className="mt-1.5 truncate font-display text-lg text-sand-50">
          {value}
        </p>
      </div>
      {copyValue && (
        <CopyButton
          value={copyValue}
          className="shrink-0 border-sand-50/25 text-sand-50 hover:border-sand-50/60 hover:bg-sand-50/10"
        />
      )}
    </div>
  );
}

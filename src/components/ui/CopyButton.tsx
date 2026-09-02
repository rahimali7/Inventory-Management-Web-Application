"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Copies `value` to the clipboard and confirms it inline. */
export function CopyButton({
  value,
  label = "Copy",
  className,
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!copied && !failed) return;
    const t = setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [copied, failed]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked (insecure context, permissions).
      // Tell the user rather than silently doing nothing.
      setFailed(true);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-9 min-w-[5.5rem] items-center justify-center gap-1.5 rounded-full border border-navy-800/20 px-4 text-[13px] font-medium text-navy-800 transition-colors duration-300 hover:border-navy-800/50 hover:bg-navy-800/[0.04]",
        className,
      )}
      aria-live="polite"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "copied" : failed ? "failed" : "idle"}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
        >
          {copied ? "Copied" : failed ? "Copy failed" : label}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

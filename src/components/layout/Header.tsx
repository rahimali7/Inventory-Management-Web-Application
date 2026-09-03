"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { primaryNav, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Button, ArrowRight } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render (rather than in an effect) is React's recommended pattern here, and
  // it also covers back/forward navigation.
  const [renderedPath, setRenderedPath] = useState(pathname);
  if (renderedPath !== pathname) {
    setRenderedPath(pathname);
    setOpen(false);
  }

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-navy-800/8 bg-sand-50/85 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 py-3"
            aria-label={`${site.name} — home`}
          >
            <span
              className={cn(
                "relative block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                scrolled ? "h-10 w-10" : "h-12 w-12",
              )}
            >
              <Image
                src="/brand/logo-mark-flat.png"
                alt=""
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden sm:block">
              <span className="block font-roman text-[0.9375rem] leading-none tracking-[0.14em] text-navy-800">
                MASJID BILAL
              </span>
              <span className="mt-1 block font-roman text-[0.5625rem] leading-none tracking-[0.3em] text-crimson-700">
                ISLAMIC CENTER
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative px-3.5 py-2 text-[0.9375rem] text-navy-800/80 transition-colors hover:text-navy-800"
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute inset-x-3.5 -bottom-0.5 h-px origin-left bg-gold-500 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            {/* Wrapped rather than given a `hidden` class directly: Button's
                base class sets `inline-flex`, and conflicting display
                utilities resolve by stylesheet order, not class order — so
                `hidden` on the Button itself would never win. Hidden while
                the mobile menu is open so it does not duplicate the CTA
                inside the menu. */}
            <span className={cn(open && "hidden")}>
              <Button href="/donate" size="sm">
                Donate
                <ArrowRight />
              </Button>
            </span>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 -mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-6" aria-hidden>
                <motion.span
                  className="absolute left-0 block h-px w-full bg-navy-800"
                  animate={open ? { top: "50%", rotate: 45 } : { top: 0, rotate: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="absolute left-0 block h-px w-full bg-navy-800"
                  animate={
                    open
                      ? { bottom: "50%", rotate: -45 }
                      : { bottom: 0, rotate: 0 }
                  }
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-sand-50 lg:hidden"
          >
            <nav
              className="flex h-full flex-col justify-center px-8"
              aria-label="Mobile"
            >
              {primaryNav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 + i * 0.05,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-navy-800/8 py-5 font-display text-3xl text-navy-800"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.06 + primaryNav.length * 0.05,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="pt-8"
              >
                <Button href="/donate" size="lg" className="w-full">
                  Donate
                  <ArrowRight />
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

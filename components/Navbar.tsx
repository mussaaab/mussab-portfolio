"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";

export function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-cocoa/90 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5 font-mono text-sm text-cream">
          <span
            aria-hidden
            className="flex h-7 w-7 items-center justify-center rounded-md border border-line-strong bg-surface font-display text-[13px] font-semibold text-terracotta"
          >
            M
          </span>
          <span className="hidden sm:inline">
            {profile.handle}
            <span className="text-terracotta">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-3 py-2 font-mono text-[13px] transition-colors ${
                    isActive ? "text-cream" : "text-muted hover:text-cream"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 36 }}
                      className="absolute inset-x-3 -bottom-px h-px bg-terracotta"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden font-mono text-[13px] text-muted underline-offset-4 transition-colors hover:text-cream hover:underline sm:inline"
          >
            Résumé<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-line-strong px-4 py-1.5 font-mono text-[13px] text-cream transition-colors hover:border-terracotta/60 hover:bg-terracotta/10 md:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-line-strong md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden className="relative block h-3 w-4">
              <span className={`absolute left-0 h-px w-4 bg-cream transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-1.5 h-px w-4 bg-cream transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-px w-4 bg-cream transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-5 pt-1">
              {[...nav, { id: "resume", label: "Résumé" }].map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id === "resume" ? profile.resume : `#${item.id}`}
                    {...(item.id === "resume" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-md px-2 py-3 font-mono text-sm ${
                      active === item.id ? "text-cream" : "text-muted"
                    }`}
                  >
                    {item.label}
                    {item.id === "resume" && <span className="sr-only"> (opens in a new tab)</span>}
                    {active === item.id && <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-terracotta" />}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

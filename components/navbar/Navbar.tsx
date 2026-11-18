"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const SECTION_IDS = portfolioData.navLinks.map((link) => link.href.slice(1));

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Header background + scroll spy. The active section is the last one whose
  // top has passed a line 40% down the viewport; at page bottom, the last one.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 12);

      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      const line = window.innerHeight * 0.4;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Close the mobile menu on Escape or when the viewport grows to desktop
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMobileMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [mobileMenuOpen]);

  const solid = isScrolled || mobileMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,padding] duration-300 ease-out-expo ${
        solid
          ? "bg-white/90 backdrop-blur-md border-b border-surface-border/80 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        <a
          href="#home"
          aria-label="Rohit Rambade, back to top"
          className="group flex items-baseline text-2xl font-black tracking-tight text-black"
        >
          <span>R</span>
          <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-primary transition-transform group-hover:scale-125" />
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {portfolioData.navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-text-secondary hover:text-text-main"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary transition-[opacity,transform] duration-300 ease-out-expo ${
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <a href="#contact" className="btn-primary hidden lg:inline-flex px-5 py-2.5 group">
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-text-main transition-colors hover:bg-zinc-100"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden animate-drop-in border-b border-surface-border bg-white px-4 sm:px-6 pb-5 pt-3"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {portfolioData.navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "true" : undefined}
                  className={`flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium ${
                    isActive ? "text-primary" : "text-text-secondary"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary" />}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary mt-3 w-full"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

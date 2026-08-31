"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = portfolioData.navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md border-b border-surface-border/80 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="group flex items-baseline text-2xl font-black tracking-tight text-black"
        >
          <span>R</span>
          <span className="inline-block w-2 h-2 rounded-full bg-primary ml-0.5 group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {portfolioData.navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-secondary hover:text-text-main"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full animate-in fade-in" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-semibold transition-all shadow-sm hover:shadow-glow group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-xl text-text-main hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-surface-border px-6 py-5 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {portfolioData.navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-medium ${
                    isActive ? "text-primary font-semibold" : "text-text-secondary"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-primary"></span>}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-surface-border">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-primary text-white text-sm font-semibold shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

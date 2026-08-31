"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <footer className="py-8 sm:py-10 border-t border-surface-border bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-4">
        
        {/* Logo */}
        <Link
          href="#home"
          className="group flex items-baseline text-xl font-black tracking-tight text-black"
        >
          <span>R</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary ml-0.5 group-hover:scale-125 transition-transform"></span>
        </Link>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-text-secondary">
          {portfolioData.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-text-muted">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-text-muted flex items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} Rohit Rambade. All rights reserved.</span>
          <span className="text-primary inline-block">💜</span>
        </p>

      </div>
    </footer>
  );
};

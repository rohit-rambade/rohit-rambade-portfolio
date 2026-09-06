"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowRight, Download, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section id="home" className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Main Hero Card */}
        {/* <div className="relative bg-white rounded-3xl sm:rounded-[36px] border border-surface-border p-5 sm:p-10 md:p-14 shadow-card hover:shadow-card-hover transition-all duration-300"> */}
          <div>
          {/* Top Meta Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary pb-5 sm:pb-6 border-b border-surface-border/60">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-text-muted shrink-0" />
              <span>{profile.location}</span>
            </div>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-text-muted shrink-0" />
              <span>{profile.displayPhone}</span>
            </a>
          </div>

          {/* Central Avatar & Floating Badges */}
          <div className="relative flex items-center justify-center my-6 sm:my-10">
            {/* Center Circular Photo Container */}
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="w-32 h-32 min-[400px]:w-36 min-[400px]:h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-2 border-surface-border p-1 bg-white shadow-sm flex items-center justify-center relative">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100">
                  <Image
                    src="/images/rohit-photo.png"
                    alt={profile.name}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Top-Right Purple Sparkle Badge */}
                <div className="absolute top-0 right-0 -translate-y-1 translate-x-1 sm:-translate-y-2 sm:translate-x-2 w-7 h-7 min-[400px]:w-8 min-[400px]:h-8 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-md animate-pulse-glow z-10">
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                  </svg>
                </div>
              </div>

              {/* Floating Pill: Top-Left (.NET) */}
              <div className="absolute top-2 -left-6 min-[400px]:-left-10 sm:top-5 sm:-left-20 md:-left-24 animate-float z-10">
                <div className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-white border border-surface-border text-[11px] sm:text-sm font-semibold text-text-main shadow-xs tracking-tight">
                  .NET
                </div>
              </div>

              {/* Floating Pill: Bottom-Left (developer) */}
              <div className="absolute bottom-1 -left-8 min-[400px]:-left-12 sm:bottom-4 sm:-left-22 md:-left-28 animate-float-slow z-10">
                <div className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-primary-light border border-primary-soft/30 text-[11px] sm:text-sm font-semibold text-primary shadow-xs">
                  developer
                </div>
              </div>

              {/* Floating Pill: Top-Right (code) */}
              <div className="absolute top-3 -right-6 min-[400px]:-right-10 sm:top-6 sm:-right-20 md:-right-24 animate-float-reverse z-10">
                <div className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-white border border-surface-border text-[11px] sm:text-sm font-semibold text-text-main shadow-xs tracking-tight">
                  code
                </div>
              </div>

              {/* Floating Pill: Bottom-Right (problem solver) */}
              <div className="absolute bottom-0 -right-8 min-[400px]:-right-14 sm:bottom-3 sm:-right-24 md:-right-32 animate-float z-10">
                <div className="px-2.5 py-1 sm:px-4 sm:py-2 rounded-full bg-primary-light border border-primary-soft/30 text-[11px] sm:text-sm font-semibold text-primary shadow-xs whitespace-nowrap">
                  problem solver
                </div>
              </div>
            </div>
          </div>

          {/* Hero Main Typography */}
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-6xl font-extrabold text-black tracking-tight">
              {profile.shortName}
            </h1>
            
            <p className="mt-1.5 sm:mt-2 text-sm sm:text-lg md:text-xl font-semibold text-primary">
              {profile.title}
            </p>

            <div className="mt-3 sm:mt-4 space-y-1 text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
              <p>I build digital products that solve real problems and create meaningful impact.</p>
              <p>From idea to deployment, I turn complex challenges into simple, beautiful solutions.</p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-glow group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={profile.resumeDownloadUrl}
                download="Rohit_Narayan_Rambade_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-primary-veryLight border border-surface-border text-text-main text-xs sm:text-sm font-semibold transition-colors group shadow-xs"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

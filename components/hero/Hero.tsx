import React from "react";
import Image from "next/image";
import { MapPin, Phone, ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const pills = [
  {
    label: ".NET",
    tone: "plain",
    pos: "left-0 top-[8%] sm:left-[6%] sm:top-[14%]",
    motion: "animate-float",
  },
  {
    label: "developer",
    tone: "accent",
    pos: "left-0 bottom-[6%] sm:left-[2%] sm:bottom-[14%]",
    motion: "animate-float-slow",
  },
  {
    label: "code",
    tone: "plain",
    pos: "right-0 top-[30%] sm:right-[8%] sm:top-[18%]",
    motion: "animate-float-reverse",
  },
  {
    label: "problem solver",
    tone: "accent",
    pos: "right-0 bottom-0 sm:right-[0%] sm:bottom-[12%]",
    motion: "animate-float",
  },
] as const;

export const Hero: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section id="home" className="px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12">
      <div className="max-w-content mx-auto">
        <div className="relative">
          {/* Meta bar */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-surface-border/70 pb-4 sm:pb-5 text-[13px] sm:text-sm text-text-secondary">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
              {profile.displayPhone}
            </a>
          </div>

          {/* Portrait stage: pills sit on the stage, never on the photo */}
          <div className="relative mx-auto mt-6 sm:mt-4 h-44 sm:h-60 md:h-64 w-full max-w-[560px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-32 w-32 sm:h-44 sm:w-44 md:h-48 md:w-48 rounded-full border-2 border-surface-border bg-white p-1 shadow-sm">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-zinc-100">
                  <Image
                    src="/images/rohit-photo.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(min-width: 768px) 192px, (min-width: 640px) 176px, 128px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="absolute -right-1 -top-1 sm:right-0 sm:top-0 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary text-white shadow-glow"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" />
                  </svg>
                </span>
              </div>
            </div>

            {pills.map((pill) => (
              <span
                key={pill.label}
                aria-hidden="true"
                className={`absolute ${pill.pos} ${pill.motion} whitespace-nowrap rounded-full border px-2.5 py-1 sm:px-4 sm:py-1.5 text-[11px] sm:text-sm font-semibold tracking-tight shadow-xs ${
                  pill.tone === "accent"
                    ? "border-primary-soft/40 bg-primary-light text-primary"
                    : "border-surface-border bg-white text-text-main"
                }`}
              >
                {pill.label}
              </span>
            ))}
          </div>

          {/* Name & pitch */}
          <div className="mx-auto mt-4 sm:mt-6 max-w-2xl text-center">
            <h1 className="text-[2.75rem] sm:text-6xl md:text-7xl font-extrabold leading-none tracking-[-0.035em] text-black">
              {profile.shortName}
            </h1>
            <p className="mt-3 text-base sm:text-xl font-semibold text-primary">{profile.title}</p>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15px] sm:text-base leading-relaxed text-text-secondary">
              I build digital products that solve real problems and create meaningful impact. From idea to
              deployment, I turn complex challenges into simple, beautiful solutions.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a href="#projects" className="btn-primary group">
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href={profile.resumeDownloadUrl}
                download="Rohit_Narayan_Rambade_Resume.pdf"
                className="btn-secondary group"
              >
                <span>Download CV</span>
                <Download
                  className="h-4 w-4 text-text-muted transition-colors group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

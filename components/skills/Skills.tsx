"use client";

import React, { useState } from "react";
import { TechIcon } from "@/components/ui/TechIcons";
import { portfolioData } from "@/data/portfolio";

const coreCompetencies = [
  "C# & .NET Core",
  "ASP.NET Core Web API",
  "React.js & Next.js",
  "TypeScript",
  "SQL Server & Stored Procedures",
  "RESTful API Design",
  "Full SDLC",
  "OCR & Document Automation",
  "Docker & Postman",
  "IIS Deployment",
];

export const Skills: React.FC = () => {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="section-rule" />

        {/* Filter */}
        <div className="relative mt-8 -mx-4 sm:mx-0">
          <div
            role="group"
            aria-label="Filter skills by domain"
            className="no-scrollbar flex items-center gap-2 overflow-x-auto px-4 pb-1 sm:flex-wrap sm:px-0"
          >
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={isActive}
                  className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold transition-[background-color,border-color,color] duration-200 ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "border border-surface-border bg-white text-text-secondary hover:border-primary-soft hover:text-text-main"
                  }`}
                >
                  {cat.name}
                  <span
                    className={`rounded-full px-1.5 text-[11px] tabular-nums ${
                      isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-text-muted"
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Fade hint that the row scrolls on small screens */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-surface-bg sm:hidden"
          />
        </div>

        {/* Grid */}
        <ul
          key={currentCategory.id}
          aria-live="polite"
          className="mt-6 grid animate-fade-in grid-cols-2 gap-3 min-[440px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 md:gap-4"
        >
          {currentCategory.skills.map((skill) => (
            <li
              key={skill.name}
              className={`group flex min-h-[104px] flex-col items-center justify-center rounded-2xl border bg-white p-3 text-center transition-[border-color,box-shadow,transform] duration-200 ease-out-expo hover:-translate-y-0.5 hover:border-primary-soft/80 hover:shadow-card-hover ${
                skill.highlight ? "border-primary-soft/50" : "border-surface-border"
              }`}
            >
              <TechIcon name={skill.icon} className="mb-2 h-8 w-8 shrink-0" />
              <span className="line-clamp-2 px-1 text-xs font-semibold leading-tight text-text-main">
                {skill.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Core competencies */}
        <div className="mt-10 border-t border-surface-border/70 pt-8">
          <h3 className="text-sm font-bold text-text-main">Core competencies</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {coreCompetencies.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-surface-border bg-white px-3 py-1.5 text-[13px] font-medium text-text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

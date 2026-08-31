"use client";

import React, { useState } from "react";
import { TechIcon } from "@/components/ui/TechIcons";
import { portfolioData } from "@/data/portfolio";
import { Sparkles, Layers, SlidersHorizontal } from "lucide-react";

export const Skills: React.FC = () => {
  const { skillCategories, featuredSkills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("all");

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Skills & Technologies
            </h2>
            <div className="w-10 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-text-muted">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary" />
            <span>Filter by domain or view all</span>
          </div>
        </div>

        {/* Category Tabs - Mobile Scrollable with smooth touch scrolling */}
        <div className="relative mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-primary text-white shadow-sm ring-2 ring-primary/20"
                      : "bg-white text-text-secondary border border-surface-border hover:border-primary-soft hover:text-text-main"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-text-muted"
                    }`}
                  >
                    {cat.skills.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid: 2 columns on small mobile (iPhone SE), 3 on mid mobile, 4 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 min-[440px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5 sm:gap-3.5 md:gap-4">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-white rounded-2xl border border-surface-border p-3 sm:p-4 flex flex-col items-center justify-center text-center hover:border-primary-soft/80 hover:shadow-card-hover transition-all duration-200 min-h-[96px] sm:min-h-[108px]"
            >
              {/* Highlight Dot for Key Core Technologies */}
              {skill.highlight && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              )}

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform shrink-0">
                <TechIcon name={skill.icon} className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              
              <span className="text-[11px] sm:text-xs font-semibold text-text-main group-hover:text-primary transition-colors leading-tight px-1 break-words line-clamp-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Quick-Pill Summary Bar */}
        <div className="mt-8 pt-6 border-t border-surface-border/60">
          <div className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Core Competencies</span>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {[
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
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-surface-bg border border-surface-border rounded-lg text-[11px] sm:text-xs font-medium text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import { Compass, FileCode2, TerminalSquare, Rocket, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Process: React.FC = () => {
  const { processSteps } = portfolioData;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />;
      case "FileCode2":
        return <FileCode2 className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />;
      case "TerminalSquare":
        return <TerminalSquare className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-text-main group-hover:text-primary transition-colors" />;
      default:
        return <Sparkles className="w-5 h-5 text-text-main" />;
    }
  };

  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-surface-bg/50 border-y border-surface-border/60">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-lg mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Development Process
          </h2>
          <div className="w-10 h-1 bg-primary rounded-full mx-auto mt-2 mb-3"></div>
          <p className="text-xs sm:text-sm text-text-secondary">
            A structured, engineering-first methodology transforming complex enterprise requirements into robust digital software.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 relative">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group bg-white rounded-2xl border border-surface-border p-4 sm:p-5 flex flex-col justify-between hover:shadow-card-hover hover:border-primary-soft transition-all duration-200"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full">
                    {step.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-surface-border flex items-center justify-center group-hover:bg-primary-veryLight group-hover:border-primary-soft transition-colors">
                    {getStepIcon(step.icon)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-text-main group-hover:text-primary transition-colors mb-1.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="w-full h-0.5 bg-slate-100 group-hover:bg-primary/40 rounded-full mt-4 transition-colors"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

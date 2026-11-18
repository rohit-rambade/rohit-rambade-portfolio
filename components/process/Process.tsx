import React from "react";
import { Compass, FileCode2, TerminalSquare, Rocket, Sparkles, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const stepIcons: Record<string, LucideIcon> = {
  Compass,
  FileCode2,
  TerminalSquare,
  Rocket,
  Sparkles,
};

export const Process: React.FC = () => {
  const { processSteps } = portfolioData;

  return (
    <section id="process" className="section border-y border-surface-border/70 bg-white">
      <div className="section-inner">
        <h2 className="section-title">Development Process</h2>
        <div className="section-rule" />
        <p className="section-lede">
          A structured, engineering-first methodology for turning complex enterprise requirements into robust
          software.
        </p>

        <ol className="relative mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* Track connecting the steps on wide screens */}
          <span
            aria-hidden="true"
            className="absolute left-5 right-5 top-5 hidden h-px bg-surface-border lg:block"
          />

          {processSteps.map((step) => {
            const Icon = stepIcons[step.icon] ?? Sparkles;
            return (
              <li key={step.step} className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 lg:block">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-text-main transition-[background-color,border-color,color] duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>

                <div className="lg:mt-5">
                  <p className="text-xs font-semibold tabular-nums text-primary">Step {step.step}</p>
                  <h3 className="mt-1 text-base font-bold text-text-main">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

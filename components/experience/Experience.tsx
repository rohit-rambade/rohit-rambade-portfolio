"use client";

import React from "react";
import { Briefcase, Code, GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  const getNodeIcon = (type: string, index: number) => {
    if (index === 0) return <Briefcase className="w-5 h-5 text-text-main" />;
    if (index === 1) return <Code className="w-5 h-5 text-text-main" />;
    return <GraduationCap className="w-5 h-5 text-text-main" />;
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
            Experience
          </h2>
          <div className="w-10 h-1 bg-primary rounded-full mt-2"></div>
        </div>

        {/* Desktop Experience: Horizontal Timeline */}
        <div className="hidden md:block relative">
          
          {/* Dashed Connecting Line Behind Nodes */}
          <div className="absolute top-6 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/40 -z-0"></div>

          {/* Timeline Nodes */}
          <div className="grid grid-cols-3 gap-6 relative z-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="flex flex-col items-center text-center group">
                
                {/* Circular Icon Node */}
                <div className="w-12 h-12 rounded-full bg-white border-2 border-surface-border group-hover:border-primary flex items-center justify-center shadow-sm group-hover:shadow-glow transition-all duration-300 mb-4">
                  {getNodeIcon(exp.type, idx)}
                </div>

                {/* Period Badge */}
                <span className="text-xs font-semibold text-primary mb-1">
                  {exp.period}
                </span>

                {/* Role / Degree Title */}
                <h3 className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>

                {/* Company / Institution */}
                <span className="text-xs font-semibold text-primary mt-0.5 mb-2">
                  {exp.company}
                </span>

                {/* Description */}
                <p className="text-xs text-text-secondary leading-relaxed max-w-[240px]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Experience: Vertical Timeline */}
        <div className="md:hidden relative pl-6 border-l-2 border-dashed border-primary/40 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Pin */}
              <div className="absolute -left-[35px] top-0 w-8 h-8 rounded-full bg-white border-2 border-surface-border group-hover:border-primary flex items-center justify-center shadow-xs">
                {getNodeIcon(exp.type, idx)}
              </div>

              {/* Content Box */}
              <div className="bg-white rounded-2xl border border-surface-border p-4 shadow-xs">
                <span className="text-xs font-semibold text-primary">
                  {exp.period}
                </span>
                <h3 className="text-sm font-bold text-text-main mt-0.5">
                  {exp.title}
                </h3>
                <div className="text-xs font-semibold text-primary mb-2">
                  {exp.company}
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { Briefcase, GraduationCap, Award, type LucideIcon } from "lucide-react";
import { portfolioData, type ExperienceItem } from "@/data/portfolio";

const typeIcon: Record<ExperienceItem["type"], LucideIcon> = {
  work: Briefcase,
  education: GraduationCap,
  milestone: Award,
};

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="section-rule" />

        <ol className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {/* Connector: vertical on mobile, horizontal on desktop */}
          <span
            aria-hidden="true"
            className="absolute left-6 top-6 bottom-6 border-l-2 border-dashed border-primary/30 md:left-[16.66%] md:right-[16.66%] md:bottom-auto md:border-l-0 md:border-t-2"
          />

          {experiences.map((exp) => {
            const Icon = typeIcon[exp.type];
            return (
              <li
                key={exp.id}
                className="group relative grid grid-cols-[3rem_1fr] gap-x-4 md:flex md:flex-col md:items-center md:text-center"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-surface-border bg-white shadow-sm transition-[border-color,box-shadow] duration-300 group-hover:border-primary group-hover:shadow-glow md:mb-5">
                  <Icon className="h-5 w-5 text-text-main" aria-hidden="true" />
                </span>

                <div className="pt-1 md:pt-0">
                  <p className="text-[13px] font-semibold text-primary tabular-nums">{exp.period}</p>
                  <h3 className="mt-1 text-lg font-bold leading-snug text-text-main">{exp.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-text-secondary">
                    {exp.company}
                    {exp.location && <span className="text-text-muted"> · {exp.location}</span>}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary md:mx-auto md:max-w-[30ch] md:text-sm">
                    {exp.description}
                  </p>
                  {exp.type === "work" && (
                    <ul className="mt-4 flex flex-wrap gap-1.5 md:justify-center" aria-label="Technologies">
                      {exp.technologies.map((tech) => (
                        <li key={tech} className="chip bg-white">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

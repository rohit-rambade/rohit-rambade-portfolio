"use client";

import React, { useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioData, type Project } from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreviews";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openProject = (project: Project, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
    // Return focus to the card that opened the dialog
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Projects</h2>
            <div className="section-rule" />
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 rounded-full py-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
          >
            More on GitHub
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-surface-border bg-white p-4 transition-[border-color,box-shadow,transform] duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary-soft/60 hover:shadow-card-hover focus-within:border-primary-soft">
                <div className="mb-5 overflow-hidden rounded-xl bg-slate-950" aria-hidden="true">
                  <ProjectPreview type={project.previewType} />
                </div>

                <p className="text-xs font-semibold text-primary">{project.category}</p>
                <h3 className="mt-1.5 text-base font-bold leading-snug text-text-main transition-colors group-hover:text-primary">
                  <button
                    type="button"
                    onClick={(e) => openProject(project, e.currentTarget)}
                    className="text-left after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary"
                  >
                    {project.title}
                    <ArrowUpRight
                      className="ml-1 inline h-4 w-4 align-[-2px] opacity-50 transition-[opacity,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <p className="mt-2 mb-5 line-clamp-3 text-sm leading-relaxed text-text-secondary">
                  {project.shortDescription}
                </p>

                <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-surface-border/70 pt-4" aria-label="Technologies">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                  {project.technologies.length > 3 && (
                    <li className="chip border-transparent bg-primary-veryLight text-primary">
                      +{project.technologies.length - 3}
                    </li>
                  )}
                </ul>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
};

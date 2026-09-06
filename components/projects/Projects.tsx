"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreviews";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header with Title and 'View All Projects' */}
        <div className="flex items-end justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
              Projects
            </h2>
            <div className="w-10 h-1 bg-primary rounded-full mt-2"></div>
          </div>

          <a
            href={portfolioData.profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-primary hover:text-primary-hover transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl border border-surface-border p-4 flex flex-col justify-between hover:shadow-card-hover hover:border-primary-soft/60 transition-all duration-300 cursor-pointer"
            >
              {/* Top: UI Preview Mockup */}
              <div className="rounded-xl overflow-hidden mb-4 bg-slate-950">
                <ProjectPreview type={project.previewType} />
              </div>

              {/* Middle: Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-text-main group-hover:text-primary transition-colors flex items-center gap-1">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </h3>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Bottom: Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-surface-border/60">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-surface-bg text-text-secondary border border-surface-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-primary-veryLight text-primary">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

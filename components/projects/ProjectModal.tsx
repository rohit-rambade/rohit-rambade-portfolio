"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, ShieldCheck } from "lucide-react";
import { Project } from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreviews";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Backdrop click dismiss */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-surface-border overflow-hidden flex flex-col z-10 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-bg/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-full text-text-muted hover:text-text-main hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Interactive Preview */}
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <ProjectPreview type={project.previewType} />
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-main">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" /> Key Architecture & Features
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-bg border border-surface-border text-xs sm:text-sm text-text-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Callout */}
          <div className="p-4 rounded-2xl bg-primary-veryLight border border-primary-light">
            <h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
              Business & Technical Impact
            </h5>
            <p className="text-xs sm:text-sm text-text-secondary">
              {project.impact}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-surface-border text-text-secondary text-xs rounded-full font-medium shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-surface-border bg-surface-bg/40">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-border bg-white text-xs font-semibold text-text-main hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Github className="w-4 h-4" /> View GitHub
            </a>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-primary hover:bg-primary-hover text-white text-xs font-semibold transition-colors shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

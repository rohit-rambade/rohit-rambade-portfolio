"use client";

import React, { useEffect, useRef } from "react";
import { X, Github, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreviews";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      // Keep Tab inside the dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const titleId = `project-title-${project.id}`;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
      <div
        className="absolute inset-0 animate-fade-in bg-zinc-950/55 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[92dvh] w-full max-w-2xl animate-rise-in flex-col overflow-hidden rounded-t-3xl border border-surface-border bg-white shadow-2xl sm:max-h-[88vh] sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-surface-border px-5 py-3.5 sm:px-6">
          <span className="rounded-full bg-primary-light px-2.5 py-1 text-xs font-semibold text-primary">
            {project.category}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-zinc-100 hover:text-text-main"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-7 overflow-y-auto overscroll-contain px-5 py-6 sm:px-6">
          <div className="overflow-hidden rounded-2xl" aria-hidden="true">
            <ProjectPreview type={project.previewType} />
          </div>

          <div>
            <h3 id={titleId} className="text-xl sm:text-2xl font-bold leading-tight text-text-main">
              {project.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{project.fullDescription}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text-main">Key architecture &amp; features</h4>
            <ul className="mt-3 space-y-2.5">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-primary-veryLight p-4">
            <h4 className="text-sm font-bold text-primary">Impact</h4>
            <p className="mt-1 text-sm leading-relaxed text-text-main">{project.impact}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-text-main">Technologies</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-surface-border bg-white px-3 py-1 text-xs font-medium text-text-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-surface-border px-5 py-4 sm:px-6">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2.5"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          )}
          <button type="button" onClick={onClose} className="btn-primary px-5 py-2.5">
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

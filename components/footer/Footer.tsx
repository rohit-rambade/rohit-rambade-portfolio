import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  const socials = [
    { href: profile.githubUrl, label: "GitHub", Icon: Github, external: true },
    { href: profile.linkedinUrl, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ];

  return (
    <footer className="border-t border-surface-border bg-white px-4 sm:px-6 md:px-8 py-10">
      <div className="max-w-content mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <a
          href="#home"
          aria-label="Back to top"
          className="group flex items-baseline text-xl font-black tracking-tight text-black"
        >
          <span>R</span>
          <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-125" />
        </a>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-text-secondary">
          {portfolioData.navLinks.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 text-text-muted">
          {socials.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-primary-veryLight hover:text-primary"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-text-muted">
        © {new Date().getFullYear()} Rohit Rambade. All rights reserved.
      </p>
    </footer>
  );
};

import React from "react";
import { Lightbulb, CheckCircle2, Code2, BookOpen, Users2, Sparkles, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AboutIllustration } from "./AboutIllustration";

const traitIcons: Record<string, LucideIcon> = {
  Lightbulb,
  CheckCircle2,
  Code2,
  BookOpen,
  Users2,
  Sparkles,
};

export const About: React.FC = () => {
  const { traits } = portfolioData;

  return (
    <section id="about" className="section">
      <div className="section-inner grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-4">
          <AboutIllustration />
        </div>

        <div className="md:col-span-8">
          <h2 className="section-title">About Me</h2>
          <div className="section-rule" />

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-text-main max-w-[60ch]">
            Passionate about creating clean, efficient and scalable solutions with great user experiences. I
            love working with technologies that push the web forward.
          </p>
          <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-text-secondary max-w-[62ch]">
            With 2 years of hands-on experience in full-stack engineering across insurance, healthcare, and
            enterprise lab domains, I specialize in designing robust C# and ASP.NET Core APIs, reactive React
            architectures, and high-performance SQL databases.
          </p>

          <ul className="mt-8 grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
            {traits.map((trait) => {
              const Icon = traitIcons[trait.iconName] ?? Sparkles;
              return (
                <li key={trait.title} className="flex items-center gap-3" title={trait.description}>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light">
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-text-main">{trait.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

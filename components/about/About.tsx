"use client";

import React from "react";
import { 
  Lightbulb, 
  CheckCircle2, 
  Code2, 
  BookOpen, 
  Users2, 
  Sparkles 
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { AboutIllustration } from "./AboutIllustration";

export const About: React.FC = () => {
  const { traits } = portfolioData;

  const getTraitIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-4 h-4 text-primary" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-4 h-4 text-primary" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-primary" />;
      case "BookOpen":
        return <BookOpen className="w-4 h-4 text-primary" />;
      case "Users2":
        return <Users2 className="w-4 h-4 text-primary" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-primary" />;
      default:
        return <Sparkles className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left: Line Art Illustration */}
          <div className="md:col-span-4 flex justify-center">
            <AboutIllustration />
          </div>

          {/* Right: Bio & Traits */}
          <div className="md:col-span-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                About Me
              </h2>
              <div className="w-10 h-1 bg-primary rounded-full mt-2 mb-4"></div>
              
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                Passionate about creating clean, efficient and scalable solutions with great user experiences. I love working with technologies that push the web forward.
              </p>
              
              <p className="mt-2 text-xs sm:text-sm text-text-muted leading-relaxed">
                With 2 years of hands-on experience in full-stack engineering across insurance, healthcare, and enterprise lab domains, I specialize in designing robust C# and ASP.NET Core APIs, reactive React architectures, and high-performance SQL databases.
              </p>
            </div>

            {/* 6 Feature Trait Items */}
            <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {traits.map((trait) => (
                <div
                  key={trait.title}
                  className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    {getTraitIcon(trait.iconName)}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-text-main">
                    {trait.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

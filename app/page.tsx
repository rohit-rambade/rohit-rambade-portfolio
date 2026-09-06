import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { Process } from "@/components/process/Process";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-surface-bg selection:bg-primary-light selection:text-primary">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

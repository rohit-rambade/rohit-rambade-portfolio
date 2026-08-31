"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  ArrowUpRight 
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Main Contact Card Matching Reference Design */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] border border-surface-border p-6 sm:p-10 md:p-12 shadow-card">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 items-center">
            
            {/* Left Column: Headline */}
            <div className="md:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-extrabold text-black tracking-tight leading-snug">
                Let&apos;s build something meaningful{" "}
                <span className="text-primary">together.</span>
              </h2>
              <div className="w-10 h-1 bg-primary rounded-full mt-3"></div>
            </div>

            {/* Middle Column: Contact Info List */}
            <div className="md:col-span-4 space-y-3 text-xs sm:text-sm text-text-secondary border-t md:border-t-0 md:border-l border-surface-border pt-4 md:pt-0 md:pl-6">
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-text-muted shrink-0" />
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium hover:text-primary transition-colors truncate"
                >
                  {profile.email}
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-text-muted shrink-0" />
                <a
                  href={`tel:${profile.phone}`}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {profile.displayPhone}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-text-muted shrink-0" />
                <span className="font-medium">{profile.location}</span>
              </div>
            </div>

            {/* Right Column: Social Buttons */}
            <div className="md:col-span-3 flex flex-col items-start md:items-end border-t md:border-t-0 md:border-l border-surface-border pt-4 md:pt-0 md:pl-6">
              <span className="text-xs sm:text-sm font-bold text-text-main mb-3">
                Let&apos;s Connect
              </span>

              <div className="flex items-center gap-2">
                {/* GitHub */}
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-full border border-surface-border bg-surface-bg hover:bg-primary-veryLight hover:border-primary-soft text-text-main hover:text-primary flex items-center justify-center transition-all shadow-xs"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-full border border-surface-border bg-surface-bg hover:bg-primary-veryLight hover:border-primary-soft text-text-main hover:text-primary flex items-center justify-center transition-all shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Direct Mail */}
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send Direct Email"
                  className="w-10 h-10 rounded-full border border-surface-border bg-surface-bg hover:bg-primary-veryLight hover:border-primary-soft text-text-main hover:text-primary flex items-center justify-center transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="mt-8 pt-8 border-t border-surface-border/80">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-text-main">
                  Send a Quick Message
                </h3>
                <p className="text-xs text-text-muted">
                  Have an opportunity, project, or question? Send a message directly.
                </p>
              </div>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-surface-bg hover:bg-slate-100 border border-surface-border text-text-secondary transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg/50 text-xs sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg/50 text-xs sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all"
                />
              </div>

              <textarea
                required
                rows={3}
                placeholder="How can I help you? (e.g., project details, job opportunity, consultation)"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-surface-border bg-surface-bg/50 text-xs sm:text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
              ></textarea>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                {formSubmitted ? (
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Thank you! Your message has been prepared for Rohit.</span>
                  </div>
                ) : (
                  <span className="text-[11px] text-text-muted">
                    Typically responds within 24 hours.
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold transition-all shadow-sm group"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

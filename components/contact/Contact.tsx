"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Check, Copy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");
  const [composed, setComposed] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    setTimeout(() => setCopyState("idle"), 2500);
  };

  // No backend: hand the message to the visitor's email app, pre-filled.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setComposed(true);
  };

  const socials = [
    { href: profile.githubUrl, label: "GitHub", Icon: Github, external: true },
    { href: profile.linkedinUrl, label: "LinkedIn", Icon: Linkedin, external: true },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail, external: false },
  ];

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="rounded-[28px] sm:rounded-[36px] border border-surface-border bg-white p-6 sm:p-10 md:p-12 shadow-card">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center md:gap-6">
            <div className="md:col-span-5">
              <h2 className="text-[1.75rem] sm:text-4xl font-extrabold leading-tight tracking-tight text-black">
                Let&apos;s build something meaningful <span className="text-primary">together.</span>
              </h2>
              <div className="section-rule" />
            </div>

            <ul className="space-y-3.5 border-t border-surface-border pt-6 text-sm text-text-secondary md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                <a href={`mailto:${profile.email}`} className="truncate font-medium transition-colors hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                <a href={`tel:${profile.phone}`} className="font-medium tabular-nums transition-colors hover:text-primary">
                  {profile.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-text-muted" aria-hidden="true" />
                <span className="font-medium">{profile.location}</span>
              </li>
            </ul>

            <div className="flex flex-col items-start border-t border-surface-border pt-6 md:col-span-3 md:items-end md:border-l md:border-t-0 md:pl-6 md:pt-0">
              <span className="mb-3 text-sm font-bold text-text-main">Let&apos;s Connect</span>
              <div className="flex items-center gap-2">
                {socials.map(({ href, label, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border bg-surface-bg text-text-main transition-colors hover:border-primary-soft hover:bg-primary-veryLight hover:text-primary"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Message form */}
          <div className="mt-10 border-t border-surface-border/80 pt-8">
            <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-base font-bold text-text-main">Send a message</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Have an opportunity, project, or question? Write it here and it opens in your email app, ready to send.
                </p>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-surface-border bg-surface-bg px-4 py-2 text-[13px] font-semibold text-text-secondary transition-colors hover:bg-zinc-100"
              >
                {copyState === "copied" ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                    <span className="text-emerald-700">Email copied</span>
                  </>
                ) : copyState === "failed" ? (
                  <span>Copy failed, select it above</span>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-text-main">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[13px] font-semibold text-text-main">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-semibold text-text-main">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Project details, a job opportunity, or a question"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="field resize-y min-h-[112px]"
                />
              </label>

              <div className="flex flex-col-reverse items-stretch justify-between gap-3 pt-1 sm:flex-row sm:items-center">
                <p className="text-[13px] text-text-muted" role="status">
                  {composed
                    ? "Your email app should now be open with the message filled in. If not, copy the email address above."
                    : "Typically responds within 24 hours."}
                </p>
                <button type="submit" className="btn-primary group">
                  <span>Compose email</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

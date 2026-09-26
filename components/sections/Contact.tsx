'use client';

import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/TechIcons';

export const CONTACT_CONFIG = {
  email: 'mengley.developer@gmail.com',
  github: 'https://github.com/OrMengley',
  linkedin: 'https://www.linkedin.com/in/or-mengley-68a853221',
  linkedinDisplay: 'linkedin.com/in/or-mengley-68a853221',
  phonePrimary: '098 943324',
  phonePrimaryTel: 'tel:098943324',
  phoneSecondary: '018 7166671',
  phoneSecondaryTel: 'tel:0187166671',
};

export function Contact() {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
      });
    }
  };

  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="I'm open to frontend development, web application, feature development, and business application opportunities."
          align="center"
        />

        {/* Primary Contact Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Email Button */}
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${CONTACT_CONFIG.email}`}
            aria-label="Email Or Mengley"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </Button>

          {/* GitHub Button */}
          <Button
            variant="outline"
            size="lg"
            href={CONTACT_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Or Mengley's GitHub"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </Button>

          {/* LinkedIn Button */}
          <Button
            variant="outline"
            size="lg"
            href={CONTACT_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Or Mengley's LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </Button>

          {/* Phone Calling Button */}
          <Button
            variant="outline"
            size="lg"
            href={CONTACT_CONFIG.phonePrimaryTel}
            aria-label={`Call Or Mengley at ${CONTACT_CONFIG.phonePrimary}`}
          >
            <Phone className="w-4 h-4" />
            <span>{CONTACT_CONFIG.phonePrimary}</span>
          </Button>

          {/* View Projects Shortcut */}
          <Button
            variant="ghost"
            size="lg"
            href="#projects"
            aria-label="View Featured Projects"
          >
            <span>View Projects</span>
          </Button>
        </div>

        {/* Clean Contact Details Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {/* Email Card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-accent/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                  Direct Email
                </span>
              </div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Email
              </h3>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="mt-1 text-sm font-semibold text-foreground hover:text-accent transition-colors block break-all"
                aria-label="Send email to mengley.developer@gmail.com"
              >
                {CONTACT_CONFIG.email}
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">Click to write or copy</span>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_CONFIG.email, 'email')}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1 rounded hover:bg-muted"
                aria-label="Copy email address"
              >
                {copiedKey === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone / Telegram Card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-accent/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                  Call &bull; Telegram
                </span>
              </div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Phone / Telegram
              </h3>
              <div className="mt-2 space-y-1.5">
                <div className="flex items-center justify-between">
                  <a
                    href={CONTACT_CONFIG.phonePrimaryTel}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    aria-label={`Call primary phone ${CONTACT_CONFIG.phonePrimary}`}
                  >
                    {CONTACT_CONFIG.phonePrimary}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_CONFIG.phonePrimary, 'phone1')}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded hover:bg-muted"
                    aria-label="Copy primary phone number"
                    title="Copy number"
                  >
                    {copiedKey === 'phone1' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <a
                    href={CONTACT_CONFIG.phoneSecondaryTel}
                    className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    aria-label={`Call secondary phone ${CONTACT_CONFIG.phoneSecondary}`}
                  >
                    {CONTACT_CONFIG.phoneSecondary}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy(CONTACT_CONFIG.phoneSecondary, 'phone2')}
                    className="p-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded hover:bg-muted"
                    aria-label="Copy secondary phone number"
                    title="Copy number"
                  >
                    {copiedKey === 'phone2' ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/50">
              <span className="text-[11px] text-muted-foreground block">
                Both numbers available for Telegram
              </span>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-xs transition-all duration-200 hover:border-accent/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                  Professional Profile
                </span>
              </div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                LinkedIn
              </h3>
              <a
                href={CONTACT_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1 break-all"
                aria-label="View Or Mengley's LinkedIn profile"
              >
                <span>{CONTACT_CONFIG.linkedinDisplay}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" />
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
              <span className="text-[11px] text-muted-foreground">Open profile or copy</span>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT_CONFIG.linkedin, 'linkedin')}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer p-1 rounded hover:bg-muted"
                aria-label="Copy LinkedIn URL"
              >
                {copiedKey === 'linkedin' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { TechBadge } from '@/components/ui/TechBadge';
import { ArrowRight, Mail } from 'lucide-react';

export function Hero() {
  const primaryTechnologies = ['React', 'TypeScript', 'Next.js', 'Firebase'];
  const additionalTech = ['Vue 3', 'Flutter', 'REST APIs', 'Go API Integration'];

  return (
    <section
      id="hero"
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 flex flex-col justify-center min-h-[85vh]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability / Subheading pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/60 text-xs font-medium text-muted-foreground mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Frontend &amp; Web Application Development
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
          Or Mengley
        </h1>

        {/* Headline */}
        <p className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-accent leading-snug">
          Frontend Developer | React, Next.js &amp; Firebase | Business Application Specialist
        </p>

        {/* Short Description */}
        <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          I build practical web applications for real-world business workflows, including POS systems, inventory management, dashboards, and administrative platforms.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary" size="lg" href="#projects">
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button variant="outline" size="lg" href="#contact">
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </Button>
        </div>

        {/* Tech Focus Badges */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Core Tech Stack &amp; Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {primaryTechnologies.map((tech) => (
              <TechBadge key={tech} label={tech} variant="accent" />
            ))}
            {additionalTech.map((tech) => (
              <TechBadge key={tech} label={tech} variant="default" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

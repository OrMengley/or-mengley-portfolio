import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';

export function TechStack() {
  const primaryStack = [
    { name: 'React', desc: 'Component architecture, Hooks, Context API, state management' },
    { name: 'TypeScript', desc: 'Type safety, strict interfaces, scaleable codebases' },
    { name: 'Next.js', desc: 'App Router, Server Components, page rendering' },
    { name: 'Firebase', desc: 'Firebase Firestore DB, Firebase Authentication' },
  ];

  const secondaryStack = [
    { name: 'Vue 3', desc: 'Composition API, reactive UI development' },
    { name: 'Flutter', desc: 'Cross-platform mobile application development' },
    { name: 'REST APIs', desc: 'API integration, request handling, error management' },
    { name: 'Go API Integration', desc: 'Integrating frontend applications with Go backend APIs' },
    { name: 'Tailwind CSS', desc: 'Utility-first responsive styling and custom design system' },
  ];

  return (
    <Section id="tech-stack">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools &amp; Technologies"
        description="Core frontend frameworks, libraries, and REST API integration tools used for web application development."
      />

      <div className="space-y-8">
        {/* Primary Stack */}
        <div>
          <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Primary Technologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {primaryStack.map((tech) => (
              <div
                key={tech.name}
                className="p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
              >
                <TechBadge label={tech.name} variant="accent" />
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stack */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Additional Tools &amp; Frameworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryStack.map((tech) => (
              <div
                key={tech.name}
                className="p-4 rounded-xl border border-border/80 bg-card/60 hover:border-border transition-colors"
              >
                <TechBadge label={tech.name} variant="default" />
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

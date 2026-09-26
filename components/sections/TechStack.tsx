import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import {
  ReactIcon,
  TypeScriptIcon,
  NextJsIcon,
  FirebaseIcon,
  VueIcon,
  FlutterIcon,
  RestApiIcon,
  GoLangIcon,
  TailwindIcon,
} from '@/components/ui/TechIcons';

export function TechStack() {
  const iconMap: Record<string, React.ReactNode> = {
    React: <ReactIcon size={30} />,
    TypeScript: <TypeScriptIcon size={30} />,
    'Next.js': <NextJsIcon size={30} />,
    Firebase: <FirebaseIcon size={30} />,
    'Vue 3': <VueIcon size={28} />,
    Flutter: <FlutterIcon size={28} />,
    'REST APIs': <RestApiIcon size={28} />,
    'Go API Integration': <GoLangIcon size={28} />,
    'Tailwind CSS': <TailwindIcon size={28} />,
  };

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
                className="p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3.5">
                    <div className="w-10 h-10 rounded-lg bg-muted/60 border border-border/60 flex items-center justify-center p-1 shrink-0">
                      {iconMap[tech.name]}
                    </div>
                    <TechBadge label={tech.name} variant="accent" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
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
                className="p-4 rounded-xl border border-border/80 bg-card/60 hover:border-border transition-colors flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-muted/50 border border-border/50 flex items-center justify-center p-1 shrink-0">
                      {iconMap[tech.name]}
                    </div>
                    <TechBadge label={tech.name} variant="default" />
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Briefcase, GraduationCap, ArrowRight, Smartphone, Globe, Code2 } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'COSMOS DIGITAL',
      role: 'Mobile Developer',
      period: '2019 – 2026',
      icon: <Smartphone className="w-5 h-5 text-accent" />,
      description:
        'Worked primarily on mobile application development and frontend implementation, contributing to application interfaces, business features, and software development workflows.',
    },
    {
      company: 'Freelance / Independent Work',
      role: 'Web & Application Development',
      period: 'Present',
      icon: <Globe className="w-5 h-5 text-accent" />,
      description:
        'Working on web and application projects with a focus on frontend development, business systems, and modern JavaScript frameworks.',
    },
  ];

  const journeySteps = [
    { label: 'Flutter + Firebase', desc: 'Mobile application workflows' },
    { label: 'React / TypeScript', desc: 'Component architecture & typing' },
    { label: 'Next.js / Firebase', desc: 'Direct cloud web applications' },
    { label: 'Vue 3 + REST APIs', desc: 'Team-based system development' },
    { label: 'Business Application Frontend', desc: 'Practical management and business workflows' },
  ];

  return (
    <Section id="experience" mutedBg>
      <SectionHeading
        eyebrow="Background"
        title="Experience &amp; Education"
        description="Professional work background, academic foundation, and frontend development journey."
      />

      <div className="space-y-8">
        {/* Work Experience & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Work Experience (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="p-5 sm:p-6 rounded-xl border border-border bg-card shadow-xs transition-all duration-200 hover:border-accent/40"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-foreground">{exp.company}</h4>
                      <span className="text-xs font-semibold text-accent block mt-0.5">
                        {exp.role}
                      </span>
                    </div>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education (Right 4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Education
              </h3>
            </div>

            <div className="p-5 sm:p-6 rounded-xl border border-border bg-card shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-base font-bold text-foreground">
                Build Bright University
              </h4>
              <span className="text-xs text-muted-foreground block mt-0.5">
                Battambang Campus
              </span>
              <div className="mt-3 pt-3 border-t border-border/50">
                <span className="text-xs font-semibold text-accent block">
                  Bachelor Degree in Information Technology
                </span>
                <span className="text-xs font-medium text-muted-foreground block mt-1">
                  2017 – 2021
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Journey & Focus Areas Line */}
        <div className="pt-6 border-t border-border/60">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4 text-accent" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Development Journey &amp; Focus Areas
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {journeySteps.map((step, idx) => (
              <div
                key={step.label}
                className="p-3.5 rounded-xl border border-border/80 bg-card/60 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-bold text-accent">
                      0{idx + 1}
                    </span>
                    {idx < journeySteps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-3 h-3 text-muted-foreground/40" />
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-foreground">{step.label}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">
                    {step.desc}
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

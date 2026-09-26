import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Building2, LayoutDashboard, Layers, Code2 } from 'lucide-react';

export function About() {
  const focusAreas = [
    {
      icon: <Building2 className="w-5 h-5 text-accent" />,
      title: 'Business & POS Systems',
      description:
        'Building practical point-of-sale interfaces, sales tracking, and checkout workflows for retail operations.',
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-accent" />,
      title: 'Dashboards & Admin Panels',
      description:
        'Creating structured administrative management systems with intuitive navigation and clear data overviews.',
    },
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: 'Inventory & Stock Management',
      description:
        'Developing stock visibility, inventory adjustment views, and catalog categorization interfaces.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-accent" />,
      title: 'API & Cloud Integration',
      description:
        'Connecting frontend applications directly to Firebase services and collaborating with backend REST APIs.',
    },
  ];

  return (
    <Section id="about" mutedBg>
      <SectionHeading
        eyebrow="About Me"
        title="Frontend Developer Focused on Practical Business Applications"
        description="Building user interfaces for management systems, POS operations, and day-to-day business workflows."
      />

      {/* Bio / Narrative */}
      <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs mb-8">
        <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <p>
            Hi, I&apos;m <strong className="text-foreground font-semibold">Or Mengley</strong>, a frontend developer with experience building web and mobile applications for business and management workflows.
          </p>
          <p>
            My development journey started with Flutter and Firebase before I moved into modern web development using React, TypeScript, Next.js, and Vue 3.
          </p>
          <p>
            Over time, I have worked on projects involving POS systems, inventory management, school attendance, dashboards, product management, sales workflows, and REST API integration.
          </p>
          <p>
            My current focus is frontend development with <strong className="text-foreground font-semibold">React, Next.js, TypeScript, and Firebase</strong>, while continuing to improve my experience working with backend APIs and larger application workflows.
          </p>
        </div>
      </div>

      {/* Focus Areas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {focusAreas.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:border-accent/40 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

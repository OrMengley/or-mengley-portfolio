import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Building2, LayoutDashboard, Layers, Code2 } from 'lucide-react';

export function About() {
  const specializations = [
    {
      icon: <Building2 className="w-5 h-5 text-accent" />,
      title: 'Business & POS Systems',
      description:
        'Developing practical point-of-sale and business management software interfaces.',
    },
    {
      icon: <LayoutDashboard className="w-5 h-5 text-accent" />,
      title: 'Dashboards & Admin Panels',
      description:
        'Creating intuitive management systems with clean UI and streamlined workflows.',
    },
    {
      icon: <Layers className="w-5 h-5 text-accent" />,
      title: 'Inventory & Operations',
      description:
        'Building inventory, stock management, and administrative tools.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-accent" />,
      title: 'API Integration',
      description:
        'Integrating RESTful APIs, Go backend endpoints, and Firebase into responsive frontend interfaces.',
    },
  ];

  return (
    <Section id="about" mutedBg>
      <SectionHeading
        eyebrow="About Me"
        title="Frontend developer focused on business application solutions"
        description="I specialize in building user-centered web applications, POS systems, and management platforms for practical business needs."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {specializations.map((spec) => (
          <div
            key={spec.title}
            className="rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/40"
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              {spec.icon}
            </div>
            <h3 className="text-base font-semibold text-foreground">{spec.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {spec.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

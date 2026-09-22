import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { Monitor, Server, Database, KeyRound } from 'lucide-react';

export function SchoolAttendanceTechStack() {
  const stackCategories = [
    {
      title: 'Frontend Application',
      scope: 'My Primary Work',
      badgeVariant: 'accent' as const,
      icon: <Monitor className="w-5 h-5 text-accent" />,
      items: [
        { name: 'React', desc: 'Component architecture, custom hooks, and interactive UI state' },
        { name: 'TypeScript', desc: 'Strict data contracts, interfaces, and prop typing' },
        { name: 'Vite', desc: 'Modern fast build tooling and development environment' },
      ],
    },
    {
      title: 'Backend Integration',
      scope: 'Backend Team',
      badgeVariant: 'default' as const,
      icon: <Server className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Golang REST API', desc: 'High-performance HTTP endpoints and data controllers' },
      ],
    },
    {
      title: 'Database Layer',
      scope: 'Backend Team',
      badgeVariant: 'default' as const,
      icon: <Database className="w-5 h-5 text-accent" />,
      items: [
        { name: 'MongoDB', desc: 'Document-oriented database storing records and logs' },
      ],
    },
    {
      title: 'Authentication & Security',
      scope: 'Full Flow Integration',
      badgeVariant: 'accent' as const,
      icon: <KeyRound className="w-5 h-5 text-accent" />,
      items: [
        { name: 'JWT Authentication', desc: 'Secure token-based session handling across API requests' },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Architectural Stack & System Technologies"
          description="Clear delineation between frontend application technologies and backend infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {stackCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50">
                    {category.scope}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-3">{category.title}</h3>

                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="p-2.5 rounded-lg bg-muted/40 border border-border/40">
                      <div className="mb-1">
                        <TechBadge label={item.name} variant={category.badgeVariant} />
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

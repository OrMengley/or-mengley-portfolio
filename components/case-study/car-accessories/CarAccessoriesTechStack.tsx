import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { Monitor, Database, KeyRound, Image as ImageIcon, Cloud } from 'lucide-react';

export function CarAccessoriesTechStack() {
  const stackCategories = [
    {
      title: 'Frontend Application',
      scope: 'Application Layer',
      badgeVariant: 'accent' as const,
      icon: <Monitor className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Next.js', desc: 'React framework for component hierarchy, layouts, and interactive UI views' },
      ],
    },
    {
      title: 'Database / Data Service',
      scope: 'Application Data',
      badgeVariant: 'default' as const,
      icon: <Database className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Firebase Firestore', desc: 'Direct client-side document database for catalog, stock, and sales' },
      ],
    },
    {
      title: 'Authentication Service',
      scope: 'Access Control',
      badgeVariant: 'accent' as const,
      icon: <KeyRound className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Firebase Authentication', desc: 'Session management and credential verification for internal staff' },
      ],
    },
    {
      title: 'Media Storage & Delivery',
      scope: 'Media Management',
      badgeVariant: 'default' as const,
      icon: <ImageIcon className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Cloudinary', desc: 'Hosted image storage and delivery for product photos' },
      ],
    },
    {
      title: 'Architecture Pattern',
      scope: 'Integration Model',
      badgeVariant: 'accent' as const,
      icon: <Cloud className="w-5 h-5 text-accent" />,
      items: [
        { name: 'Serverless Integration', desc: 'Direct cloud-service integration without a custom REST API or backend' },
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Technology Stack &amp; Cloud Services"
          description="Targeted technology choices focused on direct cloud integration and straightforward business operations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
          {stackCategories.map((category) => (
            <div
              key={category.title}
              className="p-5 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50">
                    {category.scope}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-foreground mb-3">{category.title}</h3>

                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.name} className="p-2 rounded-lg bg-muted/40 border border-border/40">
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

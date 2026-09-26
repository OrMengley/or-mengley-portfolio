import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { CheckCircle2, LayoutGrid } from 'lucide-react';

export function CarAccessoriesFeatures() {
  const { featureGroups } = CAR_ACCESSORIES_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Features"
          title="5 Core Feature Groups"
          description="A breakdown of practical business features designed for daily car accessories sales and stock management."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {featureGroups.map((group) => (
            <div
              key={group.groupName}
              className="p-6 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <LayoutGrid className="w-4 h-4 text-accent" />
                  <h3 className="text-base font-bold text-foreground tracking-tight">
                    {group.groupName}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {group.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-border/40">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-foreground p-2 rounded-lg bg-muted/40 border border-border/40"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
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

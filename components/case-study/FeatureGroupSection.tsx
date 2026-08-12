import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA } from '@/data/tkCustomAdminData';
import { CheckCircle2, LayoutGrid } from 'lucide-react';

export function FeatureGroupSection() {
  const { featureGroups } = TK_CUSTOM_ADMIN_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Scope & Feature Breakdown"
          title="10 Core Functional Domains"
          description="Detailed breakdown of business features implemented across the frontend interface."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-border/40">
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

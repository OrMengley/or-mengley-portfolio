import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { Check } from 'lucide-react';

export function CarAccessoriesComplexity() {
  const { complexityFactors } = CAR_ACCESSORIES_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical &amp; Workflow Challenges"
          title="Project Complexity &amp; Practical Considerations"
          description="Real-world frontend development challenges addressed while building direct cloud-integrated workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {complexityFactors.map((factor) => (
            <div
              key={factor.title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card shadow-xs hover:border-accent/40 transition-colors"
            >
              <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{factor.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {factor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Check } from 'lucide-react';

export function ProjectComplexity() {
  const complexityFactors = [
    {
      title: 'Multi-Domain Business Logic Integration',
      description:
        'Connecting sales, purchase orders, multi-warehouse stock movement, and financial accounts into a unified frontend user interface.',
    },
    {
      title: 'Multi-Company & Multi-Branch Hierarchy',
      description:
        'Managing isolated company entities, branch configurations, and specific user permission groups within the single admin portal.',
    },
    {
      title: 'Barcode & Serialized Item Management',
      description:
        'Implementing dual search workflows allowing hardware items to be dispatches or tracked by barcode scans or serial numbers.',
    },
    {
      title: 'Financial & Loss Reporting Analytics',
      description:
        'Constructing complex data table representations for profit & loss statements, unpaid balances, supplier losses, and promotional discounts.',
    },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical & Domain Scope"
          title="Why This Project Was Substantial"
          description="Key engineering and business domain challenges tackled during frontend development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
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

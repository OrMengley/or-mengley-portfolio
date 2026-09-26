import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { Package, ShoppingCart, BarChart2, ShieldCheck } from 'lucide-react';

export function CarAccessoriesOverview() {
  const { overview, domainHighlights, businessContext } = CAR_ACCESSORIES_DATA;

  const icons = [
    <Package key="0" className="w-5 h-5 text-accent" />,
    <ShoppingCart key="1" className="w-5 h-5 text-accent" />,
    <BarChart2 key="2" className="w-5 h-5 text-accent" />,
    <ShieldCheck key="3" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Overview"
          title="Practical Point of Sale &amp; Stock Management"
          description={overview}
        />

        {/* Business Scope Banner */}
        <div className="mt-6 p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-semibold text-accent uppercase tracking-wider shrink-0">Business Context:</span>
          <span>{businessContext}</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {domainHighlights.map((domain, idx) => (
            <div
              key={domain.title}
              className="p-5 rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-accent/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{domain.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

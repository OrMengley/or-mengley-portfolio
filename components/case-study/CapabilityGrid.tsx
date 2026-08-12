import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA } from '@/data/tkCustomAdminData';
import { CheckCircle2, ShieldAlert, Barcode, GitCompare, Landmark, Layers } from 'lucide-react';

export function CapabilityGrid() {
  const { capabilities } = TK_CUSTOM_ADMIN_DATA;

  const capabilityIcons = [
    <Landmark key="0" className="w-5 h-5 text-accent" />,
    <Layers key="1" className="w-5 h-5 text-accent" />,
    <Barcode key="2" className="w-5 h-5 text-accent" />,
    <GitCompare key="3" className="w-5 h-5 text-accent" />,
    <CheckCircle2 key="4" className="w-5 h-5 text-accent" />,
    <ShieldAlert key="5" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Capabilities"
          title="Engineered for Complex Business & POS Operations"
          description="Key enterprise capabilities handled by the TK Custom Admin frontend application."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="p-6 rounded-xl border border-border bg-card shadow-xs transition-all duration-200 hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                {capabilityIcons[index % capabilityIcons.length]}
              </div>
              <h3 className="text-base font-semibold text-foreground">{cap.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

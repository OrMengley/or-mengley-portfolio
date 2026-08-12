import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA } from '@/data/tkCustomAdminData';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function Workflow() {
  const { workflowSteps } = TK_CUSTOM_ADMIN_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Architecture & Workflow"
          title="End-to-End Business Flow"
          description="Clean operational workflow showing how data flows across suppliers, purchases, inventory, sales, and analytics."
        />

        {/* Desktop Horizontal Workflow Steps */}
        <div className="hidden lg:grid grid-cols-5 gap-4 mt-8 relative">
          {workflowSteps.map((step, idx) => (
            <div key={step.step} className="relative flex flex-col justify-between">
              <div className="p-5 rounded-xl border border-border bg-card shadow-xs min-h-[200px] flex flex-col justify-between hover:border-accent/40 transition-colors">
                <div>
                  <span className="text-xs font-mono font-bold text-accent block mb-2">
                    STEP {step.step}
                  </span>
                  <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {idx < workflowSteps.length - 1 && (
                <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-card border border-border flex items-center justify-center text-accent shadow-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile / Tablet Vertical Workflow Steps */}
        <div className="lg:hidden flex flex-col gap-4 mt-8">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step.step}>
              <div className="p-5 rounded-xl border border-border bg-card shadow-xs">
                <span className="text-xs font-mono font-bold text-accent block mb-1">
                  STEP {step.step}
                </span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < workflowSteps.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <div className="w-7 h-7 rounded-full bg-muted border border-border flex items-center justify-center text-accent">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

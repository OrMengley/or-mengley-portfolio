import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { ArrowRight, ArrowDown, Image as ImageIcon, CloudUpload } from 'lucide-react';

export function CarAccessoriesWorkflow() {
  const { workflowSteps } = CAR_ACCESSORIES_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Workflow"
          title="Day-to-Day Operational Workflow"
          description="A sequential business workflow connecting authentication, catalog management, inventory control, sales checkout, and sales history."
        />

        {/* Desktop 5-Column Grid with Directional Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mt-8">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-5 rounded-xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-accent">
                    STEP {step.step}
                  </span>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Workflow Steps */}
        <div className="lg:hidden flex flex-col gap-3 mt-8">
          {workflowSteps.map((step, idx) => (
            <React.Fragment key={step.step}>
              <div className="p-4 rounded-xl border border-border bg-card shadow-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold text-accent">
                    STEP {step.step}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < workflowSteps.length - 1 && (
                <div className="flex justify-center my-0.5">
                  <div className="w-6 h-6 rounded-full bg-muted border border-border flex items-center justify-center text-accent">
                    <ArrowDown className="w-3 h-3" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Supporting Cloudinary Media Workflow Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl border border-border/80 bg-muted/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <CloudUpload className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-foreground block">
                Supporting Workflow: Cloudinary Media Upload &amp; Delivery
              </span>
              <span className="text-xs text-muted-foreground">
                During Product Management (Step 02), product images are uploaded to Cloudinary. Returned hosted image URLs are saved into Firestore documents to provide image previews during POS / Sale (Step 04).
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card border border-border text-[11px] font-semibold text-accent shrink-0">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Cloudinary Media</span>
          </div>
        </div>
      </div>
    </section>
  );
}

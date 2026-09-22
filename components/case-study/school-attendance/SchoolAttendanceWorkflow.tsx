import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA } from '@/data/schoolAttendanceData';
import { ArrowRight, ArrowDown } from 'lucide-react';

export function SchoolAttendanceWorkflow() {
  const { workflowSteps } = SCHOOL_ATTENDANCE_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Workflow"
          title="End-to-End Operational Flow"
          description="A sequential pipeline showing how schools, academic structures, enrollments, and attendance workflows interconnect."
        />

        {/* Desktop 4x2 Grid with Directional Flow */}
        <div className="hidden md:grid grid-cols-4 gap-4 mt-8">
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

        {/* Mobile / Vertical Workflow Steps */}
        <div className="md:hidden flex flex-col gap-3 mt-8">
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
      </div>
    </section>
  );
}

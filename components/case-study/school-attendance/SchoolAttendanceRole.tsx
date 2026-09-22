import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA } from '@/data/schoolAttendanceData';
import { UserCheck, CheckCircle2, Server, Layers } from 'lucide-react';

export function SchoolAttendanceRole() {
  const { frontendResponsibilities, myResponsibility } = SCHOOL_ATTENDANCE_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Role — Frontend Developer"
          title="Frontend Development & REST API Integration"
          description="Focusing on user interface architecture, client-side state, and role-based workflows connected to the backend API."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Main Responsibility Statement Card */}
          <div className="md:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-xs font-semibold text-accent mb-4">
                <UserCheck className="w-4 h-4" />
                Frontend Developer
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Frontend Application Ownership &amp; API Integration
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {myResponsibility}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I worked primarily on the frontend application using <strong className="text-foreground">React, TypeScript, and Vite</strong>, establishing clean component hierarchies, form validations, data tables, and authentication state management. The backend service was built with <strong className="text-foreground">Golang and MongoDB</strong> by the backend engineering team.
              </p>
            </div>

            {/* Clear Separation Notice */}
            <div className="mt-6 pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                <span className="font-semibold text-accent flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  My Scope: Frontend
                </span>
                <span className="text-muted-foreground leading-relaxed block">
                  Vite + React + TypeScript UI views, state management, role-aware navigation, and REST API integration.
                </span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                  <Server className="w-3.5 h-3.5 text-muted-foreground" />
                  Backend Team Scope
                </span>
                <span className="text-muted-foreground leading-relaxed block">
                  Golang REST API controllers, MongoDB database queries, business schemas, and JWT issuance endpoints.
                </span>
              </div>
            </div>
          </div>

          {/* Key Frontend Responsibilities Checklist Card */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-base font-bold text-foreground tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Key Frontend Responsibilities
              </h3>

              <div className="space-y-2.5">
                {frontendResponsibilities.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-foreground p-2.5 rounded-lg bg-muted/40 border border-border/40"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

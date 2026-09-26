import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { UserCheck, CheckCircle2, Layers, Cloud } from 'lucide-react';

export function CarAccessoriesRole() {
  const { frontendResponsibilities, myResponsibility } = CAR_ACCESSORIES_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Role — Frontend Developer"
          title="Frontend Development &amp; Cloud Services Integration"
          description="Focusing on user interface architecture, client-side workflows, and direct integration with Firebase and Cloudinary."
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
                Frontend Application Development &amp; Direct Cloud Integration
              </h3>
              <p className="mt-3 text-sm text-foreground/90 font-medium leading-relaxed">
                {myResponsibility}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I built the client application using <strong className="text-foreground">Next.js</strong>, crafting responsive interfaces for catalog management, stock updates, POS checkout, and user access. The frontend interacted directly with <strong className="text-foreground">Firebase Firestore</strong> for application data storage, <strong className="text-foreground">Firebase Authentication</strong> for user credentials, and <strong className="text-foreground">Cloudinary</strong> for product media uploads and delivery.
              </p>
            </div>

            {/* Architecture Scope Notice */}
            <div className="mt-6 pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
                <span className="font-semibold text-accent flex items-center gap-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  Frontend Architecture
                </span>
                <span className="text-muted-foreground leading-relaxed block">
                  Next.js component structure, catalog forms, POS checkout flows, stock views, and direct Firebase/Cloudinary SDK integrations.
                </span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
                <span className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                  <Cloud className="w-3.5 h-3.5 text-muted-foreground" />
                  Cloud Services Model
                </span>
                <span className="text-muted-foreground leading-relaxed block">
                  Utilized managed cloud services directly from the client without requiring a separate custom REST API or backend server.
                </span>
              </div>
            </div>
          </div>

          {/* Key Frontend Responsibilities Checklist Card */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-base font-bold text-foreground tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Key Responsibilities &amp; Work
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

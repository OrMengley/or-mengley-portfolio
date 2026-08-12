import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA } from '@/data/tkCustomAdminData';
import { UserCheck, Users } from 'lucide-react';

export function ProjectRole() {
  const { teamStructure, myResponsibility } = TK_CUSTOM_ADMIN_DATA;

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Role & Team Collaboration"
          title="Frontend Development & REST API Integration"
          description="Detailed breakdown of development responsibilities and cross-team collaboration."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mt-8">
          {/* Main Responsibility Card */}
          <div className="md:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-accent/10 text-xs font-semibold text-accent mb-4">
                <UserCheck className="w-4 h-4" />
                Frontend Developer
              </div>
              <h3 className="text-xl font-bold text-foreground tracking-tight">
                Frontend Ownership &amp; REST API Integration
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                I worked as a <strong className="text-foreground">Frontend Developer</strong> as part of a 4-member development team. The team consisted of <strong className="text-foreground">2 frontend developers</strong> and <strong className="text-foreground">2 backend developers</strong>. I focused on frontend development using Vue 3 and integration with the backend API.
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {myResponsibility}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-muted/50 border border-border/40">
                <span className="font-semibold text-foreground block">Frontend Framework</span>
                <span className="text-muted-foreground mt-0.5 block">Vue 3 (Options / Composition API)</span>
              </div>
              <div className="p-3 rounded-lg bg-muted/50 border border-border/40">
                <span className="font-semibold text-foreground block">Backend Integration</span>
                <span className="text-muted-foreground mt-0.5 block">Go Server REST API Endpoints</span>
              </div>
            </div>
          </div>

          {/* Team Structure Breakdown Card */}
          <div className="md:col-span-5 rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-lg font-bold text-foreground tracking-tight mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-accent" />
                Team Composition (4 Total)
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-accent/30 bg-accent/5">
                  <div className="flex items-center justify-between text-xs font-bold text-accent mb-1">
                    <span>Frontend Team</span>
                    <span>2 Developers</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Responsible for building user interface views, forms, table states, serial search filters, and API HTTP requests.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-muted/40">
                  <div className="flex items-center justify-between text-xs font-semibold text-foreground mb-1">
                    <span>Backend Team</span>
                    <span>2 Developers</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Built the Go backend server, database schemas, business logic controllers, and RESTful API endpoints.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60 text-xs text-muted-foreground leading-relaxed">
              {teamStructure.collaborationDesc}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


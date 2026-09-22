import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA } from '@/data/schoolAttendanceData';
import { ShieldCheck, School, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

export function SchoolAttendanceRoles() {
  const { roleAccess } = SCHOOL_ATTENDANCE_DATA;

  const roleIcons: Record<string, React.ReactNode> = {
    'Super Admin': <ShieldCheck className="w-5 h-5 text-accent" />,
    'Admin': <School className="w-5 h-5 text-accent" />,
    'Teacher': <GraduationCap className="w-5 h-5 text-accent" />,
    'Parent': <Users className="w-5 h-5 text-accent" />,
  };

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Role-Based Access Control"
          title="Multi-Role Hierarchy & User Personas"
          description="The system enforces clear authorization tiers, ensuring each user type accesses strictly designated workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {roleAccess.map((role) => (
            <div
              key={role.roleName}
              className="p-6 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {roleIcons[role.roleName] || <Users className="w-5 h-5 text-accent" />}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {role.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">{role.roleName}</h3>
                <span className="text-xs font-medium text-accent block mt-0.5 mb-2">
                  {role.scope}
                </span>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {role.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border/50">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block">
                    Core Access Area:
                  </span>
                  {role.responsibilities.map((resp) => (
                    <div key={resp} className="flex items-start gap-2 text-xs text-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA } from '@/data/schoolAttendanceData';
import { School, Users2, CalendarCheck, ShieldCheck } from 'lucide-react';

export function SchoolAttendanceOverview() {
  const { overview, domainHighlights } = SCHOOL_ATTENDANCE_DATA;

  const icons = [
    <School key="0" className="w-5 h-5 text-accent" />,
    <Users2 key="1" className="w-5 h-5 text-accent" />,
    <CalendarCheck key="2" className="w-5 h-5 text-accent" />,
    <ShieldCheck key="3" className="w-5 h-5 text-accent" />,
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Overview"
          title="School Management & Attendance Web Application"
          description={overview}
        />

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

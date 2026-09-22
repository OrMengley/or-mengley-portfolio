import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA } from '@/data/schoolAttendanceData';
import {
  Network,
  Loader2,
  AlertTriangle,
  Lock,
  Shield,
  FileEdit,
  Table,
  Users,
} from 'lucide-react';

export function SchoolAttendanceApiIntegration() {
  const { apiIntegrationPoints } = SCHOOL_ATTENDANCE_DATA;

  const iconMap: Record<string, React.ReactNode> = {
    Network: <Network className="w-5 h-5 text-accent" />,
    Loader2: <Loader2 className="w-5 h-5 text-accent" />,
    AlertTriangle: <AlertTriangle className="w-5 h-5 text-accent" />,
    Lock: <Lock className="w-5 h-5 text-accent" />,
    Shield: <Shield className="w-5 h-5 text-accent" />,
    FileEdit: <FileEdit className="w-5 h-5 text-accent" />,
    Table: <Table className="w-5 h-5 text-accent" />,
    Users: <Users className="w-5 h-5 text-accent" />,
  };

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architecture & Integration"
          title="Frontend &amp; API Integration"
          description="How the React frontend interfaces with the Golang REST API to handle data fetching, authentication states, and UI lifecycle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {apiIntegrationPoints.map((point) => (
            <div
              key={point.title}
              className="p-5 rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-accent/40 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  {iconMap[point.iconName] || <Network className="w-5 h-5 text-accent" />}
                </div>
                <h3 className="text-sm font-semibold text-foreground">{point.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

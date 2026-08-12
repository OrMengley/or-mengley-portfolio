import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export function Experience() {
  const highlights = [
    {
      title: 'Business Application Development',
      description:
        'Experience building frontend applications for POS systems, inventory systems, sales and purchase management, school attendance, and management dashboards.',
    },
    {
      title: 'POS & Inventory Systems',
      description:
        'Experience working on sales, purchases, inventory, stock transfer, stock adjustment, barcode workflows, serial number tracking, multi-warehouse, and multi-company systems.',
    },
    {
      title: 'REST API Integration',
      description:
        'Experience integrating frontend applications with backend REST APIs, including Go-based backend services for the School Attendance System and TK Custom Admin project.',
    },
    {
      title: 'Responsive Frontend Development',
      description:
        'Experience building responsive frontend interfaces using React, Next.js, and Vue 3.',
    },
  ];

  return (
    <Section id="experience" mutedBg>
      <SectionHeading
        eyebrow="Development Journey"
        title="Experience & Technical Focus"
        description="Frontend development experience focused on business applications, management systems, and REST API integrations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
          >
            <div className="mt-0.5 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA } from '@/data/tkCustomAdminData';
import { Building2, PackageCheck, Receipt, BarChart3 } from 'lucide-react';

export function ProjectOverview() {
  const { overview } = TK_CUSTOM_ADMIN_DATA;

  const coreDomains = [
    {
      icon: <Building2 className="w-5 h-5 text-accent" />,
      title: 'Multi-Company & Multi-Branch',
      description: 'Centralized administration across parent company entities and multiple branch locations.',
    },
    {
      icon: <PackageCheck className="w-5 h-5 text-accent" />,
      title: 'Warehouse & Serialized Inventory',
      description: 'Stock movement, serial number tracking, stock transfers, and warehouse adjustment dispatches.',
    },
    {
      icon: <Receipt className="w-5 h-5 text-accent" />,
      title: 'POS & Public Invoicing',
      description: 'Barcode-driven sales checkout, customer invoice generation, and public invoice viewing links.',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-accent" />,
      title: 'Accounting & P&L Analytics',
      description: 'Comprehensive financial reporting including profit & loss, expense tracking, and sales movement reports.',
    },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Overview"
          title="Computer Shop Operations & POS Management System"
          description={overview}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {coreDomains.map((domain) => (
            <div
              key={domain.title}
              className="p-5 rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-accent/40"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                {domain.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">{domain.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

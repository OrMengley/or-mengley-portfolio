import * as React from 'react';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mutedBg?: boolean;
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
  mutedBg = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 transition-colors ${
        mutedBg ? 'bg-muted/40 border-y border-border/40' : 'bg-background'
      } ${className}`}
    >
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

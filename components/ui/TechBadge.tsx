import * as React from 'react';

export interface TechBadgeProps {
  label: string;
  variant?: 'default' | 'accent' | 'outline';
  icon?: React.ReactNode;
}

export function TechBadge({ label, variant = 'default', icon }: TechBadgeProps) {
  const variantStyles = {
    default: 'bg-muted text-foreground border border-border',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    outline: 'bg-transparent text-muted-foreground border border-border',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${variantStyles[variant]}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {label}
    </span>
  );
}

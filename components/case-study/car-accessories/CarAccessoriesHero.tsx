import * as React from 'react';
import Link from 'next/link';
import { TechBadge } from '@/components/ui/TechBadge';
import { ArrowLeft, ShoppingBag, Code2, Cloud, Layers } from 'lucide-react';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';

export function CarAccessoriesHero() {
  const { title, subtitle, role, frontendTech, cloudTech } = CAR_ACCESSORIES_DATA;

  return (
    <div className="relative pt-8 pb-12 md:pt-14 md:pb-16 border-b border-border/80 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-accent transition-colors mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1 py-0.5"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Pill / Category */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
            <ShoppingBag className="w-3.5 h-3.5" />
            Case Study
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border/60">
            {subtitle}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          {title}
        </h1>

        {/* Short Metadata Strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border text-xs shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-muted-foreground font-medium block">My Role</span>
              <span className="text-foreground font-semibold text-sm mt-0.5 block">{role}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="text-muted-foreground font-medium block">Architecture</span>
              <span className="text-foreground font-semibold text-sm mt-0.5 block">Next.js + Firebase &amp; Cloudinary</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <span className="text-muted-foreground font-medium block">Core Technologies</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {frontendTech.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="accent" />
                ))}
                {cloudTech.map((tech) => (
                  <TechBadge key={tech} label={tech} variant="default" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import * as React from 'react';
import { FeaturedProject } from '@/types/project';
import { TechBadge } from '@/components/ui/TechBadge';
import { X, Users, CheckCircle2, Cpu, LayoutList, Layers } from 'lucide-react';

export interface CaseStudyModalProps {
  project: FeaturedProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({
  project,
  isOpen,
  onClose,
}: CaseStudyModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xl text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg border border-border bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="pr-10">
          <span className="text-xs font-semibold tracking-wider text-accent uppercase block mb-1">
            {project.category}
          </span>
          <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Overview & Metadata Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-muted/40 border border-border/60 text-xs">
          <div>
            <span className="text-muted-foreground block font-medium">Role</span>
            <span className="text-foreground font-semibold mt-0.5 block">{project.role}</span>
          </div>

          {project.team && (
            <div>
              <span className="text-muted-foreground block font-medium flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-accent" /> Team Structure
              </span>
              <span className="text-foreground font-semibold mt-0.5 block">
                {project.team}
              </span>
            </div>
          )}

          {project.myResponsibility && (
            <div className="sm:col-span-2">
              <span className="text-muted-foreground block font-medium">My Responsibility</span>
              <span className="text-foreground font-medium mt-0.5 block">
                {project.myResponsibility}
              </span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-2">Project Overview</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
            <Cpu className="w-4 h-4 text-accent" /> Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} label={tech} variant="accent" />
            ))}
          </div>
        </div>

        {/* Architecture (if defined) */}
        {project.architecture && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-accent" /> System Architecture
            </h3>
            <ul className="space-y-1.5">
              {project.architecture.map((item) => (
                <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Feature Highlights / Feature Groups */}
        <div className="mt-8 pt-6 border-t border-border">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-1.5">
            <LayoutList className="w-4 h-4 text-accent" /> System Features
          </h3>

          {project.featureGroups ? (
            <div className="space-y-6">
              {project.featureGroups.map((group) => (
                <div key={group.groupName}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                    {group.groupName}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-xs text-foreground p-2 rounded-lg bg-card border border-border/60"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.allFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-xs text-foreground p-2 rounded-lg bg-card border border-border/60"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
          {project.caseStudyUrl || project.id === 'tk-custom-admin' ? (
            <a
              href={project.caseStudyUrl || '/projects/tk-custom-admin'}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-accent-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <span>View Full Case Study Page</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <div />
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-muted text-foreground text-xs font-medium hover:bg-border transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

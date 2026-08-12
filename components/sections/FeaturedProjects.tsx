'use client';

import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechBadge } from '@/components/ui/TechBadge';
import { Button } from '@/components/ui/Button';
import { ProjectPreviewPlaceholder } from '@/components/ui/ProjectPreviewPlaceholder';
import { CaseStudyModal } from '@/components/ui/CaseStudyModal';
import { FEATURED_PROJECTS } from '@/data/featuredProjects';
import { FeaturedProject } from '@/types/project';
import { Check, ArrowRight, ShieldCheck, Users } from 'lucide-react';

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = React.useState<FeaturedProject | null>(null);

  const flagshipProject = FEATURED_PROJECTS.find((p) => p.isFlagship) || FEATURED_PROJECTS[0];
  const secondaryProjects = FEATURED_PROJECTS.filter((p) => !p.isFlagship);

  return (
    <Section id="projects" mutedBg>
      <SectionHeading
        eyebrow="Featured Work"
        title="Featured Business Projects"
        description="Business applications developed for POS operations, inventory management, school management, and administrative workflows."
      />

      <div className="space-y-12 md:space-y-16">
        {/* Flagship Project Card: TK Custom Admin */}
        <div className="group relative rounded-2xl border border-border/90 bg-card p-6 md:p-10 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-md">
          {/* Flagship Badge Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Flagship Project
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {flagshipProject.category}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight group-hover:text-accent transition-colors">
                  {flagshipProject.title}
                </h3>

                {/* Role & Team */}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <span className="px-2.5 py-1 rounded-md bg-muted border border-border/60 text-foreground font-semibold">
                    Role: {flagshipProject.role}
                  </span>
                  {flagshipProject.team && (
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      <Users className="w-3.5 h-3.5 text-accent" />
                      {flagshipProject.team}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Feature Highlights */}
                <div className="mt-6 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent block">
                    Key Highlights &amp; Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {flagshipProject.keyHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2 text-xs text-foreground bg-muted/30 p-2 rounded-md border border-border/40"
                      >
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-6 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {flagshipProject.technologies.map((tech) => (
                      <TechBadge key={tech} label={tech} variant="accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="/projects/tk-custom-admin"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSelectedProject(flagshipProject)}
                >
                  <span>Quick Summary</span>
                </Button>
              </div>
            </div>

            {/* Right Interactive Placeholder Graphic */}
            <div
              className="lg:col-span-5 cursor-pointer"
              onClick={() => setSelectedProject(flagshipProject)}
            >
              <ProjectPreviewPlaceholder
                title={flagshipProject.title}
                category={flagshipProject.category}
                isFlagship
              />
            </div>
          </div>
        </div>

        {/* Secondary Featured Projects (Alternating Storytelling Layout) */}
        {secondaryProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="group relative rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xs transition-all duration-300 hover:border-accent/40 hover:shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Preview Placeholder */}
                <div
                  className={`lg:col-span-5 cursor-pointer ${
                    isEven ? 'lg:order-last' : 'lg:order-first'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <ProjectPreviewPlaceholder
                    title={project.title}
                    category={project.category}
                  />
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Role */}
                    <div className="mt-2.5 inline-block px-2.5 py-0.5 rounded-md bg-muted text-xs font-medium text-muted-foreground border border-border/50">
                      Role: {project.role}
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-5 space-y-1.5">
                      {project.keyHighlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-xs text-foreground"
                        >
                          <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="mt-5 pt-4 border-t border-border/50">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <TechBadge key={tech} label={tech} variant="default" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detail Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}

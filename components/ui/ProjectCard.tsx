import * as React from 'react';
import { TechBadge } from './TechBadge';
import { ExternalLink, Code2 } from 'lucide-react';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category?: string;
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  category,
  demoUrl,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-accent/50 hover:shadow-xs">
      <div>
        {category && (
          <span className="text-xs font-semibold tracking-wider text-accent uppercase mb-2 block">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TechBadge key={tag} label={tag} variant="default" />
          ))}
        </div>

        {(demoUrl || githubUrl) && (
          <div className="flex items-center gap-3 text-xs font-medium pt-1">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-foreground hover:text-accent transition-colors"
                aria-label={`View live demo for ${title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View source code for ${title}`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Source</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

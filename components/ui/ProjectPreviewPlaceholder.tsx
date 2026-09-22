'use client';

import * as React from 'react';
import { Monitor, Layers, ImageOff } from 'lucide-react';

export interface ProjectPreviewPlaceholderProps {
  title: string;
  category: string;
  imagePath?: string;
  image?: string;
  src?: string;
  isFlagship?: boolean;
  className?: string;
}

export function ProjectPreviewPlaceholder({
  title,
  category,
  imagePath,
  image,
  src,
  isFlagship = false,
  className = '',
}: ProjectPreviewPlaceholderProps) {
  const displayImage = imagePath || image || src;
  const [prevImage, setPrevImage] = React.useState(displayImage);
  const [imageError, setImageError] = React.useState(false);

  if (displayImage !== prevImage) {
    setPrevImage(displayImage);
    setImageError(false);
  }

  const showImage = Boolean(displayImage && !imageError);

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-border/80 bg-gradient-to-br from-card via-muted/30 to-card p-4 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-sm ${
        isFlagship ? 'min-h-[280px] md:min-h-[340px]' : 'min-h-[240px] md:min-h-[280px]'
      } ${className}`}
    >
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <svg className="w-full h-full" width="100%" height="100%">
          <pattern
            id={`grid-${title.replace(/\s+/g, '-').toLowerCase()}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
          <rect
            width="100%"
            height="100%"
            fill={`url(#grid-${title.replace(/\s+/g, '-').toLowerCase()})`}
          />
        </svg>
      </div>

      {/* Top Window Chrome / Header Row */}
      <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-muted/80 text-[11px] font-medium text-muted-foreground border border-border/50">
          <Layers className="w-3 h-3 text-accent" />
          {showImage ? 'UI Preview' : 'Project Preview'}
        </span>
      </div>

      {/* Main Content Body */}
      <div className="relative z-10 my-auto py-2 flex flex-col items-center justify-center w-full">
        {showImage ? (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-border/70 bg-card shadow-xs group-hover:border-accent/30 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={displayImage}
              alt={`${title} Preview`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="py-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
              {imageError ? (
                <ImageOff className="w-6 h-6 text-amber-500" />
              ) : (
                <Monitor className="w-6 h-6" />
              )}
            </div>
            <h4 className="text-base font-bold text-foreground tracking-tight max-w-xs">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground mt-1 font-medium max-w-xs">
              {category}
            </p>
          </div>
        )}
      </div>

      {/* Footer Status Bar */}
      <div className="relative z-10 pt-3 mt-4 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
        <span className="font-mono text-muted-foreground/70">UI / System Interface</span>
        <span className="inline-flex items-center gap-1 text-accent font-medium group-hover:translate-x-0.5 transition-transform">
          Case Study Details &rarr;
        </span>
      </div>
    </div>
  );
}

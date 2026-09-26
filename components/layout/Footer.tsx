import * as React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-card/50 py-8 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          &copy; {currentYear} <span className="font-medium text-foreground">Or Mengley</span>. Built with Next.js.
        </div>
        <div className="flex items-center gap-3">
          <span>Frontend Developer</span>
          <span>&bull;</span>
          <span>React, Next.js &amp; Firebase</span>
        </div>
      </div>
    </footer>
  );
}

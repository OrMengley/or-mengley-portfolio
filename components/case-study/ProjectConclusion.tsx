import * as React from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ProjectConclusion() {
  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Case Study Summary &amp; Key Takeaways
        </h2>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Building the TK Custom Admin frontend in Vue 3 provided valuable experience in implementing large-scale business logic, serialized product inventory tracking, multi-company permissions, and collaborating seamlessly within a 4-developer team to integrate RESTful Go APIs.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href="/#projects">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Button>

          <Button variant="outline" size="lg" href="/#contact">
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { CAR_ACCESSORIES_DATA } from '@/data/carAccessoriesData';
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function CarAccessoriesConclusion() {
  const { takeaways } = CAR_ACCESSORIES_DATA;

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Key Takeaways"
          title="What This Project Demonstrates"
          description="Practical frontend development capabilities and cloud-service integration patterns applied throughout this project."
        />

        {/* Takeaways Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-12">
          {takeaways.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl border border-border bg-muted/30 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="pt-8 border-t border-border/60 text-center max-w-2xl mx-auto">
          <div className="w-10 h-10 rounded-full bg-accent/10 text-accent mx-auto flex items-center justify-center mb-3">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Explore More Work</h3>
          <p className="text-xs text-muted-foreground mt-1 mb-6">
            Review other featured business applications or connect for web application development opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" size="md" href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Button>

            <Button variant="outline" size="md" href="/projects/tk-custom-admin">
              <span>View TK Custom Admin (Flagship)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            <Button variant="outline" size="md" href="/projects/school-attendance">
              <span>View School Attendance</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>

            <Button variant="ghost" size="md" href="/#contact">
              <span>Get in Touch</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

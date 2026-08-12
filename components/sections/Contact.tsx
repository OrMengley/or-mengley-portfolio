import * as React from 'react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Mail, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build reliable business applications together"
          description="Looking for a frontend developer to build or scale your POS system, dashboard, management software, or web platform? Feel free to reach out."
          align="center"
        />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="mailto:contact@ormengley.dev" // Clean placeholder mailto
          >
            <Mail className="w-4 h-4" />
            <span>Send Me an Email</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            href="#projects"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Section>
  );
}

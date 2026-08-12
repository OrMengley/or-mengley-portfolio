import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProjectHero } from '@/components/case-study/ProjectHero';
import { ProjectOverview } from '@/components/case-study/ProjectOverview';
import { ProjectRole } from '@/components/case-study/ProjectRole';
import { CapabilityGrid } from '@/components/case-study/CapabilityGrid';
import { Workflow } from '@/components/case-study/Workflow';
import { FeatureGroupSection } from '@/components/case-study/FeatureGroupSection';
import { ScreenshotGallery } from '@/components/case-study/ScreenshotGallery';
import { ProjectComplexity } from '@/components/case-study/ProjectComplexity';
import { ProjectConclusion } from '@/components/case-study/ProjectConclusion';

export const metadata: Metadata = {
  title: 'TK Custom Admin — Computer Shop Management System | Or Mengley',
  description:
    'Case study of a computer shop management, POS, inventory, sales, purchase, and reporting system built with Vue 3 and REST API integration.',
};

export default function TKCustomAdminPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <ProjectHero />
        <ProjectOverview />
        <ProjectRole />
        <CapabilityGrid />
        <Workflow />
        <FeatureGroupSection />
        <ScreenshotGallery />
        <ProjectComplexity />
        <ProjectConclusion />
      </main>
      <Footer />
    </div>
  );
}

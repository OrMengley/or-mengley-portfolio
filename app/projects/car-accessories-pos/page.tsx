import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CarAccessoriesHero } from '@/components/case-study/car-accessories/CarAccessoriesHero';
import { CarAccessoriesOverview } from '@/components/case-study/car-accessories/CarAccessoriesOverview';
import { CarAccessoriesRole } from '@/components/case-study/car-accessories/CarAccessoriesRole';
import { CarAccessoriesArchitecture } from '@/components/case-study/car-accessories/CarAccessoriesArchitecture';
import { CarAccessoriesTechStack } from '@/components/case-study/car-accessories/CarAccessoriesTechStack';
import { CarAccessoriesCloudIntegration } from '@/components/case-study/car-accessories/CarAccessoriesCloudIntegration';
import { CarAccessoriesWorkflow } from '@/components/case-study/car-accessories/CarAccessoriesWorkflow';
import { CarAccessoriesFeatures } from '@/components/case-study/car-accessories/CarAccessoriesFeatures';
import { CarAccessoriesGallery } from '@/components/case-study/car-accessories/CarAccessoriesGallery';
import { CarAccessoriesComplexity } from '@/components/case-study/car-accessories/CarAccessoriesComplexity';
import { CarAccessoriesConclusion } from '@/components/case-study/car-accessories/CarAccessoriesConclusion';

export const metadata: Metadata = {
  title: 'Car Accessories POS — Next.js & Firebase | Or Mengley',
  description:
    'Case study of a car accessories POS and stock management web application built with Next.js, Firestore, Firebase Authentication, and Cloudinary.',
};

export default function CarAccessoriesPosPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <CarAccessoriesHero />
        <CarAccessoriesOverview />
        <CarAccessoriesRole />
        <CarAccessoriesArchitecture />
        <CarAccessoriesTechStack />
        <CarAccessoriesCloudIntegration />
        <CarAccessoriesWorkflow />
        <CarAccessoriesFeatures />
        <CarAccessoriesGallery />
        <CarAccessoriesComplexity />
        <CarAccessoriesConclusion />
      </main>
      <Footer />
    </div>
  );
}

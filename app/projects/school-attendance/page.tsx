import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SchoolAttendanceHero } from '@/components/case-study/school-attendance/SchoolAttendanceHero';
import { SchoolAttendanceOverview } from '@/components/case-study/school-attendance/SchoolAttendanceOverview';
import { SchoolAttendanceRole } from '@/components/case-study/school-attendance/SchoolAttendanceRole';
import { SchoolAttendanceTechStack } from '@/components/case-study/school-attendance/SchoolAttendanceTechStack';
import { SchoolAttendanceRoles } from '@/components/case-study/school-attendance/SchoolAttendanceRoles';
import { SchoolAttendanceWorkflow } from '@/components/case-study/school-attendance/SchoolAttendanceWorkflow';
import { SchoolAttendanceFeatures } from '@/components/case-study/school-attendance/SchoolAttendanceFeatures';
import { SchoolAttendanceApiIntegration } from '@/components/case-study/school-attendance/SchoolAttendanceApiIntegration';
import { SchoolAttendanceGallery } from '@/components/case-study/school-attendance/SchoolAttendanceGallery';
import { SchoolAttendanceComplexity } from '@/components/case-study/school-attendance/SchoolAttendanceComplexity';
import { SchoolAttendanceConclusion } from '@/components/case-study/school-attendance/SchoolAttendanceConclusion';

export const metadata: Metadata = {
  title: 'School Attendance Management System — React & TypeScript | Or Mengley',
  description:
    'Case study of a school attendance management web application built with React, TypeScript, and Golang REST API integration.',
};

export default function SchoolAttendancePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <SchoolAttendanceHero />
        <SchoolAttendanceOverview />
        <SchoolAttendanceRole />
        <SchoolAttendanceTechStack />
        <SchoolAttendanceRoles />
        <SchoolAttendanceWorkflow />
        <SchoolAttendanceFeatures />
        <SchoolAttendanceApiIntegration />
        <SchoolAttendanceGallery />
        <SchoolAttendanceComplexity />
        <SchoolAttendanceConclusion />
      </main>
      <Footer />
    </div>
  );
}

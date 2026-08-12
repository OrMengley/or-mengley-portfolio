import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Or Mengley — Frontend Developer',
  description:
    'Frontend Developer specializing in React, Next.js, Firebase, and business applications.',
  keywords: [
    'Or Mengley',
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'Firebase',
    'POS Systems',
    'Dashboards',
    'TypeScript',
  ],
  authors: [{ name: 'Or Mengley' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

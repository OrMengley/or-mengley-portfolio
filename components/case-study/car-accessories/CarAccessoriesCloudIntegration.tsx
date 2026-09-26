import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Database, Lock, Image as ImageIcon, Cloud } from 'lucide-react';

export function CarAccessoriesCloudIntegration() {
  const integrations = [
    {
      title: 'Firebase Firestore',
      role: 'Application Data Service',
      badge: 'Database',
      icon: <Database className="w-5 h-5 text-accent" />,
      description:
        'Stores application data such as product specifications, inventory counts, and sales history. Accessed directly by the Next.js frontend to read and write business records without requiring an intermediary custom server.',
      points: [
        'Stores product records & pricing info',
        'Tracks stock counts and availability flags',
        'Persists completed sales transaction records',
        'Direct SDK queries from Next.js client views',
      ],
    },
    {
      title: 'Firebase Authentication',
      role: 'User Identity & Access Control',
      badge: 'Authentication',
      icon: <Lock className="w-5 h-5 text-accent" />,
      description:
        'Handles user authentication for the business owner and sales team. Manages user login sessions and guards internal application routes to ensure that only authorized personnel can access POS and stock features.',
      points: [
        'User credential authentication',
        'Session state persistence and validation',
        'Route protection for internal management pages',
        'User access managed through the application',
      ],
    },
    {
      title: 'Cloudinary',
      role: 'Product Image Storage & Delivery',
      badge: 'Media Hosting',
      icon: <ImageIcon className="w-5 h-5 text-accent" />,
      description:
        'Stores product photographs and delivers hosted images to the application. Handles media uploads from the product management interface and serves hosted product images across catalog and POS views.',
      points: [
        'Direct product image upload from forms',
        'Cloud storage for car accessory photos',
        'Cloudinary image hosting and delivery to product listings',
        'Stores returned hosted image URLs in Firestore records',
      ],
    },
    {
      title: 'Serverless Integration Model',
      role: 'Architectural Synergy',
      badge: 'Cloud Integration',
      icon: <Cloud className="w-5 h-5 text-accent" />,
      description:
        'Coordinates multiple cloud services directly within the Next.js frontend. This serverless approach eliminates the need to build and maintain a separate custom backend or custom REST API.',
      points: [
        'No custom backend server needed',
        'No separate custom REST API required',
        'Direct integration with cloud services',
        'Direct SDK communication from Next.js',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architecture & Services"
          title="Firebase &amp; Cloud Integration"
          description="How Next.js communicates directly with Firebase Firestore, Firebase Authentication, and Cloudinary to power business workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {integrations.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <span className="text-xs font-medium text-accent block mt-0.5 mb-3">
                  {item.role}
                </span>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-border/40">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                    Key Practical Function:
                  </span>
                  {item.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

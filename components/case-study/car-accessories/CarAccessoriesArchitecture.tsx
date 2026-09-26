import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowDown, Database, ShieldCheck, Image as ImageIcon, Smartphone, Cloud, Layers } from 'lucide-react';

export function CarAccessoriesArchitecture() {
  return (
    <section className="py-12 md:py-16 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="System Architecture"
          title="Serverless &amp; Cloud-Service Architecture"
          description="A direct cloud integration approach without a separate custom backend or REST API server."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Stream 1: Data & Authentication Stream */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  Data &amp; Auth Stream
                </span>
                <span className="text-[11px] text-muted-foreground font-mono">Firebase Integration</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                Application Data &amp; User Authentication
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                The Next.js frontend connects directly to Firebase client services. Firebase Authentication gates application access, while Firestore stores and synchronizes application data.
              </p>

              {/* Visual Flow Diagram */}
              <div className="flex flex-col items-center space-y-2 py-2">
                {/* Node 1 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Next.js Application</span>
                    <span className="text-[11px] text-muted-foreground">Frontend UI &amp; Business Logic</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-0.5 text-accent">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Node 2 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Firebase Authentication</span>
                    <span className="text-[11px] text-muted-foreground">Session Auth &amp; Access Verification</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-0.5 text-accent">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Node 3 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Firebase Firestore</span>
                    <span className="text-[11px] text-muted-foreground">Products, Stock Levels, &amp; Sales Records</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 text-[11px] text-muted-foreground">
              Direct client-to-cloud connection using Firebase SDK without custom REST API middleware.
            </div>
          </div>

          {/* Stream 2: Hosted Media Stream */}
          <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  Media Stream
                </span>
                <span className="text-[11px] text-muted-foreground font-mono">Cloudinary Integration</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                Hosted Product Image Pipeline
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Product image files are uploaded directly to Cloudinary from the browser. The returned hosted image URLs are then saved to Firestore product records.
              </p>

              {/* Visual Flow Diagram */}
              <div className="flex flex-col items-center space-y-2 py-2">
                {/* Node 1 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Next.js Application</span>
                    <span className="text-[11px] text-muted-foreground">Upload Form &amp; File Selector</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-0.5 text-accent">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Node 2 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Cloudinary</span>
                    <span className="text-[11px] text-muted-foreground">Image Storage &amp; Delivery</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-0.5 text-accent">
                  <ArrowDown className="w-4 h-4" />
                </div>

                {/* Node 3 */}
                <div className="w-full p-3 rounded-xl bg-muted/60 border border-border flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    <ImageIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-foreground block">Product Images &amp; Previews</span>
                    <span className="text-[11px] text-muted-foreground">Hosted Image Delivery to Catalog &amp; POS Views</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 text-[11px] text-muted-foreground">
              Decouples binary image storage from Firestore documents for clean database structure.
            </div>
          </div>
        </div>

        {/* Architecture Note Card */}
        <div className="mt-6 p-4 rounded-xl bg-muted/30 border border-border flex items-start gap-3 text-xs text-muted-foreground">
          <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <div>
            <strong className="text-foreground">Architecture Note:</strong> The project used Firebase and Cloudinary directly from the Next.js application, so no separate custom REST API was required.
          </div>
        </div>
      </div>
    </section>
  );
}

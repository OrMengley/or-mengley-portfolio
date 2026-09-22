'use client';

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SCHOOL_ATTENDANCE_DATA, GallerySlot } from '@/data/schoolAttendanceData';
import { Image as ImageIcon, Maximize2, X, AlertCircle } from 'lucide-react';

export function SchoolAttendanceGallery() {
  const { gallerySlots } = SCHOOL_ATTENDANCE_DATA;
  const [selectedSlot, setSelectedSlot] = React.useState<GallerySlot | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedSlot(null);
      }
    };
    if (selectedSlot) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSlot]);

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Demonstration & Interface Gallery"
          title="System Interface Gallery"
          description="High-fidelity gallery structure prepared for sanitized project screenshots and UI demonstrations."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {gallerySlots.map((slot) => (
            <div
              key={slot.id}
              onClick={() => setSelectedSlot(slot)}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-xs cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-md flex flex-col justify-between"
            >
              {/* Image / Placeholder Graphic Box */}
              <div className="relative aspect-video w-full bg-muted/60 border-b border-border flex flex-col items-center justify-center p-6 text-center">
                {slot.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={slot.src}
                    alt={slot.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-foreground block">
                        {slot.title}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        Screenshot Slot (Sanitized Image Ready)
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card text-foreground text-xs font-semibold border border-border shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-accent" /> Click to Expand
                  </span>
                </div>
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-4">
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-1">
                  {slot.category}
                </span>
                <h4 className="text-sm font-bold text-foreground">{slot.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {slot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedSlot && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedSlot(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedSlot(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg border border-border bg-muted/80 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1 pr-10">
              {selectedSlot.category}
            </span>
            <h3 className="text-xl font-bold text-foreground pr-10">{selectedSlot.title}</h3>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground mb-4 pr-10">
              {selectedSlot.description}
            </p>

            {/* Display Area */}
            <div className="flex flex-col gap-6 w-full mt-4">
              {selectedSlot.images && selectedSlot.images.length > 0 ? (
                selectedSlot.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-video w-full rounded-xl bg-muted border border-border flex flex-col items-center justify-center text-center overflow-hidden"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${selectedSlot.title} - detail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="relative aspect-video w-full rounded-xl bg-muted border border-border flex flex-col items-center justify-center p-8 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {selectedSlot.title} Placeholder Slot
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                      This slot is reserved for sanitized UI screenshots. Screenshots can be added to the data structure without breaking the layout.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="px-4 py-2 rounded-lg bg-muted text-xs font-medium text-foreground hover:bg-border transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

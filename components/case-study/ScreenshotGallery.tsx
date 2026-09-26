'use client';

import * as React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TK_CUSTOM_ADMIN_DATA, GalleryItem } from '@/data/tkCustomAdminData';
import {
  Image as ImageIcon,
  Maximize2,
  X,
  AlertCircle,
  ZoomIn,
  ZoomOut,
  ExternalLink,
  RotateCcw,
} from 'lucide-react';

interface ZoomedImageState {
  src: string;
  title: string;
  category?: string;
}

export function ScreenshotGallery() {
  const { galleryPlaceholders } = TK_CUSTOM_ADMIN_DATA;
  const [selectedImage, setSelectedImage] = React.useState<GalleryItem | null>(null);
  const [zoomedImage, setZoomedImage] = React.useState<ZoomedImageState | null>(null);
  const [zoomScale, setZoomScale] = React.useState<number>(1);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoomedImage) {
          setZoomedImage(null);
          setZoomScale(1);
        } else if (selectedImage) {
          setSelectedImage(null);
        }
      }
    };
    if (selectedImage || zoomedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, zoomedImage]);

  const handleOpenZoom = (src: string, title: string, category?: string) => {
    setZoomedImage({ src, title, category });
    setZoomScale(1);
  };

  const handleZoomIn = () => {
    setZoomScale((prev) => Math.min(prev + 0.35, 3));
  };

  const handleZoomOut = () => {
    setZoomScale((prev) => Math.max(prev - 0.35, 0.75));
  };

  const handleResetZoom = () => {
    setZoomScale(1);
  };

  return (
    <section className="py-12 md:py-16 border-b border-border/60 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Demonstration &amp; Interface Gallery"
          title="System Interface Gallery"
          description="Sanitized project screenshots and interface previews from the TK Custom Admin application."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {galleryPlaceholders.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden shadow-xs cursor-pointer transition-all duration-300 hover:border-accent/50 hover:shadow-md"
            >
              {/* Image / Placeholder Graphic Box */}
              <div className="relative aspect-video w-full bg-muted/60 border-b border-border flex flex-col items-center justify-center p-3 text-center overflow-hidden">
                {item.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-foreground block">
                        {item.title}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-500 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        Screenshot Slot (Sanitized Image Ready)
                      </span>
                    </div>
                  </div>
                )}

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card text-foreground text-xs font-semibold border border-border shadow-sm">
                    <Maximize2 className="w-3.5 h-3.5 text-accent" /> View Details &amp; Images
                  </span>
                </div>
              </div>

              {/* Caption & Metadata Footer */}
              <div className="p-4">
                <span className="text-[11px] font-semibold text-accent uppercase tracking-wider block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Detail Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl border border-border bg-card p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg border border-border bg-muted/80 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="pr-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent block mb-1">
                {selectedImage.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">{selectedImage.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {selectedImage.description}
              </p>
            </div>

            {/* Click to zoom instruction pill */}
            {selectedImage.images && selectedImage.images.length > 0 && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Click on any screenshot below to view in full resolution &amp; zoom</span>
              </div>
            )}

            {/* Display Area */}
            <div className="flex flex-col gap-6 w-full mt-4">
              {selectedImage.images && selectedImage.images.length > 0 ? (
                selectedImage.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() =>
                      handleOpenZoom(
                        img,
                        `${selectedImage.title} (Screenshot ${idx + 1})`,
                        selectedImage.category
                      )
                    }
                    className="group/img relative w-full rounded-xl bg-muted/40 border border-border flex flex-col items-center justify-center text-center overflow-hidden cursor-zoom-in hover:border-accent/60 transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${selectedImage.title} - detail ${idx + 1}`}
                      className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-300 group-hover/img:scale-[1.01]"
                    />

                    {/* Floating Zoom overlay badge */}
                    <div className="absolute bottom-3 right-3 opacity-90 group-hover/img:opacity-100 transition-opacity">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/90 backdrop-blur-sm text-foreground text-xs font-semibold border border-border shadow-md">
                        <ZoomIn className="w-3.5 h-3.5 text-accent" /> Click to Expand Fullscreen
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="relative aspect-video w-full rounded-xl bg-muted border border-border flex flex-col items-center justify-center p-8 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h4 className="text-base font-bold text-foreground">
                      {selectedImage.title} Images Slot
                    </h4>
                    <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                      Please add paths to the &quot;images&quot; array for this item to display them in this lightbox.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-lg bg-muted text-xs font-medium text-foreground hover:bg-border transition-colors cursor-pointer"
              >
                Close Gallery View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen High-Resolution Zoom Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-between p-3 sm:p-6 bg-black/95 backdrop-blur-lg animate-in fade-in duration-200"
          onClick={() => {
            setZoomedImage(null);
            setZoomScale(1);
          }}
        >
          {/* Top Control Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between gap-4 py-2 px-4 rounded-xl bg-neutral-900/90 border border-neutral-800 text-white z-20 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="truncate pr-2">
              {zoomedImage.category && (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent block">
                  {zoomedImage.category}
                </span>
              )}
              <h4 className="text-sm font-bold truncate">{zoomedImage.title}</h4>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex items-center gap-1 bg-neutral-800 p-1 rounded-lg border border-neutral-700">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 0.75}
                  className="p-1.5 rounded hover:bg-neutral-700 disabled:opacity-40 disabled:hover:bg-transparent text-neutral-200 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-neutral-300 min-w-[3.5rem] text-center">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 3}
                  className="p-1.5 rounded hover:bg-neutral-700 disabled:opacity-40 disabled:hover:bg-transparent text-neutral-200 hover:text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoomScale !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1.5 rounded hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Open in new tab */}
              <a
                href={zoomedImage.src}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-colors inline-flex items-center gap-1 text-xs font-medium"
                title="Open original image in new tab"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open Original</span>
              </a>

              {/* Close Zoom */}
              <button
                type="button"
                onClick={() => {
                  setZoomedImage(null);
                  setZoomScale(1);
                }}
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
                title="Close fullscreen view (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Zoomable Image Container */}
          <div
            className="flex-1 w-full max-w-6xl flex items-center justify-center p-2 sm:p-4 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              style={{ transform: `scale(${zoomScale})` }}
              className="max-h-[82vh] max-w-[95vw] object-contain rounded-lg shadow-2xl transition-transform duration-200 cursor-zoom-in"
              onClick={handleZoomIn}
            />
          </div>

          {/* Bottom Hint */}
          <div className="text-[11px] text-neutral-400 pb-1">
            Click image to zoom in &bull; Use controls to adjust &bull; Press Esc to exit
          </div>
        </div>
      )}
    </section>
  );
}

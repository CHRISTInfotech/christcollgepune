import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

export default function ImageCarousel({ images, alt, className = 'h-40 w-full', intervalMs = 3500 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = images?.length ?? 0;

  useEffect(() => {
    if (count <= 1 || isPaused) return undefined;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % count);
    }, intervalMs);
    return () => clearInterval(id);
  }, [count, isPaused, intervalMs]);

  if (!images || images.length === 0) return null;

  const goTo = (e, i) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex((i + images.length) % images.length);
  };

  return (
    <div
      className={`group/carousel relative overflow-hidden bg-cc-gray-100 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <img src={images[index]} alt={`${alt} — photo ${index + 1} of ${images.length}`} className="h-full w-full object-cover" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => goTo(e, index - 1)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-black/70"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={(e) => goTo(e, index + 1)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white opacity-0 transition-opacity group-hover/carousel:opacity-100 hover:bg-black/70"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => goTo(e, i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? 'w-4 bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

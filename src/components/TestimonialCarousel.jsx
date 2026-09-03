import { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon } from './icons';

export default function TestimonialCarousel({ testimonials = [], autoPlayInterval = 3500 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const total = testimonials.length;

  const goPrev = () => {
    if (total <= 1) return;
    setIndex((i) => (i - 1 + total) % total);
  };

  const goNext = () => {
    if (total <= 1) return;
    setIndex((i) => (i + 1) % total);
  };

  // Automatic slide transition
  useEffect(() => {
    if (total <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total, isPaused, autoPlayInterval]);

  if (!testimonials || total === 0) return null;

  const current = testimonials[index] || testimonials[0];

  return (
    <div
      className="mx-auto max-w-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary focus:outline-none"
        >
          <ChevronDownIcon className="rotate-90" />
        </button>

        <div className="flex-1 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-8 text-center shadow-cc-sm transition-opacity duration-300">
          {current.photo && (
            <img
              src={current.photo}
              alt={current.name}
              className="mx-auto h-16 w-16 rounded-full border border-cc-gray-200 object-cover object-top"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <p className="mt-4 text-sm italic text-cc-text-muted-light">&ldquo;{current.quote}&rdquo;</p>
          <p className="mt-4 font-semibold text-cc-text-heading">{current.name}</p>
          <p className="text-xs text-cc-text-muted-light">{current.programme}</p>
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary focus:outline-none"
        >
          <ChevronDownIcon className="-rotate-90" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={`${t.name}-${i}`}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-cc-primary' : 'bg-cc-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

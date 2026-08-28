import { useState } from 'react';
import { ChevronDownIcon } from './icons';

export default function TestimonialCarousel({ testimonials }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const current = testimonials[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary"
        >
          <ChevronDownIcon className="rotate-90" />
        </button>

        <div className="flex-1 rounded-cc-lg border border-cc-gray-200 bg-cc-bg-page p-8 text-center shadow-cc-sm">
          {current.photo && (
            <img
              src={current.photo}
              alt={current.name}
              className="mx-auto h-16 w-16 rounded-full border border-cc-gray-200 object-cover object-top"
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cc-gray-300 text-cc-text-body transition-colors hover:border-cc-primary hover:text-cc-primary"
        >
          <ChevronDownIcon className="-rotate-90" />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
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

import { useEffect, useState } from 'react';

const SCROLL_THRESHOLD = 400;

export default function ScrollToTop({ isDrawerOpen }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('h1')?.focus();
  };

  const show = isVisible && !isDrawerOpen;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-cc-pill bg-cc-gold text-cc-primary-deeper shadow-cc transition-all duration-[350ms] hover:bg-cc-gold-light md:bottom-6 md:right-6 ${
        show ? 'opacity-100' : 'pointer-events-none translate-y-3 scale-90 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M12 5l-7 7h4v7h6v-7h4z" fill="currentColor" />
      </svg>
    </button>
  );
}

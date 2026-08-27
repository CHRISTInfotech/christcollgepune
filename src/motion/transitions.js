// Mirror --cc-transition (0.35s cubic-bezier(0.4, 0, 0.2, 1)) so JS-driven and
// CSS-driven motion feel identical across the site.
export const standard = { duration: 0.35, ease: [0.4, 0, 0.2, 1] };
export const quick = { duration: 0.2, ease: 'easeOut' };
export const emphasis = { duration: 0.5, ease: [0.4, 0, 0.2, 1] };

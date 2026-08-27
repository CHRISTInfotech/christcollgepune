# Claude Code Task: Initial Project Scaffold (React + Framer Motion)

Hand this to Claude Code as the second prompt, after the project folder exists (can be
run in parallel with the extraction task in a separate terminal/session, since they
don't depend on each other).

---

## Context

New site for Christ College Pune, ~170 pages generated from ~15–18 reusable page
templates (Home, Department page, Centre/Cell page, NAAC criterion page, Gallery, etc.).
Static output, built with React + Vite, animated with Framer Motion. This task is ONLY
the base scaffold — design tokens, global styles, motion config, folder structure. No
real page content yet (that comes from the extraction pass).

## What I need you to do

### 1. Scaffold the project

- Create a Vite + React project (`npm create vite@latest . -- --template react`)
- Install dependencies: `framer-motion`, `react-router-dom` (for the 170 routes),
  and any CSS tooling you recommend (plain CSS with variables is fine — no need for
  a heavy framework given the page count and consistency requirement)
- Set up this folder structure under `src/`:

```
src/
  components/       # shared UI: Header, Footer, Nav, Card, Breadcrumb, PageHeader, etc.
  templates/         # the ~15-18 page-type layouts
  pages/             # thin wrapper pages that plug content into a template
  styles/
    tokens.css       # design tokens (see below)
    global.css       # reset + base element styles
    utilities.css    # small reusable utility classes
  motion/
    variants.js       # shared Framer Motion animation variants
    transitions.js     # shared transition presets
  data/              # will hold the extracted content JSON later
```

### 2. Design tokens (`src/styles/tokens.css`)

Only these 5 values are fixed by the client — **do not change them**:

```css
--cc-primary: #6e2439;
--cc-gold: #c9a84c;
--cc-white: #ffffff;
--cc-font: 'Inter', 'Roboto', sans-serif;
--cc-radius-pill: 50px;
```

Everything else below (previously given as fixed) is now yours to decide, derived
sensibly from those 5 anchors. Use this as the actual token file — treat these as
solid defaults, not just a shape to fill in, since they were derived carefully from
the two anchor colors above:

```css
:root {
  /* --- Fixed, do not change --- */
  --cc-primary: #6e2439;
  --cc-gold: #c9a84c;
  --cc-white: #ffffff;
  --cc-font: 'Inter', 'Roboto', sans-serif;
  --cc-radius-pill: 50px;

  /* --- Derived: primary (maroon) scale --- */
  --cc-primary-dark: #4a1827;      /* darker shade for hover/active states */
  --cc-primary-deeper: #2a0e17;    /* darkest — page backgrounds in dark sections, drawer */
  --cc-primary-light: #8a3a52;     /* lighter tint — subtle backgrounds, disabled states */

  /* --- Derived: gold scale --- */
  --cc-gold-light: #e8d49a;        /* highlights, hover backgrounds on dark */
  --cc-gold-dark: #a08032;         /* text-on-light use of gold, borders */

  /* --- Text on dark backgrounds (header, drawer, footer, hero) --- */
  --cc-text-light: #f5e6eb;        /* primary text on dark/maroon backgrounds */
  --cc-text-muted: #b8929e;        /* secondary/muted text on dark backgrounds */

  /* --- Text on light backgrounds (the majority of 170 content pages) --- */
  --cc-text-heading: #2a0e17;      /* headings on white/light pages — reuses primary-deeper */
  --cc-text-body: #3d2b32;         /* body copy on white/light pages */
  --cc-text-muted-light: #7a6169;  /* secondary/muted text on white/light pages */

  /* --- Neutral grays (borders, dividers, disabled UI on light backgrounds) --- */
  --cc-gray-100: #f4f1f2;
  --cc-gray-200: #e6dfe1;
  --cc-gray-300: #cfc3c8;

  /* --- Backgrounds --- */
  --cc-bg-page: #ffffff;
  --cc-bg-surface: #faf7f8;        /* cards, panels, alternating sections */
  --cc-bg-drawer: #1f0f15;

  /* --- Gradients --- */
  --cc-gradient-hero: linear-gradient(135deg, var(--cc-primary) 0%, var(--cc-primary-deeper) 100%);
  --cc-gradient-gold: linear-gradient(90deg, var(--cc-gold-dark) 0%, var(--cc-gold) 50%, var(--cc-gold-light) 100%);
  --cc-gradient-overlay: linear-gradient(180deg, rgba(42,14,23,0) 0%, rgba(42,14,23,0.85) 100%); /* image overlays */

  /* --- Borders / shadow --- */
  --cc-border-subtle: rgba(255, 255, 255, 0.08);   /* on dark backgrounds */
  --cc-border-subtle-light: rgba(42, 14, 23, 0.08); /* on white/light backgrounds */
  --cc-shadow: 0 4px 24px rgba(0, 0, 0, 0.25);
  --cc-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.12);

  /* --- Semantic status --- */
  --cc-success: #3a7d4f;
  --cc-warning: #b8860b;
  --cc-error: #a13a3a;

  /* --- Radius --- */
  --cc-radius-pill: 50px;
  --cc-radius-sm: 8px;
  --cc-radius-md: 12px;
  --cc-radius-lg: 20px;

  /* --- Motion --- */
  --cc-transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);

  /* --- Layout --- */
  --cc-header-height: 72px;
  --cc-drawer-width: 420px;
  --cc-container-max: 1200px;

  /* --- Type scale --- */
  --cc-text-xs: 0.75rem;    /* 12px */
  --cc-text-sm: 0.875rem;   /* 14px */
  --cc-text-base: 1rem;     /* 16px */
  --cc-text-lg: 1.125rem;   /* 18px */
  --cc-text-xl: 1.25rem;    /* 20px */
  --cc-text-2xl: 1.5rem;    /* 24px */
  --cc-text-3xl: 2rem;      /* 32px */
  --cc-text-4xl: 2.5rem;    /* 40px */
  --cc-text-5xl: 3.25rem;   /* 52px */
  --cc-font-weight-normal: 400;
  --cc-font-weight-medium: 500;
  --cc-font-weight-bold: 700;

  /* --- Spacing scale (4px base) --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* --- Breakpoints (reference values — enforce in CSS media queries) --- */
  /* mobile: 0–599px, tablet: 600–959px, desktop: 960px+ */
}
```

Notes for whoever implements this:
- Use `--cc-text-heading`/`--cc-text-body`/`--cc-text-muted-light` for the light-
  background content pages (department pages, NAAC criteria, policies — most of the
  170). Reserve `--cc-text-light`/`--cc-text-muted` for dark surfaces only (header,
  drawer, footer, hero sections using `--cc-gradient-hero`).
- `--cc-gradient-hero` is the default hero/banner treatment; `--cc-gradient-gold` is
  for accent dividers or CTA button backgrounds, used sparingly.
- If the client has an existing type scale, brand font weights, or gradient already
  in use on the live site header, prefer matching that over these derived defaults —
  flag any such find during the extraction pass.

### 3. Global styles (`src/styles/global.css`)

- CSS reset (box-sizing, margin/padding reset, etc.)
- Base typography applied via tokens
- Base link, button, and form element styles
- Focus-visible states for accessibility

### 4. Motion config (`src/motion/variants.js` and `transitions.js`)

Use Framer Motion **only** for route/page transitions and 1-2 hero-level reveals —
not for every card, list item, or repeated element across 170 pages. For anything
that repeats at scale (card grids, nav items, list reveals), use plain CSS
transitions/`@keyframes` driven by `--cc-transition`, so 170 pages don't carry
per-page Framer Motion overhead for effects CSS handles just as well. Reserve
`variants.js`/`transitions.js` for the small set of Framer-Motion-specific cases:

Set up **shared, reusable** Framer Motion variants so every page/template animates
consistently instead of each page inventing its own — this is the animation
equivalent of the design tokens:

- `fadeIn` / `fadeInUp` — for page and section entrances
- `staggerContainer` / `staggerItem` — for lists, card grids, nav menus
- `pageTransition` — for route changes (used with `AnimatePresence` in the router)
- A `transitions.js` with named easing/duration presets (`quick`, `standard`,
  `emphasis`) so timing stays consistent across ~170 pages instead of every
  component picking its own duration

Example shape to follow:

```js
// motion/variants.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
```

```js
// motion/transitions.js
// Mirror --cc-transition (0.35s cubic-bezier(0.4, 0, 0.2, 1)) so JS-driven and
// CSS-driven motion feel identical across the site.
export const standard = { duration: 0.35, ease: [0.4, 0, 0.2, 1] };
export const quick = { duration: 0.2, ease: "easeOut" };
```

### 5. Base layout components

Build (structure + styles + motion, no real content yet — use placeholder text):
- `Header` (logo slot, nav slot, mobile menu toggle)
- `Footer` (columns for links/contact/social — placeholder content)
- `PageHeader` (title + breadcrumb, used at the top of every inner page template)
- `ScrollToTop` (see spec below)
- `Layout` wrapper component that wraps Header + page content + Footer + `ScrollToTop`,
  and handles the route-level page transition using `AnimatePresence` + `pageTransition`

#### ScrollToTop component spec

A floating button that appears on **every page** (goes in `Layout`, not per-page, so
it's automatically present across all 170 pages with zero per-page wiring):

- Fixed position, bottom-right corner, sits above the footer content (e.g.
  `position: fixed; bottom: var(--space-6); right: var(--space-6); z-index: 40`)
- Circular, using `--cc-radius-pill`, filled `--cc-gold` background with `--cc-white`
  (or `--cc-primary-deeper`) icon/arrow, `--cc-shadow` for elevation
- **Hidden by default** — only fade/scale in once the user has scrolled down some
  threshold (e.g. `window.scrollY > 400`), using a plain CSS opacity/transform
  transition keyed to `--cc-transition` (this is a per-page-instance repeated
  element, so CSS not Framer Motion, per the motion-scoping rule above)
- Clicking it smooth-scrolls to top (`window.scrollTo({ top: 0, behavior: 'smooth' })`)
  and returns focus to a skip-target or the `<h1>` for accessibility
- Include `aria-label="Scroll to top"` and make it keyboard-focusable/operable
  (it's a `<button>`, not a `<div>`)
- On mobile, adjust `bottom`/`right` spacing so it doesn't overlap the drawer toggle
  or collide with `--cc-drawer-width` when the mobile nav is open — hide it while
  the drawer is open if there's any visual conflict

### 6. Router skeleton

Set up `react-router-dom` reading from a route list. Don't hardcode 170 routes by
hand — write a small helper that will later read `sitemap_data.json` /
`extracted/content/*.json` and generate routes + template assignment automatically.
For now, stub it with 3-4 example routes so the pattern is provable.

## Rules

- Everything must reference tokens (`var(--color-primary)` etc.) — no hardcoded hex
  values or magic pixel numbers in component styles. This is what keeps 170 pages
  visually consistent.
- Keep animations subtle and consistent — this is a college site, not a product
  landing page. Favor fade/slide-up over anything flashy.
- Don't build the ~15-18 page templates yet in this pass — just the shared
  foundation (tokens, global styles, motion presets, layout shell, router pattern).
  Templates are the next task once real content structure is confirmed from the
  extraction pass.

## When finished

Run the dev server and confirm it boots cleanly, then give me a short summary of:
the color palette you picked (and whether it's a placeholder or matched from the live
site), the folder structure created, and any dependency versions installed.

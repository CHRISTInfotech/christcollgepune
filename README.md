# Christ College Pune — Official Website

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.2-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.1-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Playwright Prerender](https://img.shields.io/badge/Playwright-Prerender-45ba4b?logo=playwright&logoColor=white)](https://playwright.dev/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-orange)](https://oxc.rs/)

> *"Enlighten to Excel"* — Christ College Pune

A modern, high-performance, accessible, and visually captivating official web portal for **Christ College Pune** (affiliated with Savitribai Phule Pune University). Built with modern web standards, featuring automated route discovery, headless browser static prerendering for search engine optimization (SEO), realistic 3D interactive flipbook publication viewers, and an institutional design system.

---

## 🌟 Key Highlights & Features

* **Institutional Design System:** Tailored with an academic palette—Deep Maroon (`#610912`), Gold (`#fdd04b`), and Dusty Rose (`#bd5a5a`) accents against clean, responsive layouts with modern typography (`Inter` / `Roboto`).
* **Dynamic Route Auto-Discovery:** Seamlessly maps **235+ sitemap routes** directly from `sitemap_data.json` using Vite's dynamic `import.meta.glob('./pages/*/*.jsx')`. New pages are automatically linked without touching router configuration files.
* **Headless Static Prerendering (SEO Optimized):** Includes a custom post-build prerendering engine (`scripts/prerender.mjs`) driven by headless Chromium (Playwright). It crawls and pre-renders static HTML for all sitemap routes into `dist/`, injecting dynamic titles, Open Graph cards, and meta tags for search engine bots.
* **3D Interactive FlipBook & PDF Readers:** Integrated with `pdfjs-dist` and `react-pageflip` to deliver realistic page-turning experiences for college magazines, journals, annual reports, and handbooks (`PdfFlipBook.jsx`), alongside inline document viewers (`PdfViewer.jsx`).
* **Modular Component Architecture:** Reusable, enterprise-grade components including `DepartmentTemplate.jsx`, `TabbedContentPage.jsx`, `StudentCouncilPage.jsx`, `ImageCarousel.jsx`, `TestimonialCarousel.jsx`, and `PageHeader.jsx`.
* **On-Demand Code-Splitting:** All routes are lazily evaluated via `React.lazy()` and wrapped in `Suspense`. Heavy dependencies (like PDF canvas rendering) load only when a user navigates to the corresponding page.
* **Automated CI/CD Pipeline:** Fully automated deployment via GitHub Actions (`.github/workflows/deploy.yml`) with automated Playwright browser provisioning, static asset compilation, and deployment to GitHub Pages.

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) | Component architecture & modern React DOM |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) | Instant HMR, fast builds, and code splitting |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) | Next-generation utility-first styling with `@theme` CSS tokens |
| **Routing** | [React Router v7](https://reactrouter.com/) | Client-side routing with nested layouts & base path handling |
| **Animations** | [Framer Motion v13](https://www.framer.com/motion/) | Smooth UI transitions, menu reveals, and interactive animations |
| **Interactive Flipbook** | [react-pageflip](https://github.com/nodlik/react-pageflip) | 3D canvas page-turning simulations for publications |
| **PDF Processing** | [pdfjs-dist v6](https://mozilla.github.io/pdf.js/) | In-browser canvas PDF rendering for documents & magazines |
| **Static Prerendering** | [Playwright](https://playwright.dev/) | Headless Chromium static route prerendering |
| **Code Quality** | [Oxlint](https://oxc.rs/) | Blazing-fast JavaScript and React linting |

---

## 📂 Project Structure

```text
christcollgepune/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD pipeline
├── docs/                         # Sitemap mapping spreadsheets & URL documentation
├── public/                       # Favicon, college logos, static assets
├── scripts/
│   └── prerender.mjs             # Playwright static HTML prerender script
├── src/
│   ├── assets/                   # Optimized images (banners, leadership, facilities)
│   ├── components/               # Shared, reusable UI components
│   │   ├── Card.jsx              # Reusable elevated card component
│   │   ├── CategorySection.jsx   # Section grouping for navigation items
│   │   ├── DepartmentTemplate.jsx# Comprehensive department template (PEO/PSO, labs, etc.)
│   │   ├── Footer.jsx            # Institutional footer with quick links & accreditation
│   │   ├── Header.jsx            # Responsive navigation header with mega-menus & drawer
│   │   ├── ImageCarousel.jsx     # Responsive touch-enabled image slider
│   │   ├── Layout.jsx            # Application shell layout (Header + Outlet + Footer)
│   │   ├── PageHeader.jsx        # Breadcrumb header banner for subpages
│   │   ├── PdfFlipBook.jsx       # 3D interactive magazine reader
│   │   ├── PdfViewer.jsx         # Embedded PDF document reader
│   │   ├── ScrollToTop.jsx       # Scroll restoration across route transitions
│   │   ├── Seo.jsx               # Per-page metadata, title, and Open Graph manager
│   │   ├── StudentCouncilPage.jsx# Office bearers and committee team showcase
│   │   ├── TabbedContentPage.jsx # Multi-tab policy & documentation container
│   │   ├── TestimonialCarousel.jsx# Alumni and student testimonials slider
│   │   └── icons.jsx             # Accessible SVG icon primitives
│   ├── data/
│   │   └── routes.js             # Sitemap data mapper and navigation menus
│   ├── motion/                   # Framer Motion transition variants
│   ├── pages/                    # 130+ page components organized by institutional section
│   │   ├── about-us/             # History, Vision, Founder, Leadership, Administration
│   │   ├── academics/            # Arts, Commerce, Science, Management departments
│   │   ├── admissions/           # Criteria, Prospectus, Fee Structure, Cancellation
│   │   ├── aicte/                # Mandatory disclosures and AICTE approvals
│   │   ├── centres-and-cells/    # Anti-Ragging, Women's Cell, IPR Cell, Innovation
│   │   ├── e-services/           # Student portal, LMS, and online services
│   │   ├── examination/          # Exam timetables, notices, policies, results
│   │   ├── iqac/                 # Quality assurance, AQAR, meeting minutes
│   │   ├── media-and-gallery/    # News, campus galleries, and college magazine
│   │   ├── naac/                 # Cycle-2 accreditation, SSR, Criteria 1-7, DVV
│   │   ├── rti/                  # Statutory declarations under Right to Information
│   │   ├── students/             # Student Council, NSS, Cultural Association, Sports
│   │   ├── Home.jsx              # Interactive homepage with hero video, statistics & links
│   │   ├── NotFound.jsx          # Custom 404 page
│   │   └── PlaceholderPage.jsx   # Automatic fallback placeholder for pending routes
│   ├── styles/
│   │   ├── global.css            # Base element typography and utility overrides
│   │   └── tokens.css            # Tailwind CSS v4 design tokens and brand colors
│   ├── App.jsx                   # Central router & dynamic component loader
│   ├── index.css                 # Main stylesheet entry point
│   └── main.jsx                  # React DOM mount point
├── package.json                  # Project dependencies and npm scripts
├── sitemap_data.json             # Source of truth containing all 237 route definitions
└── vite.config.js                # Vite build and plugin configurations
```

---

## 🏛️ Institutional Modules Covered

The portal organizes Christ College Pune's academic and administrative ecosystem into 12 dedicated sections:

1. **About Us:** Founder's vision, Director's message, leadership directory, college history, and administrative council.
2. **Academics:** Comprehensive department hubs for **Arts (BA)**, **Commerce (B.Com / M.Com)**, **Science (B.Sc / M.Sc / Computer Science)**, and **Management (BBA / BBA-IB / BBA-CA)** with curriculum, faculty lists, laboratories, and PEOs/PSOs.
3. **Admissions:** Eligibility criteria, fee regulations, admission notices (CET updates), online application instructions, and refund policies.
4. **Examination Cell:** Roles & responsibilities, university external timetables, circulars, result links, and degree/convocation applications.
5. **IQAC (Internal Quality Assurance Cell):** Composition, annual reports, AQAR submissions, minutes of meetings, and institutional strategic plans.
6. **NAAC Accreditation:** Cycle-2 documentation, Criteria 1 through 7 breakdown, SSR metrics, and DVV clarifications with document links.
7. **Centres & Cells:** Anti-Ragging Cell, Women's Cell, Internal Complaints Committee (ICC), Intellectual Property Rights (IPR) Cell, Equal Opportunity Cell, and Nirmiti Innovation Centre.
8. **Student Life & Campus:** Student Council, Cultural Association, National Service Scheme (NSS), Physical Education, and hostel details.
9. **Career & Placements:** Placement cell initiatives, recruiter lists, career counseling, and training programs.
10. **Library:** OPAC system access, collection statistics, digital repositories, rules, and working hours.
11. **Media & Publications:** Photo galleries, press coverage, event recaps, and interactive 3D editions of the **College Magazine**.
12. **Statutory Disclosures:** RTI statutory declaration, AICTE approvals, and Fees Regulating Authority (FRA) notices.

---

## 💻 Local Development Setup

### Prerequisites

* **Node.js:** `v20.x` or later recommended
* **npm:** `v10.x` or later (bundled with Node.js)
* **Git:** Installed on your local machine

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CHRISTInfotech/christcollgepune.git
   cd christcollgepune
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/christcollgepune/`.

---

## 📜 Available NPM Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Boots the Vite development server with Hot Module Replacement (HMR) at port `5173`. |
| `npm run build` | Builds the client SPA bundle and executes `scripts/prerender.mjs` to generate pre-rendered static HTML for all routes. |
| `npm run build:spa-only` | Compiles the client SPA bundle without running the headless browser prerender step (useful for rapid CI dry-runs). |
| `npm run preview` | Locally serves the production `dist/` directory via Vite's preview server. |
| `npm run lint` | Runs [Oxlint](https://oxc.rs/) across all JavaScript and JSX source files for rapid linting. |

---

## 🧭 Dynamic Routing & Adding New Pages

### How Auto-Discovery Works

The application maps every route from `sitemap_data.json` dynamically in [src/App.jsx](file:///d:/Infotech/christcollgepune/src/App.jsx):

```javascript
const pageModules = import.meta.glob('./pages/*/*.jsx');
const componentMap = {};
for (const [filepath, loader] of Object.entries(pageModules)) {
  const id = filepath.split('/').pop().replace('.jsx', '');
  componentMap[id] = lazy(loader);
}
```

* **Matches by ID:** The router inspects filenames under `src/pages/{category}/{id}.jsx`. If the filename matches a sitemap entry's `id`, it renders that component lazily.
* **Automatic Placeholder:** If a page has not been built yet, the router renders [PlaceholderPage.jsx](file:///d:/Infotech/christcollgepune/src/pages/PlaceholderPage.jsx) with the correct breadcrumbs and page title automatically.

### Adding a New Page

1. Look up the route's `id` in `sitemap_data.json` (e.g., `3-academics-department-of-science`).
2. Create the JSX file in the corresponding subfolder:
   `src/pages/academics/3-academics-department-of-science.jsx`
3. Export your component as default, including SEO tags and header:
   ```jsx
   import Seo from '../../components/Seo';
   import PageHeader from '../../components/PageHeader';

   export default function DepartmentOfScience() {
     return (
       <>
         <Seo
           title="Department of Science"
           description="Discover undergraduate and postgraduate programs in Science at Christ College Pune."
         />
         <PageHeader
           title="Department of Science"
           breadcrumbs={[
             { label: 'Academics', path: '/academics/department-index' },
             { label: 'Department of Science' }
           ]}
         />
         <div className="mx-auto max-w-[1200px] px-6 py-12">
           {/* Your page content */}
         </div>
       </>
     );
   }
   ```
4. Save the file. The new route is live instantly with no routing edits required!

---

## 🎨 Brand Design Tokens

The site styles are configured in [src/styles/tokens.css](file:///d:/Infotech/christcollgepune/src/styles/tokens.css) via Tailwind CSS v4 `@theme`:

* `--color-cc-primary`: `#610912` (Institutional Maroon)
* `--color-cc-gold`: `#fdd04b` (Rich Gold Accent)
* `--color-cc-tertiary`: `#bd5a5a` (Dusty Rose Accent)
* `--color-cc-bg-page`: `#f4f1f0` (Warm Cream Page Background)
* `--color-cc-bg-card`: `#ffffff` (Pure Card White)
* `--color-cc-text-heading`: `#372632` (Deep Charcoal for readability)

---

## 🚀 Deployment & CI/CD

The website is hosted on **GitHub Pages** with the subpath `/christcollgepune/`.

### Deployment Pipeline (`.github/workflows/deploy.yml`)
1. **Trigger:** Automated trigger on git pushes to the `main` branch.
2. **Environment:** Ubuntu runner with Node.js 20.
3. **Playwright Setup:** Installs Chromium headless binaries (`npx playwright install chromium --with-deps`).
4. **Build & Prerender:** Runs `npm run build` which bundles the app with Vite and crawls all 235+ routes with Playwright to generate static HTML snapshots in `dist/`.
5. **Publish:** Automatically packages and deploys `dist/` directly to GitHub Pages.

---

## 📄 License & Attribution

Copyright &copy; 2026 **Christ College Pune**. All rights reserved.  
Maintained by the **CHRIST Infotech** team.

# Christ College Pune Website

A modern, high-performance, and visually rich website for **Christ College Pune**. Built using React 19, Vite 8, Tailwind CSS v4, Framer Motion, and custom headless browser prerendering for optimal SEO.

---

## 🚀 Key Features

*   **Premium Visual Design:** Designed with a sophisticated dark-accented theme, modern typography (Outfit/Inter), smooth gradients, and custom layouts.
*   **Dynamic Routing with Auto-Discovery:** Implements an automatic component-loading routing structure via Vite's `import.meta.glob`, linking pages dynamically with `sitemap_data.json` paths and providing automatic stubs for pending content.
*   **Headless HTML Prerendering (SEO Optimized):** Includes a custom build post-processor using headless Playwright Chromium to pre-render every single sitemap route into static HTML under the `dist/` folder, ensuring search engine bots get full titles, meta tags, and content instantly without JavaScript execution.
*   **Smooth Motion & Micro-animations:** Uses Framer Motion for elegant hover states, staggered list layouts, and page transitions.
*   **Automated CI/CD Deployment:** Configured with GitHub Actions for automated building, pre-rendering, and deployment to GitHub Pages.

---

## 🛠️ Technology Stack

*   **Framework:** [React 19](https://react.dev/)
*   **Build Tool:** [Vite 8](https://vite.dev/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/vite` plugin)
*   **Routing:** [React Router v7](https://reactrouter.com/)
*   **Animation:** [Framer Motion v13](https://www.framer.com/motion/)
*   **Headless Browser & Prerendering:** [Playwright](https://playwright.dev/) (Chromium)
*   **Linter:** [Oxlint](https://oxc.rs/) (Extremely fast JavaScript/React linter)

---

## 📂 Project Structure

```text
├── .github/workflows/       # GitHub Actions workflow files
│   └── deploy.yml           # CI/CD deployment to GitHub Pages
├── docs/                    # Sitemap and planning spreadsheet documentation
├── public/                  # Public static assets (favicon, logo, etc.)
├── scripts/
│   └── prerender.mjs        # Playwright-based static HTML prerendering script
├── src/
│   ├── assets/              # Department, facility, and campus images
│   ├── components/          # Reusable layout and UI elements (Header, Footer, Card, SEO)
│   ├── data/
│   │   └── routes.js        # Navigation menu structure mapped to the sitemap
│   ├── motion/              # Framer Motion animation configurations
│   ├── pages/               # Page components grouped by sitemap category
│   │   ├── about-us/        # Leadership, Faculty, Administration, Director's Message
│   │   ├── centres-and-cells/# Anti-Ragging, Women's Cell, IPR Cell, etc.
│   │   ├── students/        # Student Council, Cultural Association, NSS, Sports
│   │   ├── Home.jsx         # Highly interactive homepage
│   │   ├── NotFound.jsx     # 404 page
│   │   └── PlaceholderPage.jsx # Autumn fallback page for unbuilt sitemap pages
│   ├── styles/              # Global custom typography and style tokens
│   ├── App.jsx              # Main App entry point (automatic route mapper)
│   ├── index.css            # Styles entry point
│   └── main.jsx             # React DOM entry point
├── package.json             # NPM dependencies and run scripts
├── sitemap_data.json        # Unified source-of-truth metadata mapping page paths to IDs
└── vite.config.js           # Vite build and plugin configurations
```

---

## 💻 Local Development Setup

### Prerequisites

*   [Node.js](https://nodejs.org/) (Version 20.x or higher recommended)
*   [NPM](https://www.npmjs.com/) (bundled with Node.js)

### Installation

1. Clone the repository and navigate into it:
   ```bash
   git clone https://github.com/CHRISTInfotech/christcollgepune.git
   cd christcollgepune
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser to view the application.

---

## 🏗️ Production Build & Prerendering

The production build process consists of two stages:
1. Bundling the client React Single Page Application (SPA) via Vite.
2. Launching a local preview server and navigating a headless browser (Playwright) to pre-render the DOM of all 200+ routes defined in `sitemap_data.json` into static index files.

Run the build script:
```bash
npm run build
```

This will output the fully rendered static site structure inside the `dist/` directory.

---

## 🧭 Dynamic Routing & Adding New Pages

To keep the menu structure synced, the project maps routes dynamically using `sitemap_data.json`.

### Auto-Discovery Rules
*   The router automatically loads components from the `src/pages` directory.
*   It matches components inside `src/pages/*/*.jsx` whose filename matches the sitemap row `id`.
*   If no matching file is found for a sitemap route, it falls back to showing a `PlaceholderPage` containing the correct title and breadcrumbs.

### How to Create a New Page
1. Find the `id` of the page in `sitemap_data.json` (e.g. `2-about-us-leadership` or `7-centres-and-cells-anti-ragging-cell`).
2. Create the corresponding file in `src/pages/<category>/<id>.jsx` (e.g., `src/pages/about-us/2-about-us-leadership.jsx`).
3. Export a `default` React component from that file:
   ```jsx
   import PageHeader from '../../components/PageHeader';
   import Seo from '../../components/Seo';

   export default function Leadership() {
     return (
       <>
         <Seo title="Leadership" description="Leadership members of Christ College Pune." />
         <PageHeader title="Leadership" breadcrumbs={[{ label: 'Leadership' }]} />
         <section className="mx-auto max-w-[1200px] px-6 py-16">
           {/* Page Content */}
         </section>
       </>
     );
   }
   ```
4. The route will automatically replace the placeholder stub on the next reload!

---

## 🌐 Deployment to GitHub Pages

The project is configured to automatically build and deploy to GitHub Pages under the URL sub-path `/christcollgepune/`.

### Continuous Integration (CI)
*   **Workflow:** `.github/workflows/deploy.yml`
*   **Trigger:** Triggers automatically on pushes to the `main` branch.
*   **Process:** Installs Node dependencies, pulls Playwright Chromium browser binaries, compiles assets, prerenders routes, and uploads the `dist/` build artifact to GitHub Pages.

> [!NOTE]
> Make sure **GitHub Actions** is selected as the deployment source under **Settings** > **Pages** inside your GitHub repository settings.

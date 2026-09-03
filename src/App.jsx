import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFound from './pages/NotFound';
import { sitemapData } from './data/routes';

const StudentTestimonials = lazy(() => import('./pages/academics/StudentTestimonials'));

// Auto-discovers real page components: every file under src/pages/{section}/{id}.jsx
// is keyed by its filename (the sitemap row `id`) with no manual import needed —
// batches of pages added later (scraped or pasted) just need the file to exist.
// Any sitemap row without a matching file still gets a working PlaceholderPage
// stub (title + breadcrumb) so the full mega menu stays clickable end-to-end.
// Loaded lazily (not `eager: true`) and code-split per route: a handful of
// pages pull in heavy page-specific libraries (e.g. the PDF flip-book on the
// College Magazine page), and eager-loading would ship that weight to every
// visitor on every route instead of just the one page that needs it.
const pageModules = import.meta.glob('./pages/*/*.jsx');
const componentMap = {};
for (const [filepath, loader] of Object.entries(pageModules)) {
  const id = filepath.split('/').pop().replace('.jsx', '');
  componentMap[id] = lazy(loader);
}

const ROUTES = sitemapData
  .filter((row) => row.path !== '/')
  .map((row) => ({
    id: row.id,
    path: row.path,
    title: row.sub_link || row.page,
    breadcrumbs: row.sub_link
      ? [{ label: row.page, path: row.path }, { label: row.sub_link }]
      : [{ label: row.page }],
  }));

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/academics/student-testimonials"
            element={
              <Suspense fallback={null}>
                <StudentTestimonials />
              </Suspense>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Suspense fallback={null}>
                <StudentTestimonials />
              </Suspense>
            }
          />
          {ROUTES.map((route) => {
            const RealPage = componentMap[route.id];
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  RealPage ? (
                    <Suspense fallback={null}>
                      <RealPage />
                    </Suspense>
                  ) : (
                    <PlaceholderPage title={route.title} breadcrumbs={route.breadcrumbs} />
                  )
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

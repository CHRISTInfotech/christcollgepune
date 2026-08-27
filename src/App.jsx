import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFound from './pages/NotFound';
import { sitemapData } from './data/routes';

// Every non-home sitemap row gets a PlaceholderPage stub so the full mega menu
// is clickable end-to-end. Step 2 (content extraction) replaces these with real
// components via buildRoutesFromSitemap()'s componentMap, keyed by row `id`.
const STUB_ROUTES = sitemapData
  .filter((row) => row.path !== '/')
  .map((row) => ({
    path: row.path,
    title: row.sub_link || row.page,
    breadcrumbs: row.sub_link
      ? [{ label: row.page, path: row.path }, { label: row.sub_link }]
      : [{ label: row.page }],
  }));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {STUB_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PlaceholderPage title={route.title} breadcrumbs={route.breadcrumbs} />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PlaceholderPage from './pages/PlaceholderPage';
import NotFound from './pages/NotFound';
import { sitemapData } from './data/routes';
import AboutUs from './pages/about-us/2-about-us-about-us';
import History from './pages/about-us/2-about-us-history';
import MessageFromDirector from './pages/about-us/2-about-us-message-from-director';

// Real page components, keyed by sitemap row `id`. Every sitemap row not listed
// here still gets a working PlaceholderPage stub (title + breadcrumb) so the
// full mega menu stays clickable end-to-end while content is filled in one
// page at a time.
const componentMap = {
  '2-about-us-about-us': AboutUs,
  '2-about-us-history': History,
  '2-about-us-message-from-director': MessageFromDirector,
};

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
          {ROUTES.map((route) => {
            const RealPage = componentMap[route.id];
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  RealPage ? <RealPage /> : <PlaceholderPage title={route.title} breadcrumbs={route.breadcrumbs} />
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

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Christ College Pune';
const SITE_URL = 'https://christcollegepune.org';

function setMetaTag(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Sets per-page document head metadata (title, description, canonical, Open
 * Graph) via a plain useEffect — no react-helmet dependency needed for a
 * client-rendered SPA. Every real page built during content extraction should
 * render this with a title/description derived from that page's actual
 * content, not a repeated site-wide default.
 */
export default function Seo({ title, description }) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
    }

    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', SITE_URL + location.pathname);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', SITE_URL + location.pathname);
  }, [title, description, location.pathname]);

  return null;
}

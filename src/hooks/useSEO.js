import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight per-page SEO without pulling in an extra dependency.
 * Keeps the document title, meta description, canonical URL and social
 * tags in sync with the active route.
 */
export default function useSEO({ title, description }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageUrl = `${window.location.origin}${pathname}`;

    if (title) {
      document.title = title;
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }

    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }

    setMeta('property', 'og:url', pageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);
  }, [title, description, pathname]);
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

import { useEffect } from 'react';

/**
 * Recreates the "Page load fade-in" block from main.js.
 * Mount once at the top level (App.jsx).
 */
export default function usePageFadeIn() {
  useEffect(() => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity .5s ease';
    const onLoad = () => {
      document.body.style.opacity = 1;
    };
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
    return () => window.removeEventListener('load', onLoad);
  }, []);
}

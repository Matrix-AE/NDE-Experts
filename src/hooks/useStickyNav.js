import { useEffect, useState } from 'react';

/**
 * Recreates the "Sticky nav" block from main.js.
 * Returns true once the page has scrolled past 20px, so the Navbar
 * component can toggle its `scrolled` class.
 */
export default function useStickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
}

import { useEffect } from 'react';

/**
 * Recreates the "Scroll reveal" block from main.js.
 * Observes every .reveal / .reveal-l / .reveal-r element currently in the
 * DOM and adds the `vis` class (same class the original CSS animates on)
 * once each element scrolls into view.
 *
 * Call this inside every page component (e.g. Home.jsx) after its content
 * has rendered, so it can (re)scan the DOM for that page's reveal elements.
 */
export default function useScrollReveal(deps = []) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-l,.reveal-r');
    if (!els.length) return;

    const reveal = (el) => el.classList.add('vis');

    // No IntersectionObserver support → just show everything.
    if (typeof IntersectionObserver === 'undefined') {
      els.forEach(reveal);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal(e.target);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => obs.observe(el));

    // Safety net: never leave content permanently invisible if the observer
    // doesn't fire (backgrounded tab, layout race, reduced-motion, etc.).
    const fallback = setTimeout(() => els.forEach(reveal), 2600);

    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

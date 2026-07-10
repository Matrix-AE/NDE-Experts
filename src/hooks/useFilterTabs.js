import { useState } from 'react';

/**
 * Recreates the "Filter tabs" block from main.js as a small React hook,
 * since the original DOM-toggling approach doesn't map to React directly.
 * Not used on the Home page — use it on Projects/Gallery pages, e.g.:
 *
 *   const { active, setActive, isVisible } = useFilterTabs('all');
 *   <button className={`filter-btn${active === 'all' ? ' active' : ''}`}
 *           onClick={() => setActive('all')}>All</button>
 *   {items.filter(i => isVisible(i.category)).map(...)}
 */
export default function useFilterTabs(initial = 'all') {
  const [active, setActive] = useState(initial);
  const isVisible = (category) => active === 'all' || category === active;
  return { active, setActive, isVisible };
}

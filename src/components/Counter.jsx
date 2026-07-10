import { useEffect, useRef, useState } from 'react';

/**
 * Recreates the "Counter animation" block from main.js.
 * Usage: <Counter target={30} suffix="+" />
 * Renders the same markup shape as before:
 *   <span class="stat-number"><span data-target="30">0</span><span class="stat-suffix">+</span></span>
 */
export default function Counter({ target, suffix = '' }) {
  const spanRef = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCounter();
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    obs.observe(el);

    function runCounter() {
      const duration = 2200;
      const start = performance.now();
      const tick = (ts) => {
        const p = Math.min((ts - start) / duration, 1);
        const v = Math.floor((1 - Math.pow(1 - p, 4)) * target);
        setValue(v);
        if (p < 1) requestAnimationFrame(tick);
        else setValue(target);
      };
      requestAnimationFrame(tick);
    }

    return () => obs.disconnect();
  }, [target]);

  return (
    <span className="stat-number">
      <span ref={spanRef} data-target={target}>
        {value.toLocaleString()}
      </span>
      {suffix && <span className="stat-suffix">{suffix}</span>}
    </span>
  );
}

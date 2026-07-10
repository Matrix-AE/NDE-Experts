import { useEffect } from 'react';

/**
 * Recreates the "Mouse cursor glow" block from main.js.
 * Creates a single #cursor-glow div once (app-wide) and moves it on mousemove.
 * Mount this once, at the top level (App.jsx), not per-page.
 */
export default function useCursorGlow() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;

    let glow = document.getElementById('cursor-glow');
    const createdHere = !glow;
    if (!glow) {
      glow = document.createElement('div');
      glow.id = 'cursor-glow';
      document.body.appendChild(glow);
    }

    const onMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    return () => {
      document.removeEventListener('mousemove', onMove);
      if (createdHere && glow.parentNode) glow.parentNode.removeChild(glow);
    };
  }, []);
}

import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Temporary stand-in for pages that weren't part of this upload
 * (about.html, services.html, projects.html, etc.). Swap each route in
 * App.jsx for a real page component as you convert them the same way
 * Home.jsx was converted.
 */
export default function Placeholder({ title }) {
  useScrollReveal();
  return (
    <section className="section-py" style={{ minHeight: '60vh', paddingTop: 'calc(var(--nav-h) + 64px)' }}>
      <div className="container">
        <div className="section-header center reveal">
          <div className="label">Coming Soon</div>
          <h2 className="display-md">{title}</h2>
          <p className="subheading">This page hasn't been converted from the original site yet.</p>
        </div>
      </div>
    </section>
  );
}

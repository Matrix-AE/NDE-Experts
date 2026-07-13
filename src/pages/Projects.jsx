import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useFilterTabs from '../hooks/useFilterTabs';
import Counter from '../components/Counter';
import './Projects.css';

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'oilgas', label: 'Oil & Gas' },
  { id: 'international', label: 'International' },
  { id: 'petrochem', label: 'Petrochemical' },
  { id: 'fertilizer', label: 'Fertilizer' },
  { id: 'aviation', label: 'Aviation' }
];

const PROJECTS = [
  {
    id: 1,
    category: 'international',
    sector: 'Power Generation',
    goldSector: true,
    title: 'Shoaiba Steam Power Plant, Saudi Arabia',
    text: 'Field Engineer QC during construction — supervised inspection of boilers, turbines, condensers, piping, and large-capacity storage tanks.',
    tags: ['QC Supervision', 'Boilers', 'RT', 'UT'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  },
  {
    id: 2,
    category: 'oilgas',
    sector: 'Pipeline Integrity',
    title: 'PSO — Attock Refinery Pipeline Assessment',
    text: 'Comprehensive pipeline integrity assessment using LRUT, SRUT, PAUT, and Visual Inspection of the Sihala pipeline system.',
    tags: ['LRUT', 'SRUT', 'PAUT', 'Visual'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 8v4l3 3"/>
      </svg>
    )
  },
  {
    id: 3,
    category: 'international',
    sector: 'Power Generation',
    goldSector: true,
    title: 'China Power Plant — Component Inspection',
    text: 'International inspection assignment witnessing critical fabrication and quality control of major power plant components prior to shipment.',
    tags: ['RT', 'UT', 'Fabrication QC', 'International'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/>
      </svg>
    )
  },
  {
    id: 4,
    category: 'oilgas',
    sector: 'Oil & Gas',
    title: 'High-Temperature Hydrogen Attack (HTHA) Campaign',
    text: 'Led and supervised inspection teams during a critical HTHA integrity assessment campaign on refinery process equipment operating under elevated temperature/hydrogen partial-pressure conditions.',
    tags: ['HTHA', 'PAUT', 'Asset Integrity', 'Refinery'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M12 2s5 5 5 10a5 5 0 01-10 0c0-2 1-3 1-3s.5 2 2 2c-1-3 0-6 2-9z"/>
      </svg>
    )
  },
  {
    id: 5,
    category: 'petrochem',
    sector: 'Petrochemical',
    title: 'Petrochemical Complex — Turnaround Inspection',
    text: 'Comprehensive turnaround NDT scope covering pressure vessels, heat exchangers, and piping circuits during a scheduled plant shutdown.',
    tags: ['UT', 'MT', 'PT', 'Turnaround'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M9 2v6L3 20a2 2 0 002 2h14a2 2 0 002-2L15 8V2"/><path d="M9 2h6"/><path d="M6 15h12"/>
      </svg>
    )
  },
  {
    id: 6,
    category: 'fertilizer',
    sector: 'Fertilizer',
    title: 'Fertilizer Plant — Static Equipment Integrity Survey',
    text: 'Risk-based inspection support and thickness-gauging survey of reactors, columns, and storage vessels across a national fertilizer complex.',
    tags: ['UTG', 'RBI', 'Vessels', 'API 510'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/><path d="M12 12l4-4"/><path d="M12 12L8 16"/>
      </svg>
    )
  },
  {
    id: 7,
    category: 'aviation',
    sector: 'Aviation',
    title: 'PIA / PAC — Aircraft Component Inspection',
    text: 'NDT support for aviation component integrity screening, including RT and PT examinations aligned with aerospace quality requirements.',
    tags: ['RT', 'PT', 'Aviation', 'Components'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"/>
      </svg>
    )
  },

  {
    id: 9,
    category: 'all',
    sector: 'Third-Party Inspection',
    title: 'Multi-Client TPI Program — Islamabad Region',
    text: 'Ongoing third-party inspection services for regional industrial clients, covering incoming material verification, in-process QC, and final acceptance testing.',
    tags: ['TPI', 'Material Verification', 'QC', 'Multi-sector'],
    svg: (
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(17,17,17,0.3)" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20z"/>
      </svg>
    )
  }
];

export default function Projects() {
  const { active, setActive, isVisible } = useFilterTabs('all');
  
  // Pass active as a dependency to re-trigger scroll reveal when filter changes.
  useScrollReveal([active]);

  return (
    <main className="projects-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Our Track Record</span></div>
          <h1 className="page-hero-title">Projects &amp;<br/><span style={{ color: 'var(--cyan)' }}>Field Assignments</span></h1>
          <p className="page-hero-sub">A cross-section of inspection, integrity assessment, and quality control assignments delivered across Pakistan and internationally — spanning power generation, oil &amp; gas, petrochemical, fertilizer, and aviation sectors.</p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section-pb">
        <div className="container">
          <div className="stats-accordion">
            <div className="stat-accordion-item reveal d1">
              <Counter target={9} />
              <span className="stat-label">Countries Assigned</span>
            </div>
            <div className="stat-accordion-item reveal d2">
              <Counter target={116} suffix="+" />
              <span className="stat-label">Technical Reports</span>
            </div>
            <div className="stat-accordion-item reveal d3">
              <Counter target={8} />
              <span className="stat-label">Industry Sectors Served</span>
            </div>
            <div className="stat-accordion-item reveal d4">
              <Counter target={30} suffix="+" />
              <span className="stat-label">Years in the Field</span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Selected Assignments</div>
            <h2 className="display-md">Featured <span style={{ color: 'var(--cyan)' }}>Projects</span></h2>
            <p className="subheading">From national infrastructure to international fabrication yards — every assignment is executed to the same uncompromising standard.</p>
          </div>

          <div className="filter-row">
            {FILTERS.map(f => (
              <button 
                key={f.id}
                className={`filter-btn${active === f.id ? ' active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="proj-grid filter-container">
            {PROJECTS.filter(p => isVisible(p.category) || p.category === 'all').map((proj) => (
              <div key={proj.id} className={`proj-card reveal d${(proj.id % 6) + 1}`}>
                <div className="proj-card-img">
                  <div className="proj-card-img-placeholder">
                    {proj.svg}
                  </div>
                </div>
                <div className="proj-card-body">
                  <span className={`proj-sector${proj.goldSector ? ' gold' : ''}`}>
                    {proj.sector}
                  </span>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-text">{proj.text}</p>
                  <div className="proj-tags">
                    {proj.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Start a Project</div>
            <h2 className="cta-banner-title">Have an Inspection Scope<br/><span style={{ color: 'var(--cyan)' }}>We Can Help With?</span></h2>
            <p className="cta-banner-sub">From single-visit NDT scopes to multi-year TPI programs, our team scales to the size and complexity of your assignment.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/services" className="btn btn-secondary btn-lg">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

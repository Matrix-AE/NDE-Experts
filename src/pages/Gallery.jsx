import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import useFilterTabs from '../hooks/useFilterTabs';
import './Gallery.css';

const FILTERS = [
  { id: 'all', label: 'All Media' },
  { id: 'inspection', label: 'Site Inspections' },
  { id: 'training', label: 'Training Sessions' },
  { id: 'international', label: 'International Assignments' },
  { id: 'equipment', label: 'Equipment & Technology' },
  { id: 'events', label: 'Events & Ceremonies' },
  { id: 'team', label: 'Team' }
];

const GALLERY_ITEMS = [
  { id: 1, category: 'inspection', icon: '\uD83D\uDD2C', label: 'PAUT Weld Inspection \u2014 Refinery Site' },
  { id: 2, category: 'inspection', icon: '\uD83D\uDCE1', label: 'Radiographic Testing Field Setup' },
  { id: 3, category: 'training', icon: '\uD83C\uDF93', label: 'NDT Level II Classroom Training' },
  { id: 4, category: 'international', icon: '\uD83C\uDF0D', label: 'China Power Plant Fabrication Inspection' },
  { id: 5, category: 'equipment', icon: '\uD83D\uDEE0\uFE0F', label: 'Phased Array UT Equipment Calibration' },
  { id: 6, category: 'inspection', icon: '\uD83E\uDDEA', label: 'HTHA Integrity Assessment Campaign' },
  { id: 7, category: 'training', icon: '\uD83D\uDCCB', label: 'Level III Written Practice Workshop' },
  { id: 8, category: 'international', icon: '\u2708\uFE0F', label: 'International Technical Conference \u2014 Finland' },
  { id: 9, category: 'equipment', icon: '\uD83D\uDCD0', label: 'Ultrasonic Thickness Gauging Survey' },
  { id: 10, category: 'events', icon: '\uD83C\uDFC6', label: 'ASNT Certification Ceremony' },
  { id: 11, category: 'inspection', icon: '\uD83D\uDD0D', label: 'Pipeline Guided Wave (LRUT) Screening' },
  { id: 12, category: 'team', icon: '\uD83D\uDC65', label: 'NDE Experts Field Inspection Team' },
];

export default function Gallery() {
  const { active, setActive, isVisible } = useFilterTabs('all');
  
  // Re-trigger reveal animation when filter changes
  useScrollReveal([active]);

  return (
    <main className="gallery-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Behind the Reports</span></div>
          <h1 className="page-hero-title">Gallery &amp;<br/><span style={{ color: 'var(--cyan)' }}>Field Media</span></h1>
          <p className="page-hero-sub">A visual look at inspection assignments, training sessions, international assignments, and the equipment behind three decades of NDT work.</p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="section-pb">
        <div className="container">
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

          <div className="gallery-grid filter-container">
            {GALLERY_ITEMS.filter(item => isVisible(item.category)).map((item) => (
              <div key={item.id} className="gallery-item reveal">
                <div className="gallery-item-placeholder">
                  <span className="gallery-item-icon">{item.icon}</span>
                </div>
                <div className="gallery-overlay">
                  <span className="gallery-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="section-pb">
        <div className="container">
          <div className="highlight-box reveal">
            <div style={{ fontSize: '28px' }}>&#128247;</div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Have Site Photography to Share?</strong>
              <span style={{ color: 'var(--text-secondary)' }}> This gallery is regularly updated with imagery from active inspection assignments, training deliveries, and international assignments. Client-approved project photography can be added on request.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>See Us in Action</div>
            <h2 className="cta-banner-title">Want to Discuss a Project<br/><span style={{ color: 'var(--cyan)' }}>Featured Here?</span></h2>
            <p className="cta-banner-sub">Reach out to learn more about any of the assignments, training sessions, or international work shown above.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">View Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

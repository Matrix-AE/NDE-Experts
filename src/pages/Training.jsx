import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';
import './Training.css';

export default function Training() {
  useScrollReveal();

  return (
    <main className="training-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Capability Building</span></div>
          <h1 className="page-hero-title">Training &amp;<br/><span style={{ color: 'var(--cyan)' }}>Certification</span></h1>
          <p className="page-hero-sub">Hundreds of Level I, II, and III courses delivered under ASNT SNT-TC-1A, CP-105, and ISO 9712 — training over 1,000 NDT professionals across Pakistan and abroad.</p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section-pb">
        <div className="container">
          <div className="stats-accordion">
            <div className="stat-accordion-item reveal d1">
              <Counter target={1000} suffix="+" />
              <span className="stat-label">Professionals Trained</span>
            </div>
            <div className="stat-accordion-item reveal d2">
              <Counter target={9} />
              <span className="stat-label">Client Organizations</span>
            </div>
            <div className="stat-accordion-item reveal d3">
              <Counter target={31} />
              <span className="stat-label">Years Delivering Training</span>
            </div>
            <div className="stat-accordion-item reveal d4">
              <Counter target={3} />
              <span className="stat-label">Certification Levels Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Course Tiers</div>
            <h2 className="display-md">Training <span style={{ color: 'var(--cyan)' }}>Levels</span></h2>
            <p className="subheading">Structured, standards-aligned progression from foundation technician training through advanced Level III supervisory instruction.</p>
          </div>
          <div className="tr-level-grid">
            <div className="tr-level-card reveal">
              <div className="tr-level-num">Level I</div>
              <div className="tr-level-title">Foundation Technician Training</div>
              <p className="tr-level-text">Entry-level instruction in method fundamentals, safe operating procedures, and basic evaluation of indications under Level II/III supervision.</p>
              <div className="proj-tags">
                <span className="tag">UT</span>
                <span className="tag">MT</span>
                <span className="tag">PT</span>
                <span className="tag">VT</span>
                <span className="tag">RT</span>
              </div>
            </div>
            <div className="tr-level-card reveal">
              <div className="tr-level-num">Level II</div>
              <div className="tr-level-title">Operational Certification Courses</div>
              <p className="tr-level-text">In-depth theory and hands-on practice enabling independent setup, calibration, examination, and reporting — our most-delivered course tier.</p>
              <div className="proj-tags">
                <span className="tag">UT</span>
                <span className="tag">PAUT</span>
                <span className="tag">MT</span>
                <span className="tag">PT</span>
                <span className="tag">RFI</span>
                <span className="tag">RT</span>
              </div>
            </div>
            <div className="tr-level-card reveal">
              <div className="tr-level-num">Level III</div>
              <div className="tr-level-title">Advanced &amp; Supervisory Training</div>
              <p className="tr-level-text">Procedure writing, technique qualification, code interpretation, and examination administration for personnel progressing toward Level III responsibility.</p>
              <div className="proj-tags">
                <span className="tag">Procedure Writing</span>
                <span className="tag">Code Interpretation</span>
                <span className="tag">Method Qualification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Delivery Formats</div>
            <h2 className="display-md">How We <span style={{ color: 'var(--cyan)' }}>Train</span></h2>
          </div>
          <div className="tr-format-grid">
            <div className="tr-format-card reveal">
              <div className="tr-format-icon">&#127976;</div>
              <div className="tr-format-title">On-Site Client Training</div>
              <div className="tr-format-desc">Delivered at client facilities to align directly with plant-specific equipment and procedures.</div>
            </div>
            <div className="tr-format-card reveal">
              <div className="tr-format-icon">&#127970;</div>
              <div className="tr-format-title">Institutional Courses</div>
              <div className="tr-format-desc">Structured Level I–III programs delivered through accredited training centers.</div>
            </div>
            <div className="tr-format-card reveal">
              <div className="tr-format-icon">&#128187;</div>
              <div className="tr-format-title">Refresher &amp; Recertification</div>
              <div className="tr-format-desc">Periodic refresher training to maintain currency with evolving codes and technologies.</div>
            </div>
            <div className="tr-format-card reveal">
              <div className="tr-format-icon">&#127757;</div>
              <div className="tr-format-title">International Assignments</div>
              <div className="tr-format-desc">Training delivery and technical exchange across 9 countries, representing Pakistan at global forums.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section-pb">
        <div className="container">
          <div className="highlight-box gold reveal">
            <div style={{ fontSize: '28px' }}>&#128203;</div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Compliance Frameworks:</strong>
              <span style={{ color: 'var(--text-secondary)' }}> All training programs, examination materials, and certification pathways are designed and delivered in accordance with ASNT SNT-TC-1A, CP-105, and ISO 9712 requirements.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header center">
            <div className="label">Organizations Trained</div>
            <h2 className="display-md">Trusted by Leading <span style={{ color: 'var(--cyan)' }}>Institutions</span></h2>
          </div>
          <div className="client-marquee">
            <span className="badge gold">PIA</span>
            <span className="badge gold">PPL</span>
            <span className="badge gold">MPCL</span>
            <span className="badge gold">FFC</span>
            <span className="badge gold">FFBL</span>
            <span className="badge gold">PAC</span>
            <span className="badge gold">NCNDT</span>
            <span className="badge gold">SGS Pakistan</span>
            <span className="badge gold">PAEC</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Build Your Team's Capability</div>
            <h2 className="cta-banner-title">Ready to Certify Your<br/><span style={{ color: 'var(--cyan)' }}>Inspection Team?</span></h2>
            <p className="cta-banner-sub">Talk to us about scheduling on-site or institutional NDT training for your personnel.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request a Training Program <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/certifications" className="btn btn-secondary btn-lg">View Certifications</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

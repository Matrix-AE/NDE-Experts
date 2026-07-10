import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Expertise.css';

export default function Expertise() {
  useScrollReveal();

  return (
    <main className="expertise-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Technical Depth</span></div>
          <h1 className="page-hero-title">Technical<br/><span style={{ color: 'var(--cyan)' }}>Expertise</span></h1>
          <p className="page-hero-sub">Three decades of hands-on mastery across conventional and advanced NDT methods, international codes and standards, and management-system frameworks that keep inspection programs audit-ready.</p>
        </div>
      </section>

      {/* METHODS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Inspection Methods</div>
            <h2 className="display-md">NDT Methods We <span style={{ color: 'var(--cyan)' }}>Master</span></h2>
            <p className="subheading">From conventional ultrasonics to advanced phased-array and guided-wave techniques, our teams are qualified across the full spectrum of non-destructive testing methods.</p>
          </div>
          <div className="exp-method-grid">
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">UT</div>
              <div className="exp-method-name">Ultrasonic Testing</div>
              <div className="exp-method-desc">Manual and automated thickness gauging, flaw detection, and weld examination.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">PAUT</div>
              <div className="exp-method-name">Phased Array UT</div>
              <div className="exp-method-desc">Advanced sectorial/linear scanning for weld and component integrity assessment.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">TOFD</div>
              <div className="exp-method-name">Time of Flight Diffraction</div>
              <div className="exp-method-desc">High-accuracy sizing of weld flaws for critical pressure-retaining components.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">RT / DIR</div>
              <div className="exp-method-name">Radiographic Testing</div>
              <div className="exp-method-desc">Conventional and Digital Industrial Radiography for volumetric examination.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">MT</div>
              <div className="exp-method-name">Magnetic Particle Testing</div>
              <div className="exp-method-desc">Surface and near-surface discontinuity detection on ferromagnetic materials.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">PT</div>
              <div className="exp-method-name">Liquid Penetrant Testing</div>
              <div className="exp-method-desc">Surface-breaking flaw detection across a wide range of materials.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">VT</div>
              <div className="exp-method-name">Visual Testing</div>
              <div className="exp-method-desc">Direct and remote visual examination per code-defined acceptance criteria.</div>
            </div>
            <div className="exp-method-card reveal">
              <div className="exp-method-abbr">LRUT / SRUT</div>
              <div className="exp-method-name">Guided Wave UT</div>
              <div className="exp-method-desc">Long-range and short-range guided wave screening for pipeline integrity.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Codes &amp; Standards</div>
            <h2 className="display-md">Standards <span style={{ color: 'var(--cyan)' }}>Compliance</span></h2>
            <p className="subheading">Procedures and written practices are developed, reviewed, and implemented in strict accordance with the following codes and management-system standards.</p>
          </div>
          <div className="badge-grid">
            <span className="badge">ASME</span>
            <span className="badge">API</span>
            <span className="badge">AWS</span>
            <span className="badge">ASNT SNT-TC-1A</span>
            <span className="badge">ISO 9712</span>
            <span className="badge">RCC-M</span>
            <span className="badge">RSE-M</span>
            <span className="badge">Chinese Codes (NB/T, GB)</span>
            <span className="badge">ISO/IEC 17020</span>
            <span className="badge">ISO/IEC 17024</span>
            <span className="badge">ISO/IEC 17025</span>
          </div>
        </div>
      </section>

      {/* MANAGEMENT SYSTEMS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Quality Frameworks</div>
            <h2 className="display-md">Management System <span style={{ color: 'var(--cyan)' }}>Expertise</span></h2>
            <p className="subheading">Strong working knowledge of accreditation frameworks that govern inspection bodies, certification bodies, and testing laboratories.</p>
          </div>
          <div className="exp-mgmt-grid">
            <div className="cert-card reveal">
              <div className="cert-icon">&#128300;</div>
              <div>
                <div className="cert-title">ISO/IEC 17020</div>
                <div className="cert-body">Requirements for the operation of various types of inspection bodies — applied throughout laboratory and field inspection operations.</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#127891;</div>
              <div>
                <div className="cert-title">ISO/IEC 17024</div>
                <div className="cert-body">Conformity assessment for bodies certifying persons — underpins NDT personnel qualification and certification programs.</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#129514;</div>
              <div>
                <div className="cert-title">ISO/IEC 17025</div>
                <div className="cert-body">General requirements for the competence of testing and calibration laboratories, guiding lab accreditation activities.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header center">
            <div className="label">Industries Served</div>
            <h2 className="display-md">Trusted Across <span style={{ color: 'var(--cyan)' }}>Critical Sectors</span></h2>
          </div>
          <div className="ind-grid">
            <div className="ind-item reveal"><span className="ind-icon">&#128737;&#65039;</span><span className="ind-name">Oil &amp; Gas</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#9889;</span><span className="ind-name">Power Generation</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#129514;</span><span className="ind-name">Petrochemical</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#127807;</span><span className="ind-name">Fertilizer</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#127981;</span><span className="ind-name">Manufacturing</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#9992;&#65039;</span><span className="ind-name">Aviation (PIA, PAC)</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#9883;&#65039;</span><span className="ind-name">Nuclear (PAEC)</span></div>
            <div className="ind-item reveal"><span className="ind-icon">&#127959;&#65039;</span><span className="ind-name">Construction</span></div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="section-pb">
        <div className="container">
          <div className="highlight-box reveal">
            <div style={{ fontSize: '28px' }}>&#127891;</div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>Procurement &amp; Equipment Advisory:</strong>
              <span style={{ color: 'var(--text-secondary)' }}> Our specialists evaluate technical specifications for the procurement of NDT equipment, accessories, and related inspection systems — ensuring laboratories and field teams operate with the right, calibrated, and code-compliant tools.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Talk Technical</div>
            <h2 className="cta-banner-title">Need a Method-Specific<br/><span style={{ color: 'var(--cyan)' }}>Consultation?</span></h2>
            <p className="cta-banner-sub">Whether it's procedure development, method qualification, or equipment specification — our Level III expertise is at your disposal.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/certifications" className="btn btn-secondary btn-lg">View Certifications</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

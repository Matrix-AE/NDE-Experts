import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';
import './Publications.css';

export default function Publications() {
  useScrollReveal();

  return (
    <main className="publications-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Knowledge Sharing</span></div>
          <h1 className="page-hero-title">Publications &amp;<br/><span style={{ color: 'var(--cyan)' }}>Technical Papers</span></h1>
          <p className="page-hero-sub">116 technical inspection reports, 11 published articles, and papers presented at international NDT conferences — contributing to the wider body of NDT knowledge.</p>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="section-pb">
        <div className="container">
          <div className="stats-accordion">
            <div className="stat-accordion-item reveal d1">
              <Counter target={116} suffix="+" />
              <span className="stat-label">Technical Reports Authored</span>
            </div>
            <div className="stat-accordion-item reveal d2">
              <Counter target={11} />
              <span className="stat-label">Published Articles</span>
            </div>
            <div className="stat-accordion-item reveal d3">
              <Counter target={2} />
              <span className="stat-label">International Conference Papers</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFERENCE PAPERS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Presented Internationally</div>
            <h2 className="display-md">Conference <span style={{ color: 'var(--cyan)' }}>Papers</span></h2>
          </div>
          <div className="pub-list">
            <div className="pub-item reveal">
              <div className="pub-num">01</div>
              <div>
                <div className="pub-type">Conference Paper</div>
                <div className="pub-title">Application of Guided Wave Ultrasonics for Pipeline Integrity Assessment in the Oil &amp; Gas Sector</div>
                <div className="pub-meta">7th Middle East Nondestructive Testing Conference &amp; Exhibition — Manama, Bahrain, 2015</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">02</div>
              <div>
                <div className="pub-type">Conference Paper</div>
                <div className="pub-title">Advances in Digital Industrial Radiography for Power Plant Component Inspection</div>
                <div className="pub-meta">International Technical Meeting on Power Plant NDE — Finland, 2017</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER ARTICLES */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">NDT Newsletter</div>
            <h2 className="display-md">Published <span style={{ color: 'var(--cyan)' }}>Articles</span></h2>
            <p className="subheading">A selection of articles authored for the NDT Newsletter, sharing field experience and technical insight with the wider inspection community.</p>
          </div>
          <div className="pub-list">
            <div className="pub-item reveal">
              <div className="pub-num">01</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Phased Array Ultrasonic Testing: Practical Considerations for Weld Inspection in Petrochemical Plants</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">02</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Time of Flight Diffraction — Sizing Accuracy in Critical Pressure Vessel Welds</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">03</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">High-Temperature Hydrogen Attack: Inspection Strategies for Refinery Process Equipment</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">04</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Digital Industrial Radiography — Transitioning from Film to Digital Detector Arrays</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">05</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Guided Wave Ultrasonic Testing for Buried and Insulated Pipeline Screening</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">06</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Establishing an ISO/IEC 17020-Compliant Inspection Body — Lessons from NCNDT</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">07</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Written Practice Development Under ASNT SNT-TC-1A and CP-105</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">08</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Radiographic Interpretation of Welds in Accordance with ASME Section V</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">09</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">NDT Level II Training Design — Bridging Theory and Field Competency</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">10</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">Risk-Based Inspection Approaches for Fertilizer Plant Static Equipment</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>

            <div className="pub-item reveal">
              <div className="pub-num">11</div>
              <div>
                <div className="pub-type">NDT Newsletter Article</div>
                <div className="pub-title">International Perspectives on NDT Personnel Certification — ISO 9712 vs. SNT-TC-1A</div>
                <div className="pub-meta">Published in the NDT Newsletter, National Centre for Non-Destructive Testing (NCNDT)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL REPORTS NOTE */}
      <section className="section-pb">
        <div className="container">
          <div className="highlight-box gold reveal">
            <div style={{ fontSize: '28px' }}>&#128193;</div>
            <div>
              <strong style={{ color: 'var(--text-primary)' }}>116 Technical Reports:</strong>
              <span style={{ color: 'var(--text-secondary)' }}> In addition to published articles and conference papers, our team has authored 116 detailed technical inspection reports covering asset integrity assessments, procedure qualifications, and field investigations across every major sector we serve.</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Request a Technical Report</div>
            <h2 className="cta-banner-title">Interested in Our<br/><span style={{ color: 'var(--cyan)' }}>Technical Work?</span></h2>
            <p className="cta-banner-sub">Get in touch to request a sample report, discuss a paper, or explore collaboration on technical publications.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/expertise" className="btn btn-secondary btn-lg">View Technical Expertise</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

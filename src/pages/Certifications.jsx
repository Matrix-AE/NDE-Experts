import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Certifications.css';

export default function Certifications() {
  useScrollReveal();

  return (
    <main className="certifications-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Verified Credentials</span></div>
          <h1 className="page-hero-title">Certifications &amp;<br/><span style={{ color: 'var(--cyan)' }}>Credentials</span></h1>
          <p className="page-hero-sub">Personnel qualifications, professional registrations, and international training credentials that underpin every inspection we deliver.</p>
        </div>
      </section>

      {/* PRIMARY CERTS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Core Qualifications</div>
            <h2 className="display-md">Personnel <span style={{ color: 'var(--cyan)' }}>Certifications</span></h2>
          </div>
          <div className="cert-grid">
            <div className="cert-card reveal">
              <div className="cert-icon">&#127941;</div>
              <div>
                <div className="cert-title">ASNT NDT Level III</div>
                <div className="cert-body">Ultrasonic Testing (UT) &amp; Radiographic Testing (RT) — the highest personnel qualification level recognized under ASNT SNT-TC-1A.</div>
                <div className="cert-num">Certificate No. 209996</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#127963;&#65039;</div>
              <div>
                <div className="cert-title">PEC Registered Engineer</div>
                <div className="cert-body">Registered with the Pakistan Engineering Council, affirming professional engineering standing and accountability.</div>
                <div className="cert-num">Registered Professional Engineer</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#128269;</div>
              <div>
                <div className="cert-title">PNAC Technical Expert</div>
                <div className="cert-body">Recognized Technical Expert with the Pakistan National Accreditation Council, supporting laboratory and inspection body accreditation.</div>
                <div className="cert-num">Technical Expert — Inspection &amp; Testing</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#129309;</div>
              <div>
                <div className="cert-title">ASNT Professional Member</div>
                <div className="cert-body">Active professional member of the American Society for Nondestructive Testing (ASNT).</div>
                <div className="cert-num">Professional Membership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AFFILIATIONS */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Professional Bodies</div>
            <h2 className="display-md">Affiliations &amp; <span style={{ color: 'var(--cyan)' }}>Memberships</span></h2>
          </div>
          <div className="cert-grid">
            <div className="cert-card reveal">
              <div className="cert-icon">&#128220;</div>
              <div>
                <div className="cert-title">PASNT</div>
                <div className="cert-body">Pakistan Society for Non-Destructive Testing</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#128220;</div>
              <div>
                <div className="cert-title">PIME</div>
                <div className="cert-body">Pakistan Institution of Mechanical Engineers</div>
              </div>
            </div>
            <div className="cert-card reveal">
              <div className="cert-icon">&#128220;</div>
              <div>
                <div className="cert-title">PWI</div>
                <div className="cert-body">The Welding Institute — Professional Membership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNATIONAL TRAINING */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Global Exposure</div>
            <h2 className="display-md">International Training <span style={{ color: 'var(--cyan)' }}>Credentials</span></h2>
            <p className="subheading">Advanced technical training and conference participation across 9 countries — keeping our methods current with global best practice.</p>
          </div>
          <div className="intl-cert-grid">
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127462;&#127481;</span>
              <div>
                <div className="intl-cert-country">Austria</div>
                <div className="intl-cert-desc">Advanced TOFD &amp; OmniScan Phased Array UT training</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127467;&#127470;</span>
              <div>
                <div className="intl-cert-country">Finland</div>
                <div className="intl-cert-desc">2017 International Technical Meeting — Power Plant NDE methods</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127469;&#127479;</span>
              <div>
                <div className="intl-cert-country">Croatia</div>
                <div className="intl-cert-desc">International NDT technical symposium and exchange</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127464;&#127475;</span>
              <div>
                <div className="intl-cert-country">China</div>
                <div className="intl-cert-desc">Digital Radiography &amp; power plant component inspection techniques</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127474;&#127484;</span>
              <div>
                <div className="intl-cert-country">Malaysia</div>
                <div className="intl-cert-desc">Advanced NDT methods &amp; petroleum industry applications</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127470;&#127465;</span>
              <div>
                <div className="intl-cert-country">Indonesia</div>
                <div className="intl-cert-desc">NDT in petroleum sector &amp; radiation safety practices</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127463;&#127465;</span>
              <div>
                <div className="intl-cert-country">Bangladesh</div>
                <div className="intl-cert-desc">Digital Industrial Radiography (DIR) &amp; Computed Tomography applications</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127463;&#127469;</span>
              <div>
                <div className="intl-cert-country">Bahrain</div>
                <div className="intl-cert-desc">7th Middle East NDT Conference 2015 — international paper presentation</div>
              </div>
            </div>
            <div className="intl-cert-item reveal">
              <span className="intl-cert-flag">&#127472;&#127466;</span>
              <div>
                <div className="intl-cert-country">Kenya (Nairobi)</div>
                <div className="intl-cert-desc">Radiographic Testing per ISO 17636-1 — regional training assignment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Verify or Discuss Credentials</div>
            <h2 className="cta-banner-title">Have Questions About Our<br/><span style={{ color: 'var(--cyan)' }}>Qualifications?</span></h2>
            <p className="cta-banner-sub">We're happy to share certification documentation and scope details for any client due-diligence process.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/about" className="btn btn-secondary btn-lg">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

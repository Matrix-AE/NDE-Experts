import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo">
              <div className="footer-logo-icon">TN</div>
              <div>
                <div className="footer-logo-name">Tahir Nazir</div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--cyan)',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  NDT Level III Expert
                </div>
              </div>
            </div>
            <p className="footer-desc">
              30+ years of excellence in Non-Destructive Testing, Asset Integrity, and Inspection
              Engineering across critical industrial sectors worldwide.
            </p>
            <div className="footer-contact-info">
              <a href="tel:+923005212968" className="footer-ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0112 2.18 2 2 0 0112 4.08a4 4 0 00-1.22 7.57" />
                </svg>
                +92 300 5212968
              </a>
              <a href="tel:+923138112968" className="footer-ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0112 2.18 2 2 0 0112 4.08a4 4 0 00-1.22 7.57" />
                </svg>
                +92 313 8112968
              </a>
              <a href="mailto:info@ndeexperts.com" className="footer-ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                info@ndeexperts.com
              </a>
              <a href="mailto:tahir.nazir@ndeexperts.com" className="footer-ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                tahir.nazir@ndeexperts.com
              </a>
              <div className="footer-ci">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Islamabad, Pakistan
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-h">Services</div>
            <div className="footer-links">
              <Link to="/services#ndt" className="footer-fl">NDT Inspection</Link>
              <Link to="/services#integrity" className="footer-fl">Asset Integrity</Link>
              <Link to="/services#tpi" className="footer-fl">Third-Party Inspection</Link>
              <Link to="/training" className="footer-fl">Training & Certification</Link>
              <Link to="/services#consulting" className="footer-fl">Consulting & Auditing</Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="footer-col-h">Explore</div>
            <div className="footer-links">
              <Link to="/about" className="footer-fl">About</Link>
              <Link to="/projects" className="footer-fl">Projects</Link>
              <Link to="/expertise" className="footer-fl">Technical Expertise</Link>
              <Link to="/certifications" className="footer-fl">Certifications</Link>
              <Link to="/publications" className="footer-fl">Publications</Link>
              <Link to="/gallery" className="footer-fl">Gallery</Link>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="footer-col-h">Credentials</div>
            <div className="footer-links">
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>ASNT NDT Level III</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Cert. No. 209996</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>PEC Registered Engineer</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>PNAC Technical Expert</span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>ASNT Professional Member</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 Tahir Nazir. All rights reserved. NDT Level III Consultant — Islamabad, Pakistan.
          </div>
          <div className="footer-badges">
            <span className="f-badge">ASNT Member</span>
            <span className="f-badge">PEC Registered</span>
            <span className="f-badge">ISO 9712</span>
            <span className="f-badge">PNAC Expert</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

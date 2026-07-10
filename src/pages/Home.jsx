import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroCanvas from '../components/HeroCanvas';
import Counter from '../components/Counter';
import useScrollReveal from '../hooks/useScrollReveal';
import './Home.css';

const MARQUEE_ITEMS = [
  'ASNT Level III',
  'Phased Array UT',
  'Time of Flight Diffraction',
  'Digital Radiography',
  'ASME · API · ISO',
  'Asset Integrity',
  'Third-Party Inspection',
  'ISO/IEC 17020',
];

// Organizations Tahir Nazir has served / trained. Each renders its logo from
// /public/logos/<slug>.svg (placeholder marks ship now — drop a real
// /public/logos/<slug>.png or .svg with the same name to replace it).
const TRUST_ORGS = [
  { name: 'PIA', sub: 'Aviation', slug: 'pia' },
  { name: 'PPL', sub: 'Oil & Gas', slug: 'ppl' },
  { name: 'MPCL', sub: 'Exploration', slug: 'mpcl' },
  { name: 'FFC', sub: 'Fertilizer', slug: 'ffc' },
  { name: 'FFBL', sub: 'Fertilizer', slug: 'ffbl' },
  { name: 'PAC', sub: 'Aeronautical', slug: 'pac' },
  { name: 'NCNDT', sub: 'National Centre', slug: 'ncndt' },
  { name: 'SGS', sub: 'Inspection', slug: 'sgs' },
  { name: 'PAEC', sub: 'Nuclear', slug: 'paec' },
];

// Shows the org logo image; falls back to a clean wordmark if the file is missing.
function TrustLogo({ org }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div className="trust-card reveal">
      {imgOk ? (
        <img
          className="trust-logo"
          src={`/logos/${org.slug}.svg`}
          alt={`${org.name} logo`}
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      ) : (
        <div className="trust-name">
          {org.name}
          <span className="trust-sub">{org.sub}</span>
        </div>
      )}
    </div>
  );
}

// Sector illustrations (monochrome line art; colour follows the card via
// currentColor, so they invert to white on hover automatically).
const S = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.2, strokeLinecap: 'round', strokeLinejoin: 'round' };
const SECTORS = [
  {
    name: 'Oil & Gas',
    icon: (
      <svg viewBox="0 0 48 48" {...S}>
        <path d="M15 42 L24 9 L33 42" />
        <path d="M18.5 30 H29.5" />
        <path d="M20.5 22 H27.5" />
        <path d="M9 42 H39" />
        <circle cx="24" cy="9" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Power Generation',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
        <path d="M27 5 L13 27 H22 L20 43 L35 20 H25 L27 5 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Petrochemical',
    icon: (
      <svg viewBox="0 0 48 48" {...S}>
        <rect x="12" y="14" width="9" height="26" rx="2" />
        <rect x="27" y="9" width="9" height="31" rx="2" />
        <path d="M16.5 14 V9 M31.5 9 V5" />
        <path d="M21 21 H27 M21 30 H27" />
        <path d="M8 40 H40" />
      </svg>
    ),
  },
  {
    name: 'Fertilizer',
    icon: (
      <svg viewBox="0 0 48 48" {...S}>
        <path d="M24 42 V23" />
        <path d="M24 28 C17 28 13 24 13 17 C20 17 24 21 24 28 Z" fill="currentColor" stroke="none" />
        <path d="M24 24 C31 24 35 19 35 12 C28 12 24 17 24 24 Z" fill="currentColor" stroke="none" />
        <path d="M16 42 H32" />
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    icon: (
      <svg viewBox="0 0 48 48" {...S}>
        <path d="M7 42 V25 L17 31 V25 L27 31 V21 H41 V42 Z" />
        <path d="M34 21 V12 H38 V21" />
        <path d="M13 37 H16 M23 37 H26 M33 37 H37" />
      </svg>
    ),
  },
  {
    name: 'Aviation (PIA, PAC)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 5 C22.3 5 21 8 21 13 V17 L7 26 V30 L21 26 V33 L16 37 V40 L24 38 L32 40 V37 L27 33 V26 L41 30 V26 L27 17 V13 C27 8 25.7 5 24 5 Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Nuclear (PAEC)',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" />
        <ellipse cx="24" cy="24" rx="17" ry="7.5" />
        <ellipse cx="24" cy="24" rx="17" ry="7.5" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="17" ry="7.5" transform="rotate(120 24 24)" />
      </svg>
    ),
  },
  {
    name: 'Construction',
    icon: (
      <svg viewBox="0 0 48 48" {...S}>
        <path d="M19 42 V11" />
        <path d="M8 11 H41" />
        <path d="M19 5 L12 11 M19 5 L26 11 M19 5 V11" />
        <path d="M35 11 V17" />
        <rect x="32" y="17" width="6" height="4" fill="currentColor" stroke="none" />
        <path d="M13 42 H25" />
        <path d="M11 11 L19 19 L27 11" />
      </svg>
    ),
  },
];

export default function Home() {
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledDown(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-scan for .reveal / .reveal-l / .reveal-r elements once this page mounts.
  useScrollReveal();

  return (
    <>
      {/* ══════════════════════════════ HERO ══════════════════════════════ */}
      <section className="hero">
        <HeroCanvas />
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="hero-content">
          <div className="hero-center">
            <div className="hero-label">
              <span className="hero-badge reveal d1">
                <span className="pulse-dot"></span>
                NDT Level III — ASNT
              </span>
              <span className="hero-cert-tag reveal d2">CERT. NO. 209996</span>
            </div>

            <h1 className="hero-h1 reveal d3">
              <span className="brand-nde">NDE</span> <span className="cyan-word">Experts</span>
            </h1>

            <div className="hero-sub reveal d4">
              <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px' }}>
                30 Years of Uncompromising Inspection.
              </div>
              <p style={{ margin: 0 }}>
                NDT Level III Consultant | Asset Integrity Specialist with expertise across Oil &amp;
                Gas, Power Generation, and Petrochemical industries. Trusted by industry
                leaders across <strong>9 countries</strong>.
              </p>
            </div>

            <div className="hero-actions reveal d5">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request Consultation
                <span className="arrow-icon">→</span>
              </Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">
                View Projects
              </Link>
            </div>

            <div className="hero-chips reveal d6">
              <span className="hero-chip">🔩 Oil &amp; Gas</span>
              <span className="hero-chip">⚡ Power Gen</span>
              <span className="hero-chip">🧪 Petrochemical</span>
              <span className="hero-chip">🏭 Fertilizer</span>
              <span className="hero-chip">✈️ Aviation</span>
            </div>
          </div>
        </div>

        <div 
          className="hero-scroll"
          style={{ 
            opacity: scrolledDown ? 0 : 1, 
            transition: 'opacity 0.3s ease', 
            pointerEvents: scrolledDown ? 'none' : 'auto' 
          }}
        >
          <div className="scroll-ind">
            <div className="scroll-ind-line"></div>
            <div className="scroll-ind-txt">Scroll</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ MARQUEE ══════════════════════════════ */}
      <div className="marquee-band">
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span className="mq-item" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════ STATS ══════════════════════════════ */}
      <div className="stats-inner">
        <div className="container">
          <div className="stats-accordion">
            <div className="stat-accordion-item reveal d1">
              <Counter target={30} suffix="+" />
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-accordion-item reveal d2">
              <Counter target={1000} suffix="+" />
              <span className="stat-label">Professionals Trained</span>
            </div>
            <div className="stat-accordion-item reveal d3">
              <Counter target={116} suffix="+" />
              <span className="stat-label">Technical Reports</span>
            </div>
            <div className="stat-accordion-item reveal d4">
              <Counter target={9} />
              <span className="stat-label">Countries Assigned</span>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════ SERVICES ══════════════════════════════ */}
      <section className="section-pb">
        <div className="container">
          <div className="section-header">
            <div className="label">Core Services</div>
            <h2 className="display-md">
              Comprehensive NDT
              <br />
              &amp; Inspection <span style={{ color: 'var(--cyan)' }}>Solutions</span>
            </h2>
            <p className="subheading">
              End-to-end inspection services from advanced NDT methods to asset integrity
              assessment, third-party auditing, and professional certification training.
            </p>
          </div>

          <div className="services-preview-grid">
            <div className="svc-card reveal d1">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </div>
              <h3 className="svc-title">NDT Inspection Services</h3>
              <p className="svc-text">
                Advanced non-destructive testing using state-of-the-art methods and equipment to
                detect flaws and ensure structural integrity.
              </p>
              <ul className="svc-list">
                <li>Phased Array UT (PAUT) &amp; TOFD</li>
                <li>Radiographic Testing (RT/DIR)</li>
                <li>Ultrasonic Thickness Gauging</li>
                <li>MT, PT, VT Examinations</li>
              </ul>
              <Link to="/services#ndt" className="svc-link">
                Explore service <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="svc-card reveal d2">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="svc-title">Asset Integrity &amp; Inspection</h3>
              <p className="svc-text">
                Comprehensive integrity assessment programs that extend equipment life and prevent
                costly failures in critical industrial assets.
              </p>
              <ul className="svc-list">
                <li>Pipeline Integrity Assessment</li>
                <li>Remaining Life Assessment</li>
                <li>Corrosion Analysis (HTHA)</li>
                <li>Failure Investigation &amp; RCA</li>
              </ul>
              <Link to="/services#integrity" className="svc-link">
                Explore service <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="svc-card reveal d3">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="svc-title">Third-Party Inspection (TPI)</h3>
              <p className="svc-text">
                Independent inspection and technical oversight ensuring compliance with
                international codes and project specifications.
              </p>
              <ul className="svc-list">
                <li>Vendor Surveillance</li>
                <li>QA/QC Monitoring</li>
                <li>Compliance Verification</li>
                <li>Inspection Body Auditing</li>
              </ul>
              <Link to="/services#tpi" className="svc-link">
                Explore service <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="svc-card reveal d4">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="svc-title">Training &amp; Certification</h3>
              <p className="svc-text">
                ASNT SNT-TC-1A &amp; ISO 9712 compliant NDT training programs for Level I, II, and
                III certification across all major methods.
              </p>
              <ul className="svc-list">
                <li>Level I, II &amp; III Programs</li>
                <li>PAUT, TOFD, UT, RT Courses</li>
                <li>Corporate Training Programs</li>
                <li>International Delivery</li>
              </ul>
              <Link to="/training" className="svc-link">
                Explore training <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="svc-card reveal d5">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8m-4-4v4" />
                </svg>
              </div>
              <h3 className="svc-title">Consulting &amp; Technical Auditing</h3>
              <p className="svc-text">
                Expert technical guidance on inspection program design, ISO compliance, and
                standards implementation for industrial organizations.
              </p>
              <ul className="svc-list">
                <li>ISO/IEC 17020 Compliance</li>
                <li>Inspection Program Design</li>
                <li>Procedure Development</li>
                <li>Technical Audits</li>
              </ul>
              <Link to="/services#consulting" className="svc-link">
                Explore service <span className="arrow-icon">→</span>
              </Link>
            </div>

            <div className="svc-card reveal d6">
              <div className="svc-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3 className="svc-title">Lab Development &amp; Equipment</h3>
              <p className="svc-text">
                Full-cycle support for NDT laboratory establishment, equipment procurement,
                calibration standards, and PNAC accreditation.
              </p>
              <ul className="svc-list">
                <li>NDT Lab Establishment</li>
                <li>Equipment Procurement Specs</li>
                <li>Calibration Block Design</li>
                <li>Accreditation Support</li>
              </ul>
              <Link to="/services" className="svc-link">
                Explore service <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ TRUSTED BY ══════════════════════════════ */}
      <section
        className="section-py"
        style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--glass-border)',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div className="container">
          <div className="section-header center">
            <div className="label">Trusted By</div>
            <h2 className="display-md">
              Organizations That <span style={{ color: 'var(--cyan)' }}>Trust Our Work</span>
            </h2>
            <p className="subheading">
              Three decades of inspection, integrity and training delivered for Pakistan's leading
              industrial institutions.
            </p>
          </div>
          <div className="trust-grid">
            {TRUST_ORGS.map((o) => (
              <TrustLogo org={o} key={o.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ HOW IT WORKS ══════════════════════════════ */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center">
            <div className="label">Process</div>
            <h2 className="display-md">
              How We <span style={{ color: 'var(--cyan)' }}>Work</span>
            </h2>
            <p className="subheading">
              A proven, systematic approach to delivering reliable inspection outcomes for every
              project.
            </p>
          </div>
          <div className="process-steps">
            {[
              { n: '01', t: 'Scope Assessment', d: 'Detailed evaluation of inspection requirements, applicable codes, and client specifications.' },
              { n: '02', t: 'Procedure Development', d: 'Custom NDT procedures developed per ASME, API, ISO, or client-specific standards.' },
              { n: '03', t: 'Field Inspection', d: 'Qualified teams deploy advanced equipment for precise, documented examination.' },
              { n: '04', t: 'Technical Reporting', d: 'Comprehensive reports with findings, assessments, and actionable recommendations.' },
            ].map((p, i) => (
              <div className={`process-step reveal d${i + 1}`} key={p.n}>
                <div className="step-num">
                  <svg className="step-ring" viewBox="0 0 56 56" aria-hidden="true">
                    <circle cx="28" cy="28" r="26" pathLength="1" />
                  </svg>
                  <span className="step-num-txt">{p.n}</span>
                </div>
                <h3 className="step-title">{p.t}</h3>
                <p className="step-text">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ INDUSTRIES / SECTORS ══════════════════════════════ */}
      <section className="section-py">
        <div className="container">
          <div className="section-header center">
            <div className="label">Industries Served</div>
            <h2 className="display-md">
              Trusted Across <span style={{ color: 'var(--cyan)' }}>Critical Sectors</span>
            </h2>
            <p className="subheading">
              Three decades of inspection, integrity and training work across the sectors that keep
              industry running safely.
            </p>
          </div>

          {/*
            Sector cards use monochrome line illustrations (SECTORS array above).
            To use a real photo instead, add className "has-photo" to the card and
            render <img src="/sectors/oil-gas.jpg" alt={s.name} /> in place of the
            illustration — it will be desaturated to match automatically.
          */}
          <div className="sector-grid">
            {SECTORS.map((s) => (
              <div className="sector-card reveal" key={s.name}>
                <div className="sector-illustration">{s.icon}</div>
                <span className="sector-card-label">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CTA ══════════════════════════════ */}
      <section className="section-py">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: 'center' }}>Get in Touch</div>
            <h2 className="cta-banner-title">
              Ready to Ensure Your
              <br />
              <span style={{ color: 'var(--cyan)' }}>Asset Integrity?</span>
            </h2>
            <p className="cta-banner-sub">
              Whether you need advanced NDT inspection, integrity assessment, compliance
              auditing, or professional training — let's discuss your requirements.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Request Consultation <span className="arrow-icon">→</span>
              </Link>
              <Link to="/services" className="btn btn-secondary btn-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

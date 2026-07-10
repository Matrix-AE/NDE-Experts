import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import './Services.css';

export default function Services() {
  useScrollReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // slight timeout ensures rendering is complete before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main className="services-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">
            <span className="pulse-dot"></span>
            What We Offer
          </div>
          <h1>Expert NDT &amp; Inspection <span className="cyan">Services</span></h1>
          <p className="page-hero-sub">Comprehensive solutions from advanced non-destructive testing to asset integrity, third-party oversight, and professional training.</p>
          <nav className="svc-quick-nav" aria-label="Service sections">
            <a href="#ndt" className="svc-qn-link">&#128300; NDT Inspection</a>
            <a href="#integrity" className="svc-qn-link">&#128737; Asset Integrity</a>
            <a href="#tpi" className="svc-qn-link">&#9989; Third-Party Inspection</a>
            <a href="#training" className="svc-qn-link">&#127891; Training &amp; Certification</a>
            <a href="#consulting" className="svc-qn-link">&#128188; Consulting &amp; Auditing</a>
          </nav>
        </div>
      </section>

      {/* SECTION A — NDT INSPECTION */}
      <section className="svc-section" id="ndt">
        <div className="section-orb section-orb-1"></div>
        <div className="section-orb section-orb-2"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="svc-2col">
            {/* Left: Method Cards */}
            <div className="reveal-l">
              <div className="method-grid">
                <div className="method-card">
                  <div className="method-icon">&#128266;</div>
                  <div className="method-code">UT</div>
                  <div className="method-name">Ultrasonic Testing</div>
                  <div className="method-desc">Detection of internal flaws, cracks, and discontinuities</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#128225;</div>
                  <div className="method-code">PAUT</div>
                  <div className="method-name">Phased Array UT</div>
                  <div className="method-desc">Multi-angle beam scanning with OmniScan &amp; Topaz32</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#128208;</div>
                  <div className="method-code">TOFD</div>
                  <div className="method-name">Time of Flight Diffraction</div>
                  <div className="method-desc">Precise defect sizing and weld inspection</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#9762;&#65039;</div>
                  <div className="method-code">RT</div>
                  <div className="method-name">Radiographic Testing</div>
                  <div className="method-desc">Conventional film and digital radiography</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#128187;</div>
                  <div className="method-code">DIR</div>
                  <div className="method-name">Digital Industrial Radiography</div>
                  <div className="method-desc">Real-time DR and computed tomography</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#129522;</div>
                  <div className="method-code">MT</div>
                  <div className="method-name">Magnetic Particle Testing</div>
                  <div className="method-desc">Surface and near-surface flaw detection</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#129514;</div>
                  <div className="method-code">PT</div>
                  <div className="method-name">Liquid Penetrant Testing</div>
                  <div className="method-desc">Surface-breaking discontinuity detection</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#128065;&#65039;</div>
                  <div className="method-code">VT</div>
                  <div className="method-name">Visual Testing &amp; RVI</div>
                  <div className="method-desc">Remote visual inspection with advanced cameras</div>
                </div>
                <div className="method-card">
                  <div className="method-icon">&#128207;</div>
                  <div className="method-code">UTM</div>
                  <div className="method-name">Ultrasonic Thickness Measurement</div>
                  <div className="method-desc">Corrosion monitoring and wall loss assessment</div>
                </div>
              </div>
              <div className="std-tags">
                <span className="std-tag">ASME Section V</span>
                <span className="std-tag">API 1104</span>
                <span className="std-tag">ISO 9712</span>
                <span className="std-tag">ASNT SNT-TC-1A</span>
              </div>
            </div>
            {/* Right: Text */}
            <div className="reveal-r">
              <div className="svc-section-label">NDT Inspection</div>
              <h2 className="svc-section-h2">Advanced NDT Inspection Methods</h2>
              <p className="svc-section-desc">Deployment of state-of-the-art NDT equipment and techniques for flaw detection, weld inspection, thickness gauging, and structural assessment across all critical industrial asset types.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                <div className="highlight-box">
                  <div style={{ fontSize: "20px" }}>&#127942;</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>ASNT Level III Certified</div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>UT &amp; RT &mdash; Certificate No. 209996 &mdash; the highest ASNT qualification</div>
                  </div>
                </div>
                <div className="highlight-box">
                  <div style={{ fontSize: "20px" }}>&#9881;&#65039;</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Advanced Equipment</div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Olympus OmniScan MX2, Topaz32, COBRA Scanner &amp; WeldROVER deployed on site</div>
                  </div>
                </div>
                <div className="highlight-box">
                  <div style={{ fontSize: "20px" }}>&#128196;</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>116+ Technical Reports</div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Comprehensive documentation with actionable findings across 30+ years of field work</div>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Discuss NDT Requirements <span className="arrow-icon">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B — ASSET INTEGRITY */}
      <section className="svc-section bg-alt" id="integrity">
        <div className="container">
          <div className="svc-2col">
            {/* Left: Text */}
            <div className="reveal-l">
              <div className="svc-section-label">Asset Integrity</div>
              <h2 className="svc-section-h2">Asset Integrity &amp; Remaining Life Assessment</h2>
              <p className="svc-section-desc">Comprehensive integrity management for critical industrial assets ensuring operational safety and regulatory compliance. Specialist-led assessments backed by decades of field experience.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                <div className="highlight-box">
                  <div style={{ fontSize: "20px" }}>&#128300;</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>Fitness-for-Service Expertise</div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>API 579 / ASME FFS-1 compliant evaluation with documented methodology</div>
                  </div>
                </div>
                <div className="highlight-box">
                  <div style={{ fontSize: "20px" }}>&#128293;</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-primary)" }}>HTHA Campaign Leadership</div>
                    <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Led FFC HTHA inspection campaigns using advanced UT techniques and TOFD</div>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary">Request Integrity Assessment <span className="arrow-icon">&rarr;</span></Link>
            </div>
            {/* Right: Service List */}
            <div className="reveal-r">
              <div className="integrity-list">
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Pipeline Integrity Assessment</div>
                    <div className="integrity-item-sub">LRUT, SRUT, PAUT &mdash; comprehensive pipeline health evaluation</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Remaining Life Assessment</div>
                    <div className="integrity-item-sub">Quantitative RLA using validated inspection data and fracture mechanics</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Corrosion Assessment &amp; Monitoring</div>
                    <div className="integrity-item-sub">Thickness mapping, corrosion rate determination, trend analysis</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">High-Temperature Hydrogen Attack (HTHA) Inspection</div>
                    <div className="integrity-item-sub">Specialist HTHA detection and severity assessment for refinery equipment</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Failure Investigation &amp; Root Cause Analysis</div>
                    <div className="integrity-item-sub">Systematic RCA with documented findings and remediation guidance</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Pre-Service &amp; In-Service Inspection (PSI / ISI)</div>
                    <div className="integrity-item-sub">Baseline and periodic inspections per applicable code requirements</div>
                  </div>
                </div>
                <div className="integrity-item">
                  <div className="integrity-item-dot"></div>
                  <div>
                    <div className="integrity-item-title">Fitness-for-Service Evaluation</div>
                    <div className="integrity-item-sub">API 579 / ASME FFS-1 assessments for continued safe operation</div>
                  </div>
                </div>
              </div>
              <div className="notable-box">
                <div className="notable-label">Notable Campaigns</div>
                <div className="notable-text">FFC HTHA campaigns &middot; PSO pipeline integrity &middot; PRL reactor turnarounds (2014, 2019, 2024)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C — THIRD-PARTY INSPECTION */}
      <section className="svc-section" id="tpi">
        <div className="section-orb section-orb-1"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="svc-2col flip">
            {/* Visual (appears right due to flip) */}
            <div className="reveal-r">
              <div className="tpi-visual">
                <div className="tpi-visual-icon">&#9989;</div>
                <h3>Independent Oversight You Can Trust</h3>
                <p>TPI experience spanning oil &amp; gas, power, nuclear, and international projects across multiple continents.</p>
                <div className="tpi-project-list">
                  <div className="tpi-proj-item">Qadirpur Gas Plant, Pakistan</div>
                  <div className="tpi-proj-item">Uch Power Plant, Pakistan</div>
                  <div className="tpi-proj-item">Rousch Power Plant, Pakistan</div>
                  <div className="tpi-proj-item">PAEC Nuclear Facilities</div>
                  <div className="tpi-proj-item">International Projects &mdash; China</div>
                  <div className="tpi-proj-item">International Projects &mdash; Saudi Arabia</div>
                </div>
              </div>
            </div>
            {/* Text (appears left due to flip) */}
            <div className="reveal-l">
              <div className="svc-section-label">Third-Party Inspection</div>
              <h2 className="svc-section-h2">Independent Third-Party Inspection (TPI)</h2>
              <p className="svc-section-desc">Impartial technical oversight ensuring project quality and compliance with international codes and client specifications. ISO/IEC 17020 aligned inspection body auditing experience.</p>
              <div className="tpi-services-grid" style={{ marginBottom: "24px" }}>
                <div className="tpi-service-item"><span className="tpi-dot"></span>Vendor Surveillance</div>
                <div className="tpi-service-item"><span className="tpi-dot"></span>QA/QC Monitoring</div>
                <div className="tpi-service-item"><span className="tpi-dot"></span>Fabrication Hold Point Witnessing</div>
                <div className="tpi-service-item"><span className="tpi-dot"></span>Technical Report Certification</div>
                <div className="tpi-service-item"><span className="tpi-dot"></span>Compliance Verification</div>
                <div className="tpi-service-item"><span className="tpi-dot"></span>NDT Contractor Performance Review</div>
                <div className="tpi-service-item" style={{ gridColumn: "1/-1" }}><span className="tpi-dot"></span>Inspection Body Auditing (ISO/IEC 17020)</div>
              </div>
              <Link to="/contact" className="btn btn-primary">Engage TPI Services <span className="arrow-icon">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D — TRAINING & CERTIFICATION */}
      <section className="svc-section bg-alt" id="training">
        <div className="container">
          <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
            <div className="svc-section-label">Training &amp; Certification</div>
            <h2 className="svc-section-h2">NDT Training &amp; Certification Programs</h2>
            <p className="svc-section-desc">ASNT SNT-TC-1A, CP-105, and ISO 9712 compliant training programs delivering measurable competency outcomes across all major NDT methods and engineering codes.</p>
          </div>

          {/* Level Cards */}
          <div className="level-cards reveal">
            <div className="level-card">
              <div className="level-badge">Level I</div>
              <div className="level-num">I</div>
              <div className="level-title">Practical Foundations</div>
              <div className="level-desc">Basic practical skills, equipment operation, scanning techniques, and data recording. Prepares candidates for supervised field application under Level II or III supervision.</div>
            </div>
            <div className="level-card">
              <div className="level-badge">Level II</div>
              <div className="level-num">II</div>
              <div className="level-title">Advanced Application</div>
              <div className="level-desc">Advanced techniques, procedure application, report writing, code interpretation, and certification examination preparation. Enables independent inspection capability.</div>
            </div>
            <div className="level-card gold-accent">
              <div className="level-badge">Level III</div>
              <div className="level-num">III</div>
              <div className="level-title">Technical Authority</div>
              <div className="level-desc">Procedure development, method qualification, technical authority, exam preparation, and full program management capability. The highest professional NDT tier.</div>
            </div>
          </div>

          {/* Methods */}
          <div style={{ marginTop: "48px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Methods Offered</div>
            <div className="methods-badges reveal">
              <span className="method-badge">RT</span>
              <span className="method-badge">UT</span>
              <span className="method-badge">PAUT</span>
              <span className="method-badge">TOFD</span>
              <span className="method-badge">MT</span>
              <span className="method-badge">PT</span>
              <span className="method-badge">VT</span>
              <span className="method-badge">DIR</span>
              <span className="method-badge">Welding Inspection</span>
              <span className="method-badge">API Standards</span>
              <span className="method-badge">Radiation Safety</span>
              <span className="method-badge">ASME / API / ISO Codes</span>
            </div>
          </div>

          {/* Training Formats & Clients */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", marginTop: "48px" }} className="reveal">
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Training Formats</div>
              <div className="training-formats">
                <div className="training-format-item"><span style={{ fontSize: "16px" }}>&#127981;</span> On-site Corporate Programs</div>
                <div className="training-format-item"><span style={{ fontSize: "16px" }}>&#127979;</span> Facility-Based Training</div>
                <div className="training-format-item"><span style={{ fontSize: "16px" }}>&#9992;&#65039;</span> International Delivery</div>
              </div>
              <div className="notable-box" style={{ marginTop: "16px" }}>
                <div className="notable-label">International Delivery</div>
                <div className="notable-text">Delivered in Kenya (Nairobi), Bahrain (7th ME NDT Conference), and more &mdash; bringing world-class training across borders.</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--text-muted)", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>Notable Clients Trained</div>
              <div className="client-trained-grid" style={{ marginBottom: "20px" }}>
                <span className="client-trained-badge">PIA</span>
                <span className="client-trained-badge">PPL</span>
                <span className="client-trained-badge">MPCL</span>
                <span className="client-trained-badge">FFC</span>
                <span className="client-trained-badge">FFBL</span>
                <span className="client-trained-badge">PAC</span>
                <span className="client-trained-badge">NCNDT</span>
                <span className="client-trained-badge">SGS Pakistan</span>
              </div>
              <Link to="/contact" className="btn btn-primary">Enquire About Training <span className="arrow-icon">&rarr;</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E — CONSULTING & AUDITING */}
      <section className="svc-section" id="consulting">
        <div className="section-orb section-orb-1"></div>
        <div className="section-orb section-orb-2"></div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
            <div className="svc-section-label">Consulting &amp; Auditing</div>
            <h2 className="svc-section-h2">Consulting, Auditing &amp; Technical Leadership</h2>
            <p className="svc-section-desc">Strategic NDT consulting and technical leadership for inspection program design, standards compliance, and laboratory development. From ISO/IEC 17020 implementation to full NDT lab setup and qualification.</p>
          </div>
          <div className="consulting-grid">
            <div className="consulting-card reveal d1">
              <div className="cc-icon">&#127963;&#65039;</div>
              <div className="cc-title">ISO/IEC 17020 Implementation</div>
              <div className="cc-desc">Inspection body QMS development, gap analysis, documentation, internal audits, and accreditation support for PNAC or equivalent national bodies.</div>
            </div>
            <div className="consulting-card reveal d2">
              <div className="cc-icon">&#128203;</div>
              <div className="cc-title">Inspection Program Design</div>
              <div className="cc-desc">Tailored inspection plans developed per applicable codes and risk-based approaches. Optimized schedules balancing safety, compliance, and cost-effectiveness.</div>
            </div>
            <div className="consulting-card reveal d3">
              <div className="cc-icon">&#128221;</div>
              <div className="cc-title">NDT Procedure Development</div>
              <div className="cc-desc">ASME, API, and ISO compliant written practice development, including procedure qualification, demonstration, and validation documentation.</div>
            </div>
            <div className="consulting-card reveal d4">
              <div className="cc-icon">&#128269;</div>
              <div className="cc-title">Technical Auditing</div>
              <div className="cc-desc">Independent quality and competency assessments for NDT organizations, inspection bodies, and contractor evaluation against international standards.</div>
            </div>
            <div className="consulting-card reveal d5">
              <div className="cc-icon">&#9881;&#65039;</div>
              <div className="cc-title">Equipment Procurement</div>
              <div className="cc-desc">Technical specifications, evaluation criteria, and procurement guidance for PAUT, TOFD, DR, and conventional NDT systems to ensure optimal selection.</div>
            </div>
            <div className="consulting-card reveal d6">
              <div className="cc-icon">&#129514;</div>
              <div className="cc-title">Laboratory Development</div>
              <div className="cc-desc">Full-cycle PAUT/TOFD/DR laboratory setup, calibration block specification, reference standard fabrication, and accreditation qualification support.</div>
            </div>
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Consulting Needs <span className="arrow-icon">&rarr;</span></Link>
          </div>
        </div>
      </section>

      {/* EQUIPMENT & TECHNOLOGY */}
      <div className="equipment-section">
        <div className="container">
          <div className="section-header center">
            <div className="label">Advanced Equipment &amp; Technology</div>
            <h2 className="display-md">State-of-the-Art <span style={{ color: "var(--cyan)" }}>Equipment</span></h2>
            <p className="subheading">Industry-leading NDT systems deployed by certified Level III personnel for precision results on every assignment.</p>
          </div>
          <div className="equipment-badge-grid reveal">
            <div className="equip-badge"><span className="equip-dot"></span>Olympus OmniScan MX2</div>
            <div className="equip-badge"><span className="equip-dot"></span>Topaz 32 PAUT</div>
            <div className="equip-badge"><span className="equip-dot"></span>UltraVision Touch Software</div>
            <div className="equip-badge"><span className="equip-dot"></span>Olympus COBRA Scanner</div>
            <div className="equip-badge"><span className="equip-dot"></span>Motorized WeldROVER</div>
            <div className="equip-badge"><span className="equip-dot"></span>Digital Flaw Detectors</div>
            <div className="equip-badge"><span className="equip-dot"></span>DR/DIR Systems</div>
            <div className="equip-badge"><span className="equip-dot"></span>UTG Gauges</div>
            <div className="equip-badge"><span className="equip-dot"></span>PA Module</div>
            <div className="equip-badge"><span className="equip-dot"></span>NDT Paintbrush Scanner</div>
          </div>
        </div>
      </div>

      {/* STANDARDS COMPLIANCE */}
      <section className="standards-section">
        <div className="container">
          <div className="section-header center">
            <div className="label">Standards Compliance</div>
            <h2 className="display-md">International Code <span style={{ color: "var(--cyan)" }}>Expertise</span></h2>
            <p className="subheading">Inspections and procedures developed in strict compliance with globally recognized codes and standards.</p>
          </div>
          <div className="standards-grid reveal">
            <div className="std-card">
              <div className="std-card-icon">&#127959;&#65039;</div>
              <div className="std-card-code">ASME</div>
              <div className="std-card-name">American Society of Mechanical Engineers</div>
              <div className="std-card-list">
                <span>Section V &mdash; NDE</span>
                <span>Section VIII &mdash; Pressure Vessels</span>
                <span>Section IX &mdash; Welding</span>
                <span>B31.3 &mdash; Process Piping</span>
              </div>
            </div>
            <div className="std-card">
              <div className="std-card-icon">&#128738;</div>
              <div className="std-card-code">API</div>
              <div className="std-card-name">American Petroleum Institute</div>
              <div className="std-card-list">
                <span>API 1104 &mdash; Pipeline Welding</span>
                <span>API 579 &mdash; Fitness-for-Service</span>
                <span>API 510 / 570 / 653</span>
                <span>API RP 2X</span>
              </div>
            </div>
            <div className="std-card">
              <div className="std-card-icon">&#127758;</div>
              <div className="std-card-code">ISO</div>
              <div className="std-card-name">International Organization for Standardization</div>
              <div className="std-card-list">
                <span>ISO 9712 &mdash; Personnel Certification</span>
                <span>ISO/IEC 17020 &mdash; Inspection Bodies</span>
                <span>ISO 17636 &mdash; Radiography</span>
                <span>ISO 10863 &mdash; TOFD</span>
              </div>
            </div>
            <div className="std-card">
              <div className="std-card-icon">&#127885;</div>
              <div className="std-card-code">ASNT</div>
              <div className="std-card-name">American Society for Nondestructive Testing</div>
              <div className="std-card-list">
                <span>SNT-TC-1A &mdash; Personnel Qualification</span>
                <span>CP-105 &mdash; Standard Topical Outlines</span>
                <span>Level III Certification</span>
                <span>ASNT Published Documents</span>
              </div>
            </div>
            <div className="std-card">
              <div className="std-card-icon">&#128297;</div>
              <div className="std-card-code">AWS</div>
              <div className="std-card-name">American Welding Society</div>
              <div className="std-card-list">
                <span>AWS D1.1 &mdash; Structural Welding</span>
                <span>AWS D1.5 &mdash; Bridge Welding</span>
                <span>CWI Requirements</span>
                <span>Weld Quality Standards</span>
              </div>
            </div>
            <div className="std-card">
              <div className="std-card-icon">&#9883;&#65039;</div>
              <div className="std-card-code">RCC-M / RSE-M</div>
              <div className="std-card-name">French Nuclear Codes</div>
              <div className="std-card-list">
                <span>RCC-M &mdash; PWR Reactor Codes</span>
                <span>RSE-M &mdash; ISI of PWR Components</span>
                <span>Nuclear Grade Inspections</span>
                <span>PAEC Applications</span>
              </div>
            </div>
            <div className="std-card" style={{ gridColumn: "span 2" }}>
              <div className="std-card-icon">&#127477;&#127472;</div>
              <div className="std-card-code">PNRA</div>
              <div className="std-card-name">Pakistan Nuclear Regulatory Authority</div>
              <div className="std-card-list" style={{ flexDirection: "row", flexWrap: "wrap", gap: "16px" }}>
                <span>PNRA Regulations</span>
                <span>Radiation Safety</span>
                <span>PNAC Accreditation Support</span>
                <span>National Standards Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="svc-cta">
        <div className="container">
          <div className="cta-banner reveal">
            <div className="label" style={{ justifyContent: "center" }}>Get in Touch</div>
            <h2 className="cta-banner-title">Discuss Your <span style={{ color: "var(--cyan)" }}>Requirements</span></h2>
            <p className="cta-banner-sub">Whether you need advanced NDT inspection, integrity assessment, third-party oversight, compliance auditing, or professional training programs &mdash; let's discuss how we can support your project.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">Request Consultation <span className="arrow-icon">&rarr;</span></Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">View Our Projects</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

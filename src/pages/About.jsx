import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import Counter from '../components/Counter';
import './About.css';

export default function About() {
  useScrollReveal();

  const trackRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isHovered || isDown) return;
    
    const interval = setInterval(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft += 1;
      }
    }, 25); // Controls the speed (40px per second)

    return () => clearInterval(interval);
  }, [isHovered, isDown]);

  const getScrollAmount = () => {
    if (!trackRef.current) return 300;
    const item = trackRef.current.querySelector('.carousel-item');
    return item ? item.offsetWidth + 24 : 300; // 24px gap
  };

  const handleNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    if (!trackRef.current) return;
    setIsDown(true);
    trackRef.current.style.cursor = 'grabbing';
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsHovered(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDown || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Professional Profile</span></div>
          <h1 className="page-hero-title" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }}>
            30+ Years of Technical<br /><span style={{ color: "var(--cyan)" }}>Excellence</span>
          </h1>
          <p className="page-hero-sub">From NCNDT to SGS — a career defined by precision, leadership, and advancing the science of non-destructive testing across industries and continents.</p>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section className="section-py">
        <div className="container">
          <div className="profile-grid">

            {/* Left: Profile Card */}
            <div className="reveal-l">
              <div className="profile-card">
                <div className="profile-avatar">TN</div>
                <h2 className="profile-name">Tahir Nazir</h2>
                <p className="profile-title">NDT Level III Consultant</p>
                <div className="profile-contacts">
                  <span className="profile-contact-item">
                    <span className="profile-contact-icon loc">&#128205;</span>
                    <span>Islamabad, Pakistan</span>
                  </span>
                  <a href="mailto:tahir.nazir@ndeexperts.com" className="profile-contact-item">
                    <span className="profile-contact-icon mail">&#9993;</span>
                    <span>tahir.nazir@ndeexperts.com</span>
                  </a>
                  <a href="mailto:info@ndeexperts.com" className="profile-contact-item">
                    <span className="profile-contact-icon mail">&#9993;</span>
                    <span>info@ndeexperts.com</span>
                  </a>
                  <a href="tel:+923005212968" className="profile-contact-item">
                    <span className="profile-contact-icon phone">&#128222;</span>
                    <span>+92 300 5212968</span>
                  </a>
                  <a href="tel:+923138112968" className="profile-contact-item">
                    <span className="profile-contact-icon phone">&#128222;</span>
                    <span>+92 313 8112968</span>
                  </a>
                </div>
                <div className="profile-divider"></div>
                <div className="cert-badge-gold">
                  <div className="cert-badge-gold-icon">&#127885;</div>
                  <div>
                    <div className="cert-badge-gold-label">ASNT NDT Level III</div>
                    <div className="cert-badge-gold-value">UT &amp; RT &middot; #209996</div>
                  </div>
                </div>
                <div className="affil-badges">
                  <span className="affil-badge">PEC</span>
                  <span className="affil-badge">ASNT</span>
                  <span className="affil-badge">PASNT</span>
                  <span className="affil-badge">PIME</span>
                  <span className="affil-badge">PWI</span>
                </div>
              </div>
            </div>

            {/* Right: Summary (Bento Grid) */}
            <div className="profile-summary-col reveal-r">
              <div>
                <span className="label">Summary</span>
                <h2 className="profile-summary-h2">Expert. Leader. <span style={{ color: "var(--cyan)" }}>Trainer.</span></h2>
              </div>
              
              <p className="lead-text">
                A seasoned Non-Destructive Testing professional delivering unparalleled depth of knowledge across all major NDT methods in Pakistan's leading inspection institutions.
              </p>

              <div className="bento-grid">
                {/* Full Width Block */}
                <div className="bento-card full-width">
                  <div className="bento-title">&#128200; The NCNDT Legacy &amp; SGS Leadership</div>
                  <p className="bento-desc">
                    Serving as <strong>NDT Advisor at SGS Pakistan</strong> after a 31-year formative career at the <strong>National Centre for Non-Destructive Testing (NCNDT)</strong>. Responsibilities spanned leading multidisciplinary teams, establishing accredited laboratories, and shaping Pakistan's inspection landscape.
                  </p>
                  <div className="methods-list">
                    <span className="method-tag">Conventional UT</span>
                    <span className="method-tag">Radiography</span>
                    <span className="method-tag">Phased-Array</span>
                    <span className="method-tag">TOFD</span>
                  </div>
                </div>

                {/* Half Width Block 1 */}
                <div className="bento-card">
                  <div className="bento-title">&#128300; PNAC Technical Expert</div>
                  <p className="bento-desc">Appointed by PNAC for ISO/IEC 17020 inspection body assessments, validating systems at a national accreditation level.</p>
                </div>

                {/* Half Width Block 2 */}
                <div className="bento-card">
                  <div className="bento-title">&#127893; Prolific Educator</div>
                  <p className="bento-desc">Authored 116 technical reports, published 11 articles, and trained over 1,000 professionals at PIA, PPL, MPCL, FFC, and SGS.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAREER CAROUSEL SECTION (Awwwards Style) */}
      <section className="career-section section-py">
        <div className="container">
          
          <div className="career-header reveal">
            <div>
              <span className="label">Experience</span>
              <h2 className="career-section-h2">Career <span style={{ color: "var(--cyan)" }}>Journey</span></h2>
            </div>
            <div className="carousel-controls">
              <button className="c-btn" onClick={handlePrev}>&#8592;</button>
              <button className="c-btn" onClick={handleNext}>&#8594;</button>
            </div>
          </div>

          {/* Horizontal Scrolling Track */}
          <div 
            className="carousel-track reveal" 
            id="career-track"
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            
            {/* Card 1 */}
            <div className="carousel-item">
              <span className="ci-date">June 2024 &ndash; June 2026</span>
              <h3 className="ci-title">NDT Advisor</h3>
              <p className="ci-org">SGS Pakistan (Pvt.) Ltd &mdash; Islamabad</p>
              <p className="ci-desc">Driving technical excellence, procedural alignment with international standards, and personnel capability development across industrial sectors.</p>
              <ul className="ci-list">
                <li>Led inspection teams and critical asset integrity projects, including HTHA</li>
                <li>Developed &amp; updated NDT procedures per ASME, API, AWS, ASNT &amp; ISO</li>
                <li>Delivered Level II training in UT, MT, PT, RFI, and PAUT</li>
                <li>Evaluated technical specifications for NDT equipment procurement</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="carousel-item">
              <span className="ci-date">May 1993 &ndash; June 2024 &middot; 31 Years</span>
              <h3 className="ci-title">Inspection Manager / Deputy Chief Engineer</h3>
              <p className="ci-org">NCNDT &mdash; Islamabad</p>
              <p className="ci-desc">Rose to senior leadership roles shaping the country's inspection standards across power generation, petrochemicals, and manufacturing.</p>
              <ul className="ci-list">
                <li>Managed comprehensive NDT laboratories and personnel qualifications</li>
                <li>Developed procedures per ASME, API, AWS, RCC-M, and Chinese Codes</li>
                <li>Authored training manuals and certified thousands of NDT professionals</li>
                <li>Conducted critical international fabrication inspections in China</li>
              </ul>
            </div>
            
            {/* Card 3 (Global Representative) */}
            <div className="carousel-item" style={{ borderStyle: "dashed" }}>
              <span className="ci-date">Ongoing Impact</span>
              <h3 className="ci-title">Global Representative</h3>
              <p className="ci-org">International Technical Forums</p>
              <p className="ci-desc">Representing Pakistan and enhancing expertise through advanced technical programs across Europe, Asia, and the Middle East.</p>
              <ul className="ci-list">
                <li>Completed advanced NDT training in Austria, Finland, and Croatia</li>
                <li>Exchanged knowledge in China, Malaysia, Indonesia, and Bangladesh</li>
                <li>Aligning local inspection methodologies with global safety metrics</li>
              </ul>
            </div>

          </div>

          {/* Education & International Block Grid Below Carousel */}
          <div className="edu-grid reveal">
            <div className="edu-card gold-accent">
              <div className="edu-card-icon">&#127891;</div>
              <h3 className="edu-card-title">B.S. Metallurgy &amp; Materials Science</h3>
              <p className="edu-card-sub">University of the Punjab &mdash; Lahore, Pakistan<br />Strong foundation in materials behaviour, failure analysis, and manufacturing processes.</p>
              <div className="methods-list">
                <span className="method-tag">Metallurgy</span>
                <span className="method-tag">Materials Science</span>
                <span className="method-tag">Engineering</span>
              </div>
            </div>

            <div className="edu-card cyan-accent">
              <div className="edu-card-icon">&#127758;</div>
              <h3 className="edu-card-title">Global Technical Exposure</h3>
              <p className="edu-card-sub">Representing Pakistan in advanced training, knowledge exchange, and symposiums.</p>
              <div className="intl-grid">
                <div className="intl-item"><span className="flag">&#127462;&#127481;</span> Austria (TOFD/PAUT)</div>
                <div className="intl-item"><span className="flag">&#127467;&#127470;</span> Finland (Power Plant NDE)</div>
                <div className="intl-item"><span className="flag">&#127464;&#127475;</span> China (Digital Radiography)</div>
                <div className="intl-item"><span className="flag">&#127463;&#127469;</span> Bahrain (ME NDT Conf)</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* KEY ACHIEVEMENTS SECTION */}
      <section className="achievements-section section-py">
        <div className="container">
          <div className="section-header center reveal">
            <span className="label">Impact &amp; Track Record</span>
            <h2 className="achievements-h2 display-md">Key <span style={{ color: "var(--cyan)" }}>Achievements</span></h2>
          </div>
          <div className="stats-accordion">
            <div className="stat-accordion-item reveal d1">
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>&#127963;</div>
              <Counter target={31} />
              <div className="stat-label">Years at NCNDT<br /><span style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "none", letterSpacing: "normal" }}>Pakistan's premier NDT institution</span></div>
            </div>
            <div className="stat-accordion-item reveal d2">
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>&#128104;&#8205;&#127979;</div>
              <Counter target={1000} suffix="+" />
              <div className="stat-label">Professionals Trained<br /><span style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "none", letterSpacing: "normal" }}>PIA, PPL, MPCL, FFC, FFBL &amp; more</span></div>
            </div>
            <div className="stat-accordion-item reveal d3">
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>&#128203;</div>
              <Counter target={116} />
              <div className="stat-label">Technical Reports<br /><span style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "none", letterSpacing: "normal" }}>Plus 11 NDT Newsletter articles</span></div>
            </div>
            <div className="stat-accordion-item reveal d4">
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>&#127758;</div>
              <Counter target={9} />
              <div className="stat-label">Countries<br /><span style={{ fontSize: "0.75rem", opacity: 0.7, textTransform: "none", letterSpacing: "normal" }}>International training &amp; conferences</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner reveal">
            <h2 className="cta-banner-title">Ready to Work Together?</h2>
            <p className="cta-banner-sub">
              Leverage 30+ years of NDT expertise for your next inspection, audit, or professional training project.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Request Consultation</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

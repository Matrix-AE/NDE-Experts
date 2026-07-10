import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import './Contact.css';

const RECIPIENT = 'info@ndeexperts.com';
const CC = 'tahir.nazir@ndeexperts.com';

export default function Contact() {
  useScrollReveal();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = (f.get('name') || '').toString().trim();
    const company = (f.get('company') || '').toString().trim();
    const email = (f.get('email') || '').toString().trim();
    const phone = (f.get('phone') || '').toString().trim();
    const service = (f.get('service') || '').toString();
    const details = (f.get('details') || '').toString().trim();

    const subject = `Inspection / Training enquiry — ${name}${company ? ` (${company})` : ''}`;
    const body =
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Service / course needed: ${service}\n\n` +
      `Project details:\n${details}\n`;

    const mailto =
      `mailto:${RECIPIENT}` +
      `?cc=${encodeURIComponent(CC)}` +
      `&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main className="contact-page">
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-tag"><span className="label">Get in Touch</span></div>
          <h1 className="page-hero-title">Request an inspection or<br /><span style={{ color: 'var(--cyan)' }}>training programme.</span></h1>
          <p className="page-hero-sub">Share the scope, code requirements and timeline — a response follows within one business day.</p>
        </div>
      </section>

      {/* CONTACT GRID SECTION */}
      <section className="section-pb">
        <div className="container">
          <div className="contact-grid">

            {/* Left Column: Direct Contact Info */}
            <div className="contact-col">
              <h2 className="contact-heading">Direct contact</h2>
              <p className="contact-desc">Prefer to call or email directly? Reach out any time — inspection and training enquiries are usually answered within one business day.</p>

              <div className="dc-list">
                <a href="tel:+923005212968" className="dc-item">
                  <span className="dc-icon phone">&#128222;</span>
                  <div>
                    <div className="dc-label">Phone</div>
                    <div className="dc-value">+92 300 5212968</div>
                  </div>
                </a>

                <a href="tel:+923138112968" className="dc-item">
                  <span className="dc-icon phone">&#128222;</span>
                  <div>
                    <div className="dc-label">Phone</div>
                    <div className="dc-value">+92 313 8112968</div>
                  </div>
                </a>

                <a href="mailto:info@ndeexperts.com" className="dc-item">
                  <span className="dc-icon mail">&#9993;</span>
                  <div>
                    <div className="dc-label">Email</div>
                    <div className="dc-value">info@ndeexperts.com</div>
                  </div>
                </a>

                <a href="mailto:tahir.nazir@ndeexperts.com" className="dc-item">
                  <span className="dc-icon mail">&#9993;</span>
                  <div>
                    <div className="dc-label">Email</div>
                    <div className="dc-value">tahir.nazir@ndeexperts.com</div>
                  </div>
                </a>

                <div className="dc-item" style={{ cursor: 'default' }}>
                  <span className="dc-icon loc">&#128205;</span>
                  <div>
                    <div className="dc-label">Location</div>
                    <div className="dc-value">Islamabad, Pakistan</div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="map-card" style={{ overflow: 'hidden', minHeight: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424145.4528148868!2d72.76672322307521!3d33.61633512270928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px', display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Islamabad Location Map"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-col">
              <div className="card" style={{ padding: '48px' }}>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">FULL NAME</label>
                      <input type="text" name="name" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">COMPANY</label>
                      <input type="text" name="company" className="form-input" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">EMAIL</label>
                      <input type="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">PHONE</label>
                      <input type="tel" name="phone" className="form-input" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">SERVICE / COURSE NEEDED</label>
                    <select name="service" className="form-select" required defaultValue="">
                      <option value="" disabled>Select the service or course you need…</option>
                      <optgroup label="NDT Inspection Methods">
                        <option>Ultrasonic Testing (UT)</option>
                        <option>Phased Array UT (PAUT)</option>
                        <option>Time of Flight Diffraction (TOFD)</option>
                        <option>Radiographic Testing (RT)</option>
                        <option>Digital / Computed Radiography (DR / CR)</option>
                        <option>Magnetic Particle Testing (MT)</option>
                        <option>Liquid Penetrant Testing (PT)</option>
                        <option>Visual Testing / Remote Visual (VT / RVI)</option>
                        <option>Ultrasonic Thickness / Corrosion Mapping</option>
                        <option>Guided Wave UT (LRUT / SRUT)</option>
                      </optgroup>
                      <optgroup label="Asset Integrity &amp; Inspection">
                        <option>Pipeline Integrity Assessment</option>
                        <option>Remaining Life Assessment</option>
                        <option>Corrosion / HTHA Analysis</option>
                        <option>Risk-Based Inspection (RBI)</option>
                        <option>Failure Investigation &amp; RCA</option>
                      </optgroup>
                      <optgroup label="Third-Party Inspection (TPI)">
                        <option>Vendor Surveillance</option>
                        <option>QA / QC Monitoring</option>
                        <option>Compliance Verification</option>
                        <option>Inspection Body Auditing</option>
                      </optgroup>
                      <optgroup label="Consulting &amp; Technical Auditing">
                        <option>ISO/IEC 17020 Compliance</option>
                        <option>Inspection Program Design</option>
                        <option>Procedure Development</option>
                        <option>Technical Audit</option>
                        <option>Lab Development &amp; Equipment</option>
                      </optgroup>
                      <optgroup label="Training &amp; Certification Courses">
                        <option>NDT Level I — Foundation</option>
                        <option>NDT Level II — Ultrasonic (UT)</option>
                        <option>NDT Level II — Phased Array (PAUT)</option>
                        <option>NDT Level II — Radiographic (RT)</option>
                        <option>NDT Level II — MT / PT / VT</option>
                        <option>NDT Level III — Advanced / Supervisory</option>
                        <option>PAUT / TOFD Specialist Course</option>
                        <option>Corporate / On-site Training Program</option>
                      </optgroup>
                      <optgroup label="Other">
                        <option>General enquiry / Not sure yet</option>
                      </optgroup>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">PROJECT DETAILS</label>
                    <textarea name="details" className="form-textarea" placeholder="Scope, code requirements, location, timeline..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    REQUEST INSPECTION / TRAINING
                    <span style={{ marginLeft: '8px', fontSize: '1.2rem', transform: 'rotate(45deg)' }}>&#9992;</span>
                  </button>

                  {sent ? (
                    <p className="form-footer-text" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                      Your email draft has opened in your mail app — press send and we'll reply within one business day.
                      If nothing opened, email us directly at <a href="mailto:info@ndeexperts.com" style={{ textDecoration: 'underline' }}>info@ndeexperts.com</a>.
                    </p>
                  ) : (
                    <p className="form-footer-text">
                      Sends to info@ndeexperts.com (cc tahir.nazir@ndeexperts.com) — replies within one business day.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

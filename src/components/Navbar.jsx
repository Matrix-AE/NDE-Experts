import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStickyNav from '../hooks/useStickyNav';
import logo from '../assets/logo/Logo1.png';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services ▾', dropdown: true },
  { to: '/projects', label: 'Projects' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/training', label: 'Training' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/publications', label: 'Publications' },
  { to: '/gallery', label: 'Gallery' },
];

const SERVICE_LINKS = [
  { to: '/services#ndt', label: 'NDT Inspection' },
  { to: '/services#integrity', label: 'Asset Integrity' },
  { to: '/services#tpi', label: 'Third-Party Inspection' },
  { to: '/services#training', label: 'Training & Certification' },
  { to: '/services#consulting', label: 'Consulting & Auditing' },
];

export default function Navbar() {
  const scrolled = useStickyNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="main-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="NDE Experts" style={{ height: '40px', width: 'auto', marginRight: '4px' }} />
          <div className="nav-logo-text">
            <span className="nav-logo-name">NDE Experts</span>
          </div>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <div className="nav-dropdown" key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link${pathname === link.to ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
                <div className="nav-dropdown-menu">
                  {SERVICE_LINKS.map((s) => (
                    <Link key={s.to} to={s.to} className="nav-dropdown-item">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link${pathname === link.to ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <Link to="/contact" className="nav-cta">
          Request Consultation
        </Link>

        <div
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          id="nav-burger"
          role="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} id="nav-mobile">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`nav-mobile-link${pathname === link.to ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {link.label.replace(' ▾', '')}
          </Link>
        ))}
        <Link to="/contact" className="nav-mobile-link" onClick={closeMenu}>
          Contact →
        </Link>
      </div>
    </nav>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useStickyNav from '../hooks/useStickyNav';
import logo from '../assets/logo/Logo1.png';

const PRIMARY_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services', dropdown: 'services' },
  { to: '/projects', label: 'Projects' },
  { to: '/expertise', label: 'Expertise' },
  { to: '/training', label: 'Training' },
];

const SERVICE_LINKS = [
  { to: '/services#ndt', label: 'NDT Inspection' },
  { to: '/services#integrity', label: 'Asset Integrity' },
  { to: '/services#tpi', label: 'Third-Party Inspection' },
  { to: '/services#training', label: 'Training & Certification' },
  { to: '/services#consulting', label: 'Consulting & Auditing' },
];

const MORE_LINKS = [
  { to: '/certifications', label: 'Certifications' },
  { to: '/publications', label: 'Publications' },
  { to: '/gallery', label: 'Gallery' },
];

const MOBILE_LINKS = [
  { to: '/', label: 'Home' },
  ...PRIMARY_LINKS.map(({ to, label }) => ({ to, label })),
  ...MORE_LINKS,
];

function DesktopDropdown({ label, to, links, active }) {
  return (
    <div className="nav-dropdown">
      {to ? (
        <Link to={to} className={`nav-link nav-link-parent${active ? ' active' : ''}`}>
          {label}<span className="nav-chevron" aria-hidden="true">⌄</span>
        </Link>
      ) : (
        <button className={`nav-link nav-link-parent${active ? ' active' : ''}`} type="button">
          {label}<span className="nav-chevron" aria-hidden="true">⌄</span>
        </button>
      )}
      <div className="nav-dropdown-menu">
        {links.map((item) => (
          <Link key={item.to} to={item.to} className="nav-dropdown-item">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const scrolled = useStickyNav();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const closeOnEscape = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <nav className={`nav${scrolled || menuOpen ? ' scrolled' : ''}`} id="main-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" aria-label="NDE Experts home" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="" className="nav-logo-image" />
          <div className="nav-logo-text">
            <span className="nav-logo-name">NDE Experts</span>
            <span className="nav-logo-title">Inspection · Integrity · Training</span>
          </div>
        </Link>

        <div className="nav-links">
          {PRIMARY_LINKS.map((link) =>
            link.dropdown ? (
              <DesktopDropdown key={link.to} label={link.label} to={link.to} links={SERVICE_LINKS} active={pathname === link.to} />
            ) : (
              <Link key={link.to} to={link.to} className={`nav-link${pathname === link.to ? ' active' : ''}`}>
                {link.label}
              </Link>
            ),
          )}
          <DesktopDropdown label="More" links={MORE_LINKS} active={MORE_LINKS.some((link) => pathname === link.to)} />
        </div>

        <Link to="/contact" className="nav-cta">Request consultation <span aria-hidden="true">→</span></Link>

        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`} id="nav-mobile">
        <div className="nav-mobile-kicker">Navigate</div>
        {MOBILE_LINKS.map((link) => (
          <Link key={link.to} to={link.to} className={`nav-mobile-link${pathname === link.to ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>
            {link.label}<span aria-hidden="true">→</span>
          </Link>
        ))}
        <Link to="/contact" className="nav-mobile-cta" onClick={() => setMenuOpen(false)}>Request consultation</Link>
      </div>
    </nav>
  );
}

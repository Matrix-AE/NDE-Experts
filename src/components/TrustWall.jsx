import { useState, useRef, useEffect } from 'react';
import { asset } from '../lib/asset';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Organizations Tahir Nazir has served / trained. Real brand logos live in
// /public/logos/ (Wikimedia sources); FFBL uses a clean monochrome
// placeholder mark until an official file is supplied. Any logo can be swapped
// by replacing its file with the same name.
const TRUST_ORGS = [
  { name: 'PIA', sub: 'Aviation', logo: '/logos/pia.png' },
  { name: 'PPL', sub: 'Oil & Gas', logo: '/logos/ppl.png' },
  { name: 'MPCL', sub: 'Exploration', logo: '/logos/mpcl.png' },
  { name: 'FFC', sub: 'Fertilizer', logo: '/logos/ffc.png' },
  { name: 'FFBL', sub: 'Fertilizer', logo: '/logos/ffbl.svg' },
  { name: 'SGS', sub: 'Inspection', logo: '/logos/sgs.png' },

];

function TrustLogo({ org }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="trust-card reveal">
      {ok ? (
        <img
          className="trust-logo"
          src={asset(org.logo)}
          alt={`${org.name} logo`}
          loading="lazy"
          onError={() => setOk(false)}
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

export default function TrustWall() {
  const scrollRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    let animationFrameId;

    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
        
        // Infinite loop logic: if scrolled to the end of the first set, reset
        if (
          scrollRef.current.scrollLeft >=
          scrollRef.current.scrollWidth / 2
        ) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="trust-wall-container">
      <button className="trust-nav-btn left" onClick={scrollLeft} aria-label="Scroll left">
        <FiChevronLeft />
      </button>

      <div className="trust-scroll" ref={scrollRef}>
        {/* Render the logos twice to create a seamless infinite loop */}
        {[...TRUST_ORGS, ...TRUST_ORGS].map((o, index) => (
          <TrustLogo org={o} key={`${o.name}-${index}`} />
        ))}
      </div>

      <button className="trust-nav-btn right" onClick={scrollRight} aria-label="Scroll right">
        <FiChevronRight />
      </button>
    </div>
  );
}

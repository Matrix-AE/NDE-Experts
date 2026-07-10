import { useState } from 'react';

// Organizations Tahir Nazir has served / trained. Real brand logos live in
// /public/logos/ (Wikimedia sources); FFBL & NCNDT use a clean monochrome
// placeholder mark until an official file is supplied. Any logo can be swapped
// by replacing its file with the same name.
export const TRUST_ORGS = [
  { name: 'PIA', sub: 'Aviation', logo: '/logos/pia.png' },
  { name: 'PPL', sub: 'Oil & Gas', logo: '/logos/ppl.png' },
  { name: 'MPCL', sub: 'Exploration', logo: '/logos/mpcl.png' },
  { name: 'FFC', sub: 'Fertilizer', logo: '/logos/ffc.png' },
  { name: 'FFBL', sub: 'Fertilizer', logo: '/logos/ffbl.svg' },
  { name: 'PAC', sub: 'Aeronautical', logo: '/logos/pac.png' },
  { name: 'NCNDT', sub: 'National Centre', logo: '/logos/ncndt.svg' },
  { name: 'SGS', sub: 'Inspection', logo: '/logos/sgs.png' },
  { name: 'PAEC', sub: 'Nuclear', logo: '/logos/paec.png' },
];

function TrustLogo({ org }) {
  const [ok, setOk] = useState(true);
  return (
    <div className="trust-card reveal">
      {ok ? (
        <img
          className="trust-logo"
          src={org.logo}
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
  return (
    <div className="trust-grid">
      {TRUST_ORGS.map((o) => (
        <TrustLogo org={o} key={o.name} />
      ))}
    </div>
  );
}

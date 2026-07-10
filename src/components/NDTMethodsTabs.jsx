import { useState } from 'react';
import './NDTMethodsTabs.css';

const NDT_METHODS = [
  { code: 'UT', name: 'Ultrasonic Testing', desc: 'Detection of internal flaws, cracks, and discontinuities', image: '/services/ut.png' },
  { code: 'PAUT', name: 'Phased Array UT', desc: 'Multi-angle beam scanning with OmniScan & Topaz32', image: '/services/paut.png' },
  { code: 'TOFD', name: 'Time of Flight Diffraction', desc: 'Precise defect sizing and weld inspection', image: '/services/tofd.png' },
  { code: 'RT', name: 'Radiographic Testing', desc: 'Conventional film and digital radiography', image: '/services/rt.png' },
  { code: 'DIR', name: 'Digital Industrial Radiography', desc: 'Real-time DR and computed tomography', image: '/services/dir.png' },
  { code: 'MT', name: 'Magnetic Particle Testing', desc: 'Surface and near-surface flaw detection', image: '/services/mt.png' },
  { code: 'PT', name: 'Liquid Penetrant Testing', desc: 'Surface-breaking discontinuity detection', image: '/services/lpt.png' },
  { code: 'VT', name: 'Visual Testing & RVI', desc: 'Remote visual inspection with advanced cameras', image: '/services/vt.png' },
  { code: 'UTM', name: 'Ultrasonic Thickness Measurement', desc: 'Corrosion monitoring and wall loss assessment', image: '/services/utm.png' }
];

export default function NDTMethodsTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const activeMethod = NDT_METHODS[activeTab];

  return (
    <div className="ndt-tabs-container reveal">
      {/* Left: Tab List */}
      <div className="ndt-tabs-list">
        {NDT_METHODS.map((method, index) => (
          <button
            key={method.code}
            className={`ndt-tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
          >
            <span className="ndt-tab-code">{method.code}</span>
            <span className="ndt-tab-name">{method.name}</span>
          </button>
        ))}
      </div>

      {/* Right: Display Panel */}
      <div className="ndt-tabs-panel">
        <div 
          className="ndt-panel-bg-image" 
          style={{ backgroundImage: `url(${activeMethod.image})` }}
        ></div>
        <div className="ndt-panel-overlay"></div>
        
        <div className="ndt-panel-content">
          <div className="ndt-panel-text">
            <div className="ndt-panel-code">{activeMethod.code}</div>
            <h3 className="ndt-panel-title">{activeMethod.name}</h3>
            <p className="ndt-panel-desc">{activeMethod.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

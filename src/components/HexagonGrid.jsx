import './HexagonGrid.css';

const INTEGRITY_ITEMS = [
  { 
    title: 'Pipeline Integrity Assessment', 
    sub: 'LRUT, SRUT, PAUT — comprehensive pipeline health evaluation',
    icon: '🛢️'
  },
  { 
    title: 'Remaining Life Assessment', 
    sub: 'Quantitative RLA using validated inspection data and fracture mechanics',
    icon: '⏳'
  },
  { 
    title: 'Corrosion Assessment', 
    sub: 'Thickness mapping, corrosion rate determination, trend analysis',
    icon: '🔬'
  },
  { 
    title: 'HTHA Inspection', 
    sub: 'Specialist HTHA detection and severity assessment for refinery equipment',
    icon: '🔥'
  },
  { 
    title: 'Failure Investigation & RCA', 
    sub: 'Systematic RCA with documented findings and remediation guidance',
    icon: '🔍'
  },
  { 
    title: 'PSI / ISI', 
    sub: 'Baseline and periodic inspections per applicable code requirements',
    icon: '📋'
  },
  { 
    title: 'Fitness-for-Service', 
    sub: 'API 579 / ASME FFS-1 assessments for continued safe operation',
    icon: '🛡️'
  }
];

export default function HexagonGrid() {
  return (
    <div className="hex-container reveal">
      <div className="hex-grid">
        {INTEGRITY_ITEMS.map((item, i) => (
          <div className="hex-wrapper" key={i}>
            <div className="hex-inner">
              
              {/* Front of Hexagon */}
              <div className="hex-front">
                <div className="hex-icon">{item.icon}</div>
                <div className="hex-title">{item.title}</div>
              </div>
              
              {/* Back of Hexagon */}
              <div className="hex-back">
                <div className="hex-back-content">
                  <div className="hex-back-title">{item.title}</div>
                  <div className="hex-back-desc">{item.sub}</div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

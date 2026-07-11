import { useState, useEffect } from 'react';
import { asset } from '../lib/asset';
import './SectorCarousel.css';

export default function SectorCarousel({ sectors }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sectors.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sectors.length]);

  return (
    <div className="coverflow-container reveal">
      <div className="coverflow-track">
        {sectors.map((sector, i) => {
          let offset = i - activeIndex;
          const total = sectors.length;
          
          // Normalize offset for a wrap-around effect
          // If total is 8, offsets can be from -3 to 4
          if (offset > Math.floor(total / 2)) offset -= total;
          if (offset < -Math.floor((total - 1) / 2)) offset += total;
          
          const absOffset = Math.abs(offset);
          const sign = Math.sign(offset);
          
          // CSS variables for 3D transforms
          const scale = 1 - (absOffset * 0.12);
          const translateX = offset * 220; 
          const translateZ = -absOffset * 150;
          const rotateY = sign * -30;
          const opacity = absOffset > 2 ? 0 : 1;
          const zIndex = 10 - absOffset;
          const isCenter = offset === 0;

          return (
            <div 
              key={sector.name}
              className={`coverflow-item ${isCenter ? 'active' : ''}`}
              style={{
                transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex,
                backgroundImage: `url(${asset(sector.image)})`
              }}
              onClick={() => setActiveIndex(i)}
            >
              <div className="coverflow-overlay">
                 <h3 className="coverflow-title">{sector.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

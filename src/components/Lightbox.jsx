import { useEffect } from 'react';

/**
 * Recreates the "Gallery lightbox" block from main.js.
 * Not used on the Home page (gallery.html wasn't part of this upload) —
 * wire it up on your Gallery page, e.g.:
 *
 *   const [active, setActive] = useState(null); // { src, alt } | null
 *   <div className="gallery-item"><img onClick={() => setActive({src, alt})} .../></div>
 *   <Lightbox item={active} onClose={() => setActive(null)} />
 */
export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="lightbox"
      style={{ display: 'flex' }}
      onClick={(e) => {
        if (e.target.id === 'lightbox') onClose();
      }}
    >
      <img id="lb-img" src={item.src} alt={item.alt} />
      <button id="lb-close" onClick={onClose}>
        ✕
      </button>
    </div>
  );
}

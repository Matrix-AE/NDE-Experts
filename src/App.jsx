import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Expertise from './pages/Expertise';
import Training from './pages/Training';
import Certifications from './pages/Certifications';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import usePageFadeIn from './hooks/usePageFadeIn';

// Every route change should land at the top of the page (unless a #hash
// deep-link was used, which the target page scrolls to itself).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  // App-wide effects that only need to run once, ever.
  usePageFadeIn();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="grid-bg"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/training" element={<Training />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

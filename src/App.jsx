import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
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
import MotionPage from './components/MotionPage';

// Every route change should land at the top of the page (unless a #hash
// deep-link was used, which the target page scrolls to itself).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <motion.div className="scroll-progress" aria-hidden="true" animate={{ scaleX: progress / 100 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.12 }} />;
}

function AnimatedRoutes() {
  const location = useLocation();
  const page = (Component) => <MotionPage><Component /></MotionPage>;
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={page(Home)} />
        <Route path="/about" element={page(About)} />
        <Route path="/services" element={page(Services)} />
        <Route path="/projects" element={page(Projects)} />
        <Route path="/expertise" element={page(Expertise)} />
        <Route path="/training" element={page(Training)} />
        <Route path="/certifications" element={page(Certifications)} />
        <Route path="/publications" element={page(Publications)} />
        <Route path="/gallery" element={page(Gallery)} />
        <Route path="/contact" element={page(Contact)} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // App-wide effects that only need to run once, ever.
  usePageFadeIn();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="grid-bg"></div>
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

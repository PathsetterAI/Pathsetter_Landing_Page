import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'framer-motion'
import Landing from './Landing'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'
import BookDemo from './pages/BookDemo'

gsap.registerPlugin(ScrollTrigger);

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
        <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/platform" element={<PageWrapper><Platform /></PageWrapper>} />
        <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
        <Route path="/book-demo" element={<PageWrapper><BookDemo /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    clarity.init('v5v0wra9z1');

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);

    // Sync Lenis with GSAP Ticker
    const gsapTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);
    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTicker);
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App

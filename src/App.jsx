import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { clarity } from 'react-microsoft-clarity'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const Landing = lazy(() => import('./Landing'))
const Blogs = lazy(() => import('./pages/Blogs'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Platform = lazy(() => import('./pages/Platform'))
const Solutions = lazy(() => import('./pages/Solutions'))
const BookDemo = lazy(() => import('./pages/BookDemo'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const Compare = lazy(() => import('./pages/Compare'))
const NotFound = lazy(() => import('./pages/NotFound'))

gsap.registerPlugin(ScrollTrigger);

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function PageFallback() {
  return <div className="min-h-screen bg-[#F4F4F7]" />;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Suspense fallback={<PageFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
          <Route path="/resources" element={<PageWrapper><Blogs /></PageWrapper>} />
          <Route path="/blogs" element={<PageWrapper><Blogs /></PageWrapper>} />
          <Route path="/compare" element={<PageWrapper><Compare /></PageWrapper>} />
          <Route path="/compare/:slug" element={<PageWrapper><Compare /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
          <Route path="/product" element={<PageWrapper><Platform /></PageWrapper>} />
          <Route path="/platform" element={<PageWrapper><Platform /></PageWrapper>} />
          <Route path="/who-its-for" element={<PageWrapper><Solutions /></PageWrapper>} />
          <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
          <Route path="/demo" element={<PageWrapper><BookDemo /></PageWrapper>} />
          <Route path="/book-demo" element={<PageWrapper><BookDemo /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
          {/* Catch-all. Must stay last: react-router matches in order. */}
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Defer Clarity initialization to prevent blocking initial render
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => clarity.init('v5v0wra9z1'));
    } else {
      setTimeout(() => clarity.init('v5v0wra9z1'), 2000);
    }

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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'
import Lenis from 'lenis'
import Landing from './Landing'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'
import BookDemo from './pages/BookDemo'


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
      smoothTouch: false, // keep native touch scrolling on mobile for performance
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Make lenis globally accessible for custom trigger scrolls
    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/book-demo" element={<BookDemo />} />
      </Routes>
    </Router>
  )
}

export default App

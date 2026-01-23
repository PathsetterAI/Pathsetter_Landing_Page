import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { clarity } from 'react-microsoft-clarity'
import Landing from './Landing'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'
import BookDemo from './pages/BookDemo'


function App() {
  useEffect(() => {
    clarity.init('v5v0wra9z1');
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

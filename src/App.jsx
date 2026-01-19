import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Platform from './pages/Platform'
import Solutions from './pages/Solutions'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
    </Router>
  )
}

export default App

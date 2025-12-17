import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import Blogs from './pages/Blogs'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App

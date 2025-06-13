import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TechStackBar from './components/TechStackBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <TechStackBar />
      </div>
    </Router>
  );
}

export default App; 
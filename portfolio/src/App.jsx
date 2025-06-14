import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import DynamicBackground from './components/DynamicBackground';

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh',
        position: 'relative',
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%)'
      }}>
        {/* <DynamicBackground /> */}
        
        {/* Navigation */}
        <nav style={{ 
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: 100,
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, #646cff, #747bff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              RS
            </div>
            
            <ul style={{ 
              listStyle: 'none', 
              display: 'flex', 
              gap: '30px', 
              padding: 0,
              margin: 0
            }}>
              <li>
                <Link 
                  to="/" 
                  style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(100, 108, 255, 0.2)';
                    e.target.style.color = '#646cff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/projects" 
                  style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(100, 108, 255, 0.2)';
                    e.target.style.color = '#646cff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(100, 108, 255, 0.2)';
                    e.target.style.color = '#646cff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
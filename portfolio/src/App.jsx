import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';

// Background options - easily switch between different effects
import DynamicBackground from './components/DynamicBackground'; // SLAM/Computer Vision effect
import GridBackground from './components/GridBackground';       // Simple RGB Grid effect

// Choose your background: 'slam' or 'grid'
const BACKGROUND_TYPE = 'slam';

function App() {
  // Select background component based on type
  const BackgroundComponent = BACKGROUND_TYPE === 'slam' ? DynamicBackground : GridBackground;
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh',
        position: 'relative',
        background: 'transparent'
      }}>
        <BackgroundComponent />
        
        {/* Left Sidebar Navigation */}
        <nav style={{ 
          position: 'fixed',
          top: '0',
          left: '0',
          width: '240px',
          height: '100vh',
          zIndex: 100,
          padding: '40px 20px',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(15px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Profile Photo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '120px',
              height: '120px',
              margin: '0 auto 20px auto',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.border = '2px solid rgba(136, 136, 136, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.border = '2px solid rgba(255, 255, 255, 0.1)';
            }}>
              <div style={{
                fontSize: '3rem',
                color: '#666666'
              }}>
                📸
              </div>
            </div>
          </Link>
          
          {/* Hello Text */}
          <div style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            fontWeight: '700',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
            marginBottom: '40px'
          }}>
            Hello
          </div>
          
          {/* Navigation Links */}
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column',
            gap: '15px', 
            padding: 0,
            margin: 0,
            flex: 1
          }}>
            <li>
              <Link 
                to="/about" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  display: 'block',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                  e.target.style.color = '#cccccc';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  display: 'block',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                  e.target.style.color = '#cccccc';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/cv" 
                style={{ 
                  color: '#ffffff', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Space Grotesk, sans-serif',
                  display: 'block',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                  e.target.style.color = '#cccccc';
                  e.target.style.transform = 'translateX(5px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'translateX(0)';
                }}
              >
                CV
              </Link>
            </li>
            <li style={{ position: 'relative' }}>
              <div
                onMouseEnter={() => setContactDropdownOpen(true)}
                onMouseLeave={() => setContactDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <Link 
                  to="/contact" 
                  style={{ 
                    color: '#ffffff', 
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    padding: '15px 20px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Space Grotesk, sans-serif',
                    display: 'block',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                    e.target.style.color = '#cccccc';
                    e.target.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = '#ffffff';
                    e.target.style.transform = 'translateX(0)';
                  }}
                >
                  Contact
                </Link>
                
                {/* Contact Dropdown */}
                {contactDropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    left: '100%',
                    top: '0',
                    marginLeft: '10px',
                    background: 'rgba(0, 0, 0, 0.9)',
                    backdropFilter: 'blur(15px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '15px',
                    minWidth: '180px',
                    zIndex: 1000
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}>
                      <a 
                        href="mailto:raghav@contineu.ai"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        📧 Email
                      </a>
                      <a 
                        href="https://x.com/038ac5a8b3364b7"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        🐦 Twitter
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/suryanraghav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        💼 LinkedIn
                      </a>
                      <a 
                        href="https://github.com/Spyder156"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        💻 GitHub
                      </a>
                      <a 
                        href="https://www.instagram.com/raghav.spyder/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        📷 Instagram
                      </a>
                      <a 
                        href="https://huggingface.co/Spyder156"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: '#cccccc',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Space Grotesk, sans-serif'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(136, 136, 136, 0.2)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = '#cccccc';
                        }}
                      >
                        🤗 HuggingFace
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>

          {/* Footer in Sidebar */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '0.8rem',
              color: '#888888',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '600'
            }}>
              © 2024 Raghav Suryan
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
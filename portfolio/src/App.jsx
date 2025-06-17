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
import FluidBackground from './components/FluidBackground';     // WebGL Fluid Simulation effect

// Choose your background: 'slam', 'grid', or 'fluid'
const BACKGROUND_TYPE = 'fluid';



function App() {
  // Select background component based on type
  const BackgroundComponent = BACKGROUND_TYPE === 'slam' ? DynamicBackground : 
                             BACKGROUND_TYPE === 'fluid' ? FluidBackground : 
                             GridBackground;
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  
  const handleContactMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    const timeout = setTimeout(() => {
      setContactDropdownOpen(true);
    }, 300); // Slower entrance delay
    setDropdownTimeout(timeout);
  };

  const handleContactMouseLeave = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    const timeout = setTimeout(() => {
      setContactDropdownOpen(false);
    }, 200); // Slower exit delay
    setDropdownTimeout(timeout);
  };
  
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
          padding: '30px 20px',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(15px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Profile Photo */}
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div style={{ 
              width: '100px',
              height: '100px',
              margin: '0 auto 15px auto',
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
                fontSize: '2.5rem',
                color: '#666666'
              }}>
                📸
              </div>
            </div>
          </Link>
          
          {/* Hello Text */}
          <div style={{
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: '700',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
            marginBottom: '25px'
          }}>
            Hello
          </div>
          
          {/* Navigation Links */}
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            flexDirection: 'column',
            gap: '8px', 
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
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '12px 20px',
                  borderRadius: '6px',
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
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '12px 20px',
                  borderRadius: '6px',
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
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '12px 20px',
                  borderRadius: '6px',
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
            <li>
              <div>
                <div
                  onMouseEnter={handleContactMouseEnter}
                  onMouseLeave={handleContactMouseLeave}
                >
                  <Link 
                    to="/contact" 
                    style={{ 
                      color: '#ffffff', 
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '600',
                      padding: '12px 20px',
                      borderRadius: '6px',
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
                  
                  {/* Contact Dropdown - Smooth slide-down animation */}
                  <div style={{
                    marginTop: '4px',
                    marginLeft: '20px',
                    paddingLeft: '15px',
                    maxHeight: contactDropdownOpen ? '300px' : '0px',
                    opacity: contactDropdownOpen ? 1 : 0,
                    overflow: 'hidden',
                    transform: contactDropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      paddingTop: '8px'
                    }}>
                      {[
                        { href: "mailto:raghav@contineu.ai", text: "Email" },
                        { href: "https://x.com/038ac5a8b3364b7", text: "Twitter" },
                        { href: "https://www.linkedin.com/in/suryanraghav/", text: "LinkedIn" },
                        { href: "https://github.com/Spyder156", text: "GitHub" },
                        { href: "https://www.instagram.com/raghav.spyder/", text: "Instagram" },
                        { href: "https://huggingface.co/Spyder156", text: "HuggingFace" }
                      ].map((link, index) => (
                        <a 
                          key={index}
                          href={link.href}
                          target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                          rel={link.href.startsWith('mailto') ? '' : 'noopener noreferrer'}
                          style={{
                            color: '#999999',
                            textDecoration: 'none',
                            fontSize: '0.85rem',
                            fontWeight: '500',
                            padding: '8px 12px',
                            borderRadius: '4px',
                            transition: 'all 0.3s ease',
                            fontFamily: 'Space Grotesk, sans-serif',
                            opacity: contactDropdownOpen ? 1 : 0,
                            transform: contactDropdownOpen ? 'translateX(0)' : 'translateX(-20px)',
                            transitionDelay: contactDropdownOpen ? `${index * 0.05}s` : '0s'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(136, 136, 136, 0.15)';
                            e.target.style.color = '#cccccc';
                            e.target.style.transform = 'translateX(5px)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = '#999999';
                            e.target.style.transform = 'translateX(0)';
                          }}
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
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
        <div style={{ 
          position: 'relative', 
          zIndex: 1,
          pointerEvents: 'none'
        }}>
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
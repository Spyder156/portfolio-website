import React, { useState, useEffect } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [secondSectionVisible, setSecondSectionVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts - made faster
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    // Scroll event listener
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Trigger second section animations when scrolled down
      if (currentScrollY > 400) {
        setSecondSectionVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ 
      minHeight: '200vh', // Make page scrollable
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      {/* First Section - Main Intro */}
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px 0 320px', // Increased margins for minimalistic feel
        position: 'relative'
      }}>
        {/* Header Section - Clean Minimalistic Layout */}
        <section style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 350px',
          gap: '120px', // Increased gap for minimalism
          alignItems: 'center'
        }}>
          {/* Left Content - Name and Info */}
          <div style={{
            transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Hypermodern greeting */}
            <div style={{
              fontSize: '0.75rem',
              color: '#666666',
              fontWeight: '400',
              marginBottom: '32px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              borderLeft: '2px solid #333333',
              paddingLeft: '16px'
            }}>
              Hello, I'm
            </div>
            
            {/* Name - larger and more prominent */}
            <h1 style={{ 
              fontSize: '4.5rem',
              fontWeight: '800',
              lineHeight: '0.9',
              marginBottom: '48px',
              color: '#ffffff',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.03em'
            }}>
              RAGHAV<br/>SURYAN
            </h1>
            
            {/* Title - much larger */}
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '300',
              lineHeight: '1.3',
              marginBottom: '48px',
              color: '#aaaaaa',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              ML Engineer & Researcher
            </h2>
            
            {/* Description - larger and more prominent */}
            <p style={{ 
              fontSize: '1.25rem',
              color: '#888888',
              lineHeight: '1.7',
              marginBottom: '64px',
              width: '100%',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.3px',
              paddingRight: '40px'
            }}>
              Specializing in computer vision, machine learning, and computer graphics through innovative research at CERN and beyond. Pushing the boundaries of artificial intelligence with cutting-edge solutions.
            </p>
            
            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px'
            }}>
              <a 
                href="/projects"
                style={{
                  padding: '18px 36px',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: '2px',
                  color: '#000000',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                View Work
              </a>
              
              <a 
                href="/contact"
                style={{
                  padding: '18px 36px',
                  background: 'transparent',
                  border: '1px solid #444444',
                  borderRadius: '2px',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#444444';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Right Content - Photo Area */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            transform: isLoaded ? 'translateX(0)' : 'translateX(50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}>
            <div style={{
              width: '320px',
              height: '400px',
              background: 'rgba(255, 255, 255, 0.01)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.target.style.transform = 'translateY(0)';
            }}>
              <div style={{
                textAlign: 'center',
                color: '#555555',
                fontFamily: 'Space Grotesk, sans-serif'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: '0.6' }}>📸</div>
                <div style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.5px' }}>Photo Placeholder</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Second Section - Skills & Experience */}
      <div style={{
        minHeight: '100vh',
        padding: '120px 40px 120px 320px',
        background: 'rgba(0, 0, 0, 0.02)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        transform: secondSectionVisible ? 'translateY(0)' : 'translateY(100px)',
        opacity: secondSectionVisible ? 1 : 0,
        transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Section Title */}
          <div style={{
            marginBottom: '120px',
            transform: secondSectionVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: secondSectionVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <h2 style={{
              fontSize: '2.25rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '16px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.02em'
            }}>
              Expertise
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#888888',
              fontWeight: '400',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px'
            }}>
              Technical skills and research focus
            </p>
          </div>

          {/* Tech Stack Section */}
          <section style={{
            marginBottom: '120px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '48px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px',
              transform: secondSectionVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: secondSectionVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}>
              Tech Stack
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px'
            }}>
              {[
                { name: 'Python', icon: '🐍', category: 'Core' },
                { name: 'PyTorch', icon: '🔥', category: 'ML' },
                { name: 'TensorFlow', icon: '🧠', category: 'ML' },
                { name: 'React', icon: '⚛️', category: 'Frontend' },
                { name: 'Three.js', icon: '🎮', category: 'Graphics' },
                { name: 'CUDA', icon: '💾', category: 'GPU' },
                { name: 'Node.js', icon: '🟢', category: 'Backend' },
                { name: 'C++', icon: '⚡', category: 'Systems' }
              ].map((tech, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.015)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '2px',
                    padding: '32px 24px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    transform: secondSectionVisible ? 'translateY(0)' : 'translateY(30px)',
                    opacity: secondSectionVisible ? 1 : 0,
                    transitionDelay: `${0.6 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '16px', opacity: '0.8' }}>{tech.icon}</div>
                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff', marginBottom: '8px', fontFamily: 'Space Grotesk, sans-serif' }}>{tech.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#666666', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '500' }}>{tech.category}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section style={{
            marginBottom: '120px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '48px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px',
              transform: secondSectionVisible ? 'translateX(0)' : 'translateX(50px)',
              opacity: secondSectionVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
            }}>
              Experience
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px'
            }}>
              {[
                {
                  title: 'CERN Research',
                  role: 'ML Researcher',
                  period: 'Current',
                  description: 'Advanced research in particle physics using machine learning and computer vision techniques.',
                  icon: '🔬'
                },
                {
                  title: 'AI Development',
                  role: 'ML Engineer',
                  period: 'Ongoing',
                  description: 'Building cutting-edge AI systems for computer vision and graphics applications.',
                  icon: '🤖'
                },
                {
                  title: 'Graphics Research',
                  role: 'Computer Graphics',
                  period: 'Current',
                  description: 'Developing innovative solutions in 3D graphics, rendering, and visualization.',
                  icon: '🎮'
                }
              ].map((exp, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.01)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '2px',
                    padding: '40px 32px',
                    transition: 'all 0.2s ease',
                    transform: secondSectionVisible ? 'translateY(0)' : 'translateY(40px)',
                    opacity: secondSectionVisible ? 1 : 0,
                    transitionDelay: `${1.4 + index * 0.2}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '24px', opacity: '0.7' }}>{exp.icon}</div>
                  <h4 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '8px',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}>
                    {exp.title}
                  </h4>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    fontWeight: '500',
                    marginBottom: '20px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px'
                  }}>
                    {exp.role} • {exp.period}
                  </div>
                  <p style={{
                    fontSize: '0.925rem',
                    color: '#aaaaaa',
                    lineHeight: '1.6',
                    fontWeight: '400',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.3px'
                  }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section style={{
            marginBottom: '120px'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '48px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px',
              transform: secondSectionVisible ? 'translateX(0)' : 'translateX(-50px)',
              opacity: secondSectionVisible ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 2s'
            }}>
              Research Interests
            </h3>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              {[
                'Computer Vision',
                'Machine Learning',
                'Deep Learning',
                'Computer Graphics',
                'Particle Physics',
                'CUDA Programming',
                'Neural Networks',
                'Data Science',
                'Research & Development'
              ].map((interest, index) => (
                <div 
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    padding: '12px 20px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.3px',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    transform: secondSectionVisible ? 'scale(1)' : 'scale(0.9)',
                    opacity: secondSectionVisible ? 1 : 0,
                    transitionDelay: `${2.2 + index * 0.1}s`
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                  }}
                >
                  {interest}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '80px 0',
            transform: secondSectionVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: secondSectionVisible ? 1 : 0,
            transition: 'all 1.3s cubic-bezier(0.4, 0, 0.2, 1) 3s'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '24px',
              color: '#ffffff',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Let's Collaborate
            </h2>
            
            <p style={{
              fontSize: '1rem',
              color: '#888888',
              marginBottom: '48px',
              lineHeight: '1.6',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.3px'
            }}>
              Interested in collaboration? Whether it's cutting-edge AI research, computer vision projects, 
              or revolutionary graphics systems, let's create something extraordinary together.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="/contact"
                style={{
                  padding: '16px 32px',
                  background: '#ffffff',
                  border: 'none',
                  borderRadius: '2px',
                  color: '#000000',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Start Project
              </a>
              
              <a 
                href="/projects"
                style={{
                  padding: '16px 32px',
                  background: 'transparent',
                  border: '1px solid #444444',
                  borderRadius: '2px',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#444444';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                View Work
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home; 
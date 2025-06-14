import React, { useState, useEffect } from 'react';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts - made faster
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 20px 40px 280px', // Added left padding for sidebar
      color: 'white',
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '20px',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            About Me
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#cccccc',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '700',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            Get to know the person behind the code and research
          </p>
        </div>

        {/* Content Section */}
        <div style={{
          display: 'grid',
          gap: '40px',
          gridTemplateColumns: '1fr',
          transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          {/* Placeholder Content Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '20px'
            }}>
              🚧
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              Coming Soon
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#cccccc',
              lineHeight: '1.6',
              fontWeight: '600',
              fontFamily: 'Space Grotesk, sans-serif',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              This page is under construction. I'll be adding detailed information about my background, 
              journey, interests, and experiences here soon. Stay tuned!
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {[
              { icon: '🎓', title: 'Education', value: 'TBD' },
              { icon: '🔬', title: 'Research', value: 'CERN' },
              { icon: '💼', title: 'Experience', value: 'TBD' },
              { icon: '🌍', title: 'Location', value: 'India' }
            ].map((stat, index) => (
              <div 
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(136, 136, 136, 0.1)',
                  borderRadius: '12px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${0.4 + index * 0.05}s`
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px)';
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.border = '1px solid rgba(136, 136, 136, 0.1)';
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: '800', 
                  color: '#ffffff', 
                  marginBottom: '5px',
                  fontFamily: 'Space Grotesk, sans-serif' 
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '0.9rem', 
                  color: '#888888', 
                  fontWeight: '700',
                  fontFamily: 'Space Grotesk, sans-serif' 
                }}>
                  {stat.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About; 
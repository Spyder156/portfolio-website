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
      padding: '120px 40px 40px 320px', // Added left padding for sidebar
      color: 'white',
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{ 
          marginBottom: '80px',
          transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '16px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            About Me
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#888888',
            fontWeight: '400',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px'
          }}>
            Get to know the person behind the code and research
          </p>
        </div>

        {/* Content Section */}
        <div style={{
          display: 'grid',
          gap: '48px',
          gridTemplateColumns: '1fr',
          transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          {/* Placeholder Content Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            padding: '64px 48px',
            textAlign: 'center',
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
              fontSize: '3rem',
              marginBottom: '32px',
              opacity: '0.6'
            }}>
              🚧
            </div>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '24px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.01em'
            }}>
              Coming Soon
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#aaaaaa',
              lineHeight: '1.6',
              fontWeight: '400',
              fontFamily: 'Space Grotesk, sans-serif',
              maxWidth: '500px',
              margin: '0 auto',
              letterSpacing: '0.3px'
            }}>
              This page is under construction. I'll be adding detailed information about my background, 
              journey, interests, and experiences here soon. Stay tuned!
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginTop: '48px'
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
                  background: 'rgba(255, 255, 255, 0.015)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '2px',
                  padding: '40px 24px',
                  textAlign: 'center',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  opacity: isLoaded ? 1 : 0,
                  transitionDelay: `${0.4 + index * 0.1}s`
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
                <div style={{ fontSize: '2.5rem', marginBottom: '16px', opacity: '0.7' }}>{stat.icon}</div>
                <div style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '8px',
                  fontFamily: 'Space Grotesk, sans-serif' 
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#666666', 
                  fontWeight: '500',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
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
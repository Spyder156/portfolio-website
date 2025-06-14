import React, { useState, useEffect } from 'react';

function CV() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
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
            Curriculum Vitae
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
            My academic and professional journey in ML engineering and research
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
              📄
            </div>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '20px',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              CV Coming Soon
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
              My detailed curriculum vitae including education, experience, publications, 
              and achievements will be available here soon. Stay tuned for updates!
            </p>
          </div>

          {/* Download Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '20px'
          }}>
            <button style={{
              padding: '15px 30px',
              background: 'linear-gradient(135deg, #666666, #777777)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(136, 136, 136, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}>
              📥 Download PDF
            </button>
            
            <button style={{
              padding: '15px 30px',
              background: 'transparent',
              border: '2px solid #888888',
              borderRadius: '8px',
              color: '#888888',
              fontSize: '1.1rem',
              fontWeight: '800',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#888888';
              e.target.style.color = '#ffffff';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#888888';
              e.target.style.transform = 'translateY(0)';
            }}>
              📧 Request Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV; 
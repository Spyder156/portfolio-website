import React, { useState, useEffect } from 'react';

function Home() {
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
      display: 'flex',
      flexDirection: 'column',
      padding: '120px 20px 40px 280px', // Added left padding for sidebar
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '1200px',
        margin: '0 auto',
        minHeight: '70vh',
        gap: '60px',
        flexWrap: 'wrap'
      }}>
        {/* Left Content */}
        <div style={{ 
          flex: '1', 
          minWidth: '400px',
          transform: isLoaded ? 'translateX(0)' : 'translateX(-100px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            fontSize: '1.4rem',
            color: '#888888',
            fontWeight: '700',
            marginBottom: '10px',
            fontFamily: 'Space Grotesk, sans-serif',
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
          }}>
            Hello, I'm
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            marginBottom: '20px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif'
          }}>
            RAGHAV<br/>SURYAN
          </h1>
          
          <div style={{
            fontSize: '1.2rem',
            color: '#888888',
            fontWeight: '900',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontFamily: 'Space Grotesk, sans-serif',
            transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            ML Engineer & Researcher
          </div>
          
          <p style={{ 
            fontSize: '1.4rem',
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '500px',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: '700',
            transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
          }}>
            Pushing the boundaries of <span style={{ color: '#888888', fontWeight: '900' }}>artificial intelligence</span> and 
            <span style={{ color: '#888888', fontWeight: '900' }}> computer graphics</span> through innovative research at CERN and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '50px',
            flexWrap: 'wrap',
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            <a 
              href="/projects"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #666666, #777777)',
                border: 'none',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '900',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(136, 136, 136, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              View My Work
            </a>
            
            <a 
              href="/contact"
              style={{
                padding: '16px 32px',
                background: 'transparent',
                border: '2px solid #888888',
                borderRadius: '8px',
                color: '#888888',
                fontSize: '1.1rem',
                fontWeight: '900',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer',
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
              }}
            >
              Get In Touch
            </a>
          </div>
          
          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s'
          }}>
            <span style={{ color: '#999999', fontSize: '0.9rem', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800' }}>Follow me:</span>
            
            <a href="https://github.com/Spyder156" target="_blank" rel="noopener noreferrer"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#888888'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              💻
            </a>
            
            <a href="https://www.linkedin.com/in/suryanraghav/" target="_blank" rel="noopener noreferrer"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#888888'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              💼
            </a>
            
            <a href="mailto:raghav@contineu.ai"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#888888'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              📧
            </a>
          </div>
        </div>
        
        {/* Right Content - Photo Area */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          maxWidth: '400px', 
          display: 'flex', 
          justifyContent: 'center',
          transform: isLoaded ? 'translateX(0)' : 'translateX(100px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
        }}>
          <div style={{
            width: '350px',
            height: '450px',
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(136, 136, 136, 0.2)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
            <div style={{
              textAlign: 'center',
              color: '#666666',
              fontFamily: 'Space Grotesk, sans-serif'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📸</div>
              <div style={{ fontSize: '1.2rem', fontWeight: '900' }}>Your Photo Here</div>
              <div style={{ fontSize: '0.9rem', marginTop: '10px', opacity: '0.7', fontWeight: '700' }}>Professional Portrait</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '80px auto 0 auto',
        width: '100%',
        transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
        opacity: isLoaded ? 1 : 0,
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#ffffff',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          Tech Stack
        </h2>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#cccccc',
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px auto',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: '700'
        }}>
          Cutting-edge technologies powering next-generation AI and graphics research
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '25px',
          marginBottom: '40px'
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
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(136, 136, 136, 0.1)',
                borderRadius: '12px',
                padding: '25px 15px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                opacity: isLoaded ? 1 : 0,
                transitionDelay: `${0.8 + index * 0.05}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.border = '1px solid rgba(136, 136, 136, 0.4)';
                e.target.style.boxShadow = '0 15px 35px rgba(136, 136, 136, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.border = '1px solid rgba(136, 136, 136, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{tech.icon}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '900', color: '#ffffff', marginBottom: '5px', fontFamily: 'Space Grotesk, sans-serif' }}>{tech.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#888888', textTransform: 'uppercase', letterSpacing: '1px', fontFamily: 'Space Grotesk, sans-serif', fontWeight: '800' }}>{tech.category}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section style={{
        maxWidth: '800px',
        margin: '80px auto 0 auto',
        textAlign: 'center',
        padding: '60px 40px',
        background: 'rgba(136, 136, 136, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(136, 136, 136, 0.2)',
        borderRadius: '20px',
        transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
        opacity: isLoaded ? 1 : 0,
        transition: 'all 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.9s'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          marginBottom: '20px',
          color: '#ffffff',
          fontFamily: 'Space Grotesk, sans-serif'
        }}>
          Let's Build the Future
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '40px',
          lineHeight: '1.6',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: '700'
        }}>
          Interested in collaboration? Whether it's cutting-edge AI research, computer vision projects, 
          or revolutionary graphics systems, let's create something extraordinary together.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/contact"
            style={{
              padding: '18px 40px',
              background: 'linear-gradient(135deg, #666666, #777777)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '900',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 40px rgba(136, 136, 136, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start a Project
          </a>
          
          <a 
            href="/projects"
            style={{
              padding: '18px 40px',
              background: 'transparent',
              border: '2px solid #ffffff',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '900',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#ffffff';
              e.target.style.color = '#000000';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#ffffff';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View Portfolio
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home; 
import React from 'react';

function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '120px 20px 40px', // Extra top padding for fixed navbar
    }}>
      {/* Hero Section */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ 
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #646cff, #747bff)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '4rem',
          margin: '0 auto 30px auto',
          boxShadow: '0 0 40px rgba(100, 108, 255, 0.4)'
        }}>
          👨‍💻
        </div>
        
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #646cff, #747bff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          fontFamily: 'Inter, sans-serif'
        }}>
          Raghav Suryan
        </h1>
        
        <p style={{ 
          fontSize: '1.3rem',
          color: '#cccccc',
          marginBottom: '15px',
          fontWeight: '400'
        }}>
          AI Researcher • Graphics Hacker • Systems Thinker
        </p>
        
        <p style={{ 
          fontSize: '1rem',
          color: '#999999',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Passionate about pushing the boundaries of artificial intelligence and computer graphics. 
          Building the future through innovative research and cutting-edge technology.
        </p>
      </div>

      {/* Contact Links */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        <a 
          href="mailto:raghav@example.com" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: 'rgba(100, 108, 255, 0.1)',
            border: '1px solid rgba(100, 108, 255, 0.3)',
            borderRadius: '25px',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.2)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.1)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>📧</span>
          Email
        </a>
        
        <a 
          href="https://linkedin.com/in/raghavsuryan" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: 'rgba(100, 108, 255, 0.1)',
            border: '1px solid rgba(100, 108, 255, 0.3)',
            borderRadius: '25px',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.2)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.1)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>💼</span>
          LinkedIn
        </a>
        
        <a 
          href="https://github.com/raghavsuryan" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 24px',
            background: 'rgba(100, 108, 255, 0.1)',
            border: '1px solid rgba(100, 108, 255, 0.3)',
            borderRadius: '25px',
            textDecoration: 'none',
            color: '#ffffff',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.2)';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 5px 15px rgba(100, 108, 255, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(100, 108, 255, 0.1)';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>💻</span>
          GitHub
        </a>
      </div>

      {/* Tech Stack */}
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '16px',
        padding: '30px',
        maxWidth: '800px',
        width: '100%'
      }}>
        <h3 style={{ 
          color: '#ffffff',
          marginBottom: '20px',
          fontSize: '1.5rem',
          fontWeight: '600'
        }}>
          Tech Stack
        </h3>
        <div style={{ 
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          padding: '10px 0',
          scrollbarWidth: 'none'
        }}>
          {[
            { name: 'React', icon: '⚛️' },
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '📜' },
            { name: 'TensorFlow', icon: '🧠' },
            { name: 'Three.js', icon: '🎮' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'PyTorch', icon: '🔥' },
            { name: 'CUDA', icon: '💾' }
          ].map((tech, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '80px',
                padding: '15px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '8px' }}>{tech.icon}</span>
              <span style={{ fontSize: '0.9rem', color: '#cccccc', textAlign: 'center' }}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home; 
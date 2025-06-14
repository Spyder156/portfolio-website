import React from 'react';

function Home() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '120px 20px 40px',
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
        <div style={{ flex: '1', minWidth: '400px' }}>
          <div style={{
            fontSize: '1.2rem',
            color: '#646cff',
            fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            ML Engineer & Researcher
          </div>
          
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #ffffff 0%, #646cff 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Inter, sans-serif'
          }}>
            Raghav<br/>Suryan
          </h1>
          
          <p style={{ 
            fontSize: '1.4rem',
            color: '#cccccc',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '500px'
          }}>
            Pushing the boundaries of <span style={{ color: '#646cff', fontWeight: '600' }}>artificial intelligence</span> and 
            <span style={{ color: '#646cff', fontWeight: '600' }}> computer graphics</span> through innovative research at CERN and beyond.
          </p>
          
          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/projects"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #646cff, #747bff)',
                border: 'none',
                borderRadius: '50px',
                color: '#ffffff',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 10px 30px rgba(100, 108, 255, 0.4)';
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
                border: '2px solid #646cff',
                borderRadius: '50px',
                color: '#646cff',
                fontSize: '1.1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#646cff';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#646cff';
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
            alignItems: 'center'
          }}>
            <span style={{ color: '#999999', fontSize: '0.9rem' }}>Follow me:</span>
            
            <a href="https://github.com/Spyder156" target="_blank" rel="noopener noreferrer"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#646cff'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              💻
            </a>
            
            <a href="https://www.linkedin.com/in/suryanraghav/" target="_blank" rel="noopener noreferrer"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#646cff'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              💼
            </a>
            
            <a href="mailto:raghav@contineu.ai"
               style={{ color: '#cccccc', fontSize: '1.5rem', transition: 'color 0.3s ease' }}
               onMouseEnter={(e) => e.target.style.color = '#646cff'}
               onMouseLeave={(e) => e.target.style.color = '#cccccc'}>
              📧
            </a>
          </div>
        </div>
        
        {/* Right Content - Stats/Info Cards */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '500px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {/* Research Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 108, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 20px',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🔬</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#646cff', marginBottom: '5px' }}>CERN</div>
              <div style={{ fontSize: '0.9rem', color: '#cccccc' }}>Research</div>
            </div>
            
            {/* AI/ML Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 108, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 20px',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🧠</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#646cff', marginBottom: '5px' }}>AI/ML</div>
              <div style={{ fontSize: '0.9rem', color: '#cccccc' }}>Engineering</div>
            </div>
            
            {/* Graphics Card */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(100, 108, 255, 0.2)',
              borderRadius: '20px',
              padding: '30px 20px',
              textAlign: 'center',
              transition: 'transform 0.3s ease',
              gridColumn: 'span 2'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🎮</div>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#646cff', marginBottom: '5px' }}>Computer Graphics</div>
              <div style={{ fontSize: '0.9rem', color: '#cccccc' }}>Systems & Visualization</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '80px auto 0 auto',
        width: '100%'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #646cff, #747bff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Tech Arsenal
        </h2>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          color: '#cccccc',
          marginBottom: '50px',
          maxWidth: '600px',
          margin: '0 auto 50px auto'
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
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(100, 108, 255, 0.1)',
                borderRadius: '15px',
                padding: '25px 15px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px)';
                e.target.style.border = '1px solid rgba(100, 108, 255, 0.4)';
                e.target.style.boxShadow = '0 15px 35px rgba(100, 108, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.border = '1px solid rgba(100, 108, 255, 0.1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{tech.icon}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#ffffff', marginBottom: '5px' }}>{tech.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#646cff', textTransform: 'uppercase', letterSpacing: '1px' }}>{tech.category}</div>
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
        background: 'rgba(100, 108, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(100, 108, 255, 0.2)',
        borderRadius: '30px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '20px',
          color: '#ffffff'
        }}>
          Let's Build the Future
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#cccccc',
          marginBottom: '40px',
          lineHeight: '1.6'
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
              background: 'linear-gradient(135deg, #646cff, #747bff)',
              border: 'none',
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 40px rgba(100, 108, 255, 0.4)';
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
              borderRadius: '50px',
              color: '#ffffff',
              fontSize: '1.1rem',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'inline-block'
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
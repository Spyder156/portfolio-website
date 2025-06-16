import React, { useState, useEffect, useRef } from 'react';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    expertise: false,
    techStack: false,
    experience: false,
    interests: false,
    cta: false
  });

  const sectionsRef = useRef({});

  useEffect(() => {
    // Trigger initial animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Smooth scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    // Intersection Observer for smooth section reveals
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const sectionName = entry.target.dataset.section;
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setVisibleSections(prev => ({
            ...prev,
            [sectionName]: true
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0, 0.2, 0.5, 0.8],
      rootMargin: '-10% 0px -10% 0px'
    });

    // Observe all sections
    Object.values(sectionsRef.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Space Grotesk, sans-serif'
    }}>
      {/* Hero Section */}
      <section 
        ref={el => sectionsRef.current.hero = el}
        data-section="hero"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '0 40px 0 320px',
          position: 'relative',
          transform: `translateY(${scrollProgress * -50}px)`,
          opacity: 1 - scrollProgress * 0.3
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 350px',
          gap: '120px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div style={{
            transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <div style={{
              fontSize: '1.5rem',
              color: '#aaaaaa',
              fontWeight: '700',
              marginBottom: '-20px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.5px',
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}>
              Hello, I'm
            </div>
            
            <h1 style={{ 
              fontSize: '4.5rem',
              fontWeight: '800',
              lineHeight: '0.9',
              marginBottom: '48px',
              color: '#ffffff',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.03em',
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}>
              RAGHAV<br/>SURYAN
            </h1>
            
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: '300',
              lineHeight: '1.3',
              marginBottom: '48px',
              color: '#aaaaaa',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
            }}>
              ML Engineer & Researcher
            </h2>
            
            <p style={{ 
              fontSize: '1.25rem',
              color: '#888888',
              lineHeight: '1.7',
              marginBottom: '64px',
              width: '100%',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.3px',
              paddingRight: '40px',
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
            }}>
              I'm a curious guy with deep love for working on <strong>fundamental problems</strong>, whether they be in <strong>AI/ML/DL</strong> or the world of <strong>physics</strong> and <strong>mathematics</strong>.<br />
              I specialize in <strong>computer vision</strong>, <strong>machine learning</strong>, and <strong>computer graphics</strong>, and I'm motivated to build systems that are fast, and elegantly engineered.<br />
              This space is a window into my projects, ideas, and interests. If you share my passions or have an idea for collaboration, <strong>I'd love to connect</strong>.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              opacity: isLoaded ? 1 : 0,
              transition: 'all 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.9s'
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
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f0f0';
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0) scale(1)';
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
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'inline-block',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#ffffff';
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#444444';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'transparent';
                }}
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Right Content - Photo */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            transform: isLoaded ? 'translateX(0) rotate(0deg)' : 'translateX(100px) rotate(3deg)',
            opacity: isLoaded ? 1 : 0,
            transition: 'all 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
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
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.target.style.transform = 'translateY(-8px) rotate(-1deg)';
              e.target.style.background = 'rgba(255, 255, 255, 0.02)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.target.style.transform = 'translateY(0) rotate(0deg)';
              e.target.style.background = 'rgba(255, 255, 255, 0.01)';
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
        </div>
      </section>

      {/* Expertise Section */}
      <section 
        ref={el => sectionsRef.current.expertise = el}
        data-section="expertise"
        style={{
          minHeight: '60vh',
          padding: '120px 40px 60px 320px',
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.03) 100%)`,
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          transform: visibleSections.expertise ? 'translateY(0)' : 'translateY(80px)',
          opacity: visibleSections.expertise ? 1 : 0,
          transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '24px',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase'
            }}>
              Expertise
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#888888',
              fontWeight: '400',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '0.3px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Technical skills and research focus
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section 
        ref={el => sectionsRef.current.techStack = el}
        data-section="techStack"
        style={{
          padding: '80px 40px 80px 320px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '60px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px',
            textAlign: 'center',
            transform: visibleSections.techStack ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.techStack ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}>
            Tech Stack
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px'
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
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  padding: '40px 24px',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  transform: visibleSections.techStack ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.9)',
                  opacity: visibleSections.techStack ? 1 : 0,
                  transitionDelay: `${0.4 + index * 0.1}s`,
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-12px) scale(1.05)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '20px', 
                  opacity: '0.8',
                  transition: 'transform 0.3s ease'
                }}>{tech.icon}</div>
                <div style={{ 
                  fontSize: '1.1rem', 
                  fontWeight: '600', 
                  color: '#ffffff', 
                  marginBottom: '8px', 
                  fontFamily: 'Space Grotesk, sans-serif' 
                }}>{tech.name}</div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#666666', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  fontFamily: 'Space Grotesk, sans-serif', 
                  fontWeight: '500' 
                }}>{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        ref={el => sectionsRef.current.experience = el}
        data-section="experience"
        style={{
          padding: '120px 40px 120px 320px',
          background: 'rgba(0, 0, 0, 0.02)'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '60px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px',
            textAlign: 'center',
            transform: visibleSections.experience ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.experience ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}>
            Experience
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '40px'
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
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '48px 40px',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: visibleSections.experience ? 'translateY(0) rotateX(0deg)' : 'translateY(80px) rotateX(10deg)',
                  opacity: visibleSections.experience ? 1 : 0,
                  transitionDelay: `${0.4 + index * 0.2}s`,
                  backdropFilter: 'blur(10px)',
                  perspective: '1000px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.target.style.transform = 'translateY(-12px) rotateX(-2deg) scale(1.02)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.04)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.02)';
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '24px', opacity: '0.7' }}>{exp.icon}</div>
                <h4 style={{
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '12px',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  {exp.title}
                </h4>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#666666',
                  fontWeight: '500',
                  marginBottom: '24px',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px'
                }}>
                  {exp.role} • {exp.period}
                </div>
                <p style={{
                  fontSize: '1rem',
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
        </div>
      </section>

      {/* Research Interests */}
      <section 
        ref={el => sectionsRef.current.interests = el}
        data-section="interests"
        style={{
          padding: '120px 40px 120px 320px'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '60px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px',
            transform: visibleSections.interests ? 'translateY(0)' : 'translateY(50px)',
            opacity: visibleSections.interests ? 1 : 0,
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            Research Interests
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
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
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '25px',
                  padding: '16px 24px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.3px',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  transform: visibleSections.interests ? 'scale(1) rotate(0deg)' : 'scale(0.8) rotate(5deg)',
                  opacity: visibleSections.interests ? 1 : 0,
                  transitionDelay: `${0.2 + index * 0.1}s`,
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.transform = 'scale(1.05) rotate(-1deg)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.06)';
                  e.target.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        ref={el => sectionsRef.current.cta = el}
        data-section="cta"
        style={{
          padding: '120px 40px 120px 320px',
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 100%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          transform: visibleSections.cta ? 'translateY(0)' : 'translateY(80px)',
          opacity: visibleSections.cta ? 1 : 0,
          transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '32px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.02em'
          }}>
            Let's Collaborate
          </h2>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#888888',
            marginBottom: '60px',
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
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/contact"
              style={{
                padding: '20px 40px',
                background: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                color: '#000000',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-block',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#f0f0f0';
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start Project
            </a>
            
            <a 
              href="/projects"
              style={{
                padding: '20px 40px',
                background: 'transparent',
                border: '1px solid #444444',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '0.9rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-block',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#ffffff';
                e.target.style.transform = 'translateY(-4px) scale(1.05)';
                e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#444444';
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.background = 'transparent';
                e.target.style.boxShadow = 'none';
              }}
            >
              View Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 
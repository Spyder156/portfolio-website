import React, { useState, useEffect } from 'react';

function Projects() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "CERN Particle Physics Research",
      description: "Advanced machine learning algorithms for particle detection and analysis using computer vision techniques at CERN.",
      tech: ["Python", "PyTorch", "Computer Vision", "Particle Physics"],
      status: "Ongoing",
      icon: "🔬"
    },
    {
      id: 2,
      title: "AI-Powered Graphics Engine",
      description: "Real-time graphics rendering engine with machine learning optimization for performance and quality enhancement.",
      tech: ["C++", "CUDA", "Three.js", "Deep Learning"],
      status: "Development",
      icon: "🎮"
    },
    {
      id: 3,
      title: "Computer Vision Framework",
      description: "Custom computer vision framework for real-time object detection and tracking with neural network integration.",
      tech: ["Python", "OpenCV", "TensorFlow", "Neural Networks"],
      status: "Completed",
      icon: "👁️"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with interactive 3D background effects and smooth animations built with React.",
      tech: ["React", "Three.js", "Vite", "Tailwind CSS"],
      status: "Live",
      icon: "🌐"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 40px 40px 320px',
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
            Projects
          </h1>
          <p style={{
            fontSize: '1rem',
            color: '#888888',
            fontWeight: '400',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px'
          }}>
            Showcasing my work in AI, machine learning, and computer graphics
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '32px'
        }}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '2px',
                padding: '48px 32px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                opacity: isLoaded ? 1 : 0,
                transitionDelay: `${0.2 + index * 0.15}s`
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.target.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              {/* Project Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '24px'
              }}>
                <div style={{ fontSize: '2.5rem', opacity: '0.7' }}>{project.icon}</div>
                <div style={{
                  background: project.status === 'Live' ? 'rgba(34, 197, 94, 0.1)' : 
                            project.status === 'Completed' ? 'rgba(59, 130, 246, 0.1)' :
                            'rgba(251, 191, 36, 0.1)',
                  border: `1px solid ${project.status === 'Live' ? 'rgba(34, 197, 94, 0.3)' : 
                                     project.status === 'Completed' ? 'rgba(59, 130, 246, 0.3)' :
                                     'rgba(251, 191, 36, 0.3)'}`,
                  borderRadius: '2px',
                  padding: '6px 12px',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: project.status === 'Live' ? '#22c55e' : 
                        project.status === 'Completed' ? '#3b82f6' : '#fbbf24',
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  {project.status}
                </div>
              </div>

              {/* Project Content */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '16px',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '-0.01em',
                lineHeight: '1.3'
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '0.925rem',
                color: '#aaaaaa',
                lineHeight: '1.6',
                marginBottom: '32px',
                fontWeight: '400',
                fontFamily: 'Space Grotesk, sans-serif',
                letterSpacing: '0.3px'
              }}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '32px'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '2px',
                      padding: '8px 12px',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: '#ffffff',
                      fontFamily: 'Space Grotesk, sans-serif',
                      letterSpacing: '0.3px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '12px'
              }}>
                <button
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '2px',
                    padding: '12px 20px',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.12)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  View Details
                </button>
                
                {project.status === 'Live' && (
                  <button
                    style={{
                      background: '#ffffff',
                      border: 'none',
                      borderRadius: '2px',
                      padding: '12px 20px',
                      color: '#000000',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
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
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          marginTop: '120px',
          padding: '80px 0',
          transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '24px',
            color: '#ffffff',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.01em'
          }}>
            Interested in Collaboration?
          </h2>
          
          <p style={{
            fontSize: '1rem',
            color: '#888888',
            marginBottom: '48px',
            lineHeight: '1.6',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: '400',
            maxWidth: '600px',
            margin: '0 auto 48px',
            letterSpacing: '0.3px'
          }}>
            I'm always open to discussing new projects, innovative ideas, and opportunities 
            to push the boundaries of technology together.
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
              Get In Touch
            </a>
            
            <a 
              href="https://github.com/Spyder156"
              target="_blank"
              rel="noopener noreferrer"
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
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 
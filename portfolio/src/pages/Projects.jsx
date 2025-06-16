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
      image: "/images/cern-project.jpg", // You'll upload this
      github: "https://github.com/yourusername/cern-research",
      demo: null
    },
    {
      id: 2,
      title: "AI-Powered Graphics Engine",
      description: "Real-time graphics rendering engine with machine learning optimization for performance and quality enhancement.",
      tech: ["C++", "CUDA", "Three.js", "Deep Learning"],
      status: "Development",
      image: "/images/graphics-engine.jpg", // You'll upload this
      github: "https://github.com/yourusername/graphics-engine",
      demo: null
    },
    {
      id: 3,
      title: "Computer Vision Framework",
      description: "Custom computer vision framework for real-time object detection and tracking with neural network integration.",
      tech: ["Python", "OpenCV", "TensorFlow", "Neural Networks"],
      status: "Completed",
      image: "/images/computer-vision.jpg", // You'll upload this
      github: "https://github.com/yourusername/cv-framework",
      demo: "https://cv-demo.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with interactive 3D background effects and smooth animations built with React.",
      tech: ["React", "Three.js", "Vite", "Tailwind CSS"],
      status: "Live",
      image: "/images/portfolio.jpg", // You'll upload this
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.com"
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
          textAlign: 'center',
          transform: isLoaded ? 'translateY(0)' : 'translateY(-50px)',
          opacity: isLoaded ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h1 style={{
            fontSize: '4.5rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '24px',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '-0.03em',
            textTransform: 'uppercase'
          }}>
            Projects
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#888888',
            fontWeight: '400',
            fontFamily: 'Space Grotesk, sans-serif',
            letterSpacing: '0.3px',
            maxWidth: '600px',
            margin: '0 auto'
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
              className="project-card"
              style={{
                position: 'relative',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                transform: isLoaded ? 'translateY(0)' : 'translateY(50px)',
                opacity: isLoaded ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${0.2 + index * 0.15}s`
              }}
            >
              {/* Project Image */}
              <div 
                className="project-image"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: '#1a1a1a', // Fallback color
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {/* Placeholder if no image */}
                <div style={{
                  textAlign: 'center',
                  color: '#666666',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: '0.6' }}>📸</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '0.5px' }}>
                    Upload Project Image
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div 
                className="project-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(3px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '24px',
                  opacity: 0,
                  clipPath: 'inset(100% 0 0 0)',
                  transition: 'opacity 0.4s ease, clip-path 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  pointerEvents: 'none'
                }}
              >
                {/* Centered Content */}
                <div style={{ 
                  textAlign: 'center', 
                  maxWidth: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',  
                    color: '#ffffff',
                    marginBottom: '12px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '-0.02em',
                    lineHeight: '1.2',
                    textAlign: 'center'
                  }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#cccccc',
                    lineHeight: '1.4',
                    marginBottom: '16px',
                    fontWeight: '400',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.3px',
                    textAlign: 'center',
                    maxWidth: '95%'
                  }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div style={{
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}>
                    <p style={{
                      fontSize: '0.75rem',
                      color: '#aaaaaa',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '400',
                      letterSpacing: '0.5px',
                      lineHeight: '1.3'
                    }}>
                      {project.tech.join(' • ')}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    justifyContent: 'center'
                  }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          border: '1px solid rgba(255, 255, 255, 0.25)',
                          borderRadius: '4px',
                          padding: '8px 16px',
                          color: '#ffffff',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          fontFamily: 'Space Grotesk, sans-serif',
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.25)';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                      >
                        GitHub
                      </a>
                    )}
                    
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: '#ffffff',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '8px 16px',
                          color: '#000000',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          textDecoration: 'none',
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
                      </a>
                    )}
                  </div>
                </div>
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

      {/* Add custom CSS for hover effects */}
      <style>{`
        .project-card:hover .project-overlay {
          opacity: 1 !important;
          clip-path: inset(0 0 0 0) !important;
          pointer-events: auto !important;
        }
        
        .project-card:hover .project-image {
          transform: scale(1.03) !important;
        }
        
        .project-overlay {
          transition: opacity 0.4s ease, clip-path 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .project-image {
          transition: transform 0.3s ease;
        }
        
        /* Smooth hover trigger */
        .project-card {
          transition: all 0.2s ease;
        }
        
        .project-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default Projects; 
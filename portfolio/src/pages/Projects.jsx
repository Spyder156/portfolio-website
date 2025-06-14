import React from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 20px 40px',
      color: 'white',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: '700',
        background: 'linear-gradient(135deg, #646cff, #747bff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px'
      }}>
        My Projects
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#cccccc',
        marginBottom: '60px',
        maxWidth: '600px',
        margin: '0 auto 60px auto',
        lineHeight: '1.6'
      }}>
        Exploring the intersection of AI, graphics, and systems through innovative projects
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '30px', 
        justifyContent: 'center', 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {projects.map((project, index) => (
          <Link 
            key={index} 
            to={project.link} 
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '30px',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(100, 108, 255, 0.2)';
              e.currentTarget.style.border = '1px solid rgba(100, 108, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.1)';
            }}
            >
              {/* Project Image Placeholder */}
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, #646cff, #747bff)',
                borderRadius: '10px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                {index === 0 ? '🧠' : index === 1 ? '🎮' : '💻'}
              </div>
              
              <h2 style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '15px'
              }}>
                {project.title}
              </h2>
              
              <p style={{
                color: '#cccccc',
                lineHeight: '1.6',
                fontSize: '1rem',
                flex: '1',
                marginBottom: '20px'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 'auto'
              }}>
                <span style={{
                  color: '#646cff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  Learn More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects; 
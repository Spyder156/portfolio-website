import React from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        {projects.map((project, index) => (
          <Link key={index} to={project.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid white',
              padding: '20px',
              width: '300px',
              textAlign: 'center',
              transition: 'transform 0.2s',
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {/* You would have an <img src={project.coverImage} /> here */}
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects; 
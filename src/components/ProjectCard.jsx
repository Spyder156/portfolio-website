import { useState } from 'react';
import { motion } from 'framer-motion';

export function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl aspect-video"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Project image or preview */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.src = `https://via.placeholder.com/400x225?text=${project.title.charAt(0)}`;
        }}
      />
      
      {/* Overlay that appears on hover */}
      <motion.div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex flex-col justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm md:text-base text-gray-300 mb-4">{project.description}</p>
        
        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs bg-secondary/80 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex space-x-4 mt-auto">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              className="text-sm flex items-center text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Live Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              className="text-sm flex items-center text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard; 
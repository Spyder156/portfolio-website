import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import BackgroundMesh from '../components/BackgroundMesh';
import ProjectCard from '../components/ProjectCard';

// Sample project data - in a real app, this would come from an API or CMS
const projectsData = [
  {
    id: 1,
    title: 'Neural Style Transfer',
    description: 'A deep learning model that applies the style of one image to the content of another using convolutional neural networks.',
    image: '/projects/neural-style.jpg',
    technologies: ['PyTorch', 'Python', 'CNN'],
    liveUrl: 'https://example.com/neural-style',
    repoUrl: 'https://github.com/raghavsuryan/neural-style',
  },
  {
    id: 2,
    title: 'Interactive Fluid Simulation',
    description: 'Real-time fluid simulation using WebGL shaders with interactive controls for viscosity and velocity.',
    image: '/projects/fluid.jpg',
    technologies: ['WebGL', 'GLSL', 'JavaScript'],
    liveUrl: 'https://example.com/fluid-sim',
    repoUrl: 'https://github.com/raghavsuryan/fluid-sim',
  },
  {
    id: 3,
    title: 'AI Voice Assistant',
    description: 'A voice-controlled assistant using natural language processing to answer questions and perform tasks.',
    image: '/projects/voice-assistant.jpg',
    technologies: ['TensorFlow', 'NLP', 'React'],
    liveUrl: 'https://example.com/voice-assistant',
    repoUrl: 'https://github.com/raghavsuryan/voice-assistant',
  },
  {
    id: 4,
    title: 'Ray Marching Renderer',
    description: 'A distance field renderer using ray marching techniques for realistic 3D scenes.',
    image: '/projects/ray-marching.jpg',
    technologies: ['CUDA', 'C++', 'OpenGL'],
    repoUrl: 'https://github.com/raghavsuryan/ray-marching',
  },
  {
    id: 5,
    title: 'ML Model Visualization',
    description: 'Interactive visualization tool for exploring and understanding machine learning models.',
    image: '/projects/ml-viz.jpg',
    technologies: ['D3.js', 'React', 'Python'],
    liveUrl: 'https://example.com/ml-viz',
    repoUrl: 'https://github.com/raghavsuryan/ml-viz',
  },
  {
    id: 6,
    title: 'Procedural Terrain Generator',
    description: 'Generates realistic 3D terrains using procedural noise algorithms and advanced erosion simulation.',
    image: '/projects/terrain.jpg',
    technologies: ['Unity', 'C#', 'Shaders'],
    repoUrl: 'https://github.com/raghavsuryan/terrain-gen',
  },
];

export function Projects() {
  return (
    <div className="relative min-h-screen pt-24 pb-24">
      {/* 3D background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.4} />
            <BackgroundMesh />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={false} 
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Projects grid */}
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects; 
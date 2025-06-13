import { motion } from 'framer-motion';

// Array of technologies with their names and icons
const technologies = [
  { name: 'React', icon: 'react.svg' },
  { name: 'Three.js', icon: 'threejs.svg' },
  { name: 'TensorFlow', icon: 'tensorflow.svg' },
  { name: 'PyTorch', icon: 'pytorch.svg' },
  { name: 'Python', icon: 'python.svg' },
  { name: 'JavaScript', icon: 'javascript.svg' },
  { name: 'TypeScript', icon: 'typescript.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'CUDA', icon: 'cuda.svg' },
  { name: 'C++', icon: 'cpp.svg' },
];

export function TechStackBar() {
  return (
    <motion.div 
      className="fixed bottom-0 left-0 w-full px-4 py-3 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="card px-4 py-3">
        <h3 className="text-center text-sm mb-2 text-gray-400">TECH STACK</h3>
        <div className="flex justify-center space-x-6 overflow-x-auto py-2 px-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 mb-1 flex items-center justify-center">
                <img 
                  src={`/tech/${tech.icon}`} 
                  alt={tech.name} 
                  className="max-w-full max-h-full"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/40?text=' + tech.name.charAt(0);
                  }}
                />
              </div>
              <span className="text-xs text-gray-300">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default TechStackBar; 
import { motion } from 'framer-motion';

export function HomeCard() {
  return (
    <motion.div 
      className="card floating w-full max-w-xl p-8 mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-accent/20">
          <img 
            src="/profile.jpg" 
            alt="Raghav Suryan" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/150?text=RS';
            }}
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Raghav Suryan</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          AI Researcher • Graphics Hacker • Systems Thinker
        </p>
        
        <div className="flex space-x-4 mb-8">
          <a 
            href="mailto:contact@raghavsuryan.com" 
            className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors duration-300"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a 
            href="https://github.com/raghavsuryan" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/raghavsuryan" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-secondary rounded-full hover:bg-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-gray-300 mb-4">
            I'm passionate about building intelligent systems, graphics programming,
            and solving complex problems at the intersection of AI and computer graphics.
          </p>
          <a
            href="/resume.pdf"
            className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default HomeCard; 
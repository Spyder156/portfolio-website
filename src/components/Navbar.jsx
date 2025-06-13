import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-accent' : 'text-white hover:text-accent';
  };
  
  return (
    <nav className="fixed w-full top-0 z-50 px-4 md:px-8 py-4">
      <div className="card px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Raghav Suryan</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className={`${isActive('/')} transition-colors duration-300`}>Home</Link>
          <Link to="/projects" className={`${isActive('/projects')} transition-colors duration-300`}>Projects</Link>
        </div>
      </div>
      
      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="card mt-2 px-6 py-4 md:hidden flex flex-col space-y-4">
          <Link 
            to="/" 
            className={`${isActive('/')} transition-colors duration-300`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`${isActive('/projects')} transition-colors duration-300`}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 
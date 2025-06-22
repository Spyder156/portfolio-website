import React, { useState, useEffect } from 'react';

const FluidBackground = ({ onReady }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isWebGLReady, setIsWebGLReady] = useState(false);

  useEffect(() => {
    // Listen for WebGL ready message
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'webgl-ready') {
        console.log('WebGL is fully ready for interactions');
        setIsWebGLReady(true);
        onReady?.(true);
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Fallback timeout in case message doesn't arrive
    const fallbackTimer = setTimeout(() => {
      if (!isWebGLReady) {
        console.log('WebGL ready fallback triggered');
        setIsWebGLReady(true);
        onReady?.(true);
      }
    }, 4000);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, [isWebGLReady, onReady]);

  const handleLoad = () => {
    console.log('WebGL iframe loaded, waiting for ready signal');
    setIsLoaded(true);
  };

  return (
    <>
      {/* WebGL iframe - ALWAYS has pointer events and is ready for interactions */}
      <iframe
        src="/webgl-fluid/index.html"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: 0,
          pointerEvents: 'auto', // ALWAYS active for mouse interactions
          opacity: isWebGLReady ? 1 : 0,
          transition: 'opacity 1.2s ease-in'
        }}
        title="WebGL Fluid Simulation Background"
        onLoad={handleLoad}
      />

      {/* Loading Screen - Same z-index as background to block foreground */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
          zIndex: 0, // SAME as WebGL background - blocks foreground completely
          opacity: isWebGLReady ? 0 : 1,
          transition: 'opacity 1.2s ease-out',
          pointerEvents: isWebGLReady ? 'none' : 'auto', // Blocks clicks until ready
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Loading animation */}
        <div style={{
          width: '60px',
          height: '60px',
          border: '3px solid rgba(255, 255, 255, 0.1)',
          borderTop: '3px solid #ffffff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }} />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default FluidBackground; 
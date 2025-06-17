import React from 'react';

const FluidBackground = () => {
  return (
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
        pointerEvents: 'auto'
      }}
      title="WebGL Fluid Simulation Background"
    />
  );
};

export default FluidBackground; 
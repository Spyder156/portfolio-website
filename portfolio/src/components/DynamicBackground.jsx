import React, { useRef, useEffect, useState } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const featuresRef = useRef([]);
  const trajectoryRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // RGB Grid with SLAM trajectory configuration
  const config = {
    featureDetectionRadius: 150,
    trajectoryLength: 50,
    spacing: 25, // Grid spacing for organized layout
    colors: {
      trajectory: '#ff0066'    // Pink for trajectory
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeFeatures();
    };

    const initializeFeatures = () => {
      const features = [];
      const cols = Math.ceil(canvas.width / config.spacing);
      const rows = Math.ceil(canvas.height / config.spacing);
      
      // Create RGB gradient grid
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * config.spacing + (Math.random() - 0.5) * 8;
          const y = j * config.spacing + (Math.random() - 0.5) * 8;
          
          // Create RGB color zones based on position
          const getColorByPosition = (x, y, width, height) => {
            const normalizedX = x / width;
            const normalizedY = y / height;
            
            // Create gradient zones
            const red = Math.floor(255 * (1 - normalizedX) * normalizedY);
            const green = Math.floor(255 * normalizedX * (1 - normalizedY));
            const blue = Math.floor(255 * normalizedX * normalizedY);
            
            // Add some randomness to avoid harsh transitions
            const variation = 25;
            const r = Math.max(0, Math.min(255, red + (Math.random() - 0.5) * variation));
            const g = Math.max(0, Math.min(255, green + (Math.random() - 0.5) * variation));
            const b = Math.max(0, Math.min(255, blue + (Math.random() - 0.5) * variation));
            
            return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
          };
          
          features.push({
            x,
            y,
            originalX: x,
            originalY: y,
            opacity: 0,
            targetOpacity: 0,
            size: 1.5 + Math.random() * 1,
            color: getColorByPosition(x, y, canvas.width, canvas.height),
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      }
      
      featuresRef.current = features;
      trajectoryRef.current = [];
      console.log(`Initialized RGB gradient grid with ${features.length} particles`);
      setIsInitialized(true);
    };

    const handleMouseMove = (e) => {
      const newMousePos = { x: e.clientX, y: e.clientY };
      mouseRef.current = newMousePos;
      
      // Add to trajectory (SLAM path tracking)
      trajectoryRef.current.push({
        ...newMousePos,
        timestamp: Date.now(),
        confidence: 1.0
      });
      
      // Keep trajectory length manageable
      if (trajectoryRef.current.length > config.trajectoryLength) {
        trajectoryRef.current.shift();
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const animate = () => {
      // Clear with slight trail effect (like computer vision algorithms)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const features = featuresRef.current;
      const trajectory = trajectoryRef.current;

      // Feature detection and tracking
      features.forEach((feature) => {
        const dx = mouse.x - feature.x;
        const dy = mouse.y - feature.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Feature detection
        if (distance < config.featureDetectionRadius) {
          const detectionStrength = 1 - (distance / config.featureDetectionRadius);
          feature.targetOpacity = Math.min(0.8, detectionStrength * 1.0);
        } else {
          feature.targetOpacity = 0; // No persistence, clean fade
        }

        // Smooth opacity transitions
        const opacityDiff = feature.targetOpacity - feature.opacity;
        feature.opacity += opacityDiff * 0.12;

        // Add subtle floating animation
        feature.pulsePhase += 0.008;
        const floatX = Math.sin(feature.pulsePhase) * 0.3;
        const floatY = Math.cos(feature.pulsePhase * 0.7) * 0.2;
        feature.x = feature.originalX + floatX;
        feature.y = feature.originalY + floatY;
      });

             // Draw SLAM trajectory (more faded)
       if (trajectory.length > 1) {
         ctx.strokeStyle = config.colors.trajectory;
         ctx.lineWidth = 1.5;
         ctx.globalAlpha = 0.3; // Much more faded
         ctx.beginPath();
         
         trajectory.forEach((point, i) => {
           const age = (Date.now() - point.timestamp) / 1000;
           const alpha = Math.max(0, 1 - age / 3); // Faster fade
           
           if (i === 0) {
             ctx.moveTo(point.x, point.y);
           } else {
             ctx.lineTo(point.x, point.y);
           }
         });
         
         ctx.stroke();
         ctx.globalAlpha = 1;
       }



      // Draw RGB gradient features
      features.forEach((feature) => {
        if (feature.opacity > 0.01) {
          ctx.save();
          
          // Parse RGB color
          const rgbMatch = feature.color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          
          // Draw subtle glow effect
          if (feature.opacity > 0.2) {
            const glowRadius = feature.size * 3;
            const gradient = ctx.createRadialGradient(
              feature.x, feature.y, 0,
              feature.x, feature.y, glowRadius
            );
            
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${feature.opacity * 0.6})`);
            gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${feature.opacity * 0.2})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(feature.x, feature.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Draw core feature
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${feature.opacity})`;
          ctx.beginPath();
          ctx.arc(feature.x, feature.y, feature.size, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();
        }
      });



      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInitialized]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default DynamicBackground; 
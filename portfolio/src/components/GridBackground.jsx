import React, { useRef, useEffect, useState } from 'react';

const GridBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  // Simple grid configuration
  const config = {
    maxDistance: 120,
    fadeSpeed: 0.12,
    particleSize: 2,
    spacing: 30, // Grid spacing
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
    };

    const initializeParticles = () => {
      const particles = [];
      const cols = Math.ceil(canvas.width / config.spacing);
      const rows = Math.ceil(canvas.height / config.spacing);
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * config.spacing + (Math.random() - 0.5) * 10;
          const y = j * config.spacing + (Math.random() - 0.5) * 10;
          
          // Create RGB color zones based on position
          const getColorByPosition = (x, y, width, height) => {
            const normalizedX = x / width;
            const normalizedY = y / height;
            
            // Create gradient zones
            const red = Math.floor(255 * (1 - normalizedX) * normalizedY);
            const green = Math.floor(255 * normalizedX * (1 - normalizedY));
            const blue = Math.floor(255 * normalizedX * normalizedY);
            
            // Add some randomness to avoid harsh transitions
            const variation = 30;
            const r = Math.max(0, Math.min(255, red + (Math.random() - 0.5) * variation));
            const g = Math.max(0, Math.min(255, green + (Math.random() - 0.5) * variation));
            const b = Math.max(0, Math.min(255, blue + (Math.random() - 0.5) * variation));
            
            return `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
          };
          
          particles.push({
            x,
            y,
            originalX: x,
            originalY: y,
            opacity: 0,
            targetOpacity: 0,
            color: getColorByPosition(x, y, canvas.width, canvas.height),
            size: config.particleSize + Math.random() * 1,
            pulsePhase: Math.random() * Math.PI * 2
          });
        }
      }
      
      particlesRef.current = particles;
      console.log(`Initialized ${particles.length} grid particles`);
      setIsInitialized(true);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      const particles = particlesRef.current;

      particles.forEach((particle) => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update target opacity based on distance
        if (distance < config.maxDistance) {
          const intensity = 1 - (distance / config.maxDistance);
          particle.targetOpacity = Math.max(0.4, intensity * 1.0);
        } else {
          particle.targetOpacity = 0; // Always fade out when mouse leaves
        }

        // Smooth opacity transition
        const opacityDiff = particle.targetOpacity - particle.opacity;
        particle.opacity += opacityDiff * config.fadeSpeed;

        // Add very subtle floating animation
        particle.pulsePhase += 0.01;
        const floatX = Math.sin(particle.pulsePhase) * 0.3;
        const floatY = Math.cos(particle.pulsePhase * 0.7) * 0.2;
        particle.x = particle.originalX + floatX;
        particle.y = particle.originalY + floatY;

        // Draw particle
        if (particle.opacity > 0.01) {
          ctx.save();
          
          // Parse RGB color
          const rgbMatch = particle.color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          const r = parseInt(rgbMatch[1]);
          const g = parseInt(rgbMatch[2]);
          const b = parseInt(rgbMatch[3]);
          
          // Draw subtle glow effect
          if (particle.opacity > 0.2) {
            const glowRadius = particle.size * 3;
            const gradient = ctx.createRadialGradient(
              particle.x, particle.y, 0,
              particle.x, particle.y, glowRadius
            );
            
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.6})`);
            gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${particle.opacity * 0.2})`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, glowRadius, 0, Math.PI * 2);
            ctx.fill();
          }
          
          // Draw core particle
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
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

export default GridBackground; 
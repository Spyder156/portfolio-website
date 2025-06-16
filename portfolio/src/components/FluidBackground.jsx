import React, { useRef, useEffect } from 'react';

const FluidBackground = () => {
  const canvasRef = useRef(null);
  const animationId = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Initialize particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() * 360,
          connections: []
        });
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const drawParticle = (particle, time) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      gradient.addColorStop(0, `hsla(${particle.hue + time * 20}, 70%, 60%, 1)`);
      gradient.addColorStop(1, `hsla(${particle.hue + time * 20}, 70%, 60%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const updateParticle = (particle, time) => {
      // Fluid-like motion
      const wave1 = Math.sin(time * 0.001 + particle.x * 0.01) * 0.5;
      const wave2 = Math.cos(time * 0.0015 + particle.y * 0.01) * 0.5;
      
      particle.vx += wave1 * 0.1;
      particle.vy += wave2 * 0.1;
      
      // Add some randomness
      particle.vx += (Math.random() - 0.5) * 0.1;
      particle.vy += (Math.random() - 0.5) * 0.1;
      
      // Damping
      particle.vx *= 0.98;
      particle.vy *= 0.98;
      
      // Move particle
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width;
      if (particle.x > canvas.width) particle.x = 0;
      if (particle.y < 0) particle.y = canvas.height;
      if (particle.y > canvas.height) particle.y = 0;
      
      // Update color
      particle.hue += 0.2;
      if (particle.hue > 360) particle.hue = 0;
    };

    const drawConnections = (time) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.2;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = `hsla(${time * 10}, 60%, 70%, 1)`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const drawFluidBackground = (time) => {
      // Clear with subtle gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.7, canvas.height * 0.7, Math.max(canvas.width, canvas.height)
      );
      bgGradient.addColorStop(0, `hsla(${time * 5}, 60%, 5%, 0.1)`);
      bgGradient.addColorStop(0.5, `hsla(${time * 8 + 120}, 60%, 3%, 0.05)`);
      bgGradient.addColorStop(1, `hsla(${time * 6 + 240}, 60%, 8%, 0.02)`);
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = (timestamp) => {
      timeRef.current = timestamp;
      
      // Clear canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      drawFluidBackground(timestamp * 0.01);
      
      // Update and draw particles
      particles.forEach(particle => {
        updateParticle(particle, timestamp);
        drawParticle(particle, timestamp * 0.01);
      });
      
      // Draw connections between nearby particles
      drawConnections(timestamp * 0.01);
      
      // Add some flowing effects
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(timestamp * 0.001 + i) * 0.3 + 0.5) * canvas.width;
        const y = (Math.cos(timestamp * 0.0008 + i) * 0.3 + 0.5) * canvas.height;
        const size = Math.sin(timestamp * 0.002 + i) * 20 + 30;
        
        const flowGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        flowGradient.addColorStop(0, `hsla(${timestamp * 0.02 + i * 60}, 80%, 60%, 0.1)`);
        flowGradient.addColorStop(1, `hsla(${timestamp * 0.02 + i * 60}, 80%, 60%, 0)`);
        
        ctx.fillStyle = flowGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      animationId.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Start animation
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default FluidBackground; 
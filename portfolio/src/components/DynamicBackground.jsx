import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Stars() {
  const ref = useRef();
  
  const particlesGeometry = useMemo(() => {
    const positions = new Float32Array(2000 * 3); // Reduced particle count for better performance
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y  
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.05;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={ref} geometry={particlesGeometry}>
      <pointsMaterial
        color="#ffffff"
        size={0.02}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
}

function FloatingCubes() {
  const ref = useRef();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={ref}>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * 0.8) * 3,
            Math.cos(i * 0.8) * 3,
            Math.sin(i * 0.4) * 2
          ]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshBasicMaterial 
            color="#646cff" 
            transparent 
            opacity={0.3}
            wireframe
          />
        </mesh>
      ))}
    </group>
  );
}

function DynamicBackground() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0,
      left: 0,
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <Stars />
        <FloatingCubes />
      </Canvas>
    </div>
  );
}

export default DynamicBackground; 
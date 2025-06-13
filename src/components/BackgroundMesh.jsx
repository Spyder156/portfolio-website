import { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { MathUtils } from 'three';
import { useMousePosition } from '../hooks/useMousePosition';

function gaussianFunction(x, y, mouseX, mouseY, amplitude = 2, sigma = 10) {
  const dx = x - mouseX;
  const dy = y - mouseY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return amplitude * Math.exp(-(distance * distance) / (2 * sigma * sigma));
}

export function BackgroundMesh() {
  const mesh = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.height;
  const mousePosition = useMousePosition();
  
  // Conversion from screen coordinates to normalized coordinates (-1 to 1)
  const mouseX = useMemo(() => {
    return mousePosition.x !== null ? (mousePosition.x / size.width) * 2 - 1 : 0;
  }, [mousePosition.x, size.width]);
  
  const mouseY = useMemo(() => {
    return mousePosition.y !== null ? -((mousePosition.y / size.height) * 2 - 1) : 0;
  }, [mousePosition.y, size.height]);

  // Vertex manipulation
  useFrame(() => {
    if (!mesh.current) return;

    const { geometry } = mesh.current;
    const { attributes } = geometry;
    const positions = attributes.position.array;

    // Loop through all vertices and apply gaussian function
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      
      // Calculate new z position based on mouse position
      const z = gaussianFunction(x, y, mouseX * aspect, mouseY, 0.6, 0.5);
      
      // Update z-position
      positions[i + 2] = z;
      
      // Update color based on height (optional)
      if (attributes.color) {
        const colors = attributes.color.array;
        const index = Math.floor(i / 3) * 3;
        // Blue to purple gradient based on height
        colors[index] = MathUtils.lerp(0.1, 0.6, z * 0.5 + 0.5); // R
        colors[index + 1] = MathUtils.lerp(0.1, 0.3, z * 0.5 + 0.5); // G
        colors[index + 2] = MathUtils.lerp(0.4, 0.8, z * 0.5 + 0.5); // B
      }
    }
    
    attributes.position.needsUpdate = true;
    if (attributes.color) attributes.color.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[8, 8, 50, 50]} />
      <meshStandardMaterial 
        color="#131313" 
        wireframe 
        emissive="#6366f1"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

export default BackgroundMesh; 
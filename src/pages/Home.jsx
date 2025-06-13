import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import BackgroundMesh from '../components/BackgroundMesh';
import HomeCard from '../components/HomeCard';

export function Home() {
  return (
    <div className="relative min-h-screen pt-20 pb-24 flex items-center justify-center">
      {/* 3D background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.4} />
            <BackgroundMesh />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={false} 
            />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Main content */}
      <div className="w-full max-w-4xl px-4 flex flex-col items-center justify-center">
        <HomeCard />
      </div>
    </div>
  );
}

export default Home; 
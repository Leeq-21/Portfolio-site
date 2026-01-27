import { OrbitControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';

import { Leeq } from './Leeq';
import HeroLights from './HeroLights';

const HeroExp = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });


  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        
        
        <OrbitControls 
          enablePan={false}
          enableZoom={!isTablet}
          maxDistance={20}
          minDistance={5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />

        <HeroLights />

        <group 
          scale={isMobile ? 1.5 : 2.5}
          position={isMobile ? [0, -2.5, 0] : [0, -1.5, 0]}
          rotation={[Math.PI / 20, Math.PI / -4, 0]}
        >
        
        <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
          <Leeq />
        </Float>
        </group>

        

    </Canvas>
  )
}

export default HeroExp
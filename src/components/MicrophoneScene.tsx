import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Cylinder, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function MicrophoneModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle floating
    const floatY = Math.sin(t / 2.2) / 12;
    const floatRotZ = Math.cos(t / 2.8) / 25;

    groupRef.current.position.y = floatY;
    groupRef.current.rotation.z = floatRotZ;
  });

  return (
    <group ref={groupRef} scale={1.5} rotation={[0.2, -0.5, 0]}>
      {/* Arm Stand */}
      <group position={[0, -1.5, -1]} rotation={[0.3, 0, 0]}>
        <Cylinder args={[0.06, 0.06, 4]} position={[0, -2, 0]}>
          <meshStandardMaterial color="#111" roughness={0.6} />
        </Cylinder>
        {/* Joint */}
        <Sphere args={[0.12]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
        </Sphere>
        {/* Connector to Shock Mount */}
        <Cylinder args={[0.04, 0.04, 1]} position={[0, 0.4, 0.35]} rotation={[-0.7, 0, 0]}>
           <meshStandardMaterial color="#ddd" metalness={1} roughness={0.1} />
        </Cylinder>
      </group>

      {/* Shock Mount */}
      <group position={[0, -0.3, 0]} rotation={[Math.PI/2, 0, 0]}>
        <Torus args={[0.45, 0.03, 16, 32]}>
          <meshStandardMaterial color="#111" roughness={0.8} />
        </Torus>
        <Torus args={[0.3, 0.02, 16, 32]}>
          <meshStandardMaterial color="#111" roughness={0.8} />
        </Torus>
        {/* Elastics */}
        {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((rot, i) => (
          <group key={i} rotation={[0, 0, rot]}>
            <Cylinder args={[0.008, 0.008, 0.2]} position={[0.37, 0, 0]} rotation={[0, 0, Math.PI/4]}>
              <meshStandardMaterial color="#444" />
            </Cylinder>
          </group>
        ))}
      </group>

      {/* Microphone Body */}
      <Cylinder args={[0.22, 0.22, 1.2, 32]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#151515" roughness={0.7} metalness={0.3} />
      </Cylinder>

      {/* Chrome Accent Ring */}
      <Cylinder args={[0.23, 0.23, 0.05, 32]} position={[0, 0.4, 0]}>
        <meshStandardMaterial color="#e0e0e0" roughness={0.1} metalness={1} />
      </Cylinder>

      {/* Grille Base */}
      <Cylinder args={[0.22, 0.22, 0.1, 32]} position={[0, 0.45, 0]}>
        <meshStandardMaterial color="#111" roughness={0.8} />
      </Cylinder>

      {/* Inner Capsule (Gold) */}
      <Cylinder args={[0.12, 0.12, 0.3, 16]} position={[0, 0.7, 0]}>
        <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.9} />
      </Cylinder>

      {/* Outer Mesh Grille */}
      <Cylinder args={[0.22, 0.22, 0.6, 32]} position={[0, 0.8, 0]}>
        <meshStandardMaterial color="#555" roughness={0.4} metalness={0.8} wireframe={true} />
      </Cylinder>
      <Cylinder args={[0.21, 0.21, 0.6, 32]} position={[0, 0.8, 0]}>
        <meshPhysicalMaterial color="#000" transmission={0.6} opacity={1} transparent roughness={0.4} />
      </Cylinder>

      {/* Grille Top Cap */}
      <Sphere args={[0.22, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 1.1, 0]}>
        <meshStandardMaterial color="#555" roughness={0.4} metalness={0.8} wireframe={true} />
      </Sphere>
      <Sphere args={[0.21, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} position={[0, 1.1, 0]}>
        <meshPhysicalMaterial color="#000" transmission={0.6} opacity={1} transparent roughness={0.4} />
      </Sphere>

      {/* Pop Filter */}
      <group position={[0, 0.7, 0.4]} rotation={[0.1, 0, 0]}>
        {/* Gooseneck */}
        <Cylinder args={[0.015, 0.015, 0.8]} position={[0, -0.6, -0.2]} rotation={[0.3, 0, 0]}>
          <meshStandardMaterial color="#111" roughness={0.6} />
        </Cylinder>
        {/* Filter Ring */}
        <Torus args={[0.25, 0.02, 16, 32]} rotation={[Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#111" roughness={0.8} />
        </Torus>
        {/* Filter Mesh */}
        <Cylinder args={[0.24, 0.24, 0.005, 32]} rotation={[Math.PI/2, 0, 0]}>
          <meshStandardMaterial color="#222" roughness={0.6} wireframe={true} />
        </Cylinder>
        <Cylinder args={[0.24, 0.24, 0.004, 32]} rotation={[Math.PI/2, 0, 0]}>
          <meshPhysicalMaterial color="#000" transmission={0.5} opacity={1} transparent />
        </Cylinder>
      </group>
    </group>
  );
}

export function MicrophoneScene() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[400px] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ pointerEvents: 'none' }}>
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={3} color="#ffe6cc" />
        <pointLight position={[-10, -5, 10]} intensity={2} color="#ccddff" />
        <spotLight position={[0, 15, -10]} angle={0.5} penumbra={1} intensity={5} color="#ffffff" />
        
        <MicrophoneModel />
        
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

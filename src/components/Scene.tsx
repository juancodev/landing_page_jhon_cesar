import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, RoundedBox, Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

function CameraModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Calculate scroll progress (0 to 1)
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

    const t = state.clock.getElapsedTime();
    
    // Base floating animation
    const floatRotY = Math.sin(t / 4) / 6;
    const floatRotX = Math.cos(t / 4) / 10;
    const floatY = Math.sin(t / 2) / 6;

    // Scroll-based animations
    let targetX = 0;
    let targetY = 0;
    let targetZ = 0;
    let targetRotX = 0.1;
    let targetRotY = -0.3;
    let targetRotZ = 0;
    let targetScale = 1.4; // Initial scale

    if (progress < 0.25) {
      // Hero to Portfolio transition: Move right, show lens, scale down slightly
      const p = progress / 0.25;
      targetX = THREE.MathUtils.lerp(0, 2.5, p);
      targetRotY = THREE.MathUtils.lerp(-0.3, Math.PI / 5, p);
      targetRotX = THREE.MathUtils.lerp(0.1, 0.15, p);
      targetScale = THREE.MathUtils.lerp(1.4, 1.1, p);
    } else if (progress < 0.5) {
      // Portfolio to Process: Move left, show top/back, scale down more
      const p = (progress - 0.25) / 0.25;
      targetX = THREE.MathUtils.lerp(2.5, -2.5, p);
      targetRotY = THREE.MathUtils.lerp(Math.PI / 5, -Math.PI / 3, p);
      targetRotX = THREE.MathUtils.lerp(0.15, 0.4, p);
      targetScale = THREE.MathUtils.lerp(1.1, 0.85, p);
    } else if (progress < 0.75) {
      // Process to Contact: Move center, show front, scale down further
      const p = (progress - 0.5) / 0.25;
      targetX = THREE.MathUtils.lerp(-2.5, 0, p);
      targetY = THREE.MathUtils.lerp(0, -0.5, p);
      targetRotY = THREE.MathUtils.lerp(-Math.PI / 3, 0, p);
      targetRotX = THREE.MathUtils.lerp(0.4, 0, p);
      targetScale = THREE.MathUtils.lerp(0.85, 0.65, p);
    } else {
      // Contact: Final rotation and smallest scale
      const p = (progress - 0.75) / 0.25;
      targetZ = THREE.MathUtils.lerp(0, 1, p);
      targetRotY = THREE.MathUtils.lerp(0, Math.PI * 2, p); // Spin effect
      targetScale = THREE.MathUtils.lerp(0.65, 0.45, p);
    }

    // Smooth interpolation for the camera group
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + floatY, 0.05);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, targetZ, 0.05);
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX + floatRotX, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY + floatRotY, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.05);
    
    // Apply smooth scaling
    const currentScale = groupRef.current.scale.x;
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(currentScale, targetScale, 0.05));
  });

  return (
    <group ref={groupRef} scale={1.4}>
      {/* --- BODY --- */}
      {/* Main Chassis */}
      <RoundedBox args={[3.2, 2.2, 1.2]} radius={0.15} smoothness={4}>
        <meshStandardMaterial color="#181818" roughness={0.5} metalness={0.8} />
      </RoundedBox>

      {/* Top Plate */}
      <RoundedBox position={[0, 1.15, 0]} args={[3.25, 0.3, 1.25]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.9} />
      </RoundedBox>

      {/* Grip (Right side) */}
      <RoundedBox position={[1.2, 0, 0.3]} args={[0.9, 2.1, 1.4]} radius={0.2} smoothness={4}>
        <meshStandardMaterial color="#0a0a0a" roughness={0.95} metalness={0.1} />
      </RoundedBox>

      {/* Viewfinder Prism */}
      <RoundedBox position={[0, 1.4, -0.1]} args={[1.2, 0.6, 1.2]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.9} />
      </RoundedBox>
      
      {/* Viewfinder Eyepiece */}
      <Cylinder position={[0, 1.4, -0.75]} rotation={[Math.PI/2, 0, 0]} args={[0.3, 0.3, 0.2, 32]}>
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </Cylinder>

      {/* --- NEW REALISTIC DETAILS --- */}
      {/* Hot Shoe Mount */}
      <RoundedBox position={[0, 1.32, 0]} args={[0.4, 0.05, 0.4]} radius={0.01} smoothness={2}>
        <meshStandardMaterial color="#888888" roughness={0.3} metalness={0.9} />
      </RoundedBox>
      <RoundedBox position={[0, 1.35, 0]} args={[0.3, 0.02, 0.3]} radius={0.01} smoothness={2}>
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </RoundedBox>

      {/* LCD Screen (Back) */}
      <RoundedBox position={[-0.2, -0.1, -0.62]} args={[2.0, 1.3, 0.05]} radius={0.05} smoothness={4}>
        <meshPhysicalMaterial color="#020202" roughness={0.2} metalness={0.5} clearcoat={1} clearcoatRoughness={0.1} />
      </RoundedBox>

      {/* Screen Content (Text UI) */}
      <group position={[-0.2, -0.1, -0.65]} rotation={[0, Math.PI, 0]}>
        {/* Brand Name */}
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.22}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.05}
        >
          JHON CESAR
        </Text>
        {/* Recording Indicator */}
        <Text
          position={[0, -0.2, 0]}
          fontSize={0.12}
          color="#ff3300"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
        >
          ● REC
        </Text>
        {/* Timecode */}
        <Text
          position={[0, -0.35, 0]}
          fontSize={0.08}
          color="#aaaaaa"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.1}
        >
          00:04:23:12
        </Text>
      </group>

      {/* Back Buttons / D-Pad */}
      <Cylinder position={[1.2, 0.2, -0.62]} rotation={[Math.PI/2, 0, 0]} args={[0.15, 0.15, 0.05, 16]}>
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </Cylinder>
      <Cylinder position={[1.2, -0.2, -0.62]} rotation={[Math.PI/2, 0, 0]} args={[0.1, 0.1, 0.05, 16]}>
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </Cylinder>
      <Cylinder position={[1.2, -0.5, -0.62]} rotation={[Math.PI/2, 0, 0]} args={[0.1, 0.1, 0.05, 16]}>
        <meshStandardMaterial color="#222222" roughness={0.7} />
      </Cylinder>

      {/* Strap Lugs */}
      <Cylinder position={[1.65, 0.6, 0]} rotation={[0, 0, Math.PI/2]} args={[0.08, 0.08, 0.1, 16]}>
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.9} />
      </Cylinder>
      <Cylinder position={[-1.65, 0.6, 0]} rotation={[0, 0, Math.PI/2]} args={[0.08, 0.08, 0.1, 16]}>
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.9} />
      </Cylinder>

      {/* AF Assist Light (Front) */}
      <Cylinder position={[-1.0, 0.6, 0.62]} rotation={[Math.PI/2, 0, 0]} args={[0.08, 0.08, 0.05, 16]}>
        <meshPhysicalMaterial color="#ffaa00" emissive="#ffaa00" emissiveIntensity={2} transmission={0.9} opacity={1} transparent />
      </Cylinder>

      {/* --- LENS --- */}
      {/* Mount */}
      <Cylinder position={[0, 0, 0.65]} rotation={[Math.PI / 2, 0, 0]} args={[1.0, 1.0, 0.2, 64]}>
        <meshStandardMaterial color="#cccccc" roughness={0.2} metalness={1} />
      </Cylinder>

      {/* Base Barrel */}
      <Cylinder position={[0, 0, 1.1]} rotation={[Math.PI / 2, 0, 0]} args={[0.95, 0.95, 0.7, 64]}>
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.7} />
      </Cylinder>

      {/* Focus Ring (Ribbed look simulated by darker/rougher material) */}
      <Cylinder position={[0, 0, 1.7]} rotation={[Math.PI / 2, 0, 0]} args={[0.98, 0.98, 0.5, 64]}>
        <meshStandardMaterial color="#080808" roughness={0.9} metalness={0.2} />
      </Cylinder>

      {/* Lens Grip Rings (Extra detail) */}
      <Cylinder position={[0, 0, 1.55]} rotation={[Math.PI / 2, 0, 0]} args={[0.99, 0.99, 0.05, 64]}>
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </Cylinder>
      <Cylinder position={[0, 0, 1.85]} rotation={[Math.PI / 2, 0, 0]} args={[0.99, 0.99, 0.05, 64]}>
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </Cylinder>

      {/* Accent Ring (Orange/Red - Cinematic Look) */}
      <Cylinder position={[0, 0, 2.0]} rotation={[Math.PI / 2, 0, 0]} args={[0.96, 0.96, 0.05, 64]}>
        <meshStandardMaterial color="#ff3300" emissive="#ff3300" emissiveIntensity={0.8} roughness={0.2} />
      </Cylinder>

      {/* Front Barrel */}
      <Cylinder position={[0, 0, 2.15]} rotation={[Math.PI / 2, 0, 0]} args={[0.95, 0.95, 0.25, 64]}>
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.8} />
      </Cylinder>

      {/* --- GLASS ELEMENTS --- */}
      {/* Outer Glass */}
      <Cylinder position={[0, 0, 2.25]} rotation={[Math.PI / 2, 0, 0]} args={[0.8, 0.85, 0.1, 64]}>
        <meshPhysicalMaterial 
          color="#ffffff"
          transmission={1}
          opacity={1}
          transparent
          roughness={0.02}
          ior={1.6}
          thickness={1.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={3}
        />
      </Cylinder>

      {/* Inner Glass / Anti-reflective coating (Purple/Blue tint) */}
      <Cylinder position={[0, 0, 2.0]} rotation={[Math.PI / 2, 0, 0]} args={[0.7, 0.75, 0.1, 64]}>
        <meshPhysicalMaterial 
          color="#6688ff"
          transmission={0.9}
          opacity={1}
          transparent
          roughness={0.1}
          ior={1.4}
          thickness={0.5}
          envMapIntensity={2}
        />
      </Cylinder>

      {/* Aperture / Sensor Area (Deep inside) */}
      <Cylinder position={[0, 0, 1.5]} rotation={[Math.PI / 2, 0, 0]} args={[0.5, 0.5, 0.1, 64]}>
        <meshStandardMaterial color="#000000" roughness={0.1} metalness={1} />
      </Cylinder>

      {/* --- DIALS & BUTTONS --- */}
      {/* Shutter Button Base */}
      <Cylinder position={[1.2, 1.32, 0.2]} args={[0.18, 0.18, 0.1, 32]}>
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.8} />
      </Cylinder>
      {/* Shutter Button Top */}
      <Cylinder position={[1.2, 1.38, 0.2]} args={[0.14, 0.14, 0.05, 32]}>
        <meshStandardMaterial color="#eeeeee" roughness={0.1} metalness={1} />
      </Cylinder>

      {/* Record Button (Red Dot) */}
      <Cylinder position={[0.8, 1.32, 0.2]} args={[0.12, 0.12, 0.05, 16]}>
        <meshStandardMaterial color="#cccccc" roughness={0.3} metalness={0.8} />
      </Cylinder>
      <Cylinder position={[0.8, 1.35, 0.2]} args={[0.08, 0.08, 0.02, 16]}>
        <meshStandardMaterial color="#ff0000" roughness={0.4} />
      </Cylinder>
      
      {/* Main Dial */}
      <Cylinder position={[0.6, 1.35, 0]} args={[0.3, 0.3, 0.15, 32]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.5} />
      </Cylinder>

      {/* Secondary Dial */}
      <Cylinder position={[-1.0, 1.35, 0]} args={[0.25, 0.25, 0.15, 32]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.5} />
      </Cylinder>
    </group>
  );
}

export function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-80 md:opacity-100">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} style={{ pointerEvents: 'none' }}>
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.2} />
        
        {/* Key Light (Warm) */}
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.3} 
          penumbra={1} 
          intensity={3} 
          color="#ffe6cc" 
          castShadow 
        />
        
        {/* Fill Light (Cool) */}
        <pointLight 
          position={[-10, -5, 10]} 
          intensity={2} 
          color="#ccddff" 
        />
        
        {/* Rim Light (Dramatic Backlight) */}
        <spotLight 
          position={[0, 15, -10]} 
          angle={0.5} 
          penumbra={1} 
          intensity={5} 
          color="#ffffff" 
        />

        <CameraModel />
        
        {/* High quality studio reflections */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}

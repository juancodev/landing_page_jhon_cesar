import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, RoundedBox, Cylinder, Sphere, Box, Torus, Text } from '@react-three/drei';
import * as THREE from 'three';

function MonitorModel() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Gentle floating
    const floatY = Math.sin(t / 2) / 15;
    const floatRotY = Math.cos(t / 3) / 20;

    groupRef.current.position.y = floatY;
    groupRef.current.rotation.y = floatRotY - 0.5; // Base isometric rotation
  });

  return (
    <group ref={groupRef} scale={1.8} position={[3, -1, -3]} rotation={[0.2, -0.6, 0]}>
      {/* Monitor Stand Base */}
      <RoundedBox args={[1.5, 0.1, 1]} radius={0.05} position={[0, -1.5, -0.5]}>
        <meshStandardMaterial color="#222" roughness={0.8} />
      </RoundedBox>
      
      {/* Monitor Stand Neck */}
      <Cylinder args={[0.15, 0.2, 1.2]} position={[0, -0.9, -0.5]} rotation={[0.1, 0, 0]}>
        <meshStandardMaterial color="#333" roughness={0.7} metalness={0.5} />
      </Cylinder>

      {/* Monitor Casing */}
      <RoundedBox args={[4.2, 2.6, 0.2]} radius={0.05} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#1a1a1a" roughness={0.6} />
      </RoundedBox>

      {/* Monitor Bezel Indicators (Color Accuracy) */}
      <Box args={[0.05, 0.05, 0.01]} position={[-1.9, -1.0, 0.11]}>
        <meshBasicMaterial color="#ff3333" />
      </Box>
      <Box args={[0.05, 0.05, 0.01]} position={[-1.75, -1.0, 0.11]}>
        <meshBasicMaterial color="#33ff33" />
      </Box>
      <Box args={[0.05, 0.05, 0.01]} position={[-1.6, -1.0, 0.11]}>
        <meshBasicMaterial color="#3333ff" />
      </Box>

      {/* Screen Display */}
      <Box args={[4.0, 2.4, 0.01]} position={[0, 0.2, 0.1]}>
        <meshBasicMaterial color="#0f1115" />
      </Box>

      {/* Screen Light Emanation */}
      <pointLight position={[0, 0.2, 0.5]} intensity={1.5} color="#4488ff" distance={5} />

      {/* Screen UI Elements */}
      <group position={[-1.9, -0.9, 0.11]}>
        {/* Top Menu Bar */}
        <Box args={[3.8, 0.15, 0.01]} position={[1.9, 2.15, 0]}>
          <meshBasicMaterial color="#1e293b" />
        </Box>
        <Text position={[0.1, 2.15, 0.02]} fontSize={0.06} color="#94a3b8" anchorX="left" anchorY="middle">
          File   Edit   Trim   Timeline   Color   Effects   View
        </Text>
        <Text position={[1.9, 2.15, 0.02]} fontSize={0.07} color="#ffffff" anchorX="center" anchorY="middle">
          PROJECT: COMMERCIAL_CUT_V3.prproj
        </Text>
        <Text position={[3.7, 2.15, 0.02]} fontSize={0.06} color="#94a3b8" anchorX="right" anchorY="middle">
          00:02:45:12
        </Text>

        {/* Left Panel: Media Pool */}
        <Box args={[0.8, 1.1, 0.01]} position={[0.4, 1.45, 0]}>
          <meshBasicMaterial color="#1e293b" />
        </Box>
        <Text position={[0.1, 1.9, 0.02]} fontSize={0.05} color="#cbd5e1" anchorX="left" anchorY="middle">
          Media Pool
        </Text>
        {/* Media thumbnails */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <Box key={`media-${i}`} args={[0.3, 0.18, 0.01]} position={[0.22 + (i%2)*0.36, 1.7 - Math.floor(i/2)*0.25, 0.01]}>
            <meshBasicMaterial color="#334155" />
          </Box>
        ))}

        {/* Center Panel: Preview Window */}
        <Box args={[1.9, 1.1, 0.01]} position={[1.85, 1.45, 0]}>
          <meshBasicMaterial color="#0f172a" />
        </Box>
        {/* Video Image Placeholder */}
        <Box args={[1.8, 0.95, 0.01]} position={[1.85, 1.48, 0.01]}>
          <meshBasicMaterial color="#000000" />
        </Box>
        {/* Playback controls */}
        <Box args={[0.8, 0.04, 0.01]} position={[1.85, 0.95, 0.01]}>
          <meshBasicMaterial color="#334155" />
        </Box>
        <Sphere args={[0.03, 16, 16]} position={[1.85, 0.95, 0.02]} scale={[1, 1, 0.1]}>
          <meshBasicMaterial color="#cbd5e1" />
        </Sphere>

        {/* Right Panel: Color Wheels / Inspector */}
        <Box args={[0.9, 1.1, 0.01]} position={[3.35, 1.45, 0]}>
          <meshBasicMaterial color="#1e293b" />
        </Box>
        <Text position={[2.95, 1.9, 0.02]} fontSize={0.05} color="#cbd5e1" anchorX="left" anchorY="middle">
          Color Wheels
        </Text>
        <Sphere args={[0.15, 16, 16]} position={[3.15, 1.65, 0.01]} scale={[1, 1, 0.01]}>
          <meshBasicMaterial color="#f59e0b" />
        </Sphere>
        <Sphere args={[0.15, 16, 16]} position={[3.55, 1.65, 0.01]} scale={[1, 1, 0.01]}>
          <meshBasicMaterial color="#3b82f6" />
        </Sphere>
        {/* Sliders */}
        {[0, 1, 2].map((i) => (
          <Box key={`slider-${i}`} args={[0.7, 0.02, 0.01]} position={[3.35, 1.35 - i*0.15, 0.01]}>
            <meshBasicMaterial color="#334155" />
          </Box>
        ))}
        {[0, 1, 2].map((i) => (
          <Sphere key={`slider-knob-${i}`} args={[0.04, 8, 8]} position={[3.15 + Math.random()*0.4, 1.35 - i*0.15, 0.02]} scale={[1, 1, 0.1]}>
            <meshBasicMaterial color="#cbd5e1" />
          </Sphere>
        ))}

        {/* Timeline Area */}
        <Box args={[3.8, 0.8, 0.01]} position={[1.9, 0.45, 0]}>
          <meshBasicMaterial color="#1e293b" />
        </Box>
        
        {/* Timecode Ruler */}
        <Box args={[3.8, 0.08, 0.01]} position={[1.9, 0.8, 0.01]}>
          <meshBasicMaterial color="#334155" />
        </Box>
        
        {/* Video Tracks */}
        {/* Track 3 */}
        <Box args={[0.4, 0.08, 0.01]} position={[1.2, 0.68, 0.01]}><meshBasicMaterial color="#f472b6" /></Box>
        <Box args={[0.6, 0.08, 0.01]} position={[2.5, 0.68, 0.01]}><meshBasicMaterial color="#f472b6" /></Box>
        
        {/* Track 2 */}
        <Box args={[0.9, 0.08, 0.01]} position={[0.6, 0.56, 0.01]}><meshBasicMaterial color="#8b5cf6" /></Box>
        <Box args={[0.3, 0.08, 0.01]} position={[1.3, 0.56, 0.01]}><meshBasicMaterial color="#a78bfa" /></Box>
        <Box args={[1.5, 0.08, 0.01]} position={[2.4, 0.56, 0.01]}><meshBasicMaterial color="#8b5cf6" /></Box>
        
        {/* Track 1 */}
        <Box args={[1.2, 0.08, 0.01]} position={[0.7, 0.44, 0.01]}><meshBasicMaterial color="#3b82f6" /></Box>
        <Box args={[0.8, 0.08, 0.01]} position={[1.8, 0.44, 0.01]}><meshBasicMaterial color="#60a5fa" /></Box>
        <Box args={[1.0, 0.08, 0.01]} position={[2.8, 0.44, 0.01]}><meshBasicMaterial color="#2563eb" /></Box>

        {/* Audio Tracks */}
        {/* Audio 1 */}
        <Box args={[1.2, 0.08, 0.01]} position={[0.7, 0.28, 0.01]}><meshBasicMaterial color="#10b981" /></Box>
        <Box args={[0.8, 0.08, 0.01]} position={[1.8, 0.28, 0.01]}><meshBasicMaterial color="#34d399" /></Box>
        <Box args={[1.0, 0.08, 0.01]} position={[2.8, 0.28, 0.01]}><meshBasicMaterial color="#059669" /></Box>
        
        {/* Audio 2 */}
        <Box args={[3.5, 0.08, 0.01]} position={[1.9, 0.16, 0.01]}><meshBasicMaterial color="#047857" /></Box>

        {/* Playhead */}
        <Box args={[0.015, 0.85, 0.02]} position={[1.5, 0.45, 0.02]}>
          <meshBasicMaterial color="#ef4444" />
        </Box>
        {/* Playhead Handle */}
        <Box args={[0.08, 0.06, 0.02]} position={[1.5, 0.85, 0.02]}>
          <meshBasicMaterial color="#ef4444" />
        </Box>
      </group>

      {/* External Color Grading Control Surface */}
      <group position={[0, -1.4, 1.2]} rotation={[-0.2, 0, 0]}>
        {/* Base */}
        <RoundedBox args={[2.5, 0.15, 1.2]} radius={0.05} position={[0, 0, 0]}>
          <meshStandardMaterial color="#111" roughness={0.9} />
        </RoundedBox>

        {/* Trackballs */}
        <group position={[-0.8, 0.1, 0]}>
          <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial color="#444" roughness={0.2} metalness={0.8} />
          </Sphere>
          <Torus args={[0.25, 0.02, 16, 32]} rotation={[Math.PI/2, 0, 0]} position={[0, -0.05, 0]}>
            <meshStandardMaterial color="#333" />
          </Torus>
        </group>

        <group position={[0, 0.1, 0]}>
          <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial color="#444" roughness={0.2} metalness={0.8} />
          </Sphere>
          <Torus args={[0.25, 0.02, 16, 32]} rotation={[Math.PI/2, 0, 0]} position={[0, -0.05, 0]}>
            <meshStandardMaterial color="#333" />
          </Torus>
        </group>

        <group position={[0.8, 0.1, 0]}>
          <Sphere args={[0.2, 32, 32]}>
            <meshStandardMaterial color="#444" roughness={0.2} metalness={0.8} />
          </Sphere>
          <Torus args={[0.25, 0.02, 16, 32]} rotation={[Math.PI/2, 0, 0]} position={[0, -0.05, 0]}>
            <meshStandardMaterial color="#333" />
          </Torus>
        </group>

        {/* Dials / Knobs */}
        {[-1.0, -0.6, -0.2, 0.2, 0.6, 1.0].map((x, i) => (
          <Cylinder key={`dial-top-${i}`} args={[0.06, 0.06, 0.1]} position={[x, 0.1, -0.4]}>
            <meshStandardMaterial color="#222" roughness={0.5} metalness={0.5} />
          </Cylinder>
        ))}
        
        {/* Buttons */}
        {[-1.1, -0.9, -0.7, -0.5, 0.5, 0.7, 0.9, 1.1].map((x, i) => (
          <Box key={`btn-bot-${i}`} args={[0.1, 0.05, 0.1]} position={[x, 0.08, 0.4]}>
            <meshStandardMaterial color={i % 3 === 0 ? "#ef4444" : "#333"} />
          </Box>
        ))}
      </group>
    </group>
  );
}

export function MonitorScene() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas camera={{ position: [0, 1, 7], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#ffffff" />
        <pointLight position={[-10, -5, 10]} intensity={1} color="#ccddff" />
        
        <MonitorModel />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

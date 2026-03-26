import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, PerspectiveCamera, MeshDistortMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

const levelSettings: Record<number, { pos: [number, number, number], rot: [number, number, number] }> = {
  1: { pos: [0, 1, 8], rot: [0, 0, 0] },
  2: { pos: [-3, 1.5, 6], rot: [0, 0.3, 0] },
  3: { pos: [3, 1, 6], rot: [0, -0.3, 0] },
  4: { pos: [0, 4, 5], rot: [-0.4, 0, 0] },
  5: { pos: [-4, 0.5, 4], rot: [0.2, 0.5, 0] },
  6: { pos: [4, 2, 8], rot: [-0.2, -0.4, 0.1] },
  7: { pos: [0, -2, 6], rot: [0.3, 0, 0] },
  8: { pos: [-5, 3, 10], rot: [0, 0.6, -0.1] },
  9: { pos: [5, 4, 4], rot: [-0.3, -0.6, 0] },
  10: { pos: [0, 0, 3], rot: [0, 0, 0] }
};

const Particles = ({ count = 2000 }) => {
  const points = useRef<THREE.Points>(null);
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 1] = (Math.random() - 0.5) * 50;
      temp[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#00f3ff" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const BackgroundElements = ({ level }: { level: number }) => {
  return (
    <>
      <color attach="background" args={['#020617']} />
      <fog attach="fog" args={['#020617', 5, 25]} />

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Particles />

      <Grid
        infiniteGrid
        fadeDistance={40}
        fadeStrength={5}
        cellSize={1}
        sectionSize={5}
        sectionThickness={1.5}
        sectionColor="#00f3ff"
        cellColor="#00f3ff"
        cellThickness={0.5}
        position={[0, -2, 0]}
      />

      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b026ff" />

      {(level === 6 || level === 7) && (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={[2, 1, -5]}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <MeshDistortMaterial color="#00f3ff" speed={5} distort={0.3} />
          </mesh>
        </Float>
      )}

      {level >= 8 && (
        <Float speed={3} rotationIntensity={2} floatIntensity={3}>
          <mesh position={[-3, 2, -4]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <MeshDistortMaterial color="#ff265a" speed={3} distort={0.5} />
          </mesh>
        </Float>
      )}
    </>
  );
};

interface GameBackgroundProps {
  level: number;
}

const GameBackground: React.FC<GameBackgroundProps> = ({ level }) => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0f172a]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault fov={75} />
        <BackgroundElements level={level} />
        <CameraHandler level={level} />
      </Canvas>
    </div>
  );
};

const CameraHandler = ({ level }: { level: number }) => {
  const targetPos = useRef(new THREE.Vector3(0, 2, 10));
  const targetQuat = useRef(new THREE.Quaternion());

  useFrame((state) => {
    if (!state.camera) return;

    if (levelSettings[level]) {
      targetPos.current.set(...levelSettings[level].pos);
      targetQuat.current.setFromEuler(new THREE.Euler(...levelSettings[level].rot));
    }

    state.camera.position.lerp(targetPos.current, 0.05);
    state.camera.quaternion.slerp(targetQuat.current, 0.05);
  });
  return null;
};

export default GameBackground;


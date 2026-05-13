"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function CinematicOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
    if (materialRef.current) {
      // Modulate distort based on time for breathing effect
      materialRef.current.distort = 0.4 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#1e3a8a"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </Sphere>

      {/* Outer Glow Wireframe */}
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial
          color="#60a5fa"
          wireframe
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      {/* Cinematic Blur overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10" />

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: false, alpha: true }}>
        <fog attach="fog" args={['#000000', 4, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />

        <CinematicOrb />

        <Sparkles
          count={200}
          scale={10}
          size={2}
          speed={0.4}
          opacity={0.2}
          color="#93c5fd"
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

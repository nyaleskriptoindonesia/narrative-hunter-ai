"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function BackgroundParticles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 140;

    const count = 1200;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 300;
      positions[i3 + 1] = (Math.random() - 0.5) * 300;
      positions[i3 + 2] = (Math.random() - 0.5) * 300;
      velocities[i3] = (Math.random() - 0.5) * 0.06;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.06;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.06;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

    const material = new THREE.PointsMaterial({
      size: 1.8,
      color: new THREE.Color(0x00e5ff),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const neon = new THREE.PointLight(0x00e5ff, 0.6, 500);
    neon.position.set(100, 60, 150);
    scene.add(neon);
    const purple = new THREE.PointLight(0x3a0c63, 0.5, 500);
    purple.position.set(-120, -40, 100);
    scene.add(purple);

    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    const animate = () => {
      const pos = geometry.getAttribute("position") as THREE.BufferAttribute;
      const vel = geometry.getAttribute("velocity") as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos.array[i3] += vel.array[i3];
        pos.array[i3 + 1] += vel.array[i3 + 1];
        pos.array[i3 + 2] += vel.array[i3 + 2];
        if (pos.array[i3] > 160 || pos.array[i3] < -160) vel.array[i3] *= -1;
        if (pos.array[i3 + 1] > 160 || pos.array[i3 + 1] < -160) vel.array[i3 + 1] *= -1;
        if (pos.array[i3 + 2] > 160 || pos.array[i3 + 2] < -160) vel.array[i3 + 2] *= -1;
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10"></div>;
}

"use client";
import { useEffect, useRef, useState } from "react";

function generatePoints(n: number, width: number, height: number) {
  const points: [number, number][] = [];
  const step = width / (n - 1);
  let v = height * 0.6;
  for (let i = 0; i < n; i++) {
    v += (Math.random() - 0.5) * height * 0.08;
    v = Math.max(height * 0.2, Math.min(height * 0.85, v));
    points.push([i * step, v]);
  }
  return points;
}

export default function AnimatedGraph() {
  const [size, setSize] = useState({ w: 600, h: 160 });
  const [points, setPoints] = useState<[number, number][]>(generatePoints(40, 600, 160));
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      const w = Math.min(900, window.innerWidth - 80);
      const h = Math.max(140, Math.min(220, Math.floor(w / 4)));
      setSize({ w, h });
      setPoints(generatePoints(40, w, h));
    };
    onResize();
    window.addEventListener("resize", onResize);
    const loop = () => {
      setPoints((prev) => {
        const p = prev.slice(1);
        const lastX = prev[prev.length - 1][0];
        const nextY = Math.max(size.h * 0.2, Math.min(size.h * 0.85, prev[prev.length - 1][1] + (Math.random() - 0.5) * size.h * 0.08));
        p.push([lastX, nextY]);
        return p.map(([x, y], i) => [i * (size.w / (prev.length - 1)), y]);
      });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [size.w, size.h]);

  const pathD = points.reduce((acc, [x, y], i) => {
    return acc + (i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`);
  }, "");

  return (
    <div className="absolute inset-x-0 top-10 flex justify-center pointer-events-none">
      <svg width={size.w} height={size.h} className="opacity-70">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,229,255,0.6)" />
            <stop offset="100%" stopColor="rgba(58,12,99,0.2)" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="url(#g1)" strokeWidth="2.5" />
        <path d={`${pathD} L ${size.w} ${size.h} L 0 ${size.h} Z`} fill="url(#g1)" opacity="0.15" />
      </svg>
    </div>
  );
}

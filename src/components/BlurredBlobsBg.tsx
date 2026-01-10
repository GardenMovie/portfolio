/*
  Blurred background blobs using --chart-x colors from index.css
  This component is absolutely positioned and pointer-events-none, so it doesn't interfere with content.
*/



import React, { useRef, useEffect, useState } from 'react';

const blobColors = [
  'var(--chart-1)',
  'var(--chart-2)',
  'var(--chart-3)',
  'var(--chart-4)',
  'var(--chart-5)'
];

const blobsConfig = [
  { size: 420, opacity: 0.4 },
  { size: 350, opacity: 0.3 },
  { size: 300, opacity: 0.25 },
  { size: 300, opacity: 0.25 },
  { size: 250, opacity: 0.2 },
  { size: 250, opacity: 0.2 },
  { size: 400, opacity: 0.15 },
  { size: 200, opacity: 0.1 },
  { size: 180, opacity: 0.1 },
];

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomVelocity() {
  // px per frame, can be negative
  return getRandom(-0.6, 0.6);
}

export default function BlurredBlobsBg() {
  const [positions, setPositions] = useState(() =>
    blobsConfig.map(() => ({
      x: getRandom(0, window.innerWidth * 0.7),
      y: getRandom(0, window.innerHeight * 0.7),
      vx: getRandomVelocity(),
      vy: getRandomVelocity(),
    }))
  );
  const animationRef = useRef();

  useEffect(() => {
    function animate() {
      setPositions(prev =>
        prev.map((pos, i) => {
          const { size } = blobsConfig[i];
          let { x, y, vx, vy } = pos;
          const width = window.innerWidth;
          const height = Math.max(document.body.scrollHeight, window.innerHeight);

          x += vx;
          y += vy;

          // Bounce off edges
          if (x < 0) {
            x = 0;
            vx = Math.abs(vx);
          } else if (x + size > width) {
            x = width - size;
            vx = -Math.abs(vx);
          }
          if (y < 0) {
            y = 0;
            vy = Math.abs(vy);
          } else if (y + size > height) {
            y = height - size;
            vy = -Math.abs(vy);
          }
          return { x, y, vx, vy };
        })
      );
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // Re-init positions on resize
  useEffect(() => {
    function handleResize() {
      setPositions(prev =>
        prev.map((pos, i) => {
          const { size } = blobsConfig[i];
          let x = Math.min(pos.x, window.innerWidth - size);
          let y = Math.min(pos.y, Math.max(document.body.scrollHeight, window.innerHeight) - size);
          return { ...pos, x, y };
        })
      );
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-screen -z-10 pointer-events-none overflow-hidden"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100%', minHeight: '100%', pointerEvents: 'none', zIndex: -10 }}
    >
      {blobsConfig.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            background: blobColors[i % blobColors.length],
            opacity: blob.opacity,
            left: positions[i]?.x ?? 0,
            top: positions[i]?.y ?? 0,
            transition: 'none',
          }}
        />
      ))}
    </div>
  );
}

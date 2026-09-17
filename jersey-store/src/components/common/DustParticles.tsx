import React, { useEffect, useRef } from 'react';

interface DustParticlesProps {
  particleCount?: number;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
  vx: number;
  vy: number;
  pulseSpeed: number;
}

export const DustParticles: React.FC<DustParticlesProps> = ({
  particleCount = 50,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize particles
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.35 + 0.05,
      targetAlpha: Math.random() * 0.4 + 0.1,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.3 - 0.05, // Gentle floating upward motion
      pulseSpeed: Math.random() * 0.008 + 0.002,
    }));

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Pulse opacity
        p.alpha += (p.targetAlpha - p.alpha) * p.pulseSpeed;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.02) {
          p.targetAlpha = Math.random() * 0.45 + 0.05;
        }

        // Wrap around boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw particle dot with soft glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(243, 240, 232, ${p.alpha})`;
        ctx.fill();

        // Extra soft radial highlight for larger particles
        if (p.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(227, 38, 30, ${p.alpha * 0.25})`; // Subtle studio spotlight crimson reflection
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 opacity-70 ${className}`}
    />
  );
};

import React, { useEffect, useRef } from 'react';

interface DustParticlesProps {
  particleCount?: number;
  className?: string;
}

interface SparkParticle {
  x: number;
  y: number;
  length: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  vx: number;
  vy: number;
  flickerSpeed: number;
}

export const DustParticles: React.FC<DustParticlesProps> = ({
  particleCount = 55,
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

    // Initialize Rising Silver Fire Sparks
    const particles: SparkParticle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 4.5 + 2, // Kinetic spark streak length
      size: Math.random() * 1.6 + 0.6,
      alpha: Math.random() * 0.6 + 0.15,
      targetAlpha: Math.random() * 0.75 + 0.15,
      vx: (Math.random() - 0.5) * 0.6, // Slight horizontal drift
      vy: -(Math.random() * 1.2 + 0.5), // Upward rising ember speed
      flickerSpeed: Math.random() * 0.025 + 0.008,
    }));

    // Render Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Move spark particle upward
        p.x += p.vx + (Math.random() - 0.5) * 0.15;
        p.y += p.vy;

        // Dynamic alpha flickering
        p.alpha += (p.targetAlpha - p.alpha) * p.flickerSpeed;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.03) {
          p.targetAlpha = Math.random() * 0.8 + 0.1;
        }

        // Wrap around boundaries & re-spawn at bottom when burned out
        if (p.y < -15) {
          p.y = height + Math.random() * 20;
          p.x = Math.random() * width;
          p.vy = -(Math.random() * 1.2 + 0.5);
          p.alpha = 0.1;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        // Draw Silver Fire Spark Core & Kinetic Streak
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * p.length, p.y - p.vy * p.length * 1.5);
        ctx.strokeStyle = `rgba(235, 240, 248, ${p.alpha})`; // Metallic platinum-silver core
        ctx.lineWidth = p.size;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Metallic Silver Spark Flare / Aura
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(195, 208, 225, ${p.alpha * 0.4})`; // Glowing silver aura
        ctx.fill();

        // Outer Platinum Sparkle Highlight for larger embers
        if (p.size > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.15})`;
          ctx.fill();
        }
        ctx.restore();
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
      className={`absolute inset-0 pointer-events-none z-0 opacity-85 ${className}`}
    />
  );
};

import React, { useEffect, useRef } from 'react';

interface DustParticlesProps {
  particleCount?: number;
  className?: string;
}

interface RealDustParticle {
  x: number;
  y: number;
  baseRadius: number;
  maxAlpha: number;
  vx: number;
  vy: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  seed: number;
  depth: number;
  twinklePhase: number;
  twinkleSpeed: number;
}

export const DustParticles: React.FC<DustParticlesProps> = ({
  particleCount = 65,
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

    // Initialize Photorealistic Studio Dust Motes with 3D Depth Layers
    const particles: RealDustParticle[] = Array.from({ length: particleCount }, () => {
      const depth = Math.random() < 0.25 ? Math.random() * 0.6 + 1.1 : Math.random() * 0.7 + 0.3; // 25% foreground bokeh, 75% mid/far motes
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius: Math.random() * 1.5 + 0.5,
        maxAlpha: depth > 1.0 ? Math.random() * 0.35 + 0.1 : Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.25 - 0.05, // Gentle air draft float
        wobbleSpeed: Math.random() * 0.015 + 0.005,
        wobbleAmount: Math.random() * 0.35 + 0.1,
        seed: Math.random() * 1000,
        depth,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
      };
    });

    let isVisible = true;
    let isRunning = false;

    // Render Loop
    const render = () => {
      if (!isVisible) {
        isRunning = false;
        return;
      }
      isRunning = true;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Micro-turbulence drift (Brownian air currents)
        p.seed += p.wobbleSpeed;
        const driftX = p.vx + Math.sin(p.seed) * p.wobbleAmount;
        const driftY = p.vy + Math.cos(p.seed * 0.8) * (p.wobbleAmount * 0.4);

        p.x += driftX * p.depth;
        p.y += driftY * p.depth;

        // Realistic light catch glint / twinkle
        p.twinklePhase += p.twinkleSpeed;
        const twinkleFactor = Math.sin(p.twinklePhase);
        const activeAlpha = Math.max(0, p.maxAlpha * (0.35 + 0.65 * (twinkleFactor * 0.5 + 0.5)));

        // Wrap around canvas boundaries smoothly
        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();

        if (p.depth > 1.0) {
          // Out-of-focus Foreground Bokeh Dust Mote
          const bokehRadius = p.baseRadius * 3.2;
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, bokehRadius);
          gradient.addColorStop(0, `rgba(240, 245, 255, ${activeAlpha * 0.65})`);
          gradient.addColorStop(0.45, `rgba(195, 210, 230, ${activeAlpha * 0.25})`);
          gradient.addColorStop(1, `rgba(175, 195, 220, 0)`);
          ctx.beginPath();
          ctx.fillStyle = gradient;
          ctx.arc(p.x, p.y, bokehRadius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Crisp Mid/Far Studio Dust Speck
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.baseRadius * p.depth, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245, 248, 255, ${activeAlpha})`;
          ctx.fill();

          // Soft Glint Aura (simulates studio spotlight reflection)
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.baseRadius * p.depth * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190, 205, 225, ${activeAlpha * 0.3})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const startAnimation = () => {
      if (!isRunning && isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      isRunning = false;
    };

    // IntersectionObserver to pause when scrolled out of viewport
    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isVisible = entry.isIntersecting && !document.hidden;
          if (isVisible) {
            startAnimation();
          } else {
            stopAnimation();
          }
        },
        { threshold: 0.05 }
      );
      observer.observe(canvas);
    } else {
      startAnimation();
    }

    // Pause when browser tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        stopAnimation();
      } else if (observer && canvas) {
        // Re-check visibility
        isVisible = true;
        startAnimation();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer) observer.disconnect();
      stopAnimation();
    };
  }, [particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 opacity-85 ${className}`}
    />
  );
};

"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt?: string;
  title?: string;
  badge?: string;
}

export interface CylinderCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[];
  containerClassName?: string;
  cardClassName?: string;
  animationDuration?: number; // in seconds
  cardWidth?: number; // in pixels
}

export const CylinderCarousel = React.forwardRef<HTMLDivElement, CylinderCarouselProps>(
  (
    {
      images,
      className,
      containerClassName,
      cardClassName,
      animationDuration = 30,
      cardWidth = 230,
      ...props
    },
    ref
  ) => {
    const N = images.length;
    
    // Responsive card width calculation for mobile vs desktop
    const customStyle = {
      "--n": N,
      "--w": `clamp(135px, 36vw, ${cardWidth}px)`,
      "--ba": `calc(1turn / var(--n))`,
      "--anim-dur": `${animationDuration}s`,
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn(
          "relative w-full h-full min-h-[380px] sm:min-h-[520px] grid place-items-center overflow-hidden",
          className
        )}
        style={{
          perspective: "clamp(32em, 80vw, 48em)",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 15% 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 15% 85%, transparent 100%)",
        }}
        {...props}
      >
        {/* Soft Ambient Radial Spotlight behind the cylinder */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(227,38,30,0.08)_0%,rgba(255,255,255,0.02)_40%,transparent_70%)] blur-2xl pointer-events-none" />

        {/* Subtle Grounding Floor Pedestal Shadow */}
        <div className="absolute bottom-8 w-[80%] h-8 bg-black/90 rounded-[100%] blur-xl pointer-events-none" />

        <div
          className={cn(
            "grid place-items-center [transform-style:preserve-3d] motion-reduce:!animate-[ry_128s_linear_infinite]",
            containerClassName
          )}
          style={{
            ...customStyle,
            animation: "ry var(--anim-dur) linear infinite",
          }}
        >
          <style>
            {`
              @keyframes ry {
                to { transform: rotateY(1turn); }
              }
            `}
          </style>
          
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "relative [grid-area:1/1] rounded-xs overflow-hidden border border-white/20 bg-[#0B0B0A] shadow-[0_16px_40px_rgba(0,0,0,0.85)] [backface-visibility:hidden] select-none group transition-all duration-300",
                cardClassName
              )}
              style={{
                width: "var(--w)",
                aspectRatio: "3/4",
                "--i": i,
                transform: "rotateY(calc(var(--i) * var(--ba))) translateZ(calc(-1 * (0.5 * var(--w) + 0.8em) / tan(0.5 * var(--ba))))",
              } as React.CSSProperties}
            >
              <img
                src={img.src}
                alt={img.alt || `Archival Kit Specimen ${i + 1}`}
                className="w-full h-full object-cover grayscale-[10%] contrast-[1.12] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-black/30 pointer-events-none" />
              
              {/* Micro Specimen Footer Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#F3F0E8] uppercase bg-[#070706]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 pointer-events-none">
                <span className="truncate font-medium">{img.title || `SPEC NO. 00${i + 1}`}</span>
                <span className="text-[#E3261E] font-bold text-[9px] ml-1.5 shrink-0">SG°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CylinderCarousel.displayName = "CylinderCarousel";

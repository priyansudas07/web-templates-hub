import React, { useState } from 'react';
import '@google/model-viewer';
import { RotateCw, Shield } from 'lucide-react';

// Custom Element Type Declaration for React 19 & TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
  namespace React.JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

interface Jersey3DViewerProps {
  modelUrl?: string;
  altText?: string;
  className?: string;
  showControls?: boolean;
}

export const Jersey3DViewer: React.FC<Jersey3DViewerProps> = ({
  modelUrl = '/jersey.glb',
  altText = '3D Jersey Model',
  className = '',
  showControls = true,
}) => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  return (
    <div className={`relative w-full h-full bg-[#0B0B0A] rounded-sm overflow-hidden border border-[#292927] group ${className}`}>
      
      {/* Top Status Header */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#0B0B0A]/90 backdrop-blur-md border border-[#292927] text-[10px] font-mono font-bold text-[#E3261E] tracking-widest uppercase rounded-sm shadow-md">
          <Shield className="w-3 h-3 text-[#E3261E]" />
          <span>3D VAULT MODEL</span>
        </div>

        <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-[#0B0B0A]/90 backdrop-blur-md border border-[#292927] text-[10px] font-mono text-[#9B9992] uppercase rounded-sm">
          <span>DRAG TO ROTATE 360°</span>
        </div>
      </div>

      {/* 3D Model Canvas using Google model-viewer */}
      <model-viewer
        src={modelUrl}
        alt={altText}
        camera-controls
        auto-rotate={isAutoRotating ? true : undefined}
        auto-rotate-delay="1000"
        rotation-per-second="30deg"
        shadow-intensity="1.5"
        shadow-softness="0.8"
        environment-image="neutral"
        exposure="1.15"
        loading="eager"
        interaction-prompt="none"
        style={{
          width: '100%',
          height: '100%',
          minHeight: '380px',
          backgroundColor: '#0B0B0A',
        }}
      />

      {/* Bottom Interactive Controls */}
      {showControls && (
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs font-mono">
          <button
            type="button"
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border backdrop-blur-md transition-all ${
              isAutoRotating
                ? 'bg-[#E3261E]/20 border-[#E3261E] text-[#F3F0E8]'
                : 'bg-[#151514]/90 border-[#292927] text-[#9B9992] hover:text-[#F3F0E8]'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} />
            <span>{isAutoRotating ? 'AUTO-ROTATE ON' : 'PAUSED'}</span>
          </button>

          <span className="text-[10px] text-[#9B9992] bg-[#0B0B0A]/90 border border-[#292927] px-2 py-1 rounded-sm">
            SCROLL TO ZOOM
          </span>
        </div>
      )}
    </div>
  );
};

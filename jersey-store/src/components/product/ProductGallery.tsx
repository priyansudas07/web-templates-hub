import React, { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badgeTag?: string;
  archiveNo?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  badgeTag,
  archiveNo = '001'
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewLabels = ['FRONT SPECIMEN', 'REVERSE SILHOUETTE', 'DETAIL VIEW'];

  return (
    <div className="space-y-6">
      {/* Main Image Stage - Expansive Editorial Canvas */}
      <div className="relative aspect-[3/4] sm:aspect-[4/5] min-h-[480px] sm:min-h-[580px] bg-gradient-to-b from-[#131311] via-[#0D0D0C] to-[#070706] rounded-sm overflow-hidden border border-white/[0.08] flex items-center justify-center p-8 sm:p-14 group">
        
        {/* Specular Top Ambient Lighting */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_65%)] pointer-events-none" 
        />

        {/* Minimal Specimen Markers */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none z-10 text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#8E8C85] uppercase">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
            <span>ARCHIVE NO. {archiveNo}</span>
          </div>
          {badgeTag && (
            <span className="text-[#E3261E] font-bold tracking-[0.2em]">
              {badgeTag}
            </span>
          )}
        </div>

        {/* Central Jersey Hero with Museum-Grade Shadow */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={images[activeImageIndex] || images[0]}
            alt={`${productName} - Specimen View ${activeImageIndex + 1}`}
            loading="eager"
            className="max-h-full max-w-full object-contain filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.95)] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Floating Spec Indicator */}
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono tracking-[0.2em] text-[#8E8C85] uppercase pointer-events-none">
          <span className="hidden sm:inline">OFFICIAL ATELIER SPECIMEN</span>
          <span className="bg-[#070706]/90 backdrop-blur-md px-3 py-1.5 border border-white/10 ml-auto">
            {viewLabels[activeImageIndex] || `SPECIMEN ${activeImageIndex + 1}`} // {activeImageIndex + 1} OF {images.length}
          </span>
        </div>
      </div>

      {/* Editorial View Switcher Bar */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 pt-1">
          {images.map((img, idx) => {
            const isActive = activeImageIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                aria-label={`View ${productName} ${viewLabels[idx] || `angle ${idx + 1}`}`}
                className={`flex-1 py-3 px-4 rounded-sm border transition-all duration-300 flex items-center justify-between gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E] group ${
                  isActive
                    ? 'border-[#E3261E] bg-white/[0.03]'
                    : 'border-white/[0.08] bg-transparent hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={`text-[10px] font-mono font-bold tracking-widest ${isActive ? 'text-[#E3261E]' : 'text-[#6E6C65] group-hover:text-white'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[11px] font-mono tracking-[0.18em] uppercase ${isActive ? 'text-[#F3F0E8] font-bold' : 'text-[#8E8C85] group-hover:text-[#F3F0E8]'}`}>
                    {viewLabels[idx] || `VIEW 0${idx + 1}`}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-sm overflow-hidden bg-[#070706] border border-white/10 p-0.5 shrink-0 hidden sm:block">
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};



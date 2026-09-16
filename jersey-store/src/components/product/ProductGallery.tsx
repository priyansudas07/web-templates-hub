import React, { useState } from 'react';
import { Badge } from '../common/Badge';

interface ProductGalleryProps {
  images: string[];
  productName: string;
  badgeTag?: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  images,
  productName,
  badgeTag
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image Stage */}
      <div className="relative aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
        <img
          src={images[activeImageIndex] || images[0]}
          alt={`${productName} - Image ${activeImageIndex + 1}`}
          loading="eager"
          className="w-full h-full object-cover object-center transition-all duration-300"
        />

        {badgeTag && (
          <div className="absolute top-4 left-4 z-10">
            <Badge label={badgeTag} variant="featured" />
          </div>
        )}

        <div className="absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-bold text-slate-300 tracking-wider">
          VIEW {activeImageIndex + 1} OF {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex items-center gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-square w-20 rounded-xl overflow-hidden border-2 transition-all ${
                activeImageIndex === idx
                  ? 'border-rose-500 scale-105 shadow-md shadow-rose-950/50'
                  : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-700'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

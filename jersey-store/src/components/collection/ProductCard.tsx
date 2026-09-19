import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasBackImage = product.images.length > 1;

  const toggleView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasBackImage) {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const formatCategory = () => {
    const sport = product.sport.toUpperCase();
    const cat = product.category.replace('-', ' ').toUpperCase();
    return `${sport} • ${cat}`;
  };

  return (
    <div className={`group bg-[#121211] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col rounded-sm overflow-hidden ${className}`}>
      
      {/* Product Image Area */}
      <div className="relative aspect-[4/5] bg-[#090908] overflow-hidden">
        <Link
          to={`/collection/${product.id}`}
          className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
          aria-label={`${product.name} details`}
        >
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={`${product.name} - ${currentImageIndex === 0 ? 'Front' : 'Back'}`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Edition / Type Badge */}
        {product.badgeTag && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="inline-block px-2 py-0.5 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0B0B0A]/90 text-[#F3F0E8] border border-white/10 rounded-sm">
              {product.badgeTag}
            </span>
          </div>
        )}

        {/* Front / Back Toggle Button */}
        {hasBackImage && (
          <button
            onClick={toggleView}
            aria-label="Toggle jersey view"
            className="absolute bottom-3 right-3 z-10 p-1.5 sm:px-2 sm:py-1 rounded-sm bg-[#0B0B0A]/85 backdrop-blur-sm text-[#9B9992] hover:text-[#F3F0E8] border border-white/10 text-[10px] font-mono uppercase flex items-center gap-1 transition-all opacity-80 hover:opacity-100"
          >
            <RotateCcw className="w-3 h-3 text-[#E3261E]" />
            <span className="hidden sm:inline">{currentImageIndex === 0 ? 'BACK' : 'FRONT'}</span>
          </button>
        )}
      </div>

      {/* Product Details Area */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-medium tracking-wider text-[#9B9992]/80 uppercase">
            <span>{formatCategory()}</span>
            {product.season && <span>{product.season}</span>}
          </div>

          <Link
            to={`/collection/${product.id}`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded"
          >
            <h3 className="font-sans font-bold text-sm sm:text-base text-[#F3F0E8] group-hover:text-white transition-colors uppercase tracking-tight line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          {product.team && (
            <p className="text-xs text-[#9B9992] font-sans font-normal line-clamp-1">
              {product.team} {product.player ? `• ${product.player}` : ''}
            </p>
          )}
        </div>

        {/* Price & View Kit Interaction */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
          <div>
            <span className="text-base sm:text-lg font-mono font-bold text-[#F3F0E8] tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <Link
            to={`/collection/${product.id}`}
            className="inline-flex items-center gap-1 text-[11px] font-mono font-bold tracking-widest text-[#F3F0E8]/80 group-hover:text-[#E3261E] uppercase transition-colors"
          >
            <span>VIEW KIT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

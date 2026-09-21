import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface FeaturedProductCardProps {
  product: Product;
  className?: string;
}

export const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({ product, className = '' }) => {
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
    <div className={`group bg-[#121211] border border-white/[0.08] hover:border-white/20 transition-all duration-300 rounded-sm overflow-hidden flex flex-col md:grid md:grid-cols-12 md:col-span-2 ${className}`}>
      
      {/* Large Featured Image */}
      <div className="relative md:col-span-7 aspect-[4/5] md:aspect-auto min-h-[340px] sm:min-h-[420px] bg-[#090908] overflow-hidden">
        <Link
          to={`/collection/${product.id}`}
          className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
          aria-label={`${product.name} details`}
        >
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={`${product.name} - ${currentImageIndex === 0 ? 'Front' : 'Back'}`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
        </Link>

        {/* Featured Tag */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 pointer-events-none">
          <span className="px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase bg-[#E3261E] text-[#F3F0E8] rounded-sm shadow-sm">
            FEATURED KIT
          </span>
          {product.badgeTag && (
            <span className="px-2.5 py-1 text-[9px] sm:text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0B0B0A]/90 text-[#F3F0E8] border border-white/10 rounded-sm">
              {product.badgeTag}
            </span>
          )}
        </div>

        {/* Front / Back Toggle */}
        {hasBackImage && (
          <button
            onClick={toggleView}
            aria-label="Toggle jersey view"
            className="absolute bottom-4 right-4 z-10 px-2.5 py-1.5 rounded-sm bg-[#0B0B0A]/90 backdrop-blur-sm text-[#9B9992] hover:text-[#F3F0E8] border border-white/10 text-[10px] font-mono uppercase flex items-center gap-1.5 transition-all opacity-85 hover:opacity-100"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#E3261E]" />
            <span>{currentImageIndex === 0 ? 'BACK VIEW' : 'FRONT VIEW'}</span>
          </button>
        )}
      </div>

      {/* Featured Editorial Details */}
      <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between gap-6 border-t md:border-t-0 md:border-l border-white/[0.06]">
        <div className="space-y-4">
          <div className="flex items-center justify-between text-[11px] font-mono font-medium tracking-wider text-[#9B9992]/80 uppercase">
            <span>{formatCategory()}</span>
            {product.season && <span className="text-[#9B9992]">{product.season}</span>}
          </div>

          <Link
            to={`/collection/${product.id}`}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded"
          >
            <h3 className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#F3F0E8] group-hover:text-white transition-colors uppercase tracking-tight leading-tight">
              {product.name}
            </h3>
          </Link>

          {product.team && (
            <p className="text-xs sm:text-sm font-sans text-[#E3261E] font-semibold tracking-wide uppercase">
              {product.team} {product.player ? `// ${product.player}` : ''}
            </p>
          )}

          <p className="text-xs sm:text-sm text-[#9B9992] font-sans leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="pt-2">
              <span className="block text-[10px] font-mono text-[#9B9992]/70 uppercase tracking-widest mb-1.5">
                AVAILABLE SIZES
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-[10px] font-mono font-bold px-2 py-1 bg-white/[0.04] text-[#F3F0E8] border border-white/[0.08] rounded-sm"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Price & CTA */}
        <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div>
            <span className="block text-[10px] font-mono text-[#9B9992]/70 uppercase tracking-wider">
              MATCH PRICE
            </span>
            <span className="text-xl sm:text-2xl font-mono font-bold text-[#F3F0E8] tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <Link
            to={`/collection/${product.id}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.05] hover:bg-[#E3261E] text-[#F3F0E8] border border-white/10 hover:border-[#E3261E] rounded-sm text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200"
          >
            <span>VIEW KIT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { Badge } from '../common/Badge';
import { ArrowUpRight, RotateCcw } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasBackImage = product.images.length > 1;

  const toggleView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasBackImage) {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const getBadgeVariant = (badge?: string) => {
    if (!badge) return 'default';
    if (badge.includes('NEW')) return 'new';
    if (badge.includes('RETRO')) return 'retro';
    if (badge.includes('MATCH')) return 'match';
    if (badge.includes('LIMITED')) return 'limited';
    return 'featured';
  };

  return (
    <div className="group bg-[#151514] border border-[#292927] hover:border-[#9B9992]/40 transition-all duration-300 flex flex-col overflow-hidden rounded-sm">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] bg-[#0B0B0A] overflow-hidden">
        <Link
          to={`/collection/${product.id}`}
          className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
          aria-label={`${product.name} details page`}
        >
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={`${product.name} - View ${currentImageIndex === 0 ? 'Front' : 'Back'}`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          {product.badgeTag && (
            <Badge label={product.badgeTag} variant={getBadgeVariant(product.badgeTag)} />
          )}
        </div>

        {/* Front/Back View Switcher Button */}
        {hasBackImage && (
          <button
            onClick={toggleView}
            aria-label="Toggle front and back jersey view"
            className="absolute bottom-3 right-3 z-10 px-2.5 py-1.5 rounded-sm bg-[#0B0B0A]/90 backdrop-blur-md text-[#F3F0E8] hover:text-white border border-[#292927] text-xs font-sans font-semibold flex items-center gap-1.5 shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
          >
            <RotateCcw className="w-3 h-3 text-[#E3261E]" />
            <span className="hidden sm:inline">{currentImageIndex === 0 ? 'BACK VIEW' : 'FRONT VIEW'}</span>
          </button>
        )}
      </div>

      {/* Card Details */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono font-semibold uppercase tracking-wider text-[#E3261E]">
            <span>[ {product.sport} / {product.category.replace('-', ' ')} ]</span>
            {product.season && <span className="text-[#9B9992] font-mono">{product.season}</span>}
          </div>

          <Link to={`/collection/${product.id}`} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded">
            <h3 className="font-sans font-extrabold text-sm sm:text-base text-[#F3F0E8] group-hover:text-[#E3261E] transition-colors line-clamp-1 uppercase tracking-tight leading-snug">
              {product.name}
            </h3>
          </Link>
          
          {product.team && (
            <p className="text-xs text-[#9B9992] font-sans font-normal line-clamp-1">
              {product.team} {product.player ? `• ${product.player}` : ''}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-[#292927] flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] font-mono text-[#9B9992] block uppercase tracking-wider">Price</span>
            <span className="text-base sm:text-lg font-mono font-bold text-[#F3F0E8] tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Sizes Bar */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-1" aria-label="Available sizes">
              {product.sizes.slice(0, 4).map((size) => (
                <span
                  key={size}
                  className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-sm bg-[#0B0B0A] text-[#F3F0E8] border border-[#292927]"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-[10px] font-mono text-[#9B9992] font-bold">+1</span>
              )}
            </div>
          )}

          <Link
            to={`/collection/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className="p-2 rounded-sm bg-[#E3261E]/10 hover:bg-[#E3261E] text-[#E3261E] hover:text-[#F3F0E8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

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
    <div className="group bg-[#1E293B]/60 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-black/50">
      
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] bg-slate-900/80 overflow-hidden">
        <Link to={`/collection/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[currentImageIndex] || product.images[0]}
            alt={`${product.name} - View ${currentImageIndex === 0 ? 'Front' : 'Back'}`}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
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
            className="absolute bottom-3 right-3 z-10 p-2 rounded-lg bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-700/80 text-xs font-semibold flex items-center gap-1.5 shadow-lg transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            <span className="hidden sm:inline">{currentImageIndex === 0 ? 'Back View' : 'Front View'}</span>
          </button>
        )}
      </div>

      {/* Card Details */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-rose-400">
            <span>{product.sport} • {product.category.replace('-', ' ')}</span>
            {product.season && <span className="text-slate-500">{product.season}</span>}
          </div>

          <Link to={`/collection/${product.id}`}>
            <h3 className="font-bold text-base text-slate-100 group-hover:text-rose-400 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          
          {product.team && (
            <p className="text-xs text-slate-400 line-clamp-1">
              {product.team} {product.player ? `• ${product.player}` : ''}
            </p>
          )}
        </div>

        <div className="pt-3 border-t border-slate-800/80 flex items-end justify-between gap-2">
          <div>
            <span className="text-xs text-slate-400 block font-medium">Price</span>
            <span className="text-lg font-extrabold text-slate-100">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Sizes Bar */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-1">
              {product.sizes.slice(0, 4).map((size) => (
                <span
                  key={size}
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {size}
                </span>
              ))}
              {product.sizes.length > 4 && (
                <span className="text-[10px] text-slate-500 font-bold">+1</span>
              )}
            </div>
          )}

          <Link
            to={`/collection/${product.id}`}
            aria-label={`View details for ${product.name}`}
            className="p-2.5 rounded-lg bg-rose-600/20 hover:bg-rose-600 text-rose-400 hover:text-white transition-colors"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

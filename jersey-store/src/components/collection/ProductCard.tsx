import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../types/product';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ProductCardVariant = 'large' | 'stacked' | 'standard';

interface ProductCardProps {
  product: Product;
  variant?: ProductCardVariant;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  variant = 'standard',
  className = '',
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasBackImage = product.images.length > 1;

  const toggleView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (hasBackImage) {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }
  };

  const getBadgeLabel = () => {
    if (product.badgeTag) return product.badgeTag;
    if (product.featured) return 'FEATURED';
    if (product.newArrival) return 'LIMITED';
    return 'MATCH VERSION';
  };

  const badgeLabel = getBadgeLabel();
  const currentImg = product.images[currentImageIndex] || product.images[0];
  const isPngKit = currentImg.endsWith('.png') || currentImg.includes('/kits/');

  // 1. LARGE FEATURED CARD (occupying ~55-60% width)
  if (variant === 'large') {
    return (
      <div
        className={cn(
          "group bg-[#0E0E0D] border border-white/[0.07] hover:border-white/[0.2] transition-all duration-300 ease-out rounded-sm flex flex-col justify-between overflow-hidden shadow-2xl h-full",
          className
        )}
      >
        {/* Top Archival Spec Bar */}
        <div className="px-5 py-2.5 bg-[#0A0A09] border-b border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#8E8C85] tracking-widest uppercase">
          <span className="flex items-center gap-1.5">
            <span className="text-[#E3261E] font-bold">//</span>
            <span>ARCHIVE NO. {product.archiveNo || '001'}</span>
          </span>
          {product.techSpec && (
            <span className="text-white/60 font-semibold">{product.techSpec}</span>
          )}
        </div>

        {/* Large Product Photography with Full Silhouette Framing */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#060605] overflow-hidden flex items-center justify-center p-2 sm:p-4">
          <Link
            to={`/collection/${product.id}`}
            className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex items-center justify-center"
            aria-label={`${product.name} details`}
          >
            <img
              src={currentImg}
              alt={`${product.name} - ${currentImageIndex === 0 ? 'Front' : 'Back'}`}
              loading="lazy"
              className={cn(
                "w-full h-full group-hover:scale-[1.03] group-hover:brightness-[1.04] transition-all duration-500 ease-out",
                isPngKit ? "object-contain p-2" : "object-cover object-center"
              )}
            />
          </Link>

          {/* Front / Back Toggle Button */}
          {hasBackImage && (
            <button
              onClick={toggleView}
              aria-label="Toggle jersey view"
              className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded-sm bg-[#080807]/90 backdrop-blur-md text-[#8E8C85] hover:text-[#F3F0E8] border border-white/10 text-[10px] font-mono uppercase flex items-center gap-1.5 transition-all opacity-90 hover:opacity-100 shadow-md"
            >
              <RotateCcw className="w-3 h-3 text-[#E3261E]" />
              <span>{currentImageIndex === 0 ? '01 / FRONT' : '02 / BACK'}</span>
            </button>
          )}
        </div>

        {/* Details Underneath Image */}
        <div className="p-6 sm:p-7 flex flex-col justify-between gap-5 flex-grow bg-[#0E0E0D] group-hover:-translate-y-1 transition-transform duration-300 ease-out">
          <div className="space-y-2.5">
            {/* Label with Orange Accent */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] text-[#E3261E] uppercase">
                  {badgeLabel}
                </span>
              </div>
              {product.season && (
                <span className="text-[10px] font-mono text-[#8E8C85] tracking-wider">{product.season}</span>
              )}
            </div>

            {/* Product Name */}
            <Link
              to={`/collection/${product.id}`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded"
            >
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl lg:text-3xl text-[#F3F0E8] group-hover:text-white transition-colors uppercase tracking-tight leading-tight">
                {product.name}
              </h3>
            </Link>

            {product.team && (
              <p className="text-xs sm:text-sm text-[#8E8C85] font-sans font-normal">
                {product.team} {product.player ? `// ${product.player}` : ''}
              </p>
            )}

            {/* Available Sizes Pills */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-[9px] font-mono text-[#8E8C85] uppercase tracking-widest mr-1">SIZES:</span>
                {product.sizes.map((s) => (
                  <span key={s} className="text-[9.5px] font-mono px-1.5 py-0.5 rounded-sm bg-white/[0.03] text-white/80 border border-white/[0.06]">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Price & View Kit CTA */}
          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-[#8E8C85] uppercase tracking-widest block">MATCH PRICE</span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-[#F3F0E8] tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            </div>

            <Link
              to={`/collection/${product.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/[0.04] hover:bg-[#E3261E] border border-white/10 hover:border-[#E3261E] text-xs font-mono font-bold tracking-widest text-[#F3F0E8] uppercase transition-all duration-200 shadow-sm"
            >
              <span>VIEW KIT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 2. STACKED COMPACT CARD (for the ~40-45% column)
  if (variant === 'stacked') {
    return (
      <div
        className={cn(
          "group bg-[#0E0E0D] border border-white/[0.07] hover:border-white/[0.2] transition-all duration-300 ease-out rounded-sm flex flex-col sm:flex-row overflow-hidden flex-1 shadow-lg",
          className
        )}
      >
        {/* Product Photography */}
        <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto min-h-[170px] bg-[#060605] overflow-hidden shrink-0 flex items-center justify-center p-2">
          <Link
            to={`/collection/${product.id}`}
            className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex items-center justify-center"
            aria-label={`${product.name} details`}
          >
            <img
              src={currentImg}
              alt={`${product.name}`}
              loading="lazy"
              className={cn(
                "w-full h-full group-hover:scale-[1.04] group-hover:brightness-[1.04] transition-all duration-500 ease-out",
                isPngKit ? "object-contain p-2" : "object-cover object-center"
              )}
            />
          </Link>
        </div>

        {/* Details Area with Archival Metadata */}
        <div className="p-4 sm:p-5 flex flex-col justify-between gap-3 flex-grow bg-[#0E0E0D] group-hover:-translate-y-1 transition-transform duration-300 ease-out">
          <div className="space-y-1.5">
            {/* Top Bar with Archive Tag & Badge */}
            <div className="flex items-center justify-between text-[9.5px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
                <span className="font-bold tracking-[0.18em] text-[#E3261E] uppercase">
                  {badgeLabel}
                </span>
              </div>
              <span className="text-[#8E8C85]">{product.archiveNo ? `#${product.archiveNo}` : ''}</span>
            </div>

            {/* Product Name */}
            <Link
              to={`/collection/${product.id}`}
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded"
            >
              <h3 className="font-sans font-bold text-sm sm:text-base text-[#F3F0E8] group-hover:text-white transition-colors uppercase tracking-tight line-clamp-2 leading-snug">
                {product.name}
              </h3>
            </Link>

            {product.team && (
              <p className="text-xs text-[#8E8C85] font-sans font-normal line-clamp-1">
                {product.team}
              </p>
            )}
          </div>

          {/* Price & View Kit Link */}
          <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
            <div>
              <span className="text-[9px] font-mono text-[#8E8C85] block uppercase tracking-wider">PRICE</span>
              <span className="text-base font-mono font-bold text-[#F3F0E8] tracking-tight">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            </div>

            <Link
              to={`/collection/${product.id}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/[0.03] hover:bg-[#E3261E] border border-white/[0.08] hover:border-[#E3261E] text-[11px] font-mono font-bold tracking-wider text-[#F3F0E8] uppercase transition-all duration-200"
            >
              <span>VIEW KIT</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // 3. STANDARD PRODUCT CARD
  return (
    <div
      className={cn(
        "group bg-[#0E0E0D] border border-white/[0.07] hover:border-white/[0.2] transition-all duration-300 ease-out flex flex-col rounded-sm overflow-hidden shadow-lg h-full justify-between",
        className
      )}
    >
      {/* Top Archival Spec Bar */}
      <div className="px-4 py-2 bg-[#0A0A09] border-b border-white/[0.06] flex items-center justify-between text-[9.5px] font-mono text-[#8E8C85] tracking-widest uppercase">
        <span>ARCHIVE #{product.archiveNo || '000'}</span>
        {product.techSpec && <span>{product.techSpec}</span>}
      </div>

      {/* Product Photography */}
      <div className="relative aspect-[4/5] bg-[#060605] overflow-hidden flex items-center justify-center p-2">
        <Link
          to={`/collection/${product.id}`}
          className="block w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex items-center justify-center"
          aria-label={`${product.name} details`}
        >
          <img
            src={currentImg}
            alt={`${product.name}`}
            loading="lazy"
            className={cn(
              "w-full h-full group-hover:scale-[1.04] group-hover:brightness-[1.04] transition-all duration-500 ease-out",
              isPngKit ? "object-contain p-2" : "object-cover object-center"
            )}
          />
        </Link>

        {hasBackImage && (
          <button
            onClick={toggleView}
            aria-label="Toggle jersey view"
            className="absolute bottom-3 right-3 z-10 p-1.5 rounded-sm bg-[#080807]/90 backdrop-blur-md text-[#8E8C85] hover:text-[#F3F0E8] border border-white/10 text-[10px] font-mono uppercase flex items-center gap-1 transition-all shadow-md"
          >
            <RotateCcw className="w-3 h-3 text-[#E3261E]" />
            <span className="hidden sm:inline">{currentImageIndex === 0 ? 'FRONT' : 'BACK'}</span>
          </button>
        )}
      </div>

      {/* Details Underneath Image */}
      <div className="p-5 flex flex-col flex-grow justify-between gap-4 bg-[#0E0E0D] group-hover:-translate-y-1 transition-transform duration-300 ease-out">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.18em] text-[#E3261E] uppercase">
                {badgeLabel}
              </span>
            </div>
            {product.season && (
              <span className="text-[9.5px] font-mono text-[#8E8C85]">{product.season}</span>
            )}
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
            <p className="text-xs text-[#8E8C85] font-sans font-normal line-clamp-1">
              {product.team} {product.player ? `// ${product.player}` : ''}
            </p>
          )}
        </div>

        {/* Price & View Kit Link */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
          <div>
            <span className="text-[9px] font-mono text-[#8E8C85] block uppercase tracking-wider">PRICE</span>
            <span className="text-base font-mono font-bold text-[#F3F0E8] tracking-tight">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <Link
            to={`/collection/${product.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/[0.03] hover:bg-[#E3261E] border border-white/[0.08] hover:border-[#E3261E] text-[11px] font-mono font-bold tracking-widest text-[#F3F0E8] uppercase transition-all duration-200"
          >
            <span>VIEW KIT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

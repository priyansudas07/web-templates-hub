import React, { useState } from 'react';
import type { Product, Size } from '../../types/product';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<Size | undefined>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );

  const whatsappUrl = createWhatsAppLink(product, selectedSize);

  return (
    <div className="space-y-10 text-[#F3F0E8] lg:pl-4">
      
      {/* 1. Archival Spec Header & Category Provenance */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
          <span>// {product.sport.toUpperCase()} — {product.category.replace('-', ' ').toUpperCase()}</span>
        </div>

        {/* 2. Monumental Product Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-[4.75rem] font-['Bebas_Neue',sans-serif] tracking-tight uppercase leading-[0.84] text-[#F3F0E8]">
          {product.name}
        </h1>

        {/* Supporting Curatorial Metadata */}
        <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-mono tracking-[0.16em] text-[#8E8C85] uppercase">
          {product.player && (
            <span className="text-[#F3F0E8] font-bold">
              {product.player}
            </span>
          )}
          {product.player && <span className="text-white/20">/</span>}
          {product.team && (
            <span>{product.team}</span>
          )}
          {product.team && <span className="text-white/20">/</span>}
          <span>SEASON {product.season || '2025/26'}</span>
          {product.techSpec && (
            <>
              <span className="text-white/20">/</span>
              <span className="text-[#E3261E] font-bold">{product.techSpec}</span>
            </>
          )}
        </div>
      </div>

      {/* 3. Acquisition & Price Block */}
      <div className="pt-2 flex items-baseline gap-4 border-b border-white/[0.08] pb-8">
        <span className="text-5xl sm:text-6xl font-['Bebas_Neue',sans-serif] tracking-tight text-[#F3F0E8] leading-none">
          ₹{product.price.toLocaleString('en-IN')}
        </span>
        <div className="text-[11px] font-mono tracking-[0.2em] text-[#8E8C85] uppercase">
          <span>TAXES INCLUDED</span>
          <span className="text-[#6E6C65] mx-2">·</span>
          <span>ATELIER VERIFIED</span>
        </div>
      </div>

      {/* 4. Size Selection - Typographic Editorial Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#8E8C85]">
            <span>SELECT SPECIMEN SIZE</span>
            {selectedSize && (
              <span className="text-[#E3261E]">SELECTED // {selectedSize}</span>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {['S', 'M', 'L', 'XL', 'XXL'].map((s) => {
              const available = product.sizes.includes(s as Size);
              const isSelected = selectedSize === s;

              return (
                <button
                  key={s}
                  disabled={!available}
                  onClick={() => available && setSelectedSize(s as Size)}
                  aria-label={`Select size ${s}${!available ? ' (unavailable)' : ''}`}
                  className={`min-w-[58px] h-12 rounded-sm text-xs font-mono font-bold transition-all duration-200 flex items-center justify-center border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E] ${
                    !available
                      ? 'bg-transparent text-[#4A4843] border-white/[0.04] cursor-not-allowed line-through'
                      : isSelected
                      ? 'bg-[#E3261E] text-[#F3F0E8] border-[#E3261E] shadow-[0_0_20px_rgba(227,38,30,0.35)]'
                      : 'bg-[#111110] text-[#9B9992] border-white/[0.1] hover:border-white/30 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 5. Kit Specifications & Fit Notes */}
      <div className="space-y-2.5 pt-2">
        <h2 className="text-xs font-mono font-bold tracking-[0.25em] text-[#8E8C85] uppercase">
          // SPECIFICATION NOTES
        </h2>
        <p className="text-sm sm:text-base text-[#B5B3AA] leading-relaxed font-sans font-normal">
          {product.description}
        </p>
      </div>

      {/* 6. Curatorial Stock Allocation */}
      <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.2em] text-emerald-400 uppercase pt-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>ARCHIVE ALLOCATION: IN STOCK</span>
        <span className="text-[#6E6C65]">·</span>
        <span className="text-[#8E8C85] text-[11px]">IMMEDIATE STORE PICKUP</span>
      </div>

      {/* 7. Primary Action CTA - Solid Editorial Orange Button */}
      <div className="space-y-3.5 pt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-3.5 bg-[#E3261E] hover:bg-[#c91e17] text-[#F3F0E8] font-mono font-bold tracking-[0.24em] text-sm sm:text-base uppercase py-4.5 px-8 rounded-sm transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(227,38,30,0.35)] group"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#F3F0E8]" />
          <span>WHATSAPP TO ORDER</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>

        <p className="text-xs font-mono tracking-wider text-[#6E6C65] text-center uppercase">
          No account required · Direct confirmation with Mumbai desk
        </p>
      </div>

      {/* 8. Minimal Spec Footnote Row */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-y-2 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#8E8C85] uppercase">
        <span>LOCAL PICKUP</span>
        <span className="text-white/20 hidden sm:inline">●</span>
        <span>DELIVERY AVAILABLE</span>
        <span className="text-white/20 hidden sm:inline">●</span>
        <span>EASY SIZE EXCHANGE</span>
      </div>

    </div>
  );
};



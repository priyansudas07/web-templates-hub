import React, { useState } from 'react';
import type { Product, Size } from '../../types/product';
import { MessageCircle, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';
import { createWhatsAppLink } from '../../utils/whatsapp';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<Size | undefined>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined
  );

  const whatsAppUrl = createWhatsAppLink(product.name, product.price, selectedSize);

  return (
    <div className="space-y-6">
      
      {/* Category & Tactical Tag */}
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-rose-500">
          {product.sport} • {product.category.replace('-', ' ')}
        </span>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
          <span>[ SG / {product.badgeTag || 'AUTHENTIC'} ]</span>
        </div>
      </div>

      {/* Product Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
        {product.name}
      </h1>

      {/* Team / Player Subtitle */}
      {product.team && (
        <p className="text-sm font-semibold text-slate-400">
          Team: <span className="text-slate-200">{product.team}</span>
          {product.player && <span> • Player: <span className="text-slate-200">{product.player}</span></span>}
          {product.season && <span> • Season: <span className="text-slate-200">{product.season}</span></span>}
        </p>
      )}

      {/* Price */}
      <div className="py-2">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Price</span>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl sm:text-4xl font-black text-slate-100">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <span className="text-xs text-slate-400 font-medium">(Taxes Included)</span>
        </div>
      </div>

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Select Size: {selectedSize && <span className="text-rose-400 ml-1">{selectedSize}</span>}
            </span>
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
                  className={`min-w-[50px] h-12 rounded-xl text-sm font-bold transition-all flex items-center justify-center border ${
                    !available
                      ? 'bg-slate-900/40 text-slate-600 border-slate-800 cursor-not-allowed line-through'
                      : isSelected
                      ? 'bg-rose-600 text-white border-rose-500 shadow-lg shadow-rose-950/50 scale-105'
                      : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:border-slate-500 hover:text-white'
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Description */}
      <div className="space-y-2 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Kit Specifications & Fit</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Stock Status */}
      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-2 rounded-lg w-fit">
        <Check className="w-4 h-4 text-emerald-400" />
        <span>Stock Status: {product.availability === 'available' ? 'Available for Inquiry & Pickup' : 'Contact Store for Availability'}</span>
      </div>

      {/* Primary WhatsApp Action CTA */}
      <div className="pt-4 space-y-3">
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-950/50 hover:scale-[1.01]"
        >
          <MessageCircle className="w-6 h-6" />
          <span>Enquire on WhatsApp</span>
        </a>

        <p className="text-[11px] text-slate-500 text-center">
          No credit card or registration required. Clicking initiates a direct WhatsApp message.
        </p>
      </div>

      {/* Trust Highlights */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-rose-500 shrink-0" />
          <span>Express Local Pickup & Delivery</span>
        </div>
        <div className="flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-rose-500 shrink-0" />
          <span>Easy Size Exchange Guarantee</span>
        </div>
      </div>

    </div>
  );
};

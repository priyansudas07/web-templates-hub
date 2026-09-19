import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { storeInfo, navItems } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070706] border-t border-white/[0.08] text-[#8E8C85] mt-0">
      {/* Top Subtle Specular Light Gradient */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-[#E3261E] flex items-center justify-center font-sans font-black text-[#F3F0E8] text-sm shadow-md group-hover:scale-95 transition-transform duration-200">
                SG
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg tracking-tight text-[#F3F0E8] uppercase leading-none">
                  SPORTS GEAR
                </span>
                <span className="text-[9px] font-mono tracking-[0.24em] text-[#8E8C85] uppercase pt-0.5">
                  AUTHENTIC KIT VAULT
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-[#8E8C85] max-w-sm leading-relaxed font-sans">
              {storeInfo.description}
            </p>

            {/* Verified Catalog Stamp */}
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#F3F0E8] bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E3261E]" />
              <span className="tracking-widest uppercase">[ SG // VERIFIED MATCH-GRADE ARCHIVE ]</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#F3F0E8]">
              EXPLORE VAULT
            </h3>
            <ul className="space-y-3 text-xs font-mono">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[#8E8C85] hover:text-[#F3F0E8] uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="text-[#E3261E] opacity-0 group-hover:opacity-100 transition-opacity">/</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info & Direct Channels (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#F3F0E8]">
              STORE INFORMATION
            </h3>
            <ul className="space-y-3.5 text-xs text-[#8E8C85] font-sans">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E3261E] shrink-0 mt-0.5" />
                <span className="leading-snug">{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E3261E] shrink-0" />
                <span>{storeInfo.openingHours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E3261E] shrink-0" />
                <span>{storeInfo.phone}</span>
              </li>
            </ul>

            {/* Social & Concierge Inquiries */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Store Concierge"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white/[0.03] hover:bg-[#E3261E] text-[#F3F0E8] border border-white/[0.08] hover:border-[#E3261E] text-xs font-mono uppercase tracking-wider transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:text-white" />
                <span>WHATSAPP CONCIERGE</span>
              </a>

              <a
                href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Archive"
                className="p-2 rounded-sm bg-white/[0.03] text-[#8E8C85] hover:text-[#F3F0E8] border border-white/[0.08] hover:border-white/25 transition-all flex items-center justify-center"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Sign-off */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8E8C85] gap-4 font-mono">
          <p>© {new Date().getFullYear()} {storeInfo.name.toUpperCase()} // ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-2 text-[#8E8C85]/70 uppercase tracking-widest text-[10px]">
            <span>NO CHECKOUT FRICTION</span>
            <span>•</span>
            <span>DIRECT CONCIERGE SOURCING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

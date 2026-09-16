import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { storeInfo, navItems } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#151514] border-t border-[#292927] text-[#9B9992] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#E3261E] flex items-center justify-center font-black text-[#F3F0E8] text-base">
                SG
              </div>
              <span className="font-extrabold text-xl tracking-wider text-[#F3F0E8]">
                SPORTS GEAR
              </span>
            </Link>
            
            <p className="text-sm text-[#9B9992] max-w-md leading-relaxed">
              {storeInfo.description}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E3261E] bg-[#0B0B0A] border border-[#292927] px-3 py-1.5 rounded-sm w-fit">
              <ShieldCheck className="w-4 h-4 text-[#E3261E]" />
              <span>[ SG / MATCH-ISSUE / VERIFIED CATALOG ]</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3F0E8] mb-4">
              Explore Vault
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="hover:text-[#F3F0E8] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Store Info & Direct Channels */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-[#F3F0E8] mb-4">
              Store Information
            </h3>
            <ul className="space-y-3 text-xs text-[#9B9992]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3261E] shrink-0 mt-0.5" />
                <span>{storeInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E3261E] shrink-0" />
                <span>{storeInfo.openingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E3261E] shrink-0" />
                <span>{storeInfo.phone}</span>
              </li>
            </ul>

            <div className="pt-4 flex items-center gap-3">
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Store Inquiry"
                className="p-2.5 rounded-sm bg-[#0B0B0A] text-[#25D366] border border-[#292927] hover:border-[#25D366] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Page"
                className="p-2.5 rounded-sm bg-[#0B0B0A] text-[#9B9992] hover:text-[#F3F0E8] border border-[#292927] hover:border-[#F3F0E8] transition-all flex items-center justify-center"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#292927] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9B9992] gap-4 font-mono">
          <p>© {new Date().getFullYear()} {storeInfo.name}. Premium Sportswear Catalog.</p>
          <p className="tracking-wide">No Checkout Required • Direct WhatsApp Inquiry</p>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { storeInfo, navItems } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070706] border-t border-white/[0.08] text-[#8E8C85] mt-0 overflow-hidden">
      {/* Top Specular Micro-Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Main 4-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-[#E3261E] flex items-center justify-center font-sans font-black text-[#F3F0E8] text-sm shadow-md group-hover:scale-95 transition-transform duration-200">
                SG
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-black text-xl tracking-tight text-[#F3F0E8] uppercase leading-none">
                  SPORTS GEAR
                </span>
                <span className="text-[9px] font-mono tracking-[0.24em] text-[#8E8C85] uppercase pt-1">
                  AUTHENTIC KIT VAULT // MUMBAI
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-[#8E8C85] leading-relaxed font-sans max-w-sm">
              Curating verified match-grade kits, historic retro grails, and official federation player editions for collectors and athletes worldwide.
            </p>

            <div className="inline-flex items-center gap-2 text-[9.5px] font-mono font-bold text-[#F3F0E8] bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E3261E]" />
              <span className="tracking-[0.16em] uppercase">[ 100% MATCH SPECIMEN VERIFIED ]</span>
            </div>
          </div>

          {/* Column 2: Archival Vault Index (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
              <span className="text-[#E3261E]">//</span>
              <span>01 ARCHIVE INDEX</span>
            </div>

            <ul className="space-y-2.5 text-xs font-mono">
              {navItems.map((item, idx) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[#8E8C85] hover:text-[#F3F0E8] uppercase tracking-wider transition-all duration-200 inline-flex items-center gap-2 group py-0.5"
                  >
                    <span className="text-[10px] text-[#8E8C85]/50 group-hover:text-[#E3261E] transition-colors">
                      0{idx + 1} //
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Physical Atelier / Store (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
              <span className="text-[#E3261E]">//</span>
              <span>02 ATELIER</span>
            </div>

            <div className="space-y-3 text-xs text-[#8E8C85] font-sans">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">LOCATION</span>
                <p className="leading-snug">123 Stadium Road, Sports Hub District, Mumbai</p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">HOURS</span>
                <p className="leading-snug">Mon – Sat: 10:00 – 21:00</p>
              </div>
            </div>
          </div>

          {/* Column 4: Direct Concierge & Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
              <span className="text-[#E3261E]">//</span>
              <span>03 CONCIERGE</span>
            </div>

            <div className="space-y-3.5">
              {/* Live Status Indicator */}
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8C85]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="tracking-wider uppercase">CURATORS ACTIVE ONLINE</span>
              </div>

              {/* Minimal WhatsApp Inquire Trigger */}
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3.5 py-2.5 rounded-sm bg-white/[0.03] hover:bg-[#E3261E] text-[#F3F0E8] border border-white/[0.08] hover:border-[#E3261E] text-xs font-mono uppercase tracking-wider transition-all duration-300"
              >
                <span>INQUIRE VIA WHATSAPP</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>

              {/* Instagram Handle */}
              <a
                href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#8E8C85] hover:text-[#F3F0E8] tracking-wider transition-colors pt-1"
              >
                <span className="text-[#E3261E]">@</span>
                <span>SPORTSGEAR.VAULT</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Archival Metadata Row */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[10.5px] text-[#8E8C85] gap-4 font-mono">
          <p>© {new Date().getFullYear()} {storeInfo.name.toUpperCase()} // ARCHIVAL SPECIMEN VAULT.</p>
          <div className="flex flex-wrap items-center gap-3 text-[#8E8C85]/70 uppercase tracking-widest text-[9.5px]">
            <span>19.0760° N, 72.8777° E</span>
            <span>•</span>
            <span>ZERO CHECKOUT FRICTION</span>
            <span>•</span>
            <span>INSURED DISPATCH</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

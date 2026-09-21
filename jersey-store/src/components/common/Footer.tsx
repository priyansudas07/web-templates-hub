import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { storeInfo } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#070706] border-t border-white/[0.08] text-[#8E8C85] overflow-hidden">
      {/* Top Specular Micro-Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 space-y-20 sm:space-y-28">
        
        {/* Top Part: Memorable Magazine Brand Closing */}
        <div className="space-y-4">
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
            <span>AUTHENTIC ARCHIVE SIGN-OFF</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-6xl sm:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.84]">
              SPORTS GEAR
            </h2>
            <div className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#6E6C65] font-['Bebas_Neue',sans-serif] leading-[0.88]">
              THE AUTHENTIC KIT VAULT.
            </div>
          </div>
        </div>

        {/* Thin Minimal Divider */}
        <div className="h-[1px] w-full bg-white/[0.08]" />

        {/* Two Simple Navigation Groups + Minimal Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Brief Archival Descriptor (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#9B9992] font-sans leading-relaxed max-w-sm">
              Curating match-grade shirts, historic retro grails, and player editions across global football, cricket, and hardwood basketball.
            </p>
            <div className="text-xs font-mono text-white/40 tracking-wider uppercase pt-2">
              Boutique Sourcing Atelier // Mumbai, India
            </div>
          </div>

          {/* Right Columns: Two Navigation Groups (EXPLORE & INFORMATION) + Social (7 Cols) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">
            
            {/* Group 1: EXPLORE */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
                EXPLORE
              </div>
              <ul className="space-y-3 text-sm font-sans">
                <li>
                  <Link to="/collection" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Collection
                  </Link>
                </li>
                <li>
                  <Link to="/collection?sport=football" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Football
                  </Link>
                </li>
                <li>
                  <Link to="/collection?sport=cricket" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Cricket
                  </Link>
                </li>
                <li>
                  <Link to="/collection?sport=basketball" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Basketball
                  </Link>
                </li>
              </ul>
            </div>

            {/* Group 2: INFORMATION */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
                INFORMATION
              </div>
              <ul className="space-y-3 text-sm font-sans">
                <li>
                  <Link to="/about" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/contact#faq" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact#shipping" className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors">
                    Shipping
                  </Link>
                </li>
              </ul>
            </div>

            {/* Group 3: SOCIAL / CONTACT */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="text-xs font-mono font-bold uppercase tracking-[0.24em] text-[#F3F0E8]">
                CONNECT
              </div>
              <ul className="space-y-3 text-sm font-sans">
                <li>
                  <a
                    href={createGeneralWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#8E8C85] hover:text-[#25D366] transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#8E8C85] hover:text-[#F3F0E8] transition-colors"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${storeInfo.email}`}
                    className="text-[#8E8C85] hover:text-[#F3F0E8] transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Very Bottom Archival Specimen Row */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E8C85] gap-4 font-mono">
          <p className="tracking-wider uppercase">
            SPORTS GEAR © 2026 AUTHENTIC KIT VAULT
          </p>
          <div className="flex items-center gap-4 text-white/40 tracking-widest text-[11px] uppercase">
            <span>VERIFIED MATCH SPECIMENS</span>
            <span>•</span>
            <span>ZERO CHECKOUT FRICTION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

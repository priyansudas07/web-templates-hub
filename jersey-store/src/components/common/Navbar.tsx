import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navItems } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { SpotlightNavbar } from '../ui/spotlight-navbar';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Scroll listener for glassy backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard Escape key listener to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 relative overflow-hidden ${
      scrolled 
        ? 'bg-[#070707]/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]' 
        : 'bg-[#070707]/50 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
    }`}>
      {/* Specular Glass Surface Sheen & Ambient Refraction Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="relative flex items-center justify-between h-21 sm:h-22">
          
          {/* Logo Brand - Option 1: Modernist Atelier Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E] rounded-sm z-10 py-1"
            aria-label="Sports Gear Home Page"
          >
            {/* Minimalist Monogram with Precision Crimson Accent */}
            <div className="relative flex items-center justify-center">
              <span className="text-2xl sm:text-3xl font-['Bebas_Neue',sans-serif] tracking-wider text-[#F3F0E8] font-bold leading-none group-hover:text-[#E3261E] transition-colors duration-300">
                SG
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] absolute -top-0.5 -right-2 shadow-[0_0_10px_rgba(227,38,30,0.8)]" />
            </div>

            {/* Razor-thin Hairline Divider */}
            <div className="h-6 w-[1px] bg-white/15" />

            {/* Wordmark & Folio */}
            <div className="flex flex-col justify-center">
              <span className="text-base sm:text-lg font-['Bebas_Neue',sans-serif] tracking-[0.14em] text-[#F3F0E8] leading-none uppercase group-hover:text-[#E3261E] transition-colors duration-300 font-bold">
                SPORTS GEAR
              </span>
              <span className="text-[8.5px] sm:text-[9px] tracking-[0.24em] text-[#8E8C85] font-mono uppercase font-normal pt-0.5">
                AUTHENTIC KIT VAULT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation centered in the middle */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <SpotlightNavbar items={navItems} />
          </div>

          {/* Mobile & Tablet Menu Toggle Button */}
          <div className="flex lg:hidden z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 min-h-[48px] min-w-[48px] rounded-sm text-[#9B9992] hover:text-[#F3F0E8] hover:bg-[#151514] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex items-center justify-center cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#151514] border-b border-[#292927] px-4 sm:px-6 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 min-h-[48px] rounded-sm text-base font-semibold transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] ${
                    active
                      ? 'bg-[#E3261E]/20 text-[#E3261E] border border-[#E3261E]/40'
                      : 'text-[#9B9992] hover:bg-[#0B0B0A] hover:text-[#F3F0E8]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/[0.08]">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 min-h-[48px] rounded-xs bg-[#E3261E] hover:bg-[#c91e17] text-white font-sans font-bold text-xs uppercase tracking-[0.16em] shadow-[0_4px_20px_rgba(227,38,30,0.35)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>START WHATSAPP INQUIRY</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

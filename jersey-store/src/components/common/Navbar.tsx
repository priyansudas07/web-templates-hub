import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileMenuOpen]);

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
    <header
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        scrolled || mobileMenuOpen
          ? 'bg-[#070707]/90 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
          : 'bg-[#070707]/60 backdrop-blur-xl backdrop-saturate-150 border-b border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
      }`}
    >
      {/* Specular Glass Surface Sheen & Ambient Refraction Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-12 relative z-10">
        <div className="relative flex items-center justify-between h-16 sm:h-20 lg:h-22">
          
          {/* Logo Brand - Modernist Atelier Wordmark */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 sm:gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E] rounded-sm z-10 py-1 select-none"
            aria-label="Sports Gear Home Page"
          >
            {/* Minimalist Monogram with Precision Crimson Accent */}
            <div className="relative flex items-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-['Bebas_Neue',sans-serif] tracking-wider text-[#F3F0E8] font-bold leading-none group-hover:text-[#E3261E] transition-colors duration-300">
                SG
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] absolute -top-0.5 -right-1.5 sm:-right-2 shadow-[0_0_10px_rgba(227,38,30,0.8)]" />
            </div>

            {/* Razor-thin Hairline Divider */}
            <div className="h-5 sm:h-6 w-[1px] bg-white/15 mx-0.5" />

            {/* Wordmark & Folio */}
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base lg:text-lg font-['Bebas_Neue',sans-serif] tracking-[0.14em] text-[#F3F0E8] leading-none uppercase group-hover:text-[#E3261E] transition-colors duration-300 font-bold">
                SPORTS GEAR
              </span>
              <span className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] tracking-[0.22em] text-[#8E8C85] font-mono uppercase font-normal pt-0.5">
                AUTHENTIC KIT VAULT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation centered in the middle (Completely Untouched for Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <SpotlightNavbar items={navItems} />
          </div>

          {/* Mobile & Tablet Animated Menu Toggle Button */}
          <div className="flex lg:hidden z-10 items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xs text-[#F3F0E8] hover:text-white bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-colors duration-200"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {/* Top Animated Line */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#F3F0E8] rounded-full origin-center"
              />
              {/* Middle Animated Line */}
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -6 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="w-5 h-[2px] bg-[#E3261E] rounded-full"
              />
              {/* Bottom Animated Line */}
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="w-5 h-[2px] bg-[#F3F0E8] rounded-full origin-center"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Polish Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-[#0B0B0A] border-b border-white/[0.10] shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
          >
            {/* Top Micro Telemetry Strip */}
            <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-white/[0.04] flex items-center justify-between text-[9px] font-mono tracking-[0.24em] text-[#8E8C85] uppercase">
              <span>// NAVIGATION</span>
              <span>VAULT NO. 01</span>
            </div>

            {/* Navigation Links Stack with Staggered Entrance */}
            <nav className="px-3.5 sm:px-6 py-4 flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                const numStr = (index + 1).toString().padStart(2, '0');
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.05, duration: 0.25, ease: 'easeOut' }}
                  >
                    <Link
                      to={item.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`min-h-[50px] px-3.5 py-3 rounded-xs transition-all duration-200 flex items-center justify-between group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E] border ${
                        active
                          ? 'bg-white/[0.04] border-[#E3261E]/40 text-[#F3F0E8] shadow-[0_2px_12px_rgba(227,38,30,0.12)]'
                          : 'border-transparent text-[#9B9992] hover:text-[#F3F0E8] hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={`font-mono text-xs transition-colors duration-200 ${
                            active ? 'text-[#E3261E] font-bold' : 'text-[#6E6C65] group-hover:text-[#9B9992]'
                          }`}
                        >
                          {numStr}
                        </span>
                        <span
                          className={`text-lg font-['Bebas_Neue',sans-serif] tracking-[0.1em] uppercase transition-colors duration-200 ${
                            active ? 'text-[#F3F0E8]' : 'text-[#9B9992] group-hover:text-[#F3F0E8]'
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {active ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-[#E3261E] shadow-[0_0_8px_#E3261E]" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 text-[#6E6C65] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Concierge WhatsApp Action Panel */}
            <div className="px-3.5 sm:px-6 pt-2 pb-5 border-t border-white/[0.06] bg-[#070706]/70">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
              >
                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 px-5 py-3.5 min-h-[48px] rounded-xs bg-[#E3261E] hover:bg-[#c91e17] text-white font-sans font-bold text-xs uppercase tracking-[0.16em] shadow-[0_4px_20px_rgba(227,38,30,0.35)] active:scale-[0.99] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>START WHATSAPP INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/80" />
                </a>

                {/* Micro Archival Tag */}
                <div className="mt-3 flex items-center justify-between text-[9px] font-mono tracking-[0.2em] text-[#6E6C65] uppercase px-1">
                  <span>ATELIER SOURCING</span>
                  <span>MUMBAI DESK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-[#292927] shadow-xl' 
        : 'bg-[#050505]/40 backdrop-blur-md border-b border-white/10 shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded-sm z-10"
            aria-label="Sports Gear Home Page"
          >
            <div className="w-10 h-10 rounded-sm bg-[#E3261E] flex items-center justify-center font-black text-[#F3F0E8] text-lg tracking-wider group-hover:bg-[#c91e17] transition-colors shadow-sm">
              SG
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-wider text-[#F3F0E8] group-hover:text-[#E3261E] transition-colors">
                SPORTS GEAR
              </span>
              <span className="text-[10px] tracking-widest text-[#9B9992] font-medium uppercase -mt-1 font-mono">
                Authentic Kit Vault
              </span>
            </div>
          </Link>

          {/* Desktop Navigation centered in the middle */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <SpotlightNavbar items={navItems} />
          </div>

          {/* Right Action Group: Concierge CTA */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#E3261E]/15 border border-[#E3261E]/30 text-[#F3F0E8] hover:bg-[#E3261E]/25 hover:border-[#E3261E]/50 transition-all text-xs font-mono font-bold tracking-wider shadow-sm group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span>CONCIERGE</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-3 min-h-[48px] min-w-[48px] rounded-sm text-[#9B9992] hover:text-[#F3F0E8] hover:bg-[#151514] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#151514] border-b border-[#292927] px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200"
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

          <div className="pt-2 border-t border-[#292927]">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] rounded-sm bg-[#151514] border border-[#292927] text-[#F3F0E8] font-mono font-bold text-sm tracking-wide shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E]"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

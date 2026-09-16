import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import { navItems } from '../../data/store';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { SpotlightNavbar } from '../ui/spotlight-navbar';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

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
    <header className="sticky top-0 z-50 bg-[#0B0B0A]/70 backdrop-blur-xl border-b border-[#292927]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded-sm"
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

          {/* Desktop Navigation using SpotlightNavbar */}
          <div className="hidden md:block">
            <SpotlightNavbar items={navItems} />
          </div>

          {/* Desktop Direct WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp Store"
              className="Btn"
            >
              <span className="svgContainer">
                <svg viewBox="0 0 16 16" height="1.8em" width="1.8em" className="svgIcon" fill="white">
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  ></path>
                </svg>
              </span>
              <span className="BG"></span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
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

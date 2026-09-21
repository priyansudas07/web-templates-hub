import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import { storeInfo } from '../data/store';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';
import { CylinderCarousel } from '../components/ui/cylinder-carousel';

export const Contact: React.FC = () => {
  const [atelierView, setAtelierView] = useState<'map' | 'showroom'>('map');

  useEffect(() => {
    document.title = 'Get In Touch & Store Location | Sports Gear';

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'store-json-ld';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      'name': storeInfo.name,
      'description': storeInfo.description,
      'address': storeInfo.address,
      'telephone': storeInfo.phone,
      'openingHours': storeInfo.openingHours,
      'url': 'https://sportsgear.in/contact'
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('store-json-ld');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="bg-[#070706] text-[#F3F0E8] overflow-hidden selection:bg-[#E3261E] selection:text-white">
      
      {/* =========================================================================
          01 — HERO / EDITORIAL OPENING (Two-Column Layout with 3D Kit Cylinder)
          ========================================================================= */}
      <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-32 border-b border-white/[0.06] overflow-hidden">
        
        {/* Ambient Warm Charcoal Vignette */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E3261E]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-center">
            
            {/* Left Column (6 Cols on tablet & desktop) */}
            <div className="md:col-span-6 space-y-6 sm:space-y-8">
              
              {/* Restrained Accent Tag */}
              <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
                <span>// GET IN TOUCH</span>
              </div>

              {/* Oversized Athletic Display Headline */}
              <div className="space-y-2">
                <h1 className="text-6xl sm:text-7xl lg:text-[7.2rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.84]">
                  LET'S TALK KIT.
                </h1>
              </div>

              {/* Editorial Quote Statement */}
              <p className="text-lg sm:text-xl lg:text-2xl text-[#A19F97] font-normal leading-snug font-sans max-w-xl">
                “Questions about a kit, sizing, availability or your next pickup? We're here.”
              </p>

              {/* WhatsApp Primary Action - Iconic Crimson Slab */}
              <div className="pt-2">
                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 text-xs sm:text-sm font-sans font-bold tracking-[0.16em] uppercase text-white bg-[#E3261E] hover:bg-[#c91e17] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xs transition-all duration-300 shadow-[0_4px_24px_rgba(227,38,30,0.35)] hover:shadow-[0_6px_32px_rgba(227,38,30,0.55)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span>START WHATSAPP INQUIRY</span>
                  <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>
              </div>

            </div>

            {/* Right Column (6 Cols) — 3D Archival Cylinder Carousel */}
            <div className="md:col-span-6 relative flex items-center justify-center">
              <div className="w-full h-[420px] sm:h-[480px] lg:h-[520px] relative">
                <CylinderCarousel
                  images={[
                    { src: '/kits/portugal-front.png', title: 'PORTUGAL 25/26' },
                    { src: 'https://images.unsplash.com/photo-1760551732609-921e12e13a66?auto=format&fit=crop&w=1000&q=85', title: 'REAL MADRID 25/26' },
                    { src: 'https://images.unsplash.com/photo-1671016233730-44258a88eb03?auto=format&fit=crop&w=1000&q=85', title: 'ARGENTINA 3-STAR' },
                    { src: 'https://images.unsplash.com/photo-1772474659559-7d009fef11df?auto=format&fit=crop&w=1000&q=85', title: 'MAN UTD 1999' },
                    { src: 'https://images.unsplash.com/photo-1745944756454-938dcb6e62ea?auto=format&fit=crop&w=1000&q=85', title: 'ARSENAL 24/25' },
                    { src: 'https://images.unsplash.com/photo-1561850865-b802611b72a1?auto=format&fit=crop&w=1000&q=85', title: 'BULLS #23' },
                    { src: '/kits/portugal-back.png', title: 'RONALDO #7' },
                    { src: '/kits/portugal-crest.jpg', title: 'MATCH CREST' },
                  ]}
                  animationDuration={30}
                  cardWidth={215}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE STORE & PHYSICAL ATELIER (Direction 1: Editorial Flagship)
          ========================================================================= */}
      <section className="py-20 sm:py-28 lg:py-36 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
            
            {/* LEFT: THE STORE & CURATORIAL DESK (6 Cols tablet, 5 Cols desktop) */}
            <div className="md:col-span-6 lg:col-span-5 space-y-8 sm:space-y-10">
              
              <div className="space-y-3 border-b border-white/[0.08] pb-6">
                <div className="text-xs font-mono font-bold text-[#E3261E] tracking-[0.28em] uppercase">
                  01 // THE PHYSICAL ATELIER
                </div>
                <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-none">
                  SPORTS GEAR FLAGSHIP
                </h2>
              </div>

              {/* Physical Location & Transit Details */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8E8C85]">FLAGSHIP ATELIER</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F3F0E8] font-sans">
                    Churchgate, South Mumbai
                  </h3>
                  <p className="text-base text-[#9B9992] font-sans leading-relaxed pt-1">
                    123 Stadium Road, Sports Hub District<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>

                <div className="pt-2 text-xs font-mono text-[#8E8C85] space-y-1 border-l-2 border-[#E3261E] pl-3">
                  <p className="text-[#F3F0E8] font-semibold uppercase tracking-wider">TRANSIT & LANDMARKS</p>
                  <p>2 mins walk from Churchgate Station & Wankhede Stadium</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-3 pt-6 border-t border-white/[0.06]">
                <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#8E8C85] uppercase">
                  OPERATING HOURS
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm text-[#F3F0E8]">
                  <div className="space-y-0.5">
                    <p className="text-[11px] text-[#8E8C85]">MON — SAT</p>
                    <p className="font-bold text-base">10:00 — 21:00</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[11px] text-[#8E8C85]">SUNDAY</p>
                    <p className="font-bold text-base text-[#9B9992]">11:00 — 19:00</p>
                  </div>
                </div>
              </div>

              {/* Private Anonymous Concierge Channel */}
              <div className="pt-6 border-t border-white/[0.06] space-y-3">
                <div className="text-xs font-mono font-bold tracking-[0.2em] text-[#8E8C85] uppercase">
                  ATELIER DESK & APPOINTMENTS
                </div>
                <p className="text-xs text-[#8E8C85] font-sans">
                  For private vault viewings, custom match namesets, or local pickup:
                </p>
                <div className="pt-1">
                  <a
                    href={createGeneralWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-bold tracking-[0.16em] uppercase text-[#F3F0E8] hover:text-[#E3261E] transition-colors py-2 border-b border-white/20 hover:border-[#E3261E] group"
                  >
                    <span>CONNECT WITH MUMBAI DESK</span>
                    <ArrowUpRight className="w-4 h-4 text-[#E3261E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT: EDITORIAL ATELIER GALLERY, MAP & DIRECTIONS (6 Cols tablet, 7 Cols desktop) */}
            <div className="md:col-span-6 lg:col-span-7 space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.24em] text-[#8E8C85] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
                  <span>MUMBAI VAULT & SPECIMEN ARCHIVE</span>
                </div>

                {/* Map vs Showroom View Switcher */}
                <div className="flex items-center gap-1 p-0.5 bg-[#111110] border border-white/10 rounded-xs">
                  <button
                    type="button"
                    onClick={() => setAtelierView('map')}
                    className={`px-2.5 sm:px-3 py-1 text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider uppercase rounded-2xs transition-colors cursor-pointer ${
                      atelierView === 'map'
                        ? 'bg-[#E3261E] text-white shadow-sm'
                        : 'text-[#8E8C85] hover:text-[#F3F0E8]'
                    }`}
                  >
                    MAP
                  </button>
                  <button
                    type="button"
                    onClick={() => setAtelierView('showroom')}
                    className={`px-2.5 sm:px-3 py-1 text-[9.5px] sm:text-[10px] font-mono font-bold tracking-wider uppercase rounded-2xs transition-colors cursor-pointer ${
                      atelierView === 'showroom'
                        ? 'bg-[#E3261E] text-white shadow-sm'
                        : 'text-[#8E8C85] hover:text-[#F3F0E8]'
                    }`}
                  >
                    SHOWROOM
                  </button>
                </div>
              </div>

              {/* Architectural Storefront / Map Frame */}
              <div className="relative rounded-xs overflow-hidden bg-[#0B0B0A] border border-white/15 shadow-2xl h-[420px] sm:h-[480px] lg:h-[520px] group">
                {atelierView === 'map' ? (
                  /* Interactive Dark-Mode Google Map Embed */
                  <iframe
                    title="Sports Gear Mumbai Store Location"
                    src="https://maps.google.com/maps?q=Churchgate%2C%20Mumbai%20Maharashtra%20400020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-[1.2] grayscale-[35%]"
                    loading="lazy"
                  />
                ) : (
                  /* High-Resolution Atelier Showroom Image */
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
                    alt="Sports Gear Mumbai Atelier Interior"
                    className="w-full h-full object-cover grayscale-[20%] contrast-115 brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1200&q=85';
                    }}
                  />
                )}

                {/* Subtle Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent pointer-events-none" />

                {/* Top Specular Micro-Line */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-20 pointer-events-none" />

                {/* Bottom Action Folio Bar */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-[#070706]/92 backdrop-blur-md px-4 py-3 sm:px-5 sm:py-4 border border-white/15 shadow-2xl">
                  <div className="space-y-0.5 sm:space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#F3F0E8] font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#E3261E] animate-pulse" />
                      <span>SPORTS GEAR FLAGSHIP ATELIER</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-mono text-[#8E8C85] tracking-widest uppercase">
                      CHURCHGATE · 123 STADIUM ROAD
                    </p>
                  </div>
                  
                  <a
                    href={storeInfo.locationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#E3261E] hover:bg-[#c91e17] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xs font-sans font-bold text-xs uppercase tracking-[0.16em] transition-all shadow-[0_4px_20px_rgba(227,38,30,0.35)] hover:shadow-[0_6px_28px_rgba(227,38,30,0.55)] active:scale-[0.99] group/btn shrink-0"
                  >
                    <span>GET DIRECTIONS</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          03 — DIRECT CHANNELS (Open Editorial Layout — No Boxed Cards)
          ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <div className="text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
                02 // DIRECT CONTACT
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                DIRECT CHANNELS
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8E8C85] uppercase tracking-widest">
              INSTANT RESPONSE // CONCIERGE DESK
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
            
            {/* Channel 01: WHATSAPP */}
            <a
              href={createGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-3 pb-8 border-b border-white/[0.08] hover:border-[#E3261E] transition-colors duration-300 block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8C85] uppercase tracking-widest">
                <span className="text-[#E3261E] font-bold">01 // CHAT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 text-white/40 group-hover:text-[#E3261E] transition-transform duration-200" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] group-hover:text-[#E3261E] transition-colors">
                WHATSAPP
              </h3>
              <p className="text-sm text-[#9B9992] leading-relaxed font-sans">
                Real-time stock inquiries, sizing recommendations, custom name-sets, and instant direct order placement.
              </p>
            </a>

            {/* Channel 02: PHONE */}
            <a
              href={`tel:${storeInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="group space-y-3 pb-8 border-b border-white/[0.08] hover:border-[#E3261E] transition-colors duration-300 block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8C85] uppercase tracking-widest">
                <span className="text-[#E3261E] font-bold">02 // VOICE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 text-white/40 group-hover:text-[#E3261E] transition-transform duration-200" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] group-hover:text-[#E3261E] transition-colors">
                PHONE
              </h3>
              <p className="text-sm text-[#9B9992] leading-relaxed font-sans">
                Speak directly with atelier store staff regarding local pickup, urgent dispatch, or physical store visits.
              </p>
            </a>

            {/* Channel 03: INSTAGRAM */}
            <a
              href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group space-y-3 pb-8 border-b border-white/[0.08] hover:border-[#E3261E] transition-colors duration-300 block"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8E8C85] uppercase tracking-widest">
                <span className="text-[#E3261E] font-bold">03 // VISUAL</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 text-white/40 group-hover:text-[#E3261E] transition-transform duration-200" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] group-hover:text-[#E3261E] transition-colors">
                INSTAGRAM
              </h3>
              <p className="text-sm text-[#9B9992] leading-relaxed font-sans">
                Follow archive drops, kit retrospectives, player stories, and send DM inquiries directly to curators.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================================
          04 — CINEMATIC CLOSING SECTION BEFORE FOOTER
          ========================================================================= */}
      <section className="relative py-36 sm:py-52 overflow-hidden bg-[#070706]">
        
        {/* Enormous Watermark 07 Behind Typography */}
        <div 
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-[34vw] font-black text-white/[0.02] font-mono leading-none tracking-tighter"
        >
          07
        </div>

        {/* Ambient Top & Bottom Vignettes */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#070706] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070706] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] text-[#E3261E] uppercase">
            <span>●</span>
            <span>DIRECT ARCHIVE FULFILLMENT</span>
            <span>●</span>
          </div>

          <h2 className="text-6xl sm:text-8xl lg:text-[8.5rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.84]">
            FOUND THE KIT?
            <br />
            LET'S GET IT ON YOU.
          </h2>

          <p className="text-base sm:text-lg text-[#9B9992] max-w-xl mx-auto font-sans leading-relaxed">
            Every specimen in our vault is ready for direct confirmation, custom player numbering, and insured worldwide dispatch.
          </p>

          <div className="pt-8">
            <Link
              to="/collection"
              className="inline-flex items-center gap-3 text-sm sm:text-base font-mono font-bold tracking-[0.24em] uppercase text-[#F3F0E8] hover:text-[#E3261E] transition-colors duration-300 group py-2 border-b border-white/20 hover:border-[#E3261E]"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 text-[#E3261E] group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

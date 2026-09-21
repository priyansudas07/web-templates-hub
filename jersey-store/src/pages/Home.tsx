import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductGrid } from '../components/collection/ProductGrid';
import { getFeaturedProducts, getNewArrivals } from '../data/products';
import { categories } from '../data/categories';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { EditorialHero } from '../components/home/EditorialHero';

export const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  useEffect(() => {
    document.title = 'Sports Gear | Premium Sportswear & Authentic Match Kits';
  }, []);

  const filteredCategories = categories.filter((c) => c.id !== 'all');

  return (
    <div className="space-y-28 pb-16 overflow-x-hidden bg-[#0B0B0A]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <EditorialHero />

      {/* 2. FEATURED SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="01 / CURATED ROTATION"
          title="MATCH SPECIMENS & ICONIC SILHOUETTES"
          action={{ label: "VIEW FULL ARCHIVE", href: "/collection" }}
        />
        <ProductGrid products={featuredProducts} />
      </section>

      {/* 3. NEW ARRIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="02 / CURRENT ISSUE"
          title="SEASON 24/25 ARRIVALS"
          subtitle="Fresh allocations directly catalogued for active team rotations."
          action={{ label: "EXPLORE ALL DROPS", href: "/collection" }}
        />
        <ProductGrid products={newArrivals} />
      </section>

      {/* 4. CATEGORY DISCOVERY SECTION (EDITORIAL DISCIPLINE LIST) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="03 / THE REGISTRY"
          title="DISCIPLINES & CLASSIFICATIONS"
          subtitle="Filter the archive by sporting discipline, club heritage & tournament format."
        />

        <div className="border-t border-b border-white/[0.08] divide-y divide-white/[0.06]">
          {filteredCategories.map((cat, index) => {
            const numStr = (index + 1).toString().padStart(2, '0');
            return (
              <Link
                key={cat.id}
                to={`/collection?category=${cat.id}`}
                className="group py-6 px-2 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors duration-200"
              >
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="text-xl sm:text-2xl font-mono font-bold text-[#6E6C65] group-hover:text-[#E3261E] transition-colors">
                    {numStr}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-['Bebas_Neue',sans-serif] tracking-wide text-[#F3F0E8] uppercase group-hover:text-[#E3261E] group-hover:translate-x-1.5 transition-all duration-300">
                      {cat.name}
                    </h3>
                    <p className="text-[#8E8C85] text-xs sm:text-sm mt-0.5 max-w-xl font-sans font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#8E8C85] uppercase">
                    {cat.countBadge || 'AUTHENTIC SPECIMEN'}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#8E8C85] group-hover:text-white group-hover:bg-[#E3261E] group-hover:border-[#E3261E] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. CINEMATIC ATELIER & SOURCING BANNER (Luxury Editorial Experience) */}
      <section className="relative py-28 sm:py-36 overflow-hidden border-t border-b border-white/[0.08] bg-[#070706]">
        
        {/* Subtle Watermark 07 in Background */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 flex items-center justify-end pointer-events-none select-none text-[32vw] font-black text-white/[0.018] font-mono leading-none tracking-tighter pr-8"
        >
          07
        </div>

        {/* Top & Bottom Specular Micro-Lines */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
                <span>// DIRECT ATELIER SOURCING</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.86]">
                  HUNTING A RARE GRAIL
                  <br />
                  <span className="text-[#6E6C65]">OR CUSTOM MATCH PRINT?</span>
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#9B9992] max-w-2xl font-sans leading-relaxed">
                Direct access to our Mumbai kit curators. Inquire about unlisted tournament deadstock, player-issue sizing, or official heat-pressed match namesets.
              </p>

              {/* Action Buttons Row - Option A: Iconic Crimson Slab */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3.5 bg-[#E3261E] hover:bg-[#c91e17] text-white px-7 py-4 rounded-xs transition-all duration-300 shadow-[0_4px_24px_rgba(227,38,30,0.35)] hover:shadow-[0_6px_32px_rgba(227,38,30,0.55)] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <MessageCircle className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-xs sm:text-sm font-sans font-bold tracking-[0.16em] uppercase">
                    START WHATSAPP INQUIRY
                  </span>
                  <ArrowRight className="w-4 h-4 text-white/90 transition-transform duration-300 group-hover:translate-x-1.5" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-[#8E8C85] hover:text-[#F3F0E8] transition-colors py-3 border-b border-white/15 hover:border-[#E3261E] group"
                >
                  <span>ATELIER LOCATION & HOURS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3261E] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Minimal Archival Spec Strip */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-8 gap-y-2 text-[11px] font-mono tracking-[0.2em] text-[#8E8C85] uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
                  <span className="text-[#F3F0E8]">PRIVATE ACQUISITION DESK</span>
                </div>
                <span>DIRECT CONFIRMATION</span>
                <span>ZERO CHECKOUT FRICTION</span>
              </div>

            </div>

            {/* Right Kit Silhouette / Micro Specimen (4 Cols) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-[#0B0B0A] border border-white/[0.08] group">
                <img
                  src="/kits/portugal-crest.jpg"
                  alt="Sports Gear authentic kit embroidery"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-[#070706]/40 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/80 uppercase tracking-widest bg-[#070706]/90 backdrop-blur-md px-3.5 py-2 border border-white/10 pointer-events-none">
                  <span>ATELIER SOURCING</span>
                  <span className="text-[#E3261E]">AUTHENTIC SPEC</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

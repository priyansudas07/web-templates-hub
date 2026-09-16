import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductGrid } from '../components/collection/ProductGrid';
import { Button } from '../components/common/Button';
import { getFeaturedProducts, getNewArrivals, products } from '../data/products';
import { categories } from '../data/categories';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit

  useEffect(() => {
    document.title = 'Sports Gear | Premium Sportswear & Authentic Match Kits';
  }, []);

  const filteredCategories = categories.filter((c) => c.id !== 'all');

  return (
    <div className="space-y-28 pb-16 overflow-x-hidden bg-[#0B0B0A]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-8">
        {/* Background Visual Signature: Monogram Watermark */}
        <div className="absolute -right-12 -bottom-12 text-[18vw] font-black text-[#151514] select-none pointer-events-none tracking-tighter leading-none z-0">
          SG
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#E3261E] uppercase bg-[#151514] border border-[#292927] px-4 py-1.5 rounded-sm w-fit shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#E3261E]" />
                <span>[ SG / NEW SEASON MATCH DROP 2025-26 ]</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-[#F3F0E8] uppercase tracking-widest leading-[1.1] pt-1">
                BUILT FOR THE <br />
                <span className="text-[#F3F0E8]">
                  GAME YOU LIVE.
                </span>
              </h1>

              <p className="text-[#9B9992] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-normal pt-1">
                Authentic match kits, rare retro grails, and official sportswear. Curated for fans, collectors, and athletes who demand authentic quality.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  href="/collection"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Collection
                </Button>

                <Button
                  href={createGeneralWhatsAppLink()}
                  isExternal
                  variant="outline"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                >
                  WhatsApp Inquiry
                </Button>
              </div>

              {/* Technical Spec Ticker Bar */}
              <div className="pt-8 border-t border-[#292927]">
                <div className="flex items-center gap-4 text-xs font-mono text-[#9B9992] tracking-wider overflow-x-auto whitespace-nowrap py-1">
                  <span className="text-[#E3261E] font-bold">SPEC //</span>
                  <span>MATCH EDITION</span>
                  <span className="text-[#292927]">•</span>
                  <span>DRI-FIT FABRIC</span>
                  <span className="text-[#292927]">•</span>
                  <span>STADIUM VAULT</span>
                  <span className="text-[#292927]">•</span>
                  <span>AUTHENTIC QUALITY</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Spotlight Product Card */}
            {spotlightProduct && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className="lg:col-span-5"
              >
                <div className="relative bg-[#151514] border border-[#292927] shadow-2xl overflow-hidden rounded-sm group">
                  <Link to={`/collection/${spotlightProduct.id}`} className="block aspect-[4/5] overflow-hidden relative bg-[#0B0B0A]">
                    <img
                      src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85"
                      alt={spotlightProduct.name}
                      loading="eager"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#0B0B0A]/90 border border-[#292927] px-3 py-1 text-[10px] font-mono font-bold text-[#E3261E] tracking-widest rounded-sm">
                      SPOTLIGHT KIT
                    </div>
                  </Link>

                  <div className="p-6 bg-[#151514] border-t border-[#292927]">
                    <div className="flex items-center justify-between text-xs font-mono text-[#E3261E] font-bold uppercase tracking-wider mb-2">
                      <span>[ {spotlightProduct.sport} / MATCH ISSUE ]</span>
                      <span className="text-[#F3F0E8] font-sans font-black text-base">₹{spotlightProduct.price.toLocaleString('en-IN')}</span>
                    </div>
                    <h3 className="font-normal text-2xl text-[#F3F0E8] uppercase tracking-wide mb-3">
                      {spotlightProduct.name}
                    </h3>
                    <Link
                      to={`/collection/${spotlightProduct.id}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#E3261E] hover:text-[#F3F0E8] uppercase tracking-wider"
                    >
                      <span>VIEW KIT SPECS</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* 2. FEATURED SPOTLIGHT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FEATURED GRAILS"
          title="SPOTLIGHT COLLECTION"
          subtitle="Hand-picked match jerseys, iconic retro kits, and fan favorites currently trending."
        />
        <ProductGrid products={featuredProducts} />
      </section>

      {/* 3. NEW ARRIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FRESH DROPS"
          title="NEW ARRIVALS"
          subtitle="Latest jersey arrivals added to the Sports Gear catalog for the current season."
        />
        <ProductGrid products={newArrivals} />
      </section>

      {/* 4. CATEGORY DISCOVERY SECTION (EDITORIAL DISCIPLINE LIST) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="EXPLORE BY DISCIPLINE"
          title="PRODUCT CATEGORIES"
          subtitle="Select your favorite sport or kit classification to filter the store catalog."
        />

        <div className="divide-y divide-[#292927] border-t border-b border-[#292927] bg-[#151514]">
          {filteredCategories.map((cat, index) => {
            const numStr = (index + 1).toString().padStart(2, '0');
            return (
              <Link
                key={cat.id}
                to={`/collection?category=${cat.id}`}
                className="group py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-[#1f1f1d] transition-colors duration-200"
              >
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-mono font-bold text-[#9B9992] group-hover:text-[#E3261E] transition-colors">
                    {numStr}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-normal text-[#F3F0E8] uppercase tracking-wide group-hover:text-[#E3261E] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[#9B9992] text-xs sm:text-sm mt-0.5 max-w-xl font-sans font-normal">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center">
                  <span className="text-[11px] font-mono text-[#9B9992] uppercase border border-[#292927] px-3 py-1 bg-[#0B0B0A] rounded-sm tracking-wider">
                    {cat.countBadge || 'CATALOG'}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#0B0B0A] border border-[#292927] flex items-center justify-center text-[#9B9992] group-hover:text-white group-hover:bg-[#E3261E] group-hover:border-[#E3261E] transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 5. STORE CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#151514] border border-[#292927] p-8 sm:p-12 relative overflow-hidden rounded-sm">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-[11px] font-mono font-bold text-[#E3261E] tracking-widest uppercase bg-[#0B0B0A] border border-[#292927] px-3.5 py-1 inline-block rounded-sm">
              // DIRECT STORE INQUIRY
            </span>
            <h2 className="text-4xl sm:text-5xl font-normal text-[#F3F0E8] uppercase tracking-wide">
              LOOKING FOR A SPECIFIC JERSEY OR CUSTOM PRINT?
            </h2>
            <p className="text-[#9B9992] text-sm sm:text-base leading-relaxed font-sans">
              Connect with Sports Gear directly on WhatsApp. We confirm size availability, custom printing options, and direct delivery options instantly.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href={createGeneralWhatsAppLink()}
                isExternal
                variant="primary"
                size="md"
                icon={<MessageCircle className="w-5 h-5 text-[#F3F0E8]" />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="md"
                icon={<ShieldCheck className="w-5 h-5 text-[#E3261E]" />}
              >
                Store Location & Hours
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

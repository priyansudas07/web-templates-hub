import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductGrid } from '../components/collection/ProductGrid';
import { Button } from '../components/common/Button';
import { getFeaturedProducts, getNewArrivals } from '../data/products';
import { categories } from '../data/categories';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
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
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#F3F0E8] uppercase tracking-wide group-hover:text-[#E3261E] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[#9B9992] text-xs sm:text-sm mt-0.5 max-w-xl font-sans font-medium">
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
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#F3F0E8] uppercase tracking-wide leading-tight">
              LOOKING FOR A SPECIFIC JERSEY OR CUSTOM PRINT?
            </h2>
            <p className="text-[#9B9992] text-sm sm:text-base leading-relaxed font-sans font-medium">
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

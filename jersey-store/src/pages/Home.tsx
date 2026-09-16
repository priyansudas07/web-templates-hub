import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProductGrid } from '../components/collection/ProductGrid';
import { getFeaturedProducts, getNewArrivals, products } from '../data/products';
import { categories } from '../data/categories';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';
import { ArrowRight, MessageCircle, Sparkles, Trophy } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit

  return (
    <div className="space-y-24 pb-12">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-6">
        {/* Background Subtle Gradient & Grid lines */}
        <div className="absolute inset-0 bg-radial from-rose-950/20 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-rose-500 uppercase bg-rose-950/50 border border-rose-800/40 px-3.5 py-1.5 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span>[ SG / NEW SEASON MATCH DROP 2025-26 ]</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-100 uppercase tracking-tighter leading-[0.95]">
                BUILT FOR THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-400">
                  GAME YOU LIVE.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
                Authentic match kits, rare retro grails, and official sportswear. Curated for fans, collectors, and players who demand authentic quality.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/collection"
                  className="px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-3 transition-all shadow-xl shadow-rose-950/60 hover:scale-105"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={createGeneralWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-[#1E293B] hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

              {/* Hero Stats / Micro-trust */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <span className="block text-2xl font-black text-slate-100">100%</span>
                  <span className="text-xs text-slate-400">Authentic Kits</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-100">3+</span>
                  <span className="text-xs text-slate-400">Sports Covered</span>
                </div>
                <div>
                  <span className="block text-2xl font-black text-slate-100">FAST</span>
                  <span className="text-xs text-slate-400">WhatsApp Inquiry</span>
                </div>
              </div>
            </div>

            {/* Hero Right Spotlight Image Card */}
            {spotlightProduct && (
              <div className="lg:col-span-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500" />
                  
                  <div className="relative bg-[#1E293B] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl">
                    <Link to={`/collection/${spotlightProduct.id}`} className="block aspect-[4/5] overflow-hidden">
                      <img
                        src={spotlightProduct.images[0]}
                        alt={spotlightProduct.name}
                        loading="eager"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </Link>

                    <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800">
                      <div className="flex items-center justify-between text-xs text-rose-400 font-bold uppercase tracking-wider mb-1">
                        <span>SPOTLIGHT DROP OF THE WEEK</span>
                        <span>₹{spotlightProduct.price.toLocaleString('en-IN')}</span>
                      </div>
                      <h3 className="font-extrabold text-lg text-slate-100 mb-2">
                        {spotlightProduct.name}
                      </h3>
                      <Link
                        to={`/collection/${spotlightProduct.id}`}
                        className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1 uppercase tracking-wider"
                      >
                        <span>View Kit Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* 3. CATEGORY DISCOVERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="EXPLORE BY DISCIPLINE"
          title="PRODUCT CATEGORIES"
          subtitle="Select your favorite sport or kit classification to filter the store catalog."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.filter(c => c.id !== 'all').map((cat) => (
            <Link
              key={cat.id}
              to={`/collection?category=${cat.id}`}
              className="group p-6 rounded-2xl bg-[#1E293B]/70 hover:bg-[#1E293B] border border-slate-800 hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between h-48 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Trophy className="w-24 h-24 text-rose-500" />
              </div>

              <div>
                <span className="text-[10px] font-bold tracking-widest text-rose-400 uppercase bg-rose-950/60 border border-rose-800/40 px-2.5 py-1 rounded-full">
                  {cat.countBadge || 'EXPLORE'}
                </span>
                <h3 className="text-xl font-extrabold text-slate-100 uppercase tracking-tight mt-3 group-hover:text-rose-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-slate-400 text-xs mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-white uppercase tracking-wider">
                <span>View Category</span>
                <ArrowRight className="w-4 h-4 text-rose-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. NEW ARRIVALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="FRESH DROPS"
          title="NEW ARRIVALS"
          subtitle="Latest jersey arrivals added to the Sports Gear catalog for the current season."
        />
        <ProductGrid products={newArrivals} />
      </section>

      {/* 5. STORE CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-[#1E293B] to-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-extrabold text-rose-500 tracking-widest uppercase bg-rose-950/60 border border-rose-800/40 px-3.5 py-1.5 rounded-full inline-block">
              DIRECT STORE INQUIRY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 uppercase tracking-tight">
              LOOKING FOR A SPECIFIC JERSEY OR CUSTOM PRINT?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Connect with Sports Gear directly on WhatsApp. We confirm size availability, custom printing options, and direct delivery options instantly.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-xl shadow-emerald-950/50"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm uppercase tracking-wider transition-all border border-slate-700"
              >
                Store Location & Hours
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

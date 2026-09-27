import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EditorialMidwayBannerProps {
  onExploreClick?: () => void;
}

export const EditorialMidwayBanner: React.FC<EditorialMidwayBannerProps> = ({ onExploreClick }) => {
  const handleScrollToGrid = (e: React.MouseEvent) => {
    if (onExploreClick) {
      e.preventDefault();
      onExploreClick();
    }
  };

  return (
    <section className="relative my-8 sm:my-16 lg:my-20 py-8 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-12 bg-[#070706] border-y border-white/[0.07] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Editorial Typography & Manifesto */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-8">
          
          {/* Small Orange Editorial Tag */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
            <span className="text-[9.5px] sm:text-[11px] font-mono font-bold tracking-[0.20em] sm:tracking-[0.22em] text-[#E3261E] uppercase">
              // ARCHIVAL CAMPAIGN • ISSUE 04
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#F3F0E8] tracking-tight uppercase leading-[0.92]">
            THE GAME. <br />
            THE CULTURE. <br />
            <span className="text-[#E3261E]">THE KIT.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-xs sm:text-base text-[#9B9992] font-sans leading-relaxed max-w-lg">
            A curated selection of authentic kits, iconic editions and modern football culture.
          </p>

          {/* Minimal Button: EXPLORE COLLECTION → */}
          <div className="pt-1 sm:pt-2">
            <a
              href="#collection-grid"
              onClick={handleScrollToGrid}
              className="group inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 min-h-[44px] w-full sm:w-auto bg-white/[0.04] hover:bg-[#E3261E] active:bg-[#E3261E] border border-white/10 hover:border-[#E3261E] text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#F3F0E8] rounded-xs transition-all duration-300"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

        </div>

        {/* Right Column: Asymmetric Large Authentic Jersey Showcase */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[3/4] bg-[#050504] border border-white/[0.08] rounded-sm overflow-hidden shadow-2xl group">
            <img
              src="https://images.unsplash.com/photo-1745944756454-938dcb6e62ea?auto=format&fit=crop&w=1200&q=85"
              alt="Archival Football Jersey Exhibition"
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            {/* Subtle Match Tag Watermark */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 pointer-events-none">
              <span className="px-2 sm:px-2.5 py-1 text-[8.5px] sm:text-[9px] font-mono font-bold tracking-widest uppercase bg-[#080807]/90 text-[#F3F0E8] border border-white/10 rounded-sm">
                MATCH SPECIMEN // 01
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

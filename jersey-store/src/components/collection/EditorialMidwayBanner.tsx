import React from 'react';

export const EditorialMidwayBanner: React.FC = () => {
  return (
    <section className="relative my-16 sm:my-24 py-16 sm:py-24 px-6 sm:px-12 bg-[#10100f] border-y border-white/[0.08] overflow-hidden">
      {/* Subtle Structural Grid Line */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 sm:gap-12 relative z-10">
        
        {/* Main Headline */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-[#E3261E] uppercase">
            <span>[ ARCHIVAL CURATION ]</span>
            <span className="text-white/20">•</span>
            <span className="text-[#9B9992]">SEASON 2025/26</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-[#F3F0E8] tracking-tight uppercase leading-[0.92]">
            THE GAME. <br />
            THE CULTURE. <br />
            <span className="text-[#E3261E]">THE KIT.</span>
          </h2>
        </div>

        {/* Editorial Subtext / Manifesto */}
        <div className="max-w-md space-y-4 md:text-right border-t md:border-t-0 md:border-l border-white/[0.08] pt-6 md:pt-0 md:pl-8">
          <p className="text-xs sm:text-sm text-[#9B9992] font-sans leading-relaxed">
            Every stitch holds a match moment. Engineered from authentic match-grade textiles, historical club grails, and official federation player cuts.
          </p>

          <div className="flex md:justify-end items-center gap-4 text-[10px] font-mono tracking-widest text-[#9B9992]/60 uppercase">
            <span>01 // AUTHENTICITY</span>
            <span>•</span>
            <span>02 // HERITAGE</span>
            <span>•</span>
            <span>03 // PRECISION</span>
          </div>
        </div>

      </div>
    </section>
  );
};

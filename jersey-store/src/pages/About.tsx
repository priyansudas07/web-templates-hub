import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { MorphText } from '../components/ui/morph-text';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'The Story & Archive | Sports Gear';
  }, []);

  return (
    <div className="bg-[#070706] text-[#F3F0E8] overflow-hidden selection:bg-[#E3261E] selection:text-white">
      
      {/* =========================================================================
          01 — HERO / BRAND STORY (Dramatic Editorial Campaign)
          ========================================================================= */}
      <section className="relative pt-20 pb-28 sm:pt-32 sm:pb-40 border-b border-white/[0.06] overflow-hidden">
        
        {/* Subtle Ambient Background Vignette */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E3261E]/[0.025] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Dramatic Editorial Typography (7 Cols on tablet & desktop) */}
            <div className="md:col-span-7 space-y-8 sm:space-y-10">
              
              {/* Small Restrained Orange Label */}
              <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] animate-pulse" />
                <span>// THE STORY</span>
              </div>

              {/* Oversized Condensed Campaign Headline */}
              <div className="space-y-1">
                <h1 className="text-6xl sm:text-7xl lg:text-[6.8rem] font-black uppercase tracking-[-0.01em] leading-[0.84] text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  BUILT FOR THE GAME.
                </h1>
                <div className="text-5xl sm:text-6xl lg:text-[5.8rem] font-black uppercase tracking-[-0.01em] leading-[0.84] text-[#6E6C65] font-['Bebas_Neue',sans-serif]">
                  NOT JUST THE JERSEY.
                </div>
              </div>

              {/* Supporting Editorial Statement */}
              <p className="text-base sm:text-lg lg:text-xl text-[#A19F97] font-normal leading-relaxed max-w-xl font-sans">
                Sports Gear is a curated vault of authentic kits, iconic eras, and sports culture. We celebrate the tactile memory of the pitch—every match-worn thread, embroidered crest, and legendary number that shaped the game forever.
              </p>

              {/* Minimal Campaign Specification Metadata Strip */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-mono tracking-[0.2em] text-[#8E8C85] uppercase">
                <div className="flex items-center gap-2">
                  <span className="text-[#E3261E]">●</span>
                  <span className="text-[#F3F0E8]">VAULT ARCHIVE NO. 001</span>
                </div>
                <span>100% MATCH-SPEC WEAVE</span>
                <span>AUTHENTICATED SPECIMENS</span>
              </div>

            </div>

            {/* Right Column: Asymmetric Realistic Macro Kit Texture (5 Cols on tablet & desktop) */}
            <div className="md:col-span-5 relative mt-4 md:mt-0">
              
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden rounded-sm group">
                
                {/* Authentic Macro Fabric & Crest Image */}
                <img
                  src="/kits/portugal-details.jpg"
                  alt="Close-up of authentic kit jacquard weave, stitching, and heat-applied crest detail"
                  className="w-full h-full object-cover object-center grayscale contrast-125 opacity-75 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85';
                  }}
                />

                {/* Dark Vignette & Edge Fades to integrate seamlessly with #070706 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-[#070706]/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070706] via-transparent to-[#070706]/50 pointer-events-none" />
                <div className="absolute inset-0 border border-white/[0.08] pointer-events-none" />

                {/* Subtle Specular Top Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Archival Specimen Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-white/80 uppercase tracking-widest bg-[#070706]/90 backdrop-blur-md px-4 py-2.5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
                    <span>SPECIMEN // 001</span>
                  </div>
                  <span className="text-[#8E8C85]">DRI-FIT ADV / HEAT-APPLIED CREST</span>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — THE STORY (Asymmetric Magazine Editorial Layout)
          ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.24em] text-[#E3261E] uppercase">
                <span>//</span>
                <span>02 — THE MANIFESTO</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                THREE PILLARS OF THE VAULT
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8E8C85] uppercase tracking-widest">
              CURATION PHILOSOPHY // EST. 2026
            </span>
          </div>

          {/* Staggered Asymmetric Pillar Rows */}
          <div className="space-y-24 sm:space-y-32">
            
            {/* Pillar 01: THE KIT (Dominant Left Spread) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              <div className="lg:col-span-3">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-black text-white/15 font-mono tracking-tighter leading-none block">
                  01
                </span>
                <span className="text-[11px] font-mono tracking-[0.28em] text-[#E3261E] uppercase pt-2 block">
                  // PILLAR SPEC 01
                </span>
              </div>
              <div className="lg:col-span-9 space-y-6">
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  THE KIT
                </h3>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3F0E8] leading-tight font-sans max-w-3xl border-l-2 border-[#E3261E] pl-6 py-1">
                  “A jersey isn't just fabric. It's a memory, a season, a player, a moment.”
                </blockquote>
                <p className="text-base sm:text-lg text-[#9B9992] leading-relaxed max-w-2xl pt-2 font-sans">
                  From micro-mesh airflow inserts to heavy Jacquard patterns, the kit represents physical identity on the pitch. Every stitch carries the weight of ninety minutes of passion, iconic derby triumphs, and unforgettable tournament runs.
                </p>
              </div>
            </div>

            {/* Pillar 02: THE CULTURE (Offset Asymmetric Center Spread) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-12 border-t border-white/[0.06]">
              <div className="lg:col-span-3 lg:order-2 lg:text-right">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-black text-white/15 font-mono tracking-tighter leading-none block">
                  02
                </span>
                <span className="text-[11px] font-mono tracking-[0.28em] text-[#E3261E] uppercase pt-2 block">
                  // PILLAR SPEC 02
                </span>
              </div>
              <div className="lg:col-span-9 lg:order-1 space-y-6">
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  THE CULTURE
                </h3>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3F0E8] leading-tight font-sans max-w-3xl border-l-2 border-white/30 pl-6 py-1">
                  “From match-day classics to forgotten retro grails, we collect the pieces that shaped the game.”
                </blockquote>
                <p className="text-base sm:text-lg text-[#9B9992] leading-relaxed max-w-2xl pt-2 font-sans">
                  Sportswear has long broken past stadium gates into high fashion, streetwear, art, and timeless archive collecting. We preserve rare silhouettes, historic typography font-sets, and iconic kit drops that defined whole generations of fans.
                </p>
              </div>
            </div>

            {/* Pillar 03: THE VAULT (Dominant Final Spread) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pt-12 border-t border-white/[0.06]">
              <div className="lg:col-span-3">
                <span className="text-7xl sm:text-8xl lg:text-9xl font-black text-white/15 font-mono tracking-tighter leading-none block">
                  03
                </span>
                <span className="text-[11px] font-mono tracking-[0.28em] text-[#E3261E] uppercase pt-2 block">
                  // PILLAR SPEC 03
                </span>
              </div>
              <div className="lg:col-span-9 space-y-6">
                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  THE VAULT
                </h3>
                <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F3F0E8] leading-tight font-sans max-w-3xl border-l-2 border-[#E3261E] pl-6 py-1">
                  “Every kit has a story. We bring those stories together in one curated collection.”
                </blockquote>
                <p className="text-base sm:text-lg text-[#9B9992] leading-relaxed max-w-2xl pt-2 font-sans">
                  Our catalog is not an endless anonymous inventory; it is a strictly vetted archive of match specimens and authentic collector drops. We connect collectors with verified jerseys without compromise.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          03 — SPORTING DISCIPLINES (Asymmetric Magazine Editorial Panel)
          ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.24em] text-[#E3261E] uppercase">
                <span>//</span>
                <span>03 — DISCIPLINES</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                SPORTING DISCIPLINES
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8E8C85] uppercase tracking-widest max-w-xs text-left sm:text-right">
              MUSEUM-GRADE KITS ACROSS THREE GLOBAL DISCIPLINES
            </p>
          </div>

          {/* Asymmetric Magazine Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Discipline 01: FOOTBALL (Dominant 7-Column Magazine Feature) */}
            <Link
              to="/collection?sport=football"
              className="lg:col-span-7 group relative min-h-[460px] sm:min-h-[520px] rounded-sm overflow-hidden bg-[#0B0B0A] border border-white/[0.08] flex flex-col justify-between p-8 sm:p-12 transition-all duration-700 hover:border-white/25"
            >
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85"
                alt="Football kits archive"
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/70 to-transparent pointer-events-none" />

              {/* Top Meta */}
              <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-white/60 uppercase">
                <span className="text-[#E3261E] font-bold">01 / 03</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300 inline-flex items-center gap-1.5 text-white/80 group-hover:text-white">
                  <span>EXPLORE FOOTBALL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3261E]" />
                </span>
              </div>

              {/* Bottom Typographic Feature */}
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-mono text-[#E3261E] uppercase tracking-[0.2em] block">
                  CLUBS & NATIONAL FEDERATIONS
                </span>
                <h3 className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-none">
                  FOOTBALL
                </h3>
                <p className="text-sm text-[#9B9992] max-w-lg font-sans leading-relaxed pt-1">
                  Premier League, La Liga, Serie A, and iconic FIFA World Cup player-issue editions engineered with micro-knit aerodynamics.
                </p>
              </div>
            </Link>

            {/* Right Column: CRICKET (02) & BASKETBALL (03) Stacked Asymmetrically (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Discipline 02: CRICKET */}
              <Link
                to="/collection?sport=cricket"
                className="group relative flex-1 min-h-[240px] rounded-sm overflow-hidden bg-[#0B0B0A] border border-white/[0.08] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:border-white/25"
              >
                <img
                  src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80"
                  alt="Cricket jerseys archive"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/70 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-white/60 uppercase">
                  <span className="text-[#E3261E] font-bold">02 / 03</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-white/70 group-hover:text-white inline-flex items-center gap-1">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 text-[#E3261E]" />
                  </span>
                </div>

                <div className="relative z-10 space-y-1 pt-6">
                  <span className="text-[10px] font-mono text-[#E3261E] uppercase tracking-[0.2em] block">
                    NATIONAL T20 & FRANCHISES
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-none">
                    CRICKET
                  </h3>
                  <p className="text-xs text-[#9B9992] font-sans line-clamp-2 pt-1">
                    Official India National match gear, IPL franchise shirts, and heritage test cottons.
                  </p>
                </div>
              </Link>

              {/* Discipline 03: BASKETBALL */}
              <Link
                to="/collection?sport=basketball"
                className="group relative flex-1 min-h-[240px] rounded-sm overflow-hidden bg-[#0B0B0A] border border-white/[0.08] flex flex-col justify-between p-6 sm:p-8 transition-all duration-700 hover:border-white/25"
              >
                <img
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
                  alt="Basketball swingman archive"
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 opacity-25 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-[#070706]/70 to-transparent pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between text-xs font-mono tracking-widest text-white/60 uppercase">
                  <span className="text-[#E3261E] font-bold">03 / 03</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-white/70 group-hover:text-white inline-flex items-center gap-1">
                    <span>EXPLORE</span>
                    <ArrowRight className="w-3 h-3 text-[#E3261E]" />
                  </span>
                </div>

                <div className="relative z-10 space-y-1 pt-6">
                  <span className="text-[10px] font-mono text-[#E3261E] uppercase tracking-[0.2em] block">
                    HARDWOOD CLASSICS & SWINGMAN
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-none">
                    BASKETBALL
                  </h3>
                  <p className="text-xs text-[#9B9992] font-sans line-clamp-2 pt-1">
                    Authentic NBA tackle-twill stitching, iconic championship numbers, and hardwood heritage.
                  </p>
                </div>
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          04 — AUTHENTICITY / CURATION (Clean Typographic Standards)
          ========================================================================= */}
      <section className="py-28 sm:py-40 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Heading (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.24em] text-[#E3261E] uppercase">
                <span>//</span>
                <span>04 — STANDARDS</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.9]">
                VERIFIED ARCHIVAL CRITERIA
              </h2>
              <p className="text-sm sm:text-base text-[#9B9992] font-sans leading-relaxed max-w-md">
                We operate as a focused atelier for collectors and true fans who demand verifiable authenticity. Every specimen is inspected before inclusion in the vault.
              </p>
            </div>

            {/* Right Two Standards (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* 01 — AUTHENTICITY */}
              <div className="space-y-3 pb-8 border-b border-white/[0.08]">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#E3261E] tracking-[0.24em] uppercase">
                  <span>01</span>
                  <span>//</span>
                  <span>AUTHENTICITY</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  MATCH-GRADE DETAIL & FABRIC INTEGRITY
                </h3>
                <p className="text-sm sm:text-base text-[#9B9992] leading-relaxed font-sans">
                  Verified match-grade kits and attention to badge, stitching and material details. We examine heat-pressed badges, official font typography, and player-spec breathability.
                </p>
              </div>

              {/* 02 — CURATION */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono font-bold text-[#E3261E] tracking-[0.24em] uppercase">
                  <span>02</span>
                  <span>//</span>
                  <span>CURATION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif]">
                  ICONIC ERAS & CULTURAL RARITY
                </h3>
                <p className="text-sm sm:text-base text-[#9B9992] leading-relaxed font-sans">
                  Selected for collectors, fans and people who appreciate the culture surrounding the game. Every piece in the vault represents a landmark moment, legendary squad, or design breakthrough.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          05 — SIGNATURE BRAND STATEMENT (Cinematic Section with Enormous Watermark)
          ========================================================================= */}
      <section className="relative py-36 sm:py-52 overflow-hidden bg-[#070706]">
        
        {/* Enormous Watermark Jersey Number 07 Behind Typography */}
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
            <span>THE SPORTS GEAR MANIFESTO</span>
            <span>●</span>
          </div>

          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-6xl sm:text-8xl lg:text-[8.5rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.84]">
              THE KIT IS
            </h2>
            <div className="text-6xl sm:text-8xl lg:text-[8.5rem] font-black uppercase tracking-tight text-[#F3F0E8] font-['Bebas_Neue',sans-serif] leading-[0.84] flex items-center justify-center">
              <MorphText
                words={["THE MEMORY.", "THE GRAIL.", "THE LEGACY.", "THE OBSESSION."]}
                fontFamily="'Bebas Neue', sans-serif"
                textClassName="text-[#F3F0E8]"
                interval={3200}
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#9B9992] max-w-xl mx-auto font-sans leading-relaxed">
            Every match won, every historic title lifted, and every legendary celebration lives permanently woven into the fibers.
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

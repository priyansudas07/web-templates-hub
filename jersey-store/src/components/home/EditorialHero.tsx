import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DustParticles } from '../common/DustParticles';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, X } from 'lucide-react';

interface HotspotSpec {
  label: string;
  value: string;
}

interface Hotspot {
  id: string;
  number: string;
  label: string;
  title: string;
  category: string;
  specs: HotspotSpec[];
  verdict: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'collar',
    number: '01',
    label: 'COLLAR',
    title: 'ERGONOMIC HYBRID RIB COLLAR',
    category: 'BONDED MICRO-KNIT',
    specs: [
      { label: 'CONSTRUCTION', value: 'Zero-Abrasion Sonic Seam Welds' },
      { label: 'PROFILE', value: 'Dual-Tone Tipping (Clover / Obsidian)' },
      { label: 'FIT SPEC', value: 'Ergonomic Dynamic Compression' },
    ],
    verdict: 'FPF MATCH ACCREDITATION',
  },
  {
    id: 'crest',
    number: '02',
    label: 'CREST',
    title: 'FPF PORTUGUESE FEDERATION SHIELD',
    category: '3D DIMENSIONAL SILICONE',
    specs: [
      { label: 'APPLICATION', value: 'Precision Thermal Bonded Seal' },
      { label: 'SURFACE', value: 'Micro-Embossed Cruz de Cristo' },
      { label: 'WEIGHT SPEC', value: 'Ultra-Light (0.8g) Low-Drag Profile' },
    ],
    verdict: 'AUTHENTIC 3D MATCH EMBLEM',
  },
  {
    id: 'fabric',
    number: '03',
    label: 'FABRIC',
    title: 'DRI-FIT ADV GENERATIVE JACQUARD',
    category: 'HEAT-MAPPED OPEN-HOLE KNIT',
    specs: [
      { label: 'COMPOSITION', value: '100% Recycled Poly Micro-Filament' },
      { label: 'VENTILATION', value: '4D Athlete Sweat-Zone Data Mapping' },
      { label: 'WEAVE TECH', value: 'Targeted High-Velocity Airflow' },
    ],
    verdict: 'AEROREADY 2026 ARCHIVAL KNIT',
  },
];

const KIT_VIEWS = [
  {
    id: 'front',
    label: 'Front View',
    sub: 'Match Issue Spec',
    num: '01',
    image: '/kits/portugal-front.png',
    tag: 'MATCH EDITION FRONT',
    isCutout: true,
  },
  {
    id: 'back',
    label: 'Back Profile',
    sub: 'Ronaldo 7 Edition',
    num: '02',
    image: '/kits/portugal-back.png',
    tag: 'AUTHENTIC REAR MATCH EDITION',
    isCutout: true,
  },
  {
    id: 'crest',
    label: 'Club Crest',
    sub: 'FPF 3D Shield',
    num: '03',
    image: '/kits/portugal-crest.jpg',
    tag: 'FPF EMBROIDERED SHIELD',
    isCutout: false,
  },
  {
    id: 'details',
    label: 'Fabric Weave',
    sub: 'Dri-FIT ADV Knit',
    num: '04',
    image: '/kits/portugal-details.jpg',
    tag: 'COLLAR & DRI-FIT ADV ARCHIVAL',
    isCutout: false,
  },
];

export const EditorialHero: React.FC = () => {
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  // Dynamic Parallax Motion Values for Hero Hover Interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 160 };
  const jerseyRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springConfig);
  const jerseyRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const jerseyTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const jerseyTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const currentView = KIT_VIEWS[activeViewIndex];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] bg-[#070707] text-[#F3F0E8] overflow-hidden flex flex-col justify-between pt-3 pb-3 select-none border-b border-[#292927]/60"
    >

      {/* Subtle Analog Film Grain Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle Crimson Studio Spotlight behind Center-Right Jersey */}
      <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3261E]/18 via-transparent to-transparent blur-3xl pointer-events-none z-0" />
      
      {/* Floating Studio Dust Particles */}
      <DustParticles particleCount={45} />

      {/* Far Left Vertical Technical Telemetry Bar */}
      <div className="hidden xl:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 items-center gap-3 z-10 pointer-events-none opacity-40">
        <div className="h-16 w-[1px] bg-[#9B9992]/40" />
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#9B9992] -rotate-90 origin-left whitespace-nowrap">
          SM90 DIGTS 01000
        </span>
      </div>

      {/* Main Campaign Stage Grid */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full my-auto flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-3 items-center">
          
          {/* ============================================================
              LEFT COLUMN: Editorial Headline, Pricing, Buttons, Badges
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-5 text-left z-20"
          >
            {/* Breadcrumb / Category Tag */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
              <span className="font-mono text-[#E3261E] font-bold">01</span>
              <span className="font-sans font-semibold text-[#9B9992]/80">/ FOOTBALL</span>
            </div>

            {/* Main Editorial Campaign Headline */}
            <div className="space-y-0.5">
              <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] font-display font-black uppercase tracking-tight leading-[0.85] text-[#F3F0E8]">
                THE GAME <br />
                NEVER <span className="text-[#E3261E]">STOPS.</span>
              </h1>
            </div>

            {/* Product Meta: Official Release Spec */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-sans text-[11px] tracking-[0.22em] uppercase font-semibold text-[#9B9992]">
                <span>OFFICIAL MATCH ISSUE</span>
                <span className="text-white/20">•</span>
                <span className="text-[#E3261E]">2026 WORLD CUP</span>
              </div>
              <div className="text-[#F3F0E8] font-sans font-bold tracking-[0.14em] text-sm sm:text-base uppercase">
                PORTUGAL HOME KIT 2025/26
              </div>
            </div>

            {/* Pricing Line with Red Dash Accent & Strikethrough Original Price */}
            <div className="flex items-baseline gap-3 pt-0.5">
              <div className="w-5 h-[2px] bg-[#E3261E] self-center" />
              <span className="text-3xl sm:text-4xl font-sans font-extrabold text-[#F3F0E8] tracking-tight">
                ₹1,499
              </span>
              <span className="text-sm sm:text-base font-sans font-medium text-[#9B9992]/50 line-through decoration-[#E3261E]/70 decoration-1">
                ₹2,999
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-1.5 py-0.5 rounded-xs tracking-wider uppercase">
                50% OFF
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Explore Collection Button */}
              <Link
                to="/collection"
                className="h-12 inline-flex items-center justify-center gap-2.5 px-6 bg-[#E3261E] hover:bg-[#c81e17] text-white font-sans font-bold text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_0_25px_rgba(227,38,30,0.5)] hover:shadow-[0_0_35px_rgba(227,38,30,0.75)] hover:scale-[1.02] active:scale-[0.98] rounded-xs"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>EXPLORE COLLECTION</span>
              </Link>

              {/* User-Requested WhatsApp Concierge Button (.button2) */}
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="button2 h-12 py-0 px-5 flex items-center rounded-xs"
                aria-label="Contact Concierge on WhatsApp"
              >
                <div className="flex flex-col text-left leading-tight pr-4">
                  <span className="text-[9px] text-[#9B9992] font-sans tracking-[0.2em]">WHATSAPP</span>
                  <span className="text-xs font-sans font-bold text-white tracking-wider">CONCIERGE</span>
                </div>
                <svg viewBox="0 0 24 24" className="w-4 h-4">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ============================================================
              CENTER COLUMN: Unboxed Jersey (Dominant Scale & Placement)
             ============================================================ */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:translate-x-2 xl:translate-x-4">
            
            {/* Jersey Centerpiece Container */}
            <div
              className={`relative w-full max-w-[520px] sm:max-w-[620px] lg:max-w-[680px] xl:max-w-[720px] flex items-center justify-center z-10 scale-115 lg:scale-[1.26] xl:scale-[1.30] transition-transform duration-500 ease-out ${
                activeViewIndex === 0
                  ? 'translate-y-9 sm:translate-y-11 lg:translate-y-10'
                  : '-translate-y-3 sm:-translate-y-4 lg:-translate-y-2'
              }`}
            >
              {/* High-Resolution Jersey Image or Macro Detail View */}
              <div className="relative w-full aspect-[4/4.3] flex items-center justify-center">
                {/* 3D Parallax Tilt Layer for Jersey Centerpiece Artwork & Lighting */}
                <motion.div
                  style={{
                    rotateX: jerseyRotateX,
                    rotateY: jerseyRotateY,
                    x: jerseyTranslateX,
                    y: jerseyTranslateY,
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-none"
                >
                  {/* Volumetric Theatrical Studio Backlight */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none">
                    {/* Core Ruby Spotlight Behind Torso */}
                    <div className="w-[320px] h-[360px] sm:w-[380px] sm:h-[420px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(227,38,30,0.42)_0%,_rgba(180,20,15,0.20)_45%,_transparent_72%)] blur-2xl transform-gpu" />
                    {/* Broad Atmospheric Haze */}
                    <div className="absolute w-[500px] h-[540px] sm:w-[620px] sm:h-[660px] rounded-full bg-[radial-gradient(circle,_rgba(227,38,30,0.16)_0%,_rgba(227,38,30,0.06)_50%,_transparent_75%)] blur-3xl transform-gpu" />
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentView.id}
                      initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, scale: 1.04, filter: 'blur(4px)' }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      {currentView.isCutout ? (
                        <img
                          src={currentView.image}
                          alt="Portugal 2025/26 Match Kit"
                          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] drop-shadow-[0_0_50px_rgba(227,38,30,0.25)] select-none pointer-events-auto"
                        />
                      ) : (
                        <div className="w-full h-full p-2 bg-[#121211] border border-[#292927] rounded-sm overflow-hidden shadow-2xl relative group pointer-events-auto">
                          <img
                            src={currentView.image}
                            alt={currentView.tag}
                            className="w-full h-full object-cover rounded-sm filter contrast-110 group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 right-3 text-left">
                            <span className="text-[9px] font-mono text-[#E3261E] uppercase tracking-widest block">MACRO DETAIL WEAVE</span>
                            <span className="text-xs font-mono font-bold text-white uppercase">{currentView.tag}</span>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>


                {/* 2D Parallax Layer for Hotspots: Tracks Jersey Motion while Maintaining Permanent Crystal-Clear Typography */}
                {activeViewIndex === 0 && (
                  <motion.div
                    style={{
                      x: jerseyTranslateX,
                      y: jerseyTranslateY,
                    }}
                    className="absolute inset-0 pointer-events-none z-20"
                  >
                    
                    {/* Hotspot 01: Collar Callout (Floating Safely Below Navbar Above Collar) */}
                    <div
                      className="absolute top-[1.5%] left-[38%] pointer-events-auto cursor-pointer group flex flex-col items-center"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'collar' ? null : HOTSPOTS[0])}
                    >
                      {/* Compact Glass Capsule */}
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0A0A09]/80 hover:bg-[#0A0A09]/95 backdrop-blur-md border border-white/20 hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.85),0_0_12px_rgba(227,38,30,0.25)] transition-all duration-200">
                        <span className="w-1 h-1 rounded-full bg-[#E3261E] shadow-[0_0_6px_#E3261E] animate-pulse group-hover:scale-125 transition-transform" />
                        <span className="text-[8.5px] font-mono font-medium text-white/60">01</span>
                        <span className="text-white/20 text-[8px]">•</span>
                        <span className="text-[9px] font-sans font-bold tracking-[0.14em] text-[#F3F0E8] uppercase antialiased">
                          COLLAR
                        </span>
                      </div>
                      {/* Shortened Precision Hairline String + Target Dot */}
                      <div className="w-[1px] h-5 bg-gradient-to-b from-white/40 via-white/25 to-white/10" />
                      <div className="w-1.5 h-1.5 rounded-full border border-white/60 bg-[#E3261E] shadow-[0_0_8px_#E3261E]" />
                    </div>

                    {/* Hotspot 02: Crest Callout (Right Chest Shield) */}
                    <div
                      className="absolute top-[30%] left-[53.5%] -translate-y-1/2 pointer-events-auto cursor-pointer group flex items-center"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'crest' ? null : HOTSPOTS[1])}
                    >
                      {/* Target Dot directly on the Portuguese Shield */}
                      <div className="w-1.5 h-1.5 rounded-full border border-white/60 bg-[#E3261E] shadow-[0_0_8px_#E3261E]" />
                      {/* Hairline */}
                      <div className="w-4 h-[1px] bg-gradient-to-r from-white/30 to-white/10" />
                      {/* Compact Glass Capsule */}
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0A0A09]/80 hover:bg-[#0A0A09]/95 backdrop-blur-md border border-white/20 hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.85),0_0_12px_rgba(227,38,30,0.25)] transition-all duration-200">
                        <span className="w-1 h-1 rounded-full bg-[#E3261E] shadow-[0_0_6px_#E3261E] animate-pulse group-hover:scale-125 transition-transform" />
                        <span className="text-[8.5px] font-mono font-medium text-white/60">02</span>
                        <span className="text-white/20 text-[8px]">•</span>
                        <span className="text-[9px] font-sans font-bold tracking-[0.14em] text-[#F3F0E8] uppercase antialiased">
                          CREST
                        </span>
                      </div>
                    </div>

                    {/* Hotspot 03: Fabric Callout (Lower Torso) */}
                    <div
                      className="absolute top-[61%] right-[5%] sm:right-[7%] pointer-events-auto cursor-pointer group flex items-center"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'fabric' ? null : HOTSPOTS[2])}
                    >
                      {/* Target Dot */}
                      <div className="w-1.5 h-1.5 rounded-full border border-white/60 bg-[#E3261E] shadow-[0_0_8px_#E3261E]" />
                      {/* Hairline */}
                      <div className="w-3 h-[1px] bg-gradient-to-r from-white/10 to-white/30" />
                      {/* Compact Glass Capsule */}
                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0A0A09]/80 hover:bg-[#0A0A09]/95 backdrop-blur-md border border-white/20 hover:border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.25)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.85),0_0_12px_rgba(227,38,30,0.25)] transition-all duration-200">
                        <span className="w-1 h-1 rounded-full bg-[#E3261E] shadow-[0_0_6px_#E3261E] animate-pulse group-hover:scale-125 transition-transform" />
                        <span className="text-[8.5px] font-mono font-medium text-white/60">03</span>
                        <span className="text-white/20 text-[8px]">•</span>
                        <span className="text-[9px] font-sans font-bold tracking-[0.14em] text-[#F3F0E8] uppercase antialiased">
                          FABRIC
                        </span>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* Technical Match Dossier Spec Modal / HUD Card */}
                <AnimatePresence>
                  {activeHotspot && (
                    <motion.div
                      initial={{ opacity: 0, y: 14, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-1 inset-x-0 mx-auto max-w-[390px] w-[95%] bg-[#080807]/95 backdrop-blur-2xl border border-white/[0.14] p-3.5 sm:p-4 rounded-xs shadow-[0_30px_70px_rgba(0,0,0,0.95),0_0_30px_rgba(227,38,30,0.12),inset_0_1px_0_rgba(255,255,255,0.2)] z-40 text-left relative overflow-hidden"
                    >
                      {/* Top-Right Decorative Corner Crosshair */}
                      <span className="absolute top-1.5 right-1.5 font-mono text-[8px] text-white/20 select-none pointer-events-none">
                        +
                      </span>
                      {/* Bottom-Left Decorative Corner Crosshair */}
                      <span className="absolute bottom-1.5 left-1.5 font-mono text-[8px] text-white/20 select-none pointer-events-none">
                        +
                      </span>

                      {/* Header Row: Laser-Cut Badge + Close Button */}
                      <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <span className="text-[8.5px] font-mono font-bold bg-[#E3261E] text-white px-2 py-0.5 rounded-2xs tracking-widest uppercase shadow-[0_0_12px_rgba(227,38,30,0.4)]">
                            SPEC // {activeHotspot.number}
                          </span>
                          <span className="text-[9px] font-mono font-semibold text-[#9B9992] tracking-[0.16em] uppercase">
                            {activeHotspot.category}
                          </span>
                        </div>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="w-6 h-6 rounded-2xs bg-white/[0.04] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer group/btn"
                          aria-label="Close specification dossier"
                        >
                          <X className="w-3 h-3 transition-transform group-hover/btn:rotate-90 duration-200" />
                        </button>
                      </div>

                      {/* Component Title */}
                      <div className="mt-2.5">
                        <h4 className="text-xs sm:text-[13px] font-sans font-black text-[#F3F0E8] uppercase tracking-wide leading-snug">
                          {activeHotspot.title}
                        </h4>
                      </div>

                      {/* Structured 2-Column Telemetry Specs Grid */}
                      <div className="mt-2.5 py-2 border-y border-white/[0.08] space-y-2 bg-white/[0.02] px-3 rounded-2xs">
                        {activeHotspot.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-baseline justify-between gap-2.5 text-xs leading-tight">
                            <span className="text-[9px] font-mono text-[#9B9992]/70 tracking-wider uppercase font-medium whitespace-nowrap shrink-0">
                              {spec.label}
                            </span>
                            <span className="text-[10px] sm:text-[10.5px] font-sans text-[#F3F0E8] font-semibold tracking-wide text-right">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Footer Telemetry */}
                      <div className="mt-2.5 flex items-center justify-between text-[8.5px] font-mono">
                        <span className="text-[#9B9992]/50 tracking-widest uppercase whitespace-nowrap">
                          SPEC // POR-2026
                        </span>
                        <span className="text-emerald-400 font-bold tracking-wider flex items-center gap-1.5 uppercase whitespace-nowrap">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                          {activeHotspot.verdict}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: NikeLab Technical Archival Inspector Dock
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-center lg:pl-6 lg:translate-x-10 xl:translate-x-16 z-20"
          >
            {/* Minimalist Editorial Gallery Strip */}
            <div className="w-full max-w-[280px]">
              
              {/* Understated Editorial Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08]">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#9B9992] uppercase">
                  PERSPECTIVES
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#9B9992]/60">
                  0{activeViewIndex + 1} / 0{KIT_VIEWS.length}
                </span>
              </div>

              {/* View Items */}
              <div className="space-y-1.5">
                {KIT_VIEWS.map((view, index) => {
                  const isActive = index === activeViewIndex;
                  return (
                    <button
                      key={view.id}
                      onClick={() => {
                        setActiveViewIndex(index);
                        setActiveHotspot(null);
                      }}
                      className={`w-full flex items-center justify-between p-2 rounded-xs transition-all duration-300 text-left group cursor-pointer border ${
                        isActive
                          ? 'bg-white/[0.04] border-white/20 shadow-sm'
                          : 'bg-transparent border-transparent opacity-45 hover:opacity-100 hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Thumbnail */}
                        <div
                          className={`w-10 h-10 shrink-0 rounded-xs bg-[#0e0e0d] flex items-center justify-center overflow-hidden border transition-all duration-300 ${
                            isActive
                              ? 'border-white/30 ring-1 ring-white/10'
                              : 'border-white/[0.07] group-hover:border-white/20'
                          }`}
                        >
                          <img
                            src={view.image}
                            alt={view.label}
                            className={`w-full h-full object-contain p-0.5 filter ${
                              isActive ? 'contrast-105 scale-105' : 'contrast-90 group-hover:scale-105'
                            } transition-transform duration-300`}
                          />
                        </div>

                        {/* Labels */}
                        <div className="space-y-0.5 text-left">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-mono transition-colors ${isActive ? 'text-[#E3261E] font-bold' : 'text-[#9B9992]'}`}>
                              {view.num}
                            </span>
                            <span className={`text-xs font-sans uppercase tracking-[0.08em] transition-colors ${
                              isActive ? 'text-[#F3F0E8] font-bold' : 'text-[#9B9992] group-hover:text-[#F3F0E8] font-medium'
                            }`}>
                              {view.label}
                            </span>
                          </div>
                          <span className="block text-[10px] font-sans text-[#9B9992]/70 font-normal">
                            {view.sub}
                          </span>
                        </div>
                      </div>

                      {/* Clean Active Indicator Dot */}
                      <div className="pr-1.5">
                        {isActive ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] inline-block shadow-[0_0_6px_#E3261E]" />
                        ) : (
                          <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-white/30 inline-block transition-colors" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================
          BOTTOM SECTION: 3 Value Pillars & Technical Archive Spec
         ============================================================ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full pt-2.5 border-t border-[#292927]/40">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 text-left">
            <div className="space-y-0.5">
              <span className="block text-[10px] font-sans text-[#F3F0E8] font-bold uppercase tracking-[0.14em]">
                PREMIUM QUALITY
              </span>
              <span className="block text-[9.5px] font-sans text-[#9B9992] tracking-wider uppercase">
                AUTHENTIC KITS
              </span>
            </div>

            <div className="space-y-0.5">
              <span className="block text-[10px] font-sans text-[#F3F0E8] font-bold uppercase tracking-[0.14em]">
                GLOBAL SHIPPING
              </span>
              <span className="block text-[9.5px] font-sans text-[#9B9992] tracking-wider uppercase">
                WORLDWIDE DELIVERY
              </span>
            </div>

            <div className="space-y-0.5">
              <span className="block text-[10px] font-sans text-[#F3F0E8] font-bold uppercase tracking-[0.14em]">
                TRUSTED BY FANS
              </span>
              <span className="block text-[9.5px] font-sans text-[#9B9992] tracking-wider uppercase">
                100% ORIGINAL
              </span>
            </div>
          </div>

          {/* Right Micro Technical Archive Spec (Subtle Pedigree Tag) */}
          <div className="hidden md:flex items-center gap-2 text-right opacity-35">
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#9B9992] uppercase">
              ARCHIVAL SPEC // POR-2026-HM
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};


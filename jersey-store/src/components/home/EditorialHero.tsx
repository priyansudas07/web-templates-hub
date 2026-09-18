import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DustParticles } from '../common/DustParticles';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, Scan } from 'lucide-react';

interface Hotspot {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  tech: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'collar',
    number: '01',
    label: 'COLLAR',
    title: 'DRI-FIT ADV HYBRID RIB',
    description: 'Precision-engineered ergonomic collar with dual-color green & black tipping and zero-abrasion seam bonding.',
    tech: 'BONDED RIBBED KNIT',
  },
  {
    id: 'crest',
    number: '02',
    label: 'CREST',
    title: 'FEDERAÇÃO PORTUGUESA SHIELD',
    description: 'High-definition dimensional heat-applied crest with micro-embossed golden cross and authentic match-spec backing.',
    tech: 'DIMENSIONAL 3D SILICONE',
  },
  {
    id: 'fabric',
    number: '03',
    label: 'FABRIC',
    title: 'HEAT-MAPPED JACQUARD WEAVE',
    description: 'Generative moisture-wicking open-hole knit pattern mapped directly to athlete sweat data for optimal ventilation.',
    tech: '100% RECYCLED POLYESTER',
  },
];

const KIT_VIEWS = [
  {
    id: 'front',
    label: 'FRONT',
    num: '01',
    image: '/kits/portugal-front.png',
    tag: 'MATCH EDITION FRONT',
    isCutout: true,
  },
  {
    id: 'back',
    label: 'BACK',
    num: '02',
    image: '/kits/portugal-back.png',
    tag: 'AUTHENTIC REAR MATCH EDITION',
    isCutout: true,
  },
  {
    id: 'crest',
    label: 'CREST',
    num: '03',
    image: '/kits/portugal-crest.jpg',
    tag: 'FPF EMBROIDERED SHIELD',
    isCutout: false,
  },
  {
    id: 'details',
    label: 'DETAILS',
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
  const [isScanning, setIsScanning] = useState(false);

  // Parallax motion values
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

  const triggerLaserScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1200);
  };

  const currentView = KIT_VIEWS[activeViewIndex];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] bg-[#070707] text-[#F3F0E8] overflow-hidden flex flex-col justify-between pt-3 pb-3 select-none border-b border-[#292927]/60"
    >
      {/* Authentic High-Res Pure Black Studio Backdrop with 07 Watermark & Drapery */}
      <div 
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url('/hero-backdrop-07.png')` }}
      />
      
      {/* Subtle Crimson Studio Spotlight behind Center-Right Jersey */}
      <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3261E]/18 via-transparent to-transparent blur-3xl pointer-events-none z-0" />
      
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
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <span className="text-[#E3261E] font-bold">01</span>
              <span className="text-[#9B9992]">/ FOOTBALL</span>
            </div>

            {/* Main Editorial Campaign Headline */}
            <div className="space-y-0.5">
              <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.2rem] font-display font-black uppercase tracking-tight leading-[0.85] text-[#F3F0E8]">
                THE GAME <br />
                <span className="text-white">NEVER STOPS.</span>
              </h1>
            </div>

            {/* Product Meta: Strikethrough Year & Model */}
            <div className="space-y-0.5 font-mono text-xs sm:text-sm tracking-wider uppercase">
              <div className="flex items-center gap-2 text-[#9B9992]">
                <span>PORTUGAL HOME</span>
                <span className="line-through decoration-[#E3261E] decoration-2 text-stone-500">2025</span>
              </div>
              <div className="text-[#F3F0E8] font-bold tracking-widest text-sm sm:text-base">
                2025/26
              </div>
            </div>

            {/* Pricing Line with Red Dash Accent */}
            <div className="flex items-center gap-3 pt-0.5">
              <div className="w-5 h-[2px] bg-[#E3261E]" />
              <span className="text-2xl sm:text-3xl font-mono font-bold text-[#F3F0E8] tracking-tight">
                ₹1,499
              </span>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-1 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Explore Collection Button */}
              <Link
                to="/collection"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#E3261E] hover:bg-[#c81e17] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(227,38,30,0.5)] hover:shadow-[0_0_35px_rgba(227,38,30,0.75)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <span>EXPLORE COLLECTION</span>
              </Link>

              {/* User-Requested WhatsApp Concierge Button (.button2) */}
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="button2 py-2 px-4"
                aria-label="Contact Concierge on WhatsApp"
              >
                <div className="flex flex-col text-left leading-tight pr-2">
                  <span className="text-[10px] text-[#9B9992] font-mono tracking-widest">WHATSAPP</span>
                  <span className="text-xs font-mono font-bold text-white tracking-wider">CONCIERGE</span>
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
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:translate-x-8 xl:translate-x-12">
            
            {/* Parallax 3D Container for Jersey Centerpiece */}
            <motion.div
              style={{
                rotateX: jerseyRotateX,
                rotateY: jerseyRotateY,
                x: jerseyTranslateX,
                y: jerseyTranslateY,
                transformStyle: 'preserve-3d',
              }}
              className={`relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[620px] xl:max-w-[660px] flex items-center justify-center z-10 scale-110 lg:scale-[1.18] transition-transform duration-500 ease-out ${
                activeViewIndex === 0
                  ? 'translate-y-9 sm:translate-y-11 lg:translate-y-10'
                  : '-translate-y-3 sm:-translate-y-4 lg:-translate-y-2'
              }`}
            >
              {/* High-Resolution Jersey Image or Macro Detail View */}
              <div className="relative w-full aspect-[4/4.3] flex items-center justify-center">
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
                      <div className="w-full h-full p-2 bg-[#121211] border border-[#292927] rounded-sm overflow-hidden shadow-2xl relative group">
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

                {/* Laser Scanning Sweep Line Effect */}
                {isScanning && (
                  <motion.div
                    initial={{ top: '0%', opacity: 0 }}
                    animate={{ top: ['0%', '100%', '0%'], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    className="absolute inset-x-0 h-[2px] bg-[#E3261E] shadow-[0_0_15px_#E3261E,0_0_30px_#E3261E] pointer-events-none z-30 flex items-center justify-between px-3"
                  >
                    <span className="text-[8px] font-mono text-[#E3261E] bg-black/80 px-1 py-0.5 border border-[#E3261E]">LASER SCANNING FABRIC</span>
                    <span className="text-[8px] font-mono text-[#E3261E] bg-black/80 px-1 py-0.5 border border-[#E3261E]">AUTHENTICATED 100%</span>
                  </motion.div>
                )}

                {/* Interactive Hotspots with Leader Lines (Visible on FRONT view) */}
                {activeViewIndex === 0 && (
                  <div className="absolute inset-0 pointer-events-none z-20">
                    {/* Hotspot 01: Collar Callout (Top Center-Left) */}
                    <div
                      className="absolute top-[8%] left-[32%] pointer-events-auto cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'collar' ? null : HOTSPOTS[0])}
                    >
                      <div className="flex items-center gap-1.5 bg-[#0B0B0A]/95 backdrop-blur-md border border-[#292927] group-hover:border-[#E3261E] px-2 py-0.5 rounded-full transition-all duration-300 shadow-xl">
                        <span className="w-4 h-4 rounded-full bg-[#151514] border border-[#292927] text-[9px] font-mono font-bold text-white flex items-center justify-center group-hover:bg-[#E3261E] group-hover:border-[#E3261E] transition-colors">
                          01
                        </span>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#F3F0E8] uppercase pr-1">
                          COLLAR
                        </span>
                      </div>
                      <div className="w-[1px] h-3.5 bg-gradient-to-b from-[#9B9992]/60 to-transparent mx-auto" />
                    </div>

                    {/* Hotspot 02: Crest Callout (Right Upper Chest) */}
                    <div
                      className="absolute top-[32%] right-[0%] sm:right-[3%] pointer-events-auto cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'crest' ? null : HOTSPOTS[1])}
                    >
                      <div className="flex items-center gap-1.5 bg-[#0B0B0A]/95 backdrop-blur-md border border-[#292927] group-hover:border-[#E3261E] px-2 py-0.5 rounded-full transition-all duration-300 shadow-xl">
                        <span className="w-4 h-4 rounded-full bg-[#151514] border border-[#292927] text-[9px] font-mono font-bold text-white flex items-center justify-center group-hover:bg-[#E3261E] group-hover:border-[#E3261E] transition-colors">
                          02
                        </span>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#F3F0E8] uppercase pr-1">
                          CREST
                        </span>
                      </div>
                      <div className="w-5 h-[1px] bg-gradient-to-l from-[#9B9992]/60 to-transparent -translate-x-2.5 -translate-y-2" />
                    </div>

                    {/* Hotspot 03: Fabric Callout (Lower Torso) */}
                    <div
                      className="absolute top-[62%] right-[6%] sm:right-[8%] pointer-events-auto cursor-pointer group"
                      onClick={() => setActiveHotspot(activeHotspot?.id === 'fabric' ? null : HOTSPOTS[2])}
                    >
                      <div className="flex items-center gap-1.5 bg-[#0B0B0A]/95 backdrop-blur-md border border-[#292927] group-hover:border-[#E3261E] px-2 py-0.5 rounded-full transition-all duration-300 shadow-xl">
                        <span className="w-4 h-4 rounded-full bg-[#151514] border border-[#292927] text-[9px] font-mono font-bold text-white flex items-center justify-center group-hover:bg-[#E3261E] group-hover:border-[#E3261E] transition-colors">
                          03
                        </span>
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#F3F0E8] uppercase pr-1">
                          FABRIC
                        </span>
                      </div>
                      <div className="w-5 h-[1px] bg-gradient-to-l from-[#9B9992]/60 to-transparent -translate-x-2.5 -translate-y-2" />
                    </div>
                  </div>
                )}

                {/* Hotspot Spec Modal / Popover */}
                <AnimatePresence>
                  {activeHotspot && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      className="absolute bottom-1 inset-x-2 bg-[#0E0E0D]/95 backdrop-blur-md border border-[#E3261E]/70 p-3 rounded-sm shadow-2xl z-40 text-left"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono font-bold bg-[#E3261E] text-white px-1.5 py-0.5 rounded-xs">
                            {activeHotspot.number} // {activeHotspot.label}
                          </span>
                          <span className="text-[9px] font-mono text-[#9B9992]">{activeHotspot.tech}</span>
                        </div>
                        <button
                          onClick={() => setActiveHotspot(null)}
                          className="text-[#9B9992] hover:text-white text-xs font-mono px-1"
                        >
                          ✕
                        </button>
                      </div>
                      <h4 className="text-xs font-mono font-bold text-white uppercase">{activeHotspot.title}</h4>
                      <p className="text-[10px] text-[#9B9992] leading-relaxed mt-0.5">{activeHotspot.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          </div>

          {/* ============================================================
              RIGHT COLUMN: Kit Inspector Angle Thumbnails & Specs
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-between space-y-2.5 lg:pl-6 z-20"
          >
            {/* Kit Inspector Header & Counter */}
            <div className="flex items-center justify-between border-b border-[#292927] pb-1 text-[11px] font-mono">
              <span className="text-[#F3F0E8] font-bold tracking-widest uppercase">KIT INSPECTOR</span>
              <span className="text-[#9B9992] tracking-wider">
                0{activeViewIndex + 1} / 0{KIT_VIEWS.length}
              </span>
            </div>

            {/* Vertical Angle Thumbnails Selector */}
            <div className="space-y-1.5">
              {KIT_VIEWS.map((view, index) => {
                const isActive = index === activeViewIndex;
                return (
                  <button
                    key={view.id}
                    onClick={() => {
                      setActiveViewIndex(index);
                      setActiveHotspot(null);
                      triggerLaserScan();
                    }}
                    className={`w-full flex items-center justify-between p-1 transition-all duration-300 text-left rounded-sm group cursor-pointer border ${
                      isActive
                        ? 'bg-[#151514] border-[#E3261E] shadow-[0_0_12px_rgba(227,38,30,0.25)]'
                        : 'bg-[#0E0E0D]/80 border-[#292927] hover:border-[#9B9992]/60 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {/* Thumbnail Box */}
                      <div
                        className={`w-10 h-10 shrink-0 bg-[#070707] flex items-center justify-center overflow-hidden rounded-xs border ${
                          isActive ? 'border-[#E3261E]' : 'border-[#292927]'
                        }`}
                      >
                        <img
                          src={view.image}
                          alt={view.label}
                          className={`w-full h-full object-contain p-0.5 filter ${
                            isActive ? 'contrast-115 scale-105' : 'contrast-95 group-hover:scale-105'
                          } transition-transform duration-300`}
                        />
                      </div>

                      {/* View Label */}
                      <span className={`text-[11px] font-mono font-bold tracking-wider uppercase ${
                        isActive ? 'text-[#F3F0E8]' : 'text-[#9B9992] group-hover:text-[#F3F0E8]'
                      }`}>
                        {view.label}
                      </span>
                    </div>

                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E] mr-1.5 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Kit Metadata Card */}
            <div className="p-2.5 bg-[#0E0E0D]/90 border border-[#292927] space-y-0.5 font-mono text-[10px] text-left">
              <div className="text-[#9B9992]">
                <span className="text-[#F3F0E8] font-bold">KIT 001</span>
              </div>
              <div className="text-[#9B9992]">
                <span className="text-[#F3F0E8]">PORTUGAL</span>
              </div>
              <div className="text-[#9B9992]">
                <span className="text-[#F3F0E8]">FOOTBALL</span>
              </div>
              <div className="text-[#9B9992]">
                <span className="text-[#E3261E] font-bold">2025/26</span>
              </div>
            </div>

            {/* Engineered Tag & Quick Scan Button */}
            <div className="text-left font-mono text-xs tracking-widest text-[#9B9992] flex items-center justify-between pt-0.5">
              <div>
                <span className="block text-[#F3F0E8] font-bold text-[10px]">ENGINEERED —</span>
                <span className="text-[9px] text-[#9B9992]">FOR MORE</span>
              </div>
              <button
                onClick={triggerLaserScan}
                className="flex items-center gap-1 text-[9px] text-[#E3261E] hover:text-white px-1.5 py-0.5 bg-[#151514] border border-[#292927] hover:border-[#E3261E] rounded-xs transition-colors"
                title="Run Laser Diagnostic Scan"
              >
                <Scan className="w-3 h-3" />
                <span>SCAN</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ============================================================
          BOTTOM SECTION: 3 Trust Badges & Backdrop Space
         ============================================================ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full pt-2 border-t border-[#292927]/40">
        
        {/* Bottom Trust Row & Space for Backdrop Slogan */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          
          {/* 3 Value Pillars */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left border-t sm:border-t-0 sm:border-l border-[#292927]/60 sm:pl-4">
            <div className="space-y-0">
              <span className="block text-[9px] font-mono text-[#F3F0E8] font-bold uppercase tracking-widest">
                PREMIUM QUALITY
              </span>
              <span className="block text-[9px] font-mono text-[#9B9992] uppercase">
                AUTHENTIC KITS
              </span>
            </div>

            <div className="space-y-0 border-t sm:border-t-0 border-[#292927]/40 pt-1 sm:pt-0">
              <span className="block text-[9px] font-mono text-[#F3F0E8] font-bold uppercase tracking-widest">
                GLOBAL SHIPPING
              </span>
              <span className="block text-[9px] font-mono text-[#9B9992] uppercase">
                WORLDWIDE DELIVERY
              </span>
            </div>

            <div className="space-y-0 border-t sm:border-t-0 border-[#292927]/40 pt-1 sm:pt-0">
              <span className="block text-[9px] font-mono text-[#F3F0E8] font-bold uppercase tracking-widest">
                TRUSTED BY FANS
              </span>
              <span className="block text-[9px] font-mono text-[#9B9992] uppercase">
                100% ORIGINAL
              </span>
            </div>
          </div>

          {/* Bottom Right Space Holder to allow backdrop slogan to shine through */}
          <div className="md:col-span-4 text-right flex justify-end pointer-events-none select-none">
            <div className="h-6 w-36" />
          </div>

        </div>

      </div>

    </section>
  );
};


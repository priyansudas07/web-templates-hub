import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { DustParticles } from '../common/DustParticles';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, MessageCircle } from 'lucide-react';
const KIT_VIEWS = [
  {
    id: 'front',
    label: 'Front View',
    num: '01',
    image: '/kits/portugal-front.png',
    thumbnail: '/kits/portugal-front.png',
    tag: 'MATCH EDITION FRONT',
    camera: { scale: 1, x: 0, y: 0 },
    isBack: false,
    specNote: null,
    specs: null,
  },
  {
    id: 'back',
    label: 'Back Profile',
    num: '02',
    image: '/kits/portugal-back.png',
    thumbnail: '/kits/portugal-back.png',
    tag: 'AUTHENTIC REAR MATCH EDITION',
    camera: { scale: 1, x: 0, y: 0 },
    isBack: true,
    specNote: null,
    specs: null,
  },
  {
    id: 'crest',
    label: 'Club Crest',
    num: '03',
    image: '/kits/portugal-front.png',
    thumbnail: '/kits/portugal-crest.jpg',
    tag: 'FPF EMBROIDERED CREST',
    camera: { scale: 3.0, x: -130, y: 150 },
    isBack: false,
    specNote: 'MAG: 3.0X // GOLD SHIELD EMBROIDERY',
    dossierTitle: 'FPF EMBROIDERED SHIELD',
    dossierDescription: 'Dimensional high-density gold bullion embroidery with heat-applied silicone backing for zero weight distortion.',
    specs: [
      { label: 'THREAD SPEC', value: '380 GSM High-Density' },
      { label: 'EMBLEM FINISH', value: '3D Gold Bullion Wire' },
      { label: 'APPLICATION', value: 'Laser Heat-Applied' },
      { label: 'AUTHENTICITY', value: 'Vault Certified Spec' },
    ],
  },
  {
    id: 'details',
    label: 'Fabric Weave',
    num: '04',
    image: '/kits/portugal-front.png',
    thumbnail: '/kits/portugal-details.jpg',
    tag: 'COLLAR & DRI-FIT ADV',
    camera: { scale: 2.9, x: -10, y: 300 },
    isBack: false,
    specNote: 'MAG: 2.9X // ENGINEERED COLLAR & KNIT',
    dossierTitle: 'DRI-FIT ADV JACQUARD',
    dossierDescription: 'Algorithmic body-mapped breathability weave with dual-tone archival ribbed collar construction.',
    specs: [
      { label: 'KNIT TECH', value: 'Dri-FIT ADV Jacquard' },
      { label: 'ZONED MAPPING', value: 'Targeted Breathability' },
      { label: 'COLLAR WEAVE', value: 'Dual-Tone Ribbed Trim' },
      { label: 'COMPOSITION', value: '100% Recycled Poly' },
    ],
  },
];

export const EditorialHero: React.FC = () => {
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit
  const [activeViewIndex, setActiveViewIndex] = useState(0);
  const [prevViewIndex, setPrevViewIndex] = useState(0);

  const handleSelectView = (index: number) => {
    setPrevViewIndex(activeViewIndex);
    setActiveViewIndex(index);
  };

  const spinDirection = activeViewIndex >= prevViewIndex ? 1 : -1;

  // Dynamic Parallax Motion Values for Hero Hover Interaction (Subtle, Buttery Luxury Physics)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 120 };
  const jerseyRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), springConfig);
  const jerseyRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);
  const jerseyTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const jerseyTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

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

      {/* 1. Extremely Faint Analog Film Grain Texture */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2] opacity-[0.025] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Slow Moving Ambient Background Gradient Drift */}
      <motion.div
        animate={{
          x: ['-3%', '3%', '-3%'],
          y: ['-2%', '2%', '-2%'],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 18,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute -inset-20 pointer-events-none z-0 opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 55% 50%, rgba(227,38,30,0.10) 0%, rgba(30,10,10,0.03) 50%, transparent 80%), radial-gradient(circle at 85% 25%, rgba(227,38,30,0.05) 0%, transparent 55%)`,
        }}
      />
      
      {/* 3. Subtle Breathing Red Atmospheric Studio Glow behind Jersey */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 7.5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-[56%] -translate-x-1/2 -translate-y-1/2 w-[680px] h-[540px] sm:w-[800px] sm:h-[620px] bg-[radial-gradient(ellipse_at_center,_rgba(227,38,30,0.11)_0%,_rgba(180,20,15,0.035)_48%,_transparent_74%)] blur-3xl pointer-events-none z-0"
      />
      
      {/* Floating Studio Dust Particles */}
      <DustParticles particleCount={35} />

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
              LEFT COLUMN: Dynamic Editorial Headline & Technical Dossier
             ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-center text-left z-20 relative"
          >
            {/* Soft Ambient Vignette Underlay to ensure crystal-clear text separation in Macro Zoom */}
            <div 
              className={`absolute -inset-x-6 -inset-y-8 bg-gradient-to-r from-[#070707]/95 via-[#070707]/75 to-transparent pointer-events-none transition-opacity duration-500 rounded-r-3xl -z-10 ${
                activeViewIndex >= 2 ? 'opacity-100' : 'opacity-0'
              }`} 
            />

            <AnimatePresence mode="wait">
              {activeViewIndex < 2 ? (
                <motion.div
                  key="campaign-headline"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Breadcrumb / Category Tag */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em]">
                    <span className="font-mono text-[#E3261E] font-bold">{currentView.num}</span>
                    <span className="font-sans font-semibold text-[#9B9992]/80">
                      / {activeViewIndex === 0 ? 'FOOTBALL' : 'PLAYER SPEC'}
                    </span>
                  </div>

                  {/* Art-Directed Editorial Campaign Headline with Staggered Entrance */}
                  <div className="space-y-1 sm:space-y-1.5 overflow-hidden">
                    <motion.span
                      initial={{ opacity: 0, y: 14, filter: 'blur(3px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                      className="block text-2xl sm:text-3xl lg:text-[2.5rem] xl:text-[3rem] font-display font-bold uppercase tracking-[0.06em] text-[#F3F0E8]/80 leading-none"
                    >
                      THE GAME
                    </motion.span>
                    <h1 className="text-5xl sm:text-7xl lg:text-[5.4rem] xl:text-[6.3rem] font-display font-black uppercase tracking-tight leading-[0.82] text-[#F3F0E8] flex flex-wrap items-baseline gap-x-3.5">
                      <motion.span
                        initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block"
                      >
                        NEVER
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: 22, scale: 0.94, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 0.55, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block text-[#E3261E]"
                      >
                        STOPS.
                      </motion.span>
                    </h1>
                  </div>

                  {/* Product Meta: Official Release Spec */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-sans text-[10.5px] tracking-[0.26em] uppercase font-semibold text-[#9B9992]">
                      <span>OFFICIAL MATCH ISSUE</span>
                      <span className="text-white/20">•</span>
                      <span className="text-[#E3261E]">2026 WORLD CUP</span>
                    </div>
                    <div className="text-[#F3F0E8] font-sans font-bold tracking-[0.16em] text-sm sm:text-base uppercase">
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
                    {/* 50% Clean Label (No Box) */}
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#E3261E] tracking-wider">
                      50%
                    </span>
                  </div>

                  {/* Action Button: Focused Primary CTA */}
                  <div className="pt-1 flex items-center">
                    <Link
                      to="/collection"
                      className="group h-12 inline-flex items-center justify-center gap-3 px-8 bg-[#E3261E] hover:bg-[#c91e17] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-all duration-150 ease-out rounded-xs hover:shadow-[0_4px_24px_rgba(227,38,30,0.50)] active:scale-[0.98]"
                    >
                      <span>EXPLORE COLLECTION</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-150 ease-out group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`dossier-${currentView.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 sm:space-y-3.5"
                >
                  {/* Dossier Header */}
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em]">
                    <span className="font-mono text-[#E3261E] font-bold">{currentView.num}</span>
                    <span className="font-sans font-semibold text-[#9B9992]/80">/ ARCHIVAL SPECIFICATION</span>
                  </div>

                  {/* Dossier Title & Description */}
                  <div className="space-y-1 max-w-md">
                    <h2 className="text-2xl sm:text-3xl lg:text-[2.35rem] font-display font-normal uppercase tracking-[0.05em] text-[#F3F0E8] leading-[1.02]">
                      {currentView.dossierTitle}
                    </h2>
                    <p className="text-xs sm:text-[12.5px] text-[#9B9992] font-sans font-normal leading-relaxed">
                      {currentView.dossierDescription}
                    </p>
                  </div>

                  {/* Open 2x2 Technical Blueprint Matrix with Center Crosshair (+) */}
                  <div className="relative max-w-md my-1.5 border-y border-white/[0.08] py-1">
                    {/* Center Crosshair '+' Mark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-4 h-4 flex items-center justify-center pointer-events-none text-white/40 font-mono text-[11px] select-none">
                      +
                    </div>

                    <div className="grid grid-cols-2">
                      {/* Top Left */}
                      {currentView.specs?.[0] && (
                        <div className="pr-3.5 pb-2.5 border-r border-b border-white/[0.08]">
                          <span className="text-[8.5px] font-mono uppercase tracking-[0.22em] text-[#E3261E] block font-bold">
                            {currentView.specs[0].label}
                          </span>
                          <span className="text-[11px] sm:text-[12px] font-mono font-bold text-[#F3F0E8] uppercase tracking-wider block mt-0.5 truncate">
                            {currentView.specs[0].value}
                          </span>
                        </div>
                      )}

                      {/* Top Right */}
                      {currentView.specs?.[1] && (
                        <div className="pl-3.5 pb-2.5 border-b border-white/[0.08]">
                          <span className="text-[8.5px] font-mono uppercase tracking-[0.22em] text-[#E3261E] block font-bold">
                            {currentView.specs[1].label}
                          </span>
                          <span className="text-[11px] sm:text-[12px] font-mono font-bold text-[#F3F0E8] uppercase tracking-wider block mt-0.5 truncate">
                            {currentView.specs[1].value}
                          </span>
                        </div>
                      )}

                      {/* Bottom Left */}
                      {currentView.specs?.[2] && (
                        <div className="pr-3.5 pt-2.5 border-r border-white/[0.08]">
                          <span className="text-[8.5px] font-mono uppercase tracking-[0.22em] text-[#E3261E] block font-bold">
                            {currentView.specs[2].label}
                          </span>
                          <span className="text-[11px] sm:text-[12px] font-mono font-bold text-[#F3F0E8] uppercase tracking-wider block mt-0.5 truncate">
                            {currentView.specs[2].value}
                          </span>
                        </div>
                      )}

                      {/* Bottom Right */}
                      {currentView.specs?.[3] && (
                        <div className="pl-3.5 pt-2.5">
                          <span className="text-[8.5px] font-mono uppercase tracking-[0.22em] text-[#E3261E] block font-bold">
                            {currentView.specs[3].label}
                          </span>
                          <span className="text-[11px] sm:text-[12px] font-mono font-bold text-[#F3F0E8] uppercase tracking-wider block mt-0.5 truncate">
                            {currentView.specs[3].value}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Pricing Line */}
                  <div className="flex items-baseline gap-3 pt-0.5">
                    <div className="w-5 h-[2px] bg-[#E3261E] self-center" />
                    <span className="text-2xl sm:text-3xl font-sans font-extrabold text-[#F3F0E8] tracking-tight">
                      ₹1,499
                    </span>
                    <span className="text-xs sm:text-sm font-sans font-medium text-[#9B9992]/50 line-through decoration-[#E3261E]/70">
                      ₹2,999
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#E3261E] tracking-wider">
                      50%
                    </span>
                  </div>

                  {/* Action Buttons Row with Reset to Full View Option */}
                  <div className="pt-0.5 flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      to="/collection"
                      className="group h-11 inline-flex items-center justify-center gap-2.5 px-5 bg-[#E3261E] hover:bg-[#c91e17] text-white font-sans font-bold text-xs uppercase tracking-[0.18em] transition-none rounded-xs hover:shadow-[0_4px_18px_rgba(227,38,30,0.40)] active:scale-[0.98]"
                    >
                      <span>EXPLORE COLLECTION</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-75 ease-out group-hover:translate-x-1" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleSelectView(0)}
                      className="h-11 px-4 inline-flex items-center justify-center gap-1.5 border border-white/20 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/60 hover:text-white hover:shadow-[0_0_8px_1px_rgba(255,255,255,0.14)] text-[#F3F0E8] font-mono text-[10px] font-bold uppercase tracking-widest transition-none rounded-xs cursor-pointer active:scale-[0.98]"
                    >
                      <span>FULL VIEW</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ============================================================
              CENTER COLUMN: Unboxed Jersey (Dominant Scale & Placement)
             ============================================================ */}
          <div className="lg:col-span-4 relative flex items-center justify-center min-h-[480px] sm:min-h-[540px] lg:-translate-x-1 xl:-translate-x-2">
            
            {/* Jersey Centerpiece Container (Dominant Scale & Central Placement) */}
            <div
              className="relative w-full max-w-[540px] sm:max-w-[640px] lg:max-w-[700px] xl:max-w-[750px] flex items-center justify-center z-10 scale-[1.24] lg:scale-[1.38] xl:scale-[1.42] translate-y-9 sm:translate-y-11 lg:translate-y-10 transition-transform duration-500 ease-out"
            >
              {/* High-Resolution Jersey Image or Macro Detail View */}
              <div className="relative w-full aspect-[4/4.3] flex items-center justify-center">
                
                {/* 1. Very Slow Organic Floating Movement (~4-6px) */}
                <motion.div
                  animate={{
                    y: [-4.5, 4.5, -4.5],
                  }}
                  transition={{
                    duration: 6.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="relative w-full h-full flex items-center justify-center pointer-events-none"
                >
                  {/* 2. Extremely Subtle 3D Mouse Rotation & Parallax Layer */}
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
                    {/* Volumetric Theatrical Studio Backlight (Broad, Soft Atmosphere) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none">
                      {/* Core Ruby Spotlight Behind Torso */}
                      <div className="w-[340px] h-[380px] sm:w-[390px] sm:h-[430px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(227,38,30,0.26)_0%,_rgba(180,20,15,0.10)_48%,_transparent_72%)] blur-2xl transform-gpu" />
                      {/* Broad Atmospheric Haze */}
                      <div className="absolute w-[580px] h-[620px] sm:w-[680px] sm:h-[720px] rounded-full bg-[radial-gradient(circle,_rgba(227,38,30,0.10)_0%,_rgba(227,38,30,0.03)_52%,_transparent_75%)] blur-3xl transform-gpu" />
                    </div>

                    {/* Camera Zoom Stage (Smoothly zooms and translates camera to focal areas) */}
                    <motion.div
                      animate={{
                        scale: currentView.camera.scale,
                        x: currentView.camera.x,
                        y: currentView.camera.y,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 95,
                        damping: 22,
                        mass: 0.85,
                      }}
                      className="relative w-full h-full flex items-center justify-center [perspective:1400px]"
                    >
                      <AnimatePresence mode="wait" custom={spinDirection}>
                        <motion.div
                          key={currentView.isBack ? 'back' : 'front'}
                          custom={spinDirection}
                          initial={(dir: number) => ({
                            rotateY: dir * -85,
                            scale: 0.93,
                            opacity: 0,
                            filter: 'blur(3px)',
                          })}
                          animate={{
                            rotateY: 0,
                            scale: 1,
                            opacity: 1,
                            filter: 'blur(0px)',
                            transition: {
                              duration: 0.52,
                              ease: [0.16, 1, 0.3, 1],
                            },
                          }}
                          exit={(dir: number) => ({
                            rotateY: dir * 85,
                            scale: 0.93,
                            opacity: 0,
                            filter: 'blur(3px)',
                            transition: {
                              duration: 0.42,
                              ease: [0.16, 1, 0.3, 1],
                            },
                          })}
                          className="relative w-full h-full flex items-center justify-center group/jersey [transform-style:preserve-3d]"
                        >
                          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                            {/* Base High-Resolution Jersey Artwork */}
                            <img
                              src={currentView.image}
                              alt="Portugal 2025/26 Match Kit"
                              className="w-full h-full object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.92)] drop-shadow-[0_0_46px_rgba(227,38,30,0.22)] drop-shadow-[0_0_12px_rgba(255,255,255,0.04)] select-none pointer-events-auto cursor-pointer"
                            />

                            {/* Ultra-Subtle Specular Light Sheen Across the Fabric Surface */}
                            <div
                              className="absolute inset-0 pointer-events-none mix-blend-screen z-10 overflow-hidden"
                              style={{
                                maskImage: `url(${currentView.image})`,
                                WebkitMaskImage: `url(${currentView.image})`,
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                              }}
                            >
                              <motion.div
                                animate={{
                                  x: ['-140%', '160%'],
                                  opacity: [0, 0.08, 0.18, 0.08, 0],
                                }}
                                transition={{
                                  duration: 7.5,
                                  ease: [0.25, 0.1, 0.25, 1],
                                  repeat: Infinity,
                                  repeatDelay: 3.5,
                                }}
                                className="w-[35%] h-[200%] -top-1/2 absolute bg-gradient-to-r from-transparent via-white/18 to-transparent -rotate-[22deg] blur-xl"
                              />
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </motion.div>

                  </motion.div>
                </motion.div>

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
            className="lg:col-span-3 flex flex-col justify-center lg:pl-6 lg:translate-x-14 xl:translate-x-20 z-20"
          >
            {/* Minimalist Editorial Gallery Strip */}
            <div className="w-full max-w-[210px]">
              
              {/* Understated Editorial Header with Dynamic Progress Indicator */}
              <div className="pb-2.5 mb-3">
                <div className="flex items-center justify-between pb-1.5">
                  <span className="text-[9px] font-sans font-semibold tracking-[0.25em] text-[#9B9992]/70 uppercase">
                    PERSPECTIVES
                  </span>
                  <div className="flex items-center font-mono">
                    <span className="text-[9.5px] font-bold text-[#F3F0E8] transition-colors">
                      0{activeViewIndex + 1}
                    </span>
                    <span className="text-[8.5px] tracking-widest text-[#9B9992]/40">
                      &nbsp;/ 0{KIT_VIEWS.length}
                    </span>
                  </div>
                </div>

                {/* Progress Track & Animated Progress Line (25% -> 50% -> 75% -> 100%) */}
                <div className="w-full h-[1.5px] bg-white/[0.06] rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-[#E3261E] rounded-full shadow-[0_0_8px_rgba(227,38,30,0.8)]"
                    initial={false}
                    animate={{
                      width: `${((activeViewIndex + 1) / KIT_VIEWS.length) * 100}%`,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 24,
                    }}
                  />
                </div>
              </div>

              {/* View Items */}
              <div className="space-y-2.5">
                {KIT_VIEWS.map((view, index) => {
                  const isActive = index === activeViewIndex;
                  return (
                    <button
                      key={view.id}
                      onClick={() => handleSelectView(index)}
                      className={`relative w-full flex items-center justify-between px-2.5 py-2 rounded-xs transition-colors duration-300 text-left group cursor-pointer border ${
                        isActive
                          ? 'border-white/18 bg-white/[0.035] shadow-sm'
                          : 'border-transparent bg-transparent opacity-40 hover:opacity-100 hover:border-white/[0.06] hover:bg-white/[0.015]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {/* Smooth Scaling Minimalist Thumbnail */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.14 : 1,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 24,
                          }}
                          className={`w-7 h-7 shrink-0 rounded-2xs bg-[#0b0b0a] flex items-center justify-center overflow-hidden border transition-colors duration-300 ${
                            isActive
                              ? 'border-white/35 shadow-[0_0_12px_rgba(0,0,0,0.9)] ring-1 ring-[#E3261E]/40'
                              : 'border-white/[0.06] group-hover:border-white/15'
                          }`}
                        >
                          <motion.img
                            src={view.thumbnail || view.image}
                            alt={view.label}
                            animate={{
                              scale: isActive ? 1.08 : 1,
                            }}
                            transition={{
                              type: 'spring',
                              stiffness: 300,
                              damping: 24,
                            }}
                            className={`w-full h-full object-cover p-0.5 filter ${
                              isActive ? 'contrast-105 brightness-105' : 'contrast-90 group-hover:contrast-100'
                            }`}
                          />
                        </motion.div>

                        {/* Clean Single-Line Typography */}
                        <div className="flex items-center gap-1.5 text-left">
                          <span className={`text-[9.5px] font-mono transition-colors ${
                            isActive ? 'text-[#E3261E] font-bold' : 'text-[#9B9992]/60 group-hover:text-[#9B9992]'
                          }`}>
                            {view.num}
                          </span>
                          <span className={`text-[11px] font-sans uppercase tracking-[0.1em] transition-colors ${
                            isActive ? 'text-[#F3F0E8] font-bold' : 'text-[#9B9992] group-hover:text-[#F3F0E8] font-medium'
                          }`}>
                            {view.label}
                          </span>
                        </div>
                      </div>

                      {/* Active Red Indicator: Smoothly Slides across Selected Items */}
                      <div className="relative w-3.5 h-3.5 flex items-center justify-center pr-1">
                        {isActive && (
                          <motion.div
                            layoutId="activePerspectiveIndicator"
                            transition={{
                              type: 'spring',
                              stiffness: 320,
                              damping: 28,
                            }}
                            className="w-1.5 h-1.5 rounded-full bg-[#E3261E] shadow-[0_0_8px_#E3261E,0_0_2px_#ffffff]"
                          />
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
          BOTTOM SECTION: Understated Brand Assurance Modules & Archival Spec
         ============================================================ */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full pt-3 pb-1 border-t border-white/[0.04]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          
          {/* Brand Assurance Modules (More Spacing, Lighter Visual Weight) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-12 lg:gap-16 text-left">
            
            {/* Module 1: Quality Spec */}
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[#E3261E]/70" />
              <div className="flex items-baseline gap-1.5 font-sans">
                <span className="text-[10px] font-medium tracking-[0.22em] text-[#F3F0E8]/75 uppercase">
                  MATCH ISSUE SPEC
                </span>
                <span className="text-[8.5px] font-mono tracking-[0.16em] text-[#9B9992]/40 uppercase">
                  / AUTHENTIC
                </span>
              </div>
            </div>

            {/* Module 2: Logistics */}
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-baseline gap-1.5 font-sans">
                <span className="text-[10px] font-medium tracking-[0.22em] text-[#F3F0E8]/75 uppercase">
                  WORLDWIDE DISPATCH
                </span>
                <span className="text-[8.5px] font-mono tracking-[0.16em] text-[#9B9992]/40 uppercase">
                  / TRACKED
                </span>
              </div>
            </div>

            {/* Module 3: Verification */}
            <div className="flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-baseline gap-1.5 font-sans">
                <span className="text-[10px] font-medium tracking-[0.22em] text-[#F3F0E8]/75 uppercase">
                  VAULT VERIFIED
                </span>
                <span className="text-[8.5px] font-mono tracking-[0.16em] text-[#9B9992]/40 uppercase">
                  / 100% OFFICIAL
                </span>
              </div>
            </div>

          </div>

          {/* Right Micro Technical Archive Spec (Subtle Pedigree Tag) */}
          <div className="hidden md:flex items-center gap-2 text-right opacity-40">
            <span className="w-1 h-1 rounded-full bg-emerald-500/60" />
            <span className="text-[9px] font-mono tracking-[0.26em] text-[#9B9992] uppercase">
              ARCHIVAL SPEC // POR-2026-HM
            </span>
          </div>

        </div>
      </div>

    </section>
  );
};


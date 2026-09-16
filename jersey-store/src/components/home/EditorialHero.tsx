import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '../common/Button';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, MessageCircle, Activity, ChevronRight, Shield } from 'lucide-react';

const MATCH_TIMELINE = [
  { minute: "00'", label: "KICK OFF", detail: "MATCH START // SG VAULT" },
  { minute: "15'", label: "BUILD UP", detail: "HIGH PRESS & DYNAMICS" },
  { minute: "30'", label: "BREAKTHROUGH", detail: "TACTICAL ACCELERATION" },
  { minute: "45'", label: "HALF TIME", detail: "LOCKER ROOM REFOCUS" },
  { minute: "60'", label: "INTENSITY", detail: "DRI-FIT ADV CLIMATE" },
  { minute: "75'", label: "PRESSURE", detail: "FULL PITCH DOMINANCE" },
  { minute: "90'", label: "MATCH WINNER", detail: "THE 90TH MINUTE GRAIL" },
];

export const EditorialHero: React.FC = () => {
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit
  const [activeMinuteIndex, setActiveMinuteIndex] = useState(6); // Default 90' active

  // Parallax motion tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springConfig = { damping: 25, stiffness: 150 };
  const jerseyRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const jerseyRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const jerseyTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const jerseyTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);
  
  const badgeTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const badgeTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden pt-6 pb-12 flex flex-col justify-between border-b border-[#292927]"
    >
      {/* Visual Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] lg:text-[32vw] font-display font-black text-[#131312] select-none pointer-events-none tracking-tighter leading-none z-0">
        90'
      </div>

      {/* Background Subtle Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#292927_1px,transparent_1px),linear-gradient(to_bottom,#292927_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

      {/* Top Editorial Ticker Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#292927] pb-4 text-xs font-mono text-[#9B9992] tracking-wider">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#E3261E] text-white font-bold rounded-sm">
              <Activity className="w-3 h-3 animate-pulse" />
              <span>LIVE CAMPAIGN</span>
            </span>
            <span className="text-[#F3F0E8] font-bold">KIT 001 / THE 90TH MINUTE</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>FOOTBALL / 2026</span>
            <span className="text-[#292927]">•</span>
            <span>SG / 001</span>
            <span className="text-[#292927]">•</span>
            <span>EDITION: STADIUM VAULT</span>
          </div>

          <div className="flex items-center gap-2 text-[#E3261E] font-bold">
            <span>[ MATCH TIME // 90:00 ]</span>
          </div>
        </div>
      </div>

      {/* Main Asymmetric Campaign Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Header Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151514] border border-[#292927] text-xs font-mono tracking-widest text-[#E3261E] uppercase rounded-sm">
              <Shield className="w-3.5 h-3.5 text-[#E3261E]" />
              <span>COLLECTION 01 // OFFICIAL ISSUE</span>
            </div>

            {/* Oversized Headline in Oswald */}
            <h1 className="text-6xl sm:text-8xl lg:text-[7.5rem] font-display font-bold uppercase tracking-tight leading-[0.9] text-[#F3F0E8]">
              THE GAME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E8] via-[#F3F0E8] to-[#9B9992] relative">
                NEVER STOPS.
              </span>
            </h1>

            {/* Editorial Paragraph */}
            <p className="text-[#9B9992] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-medium pt-2">
              Presented as a valuable piece of football culture. Engineered for peak athletic performance, collectible vault archival, and pure street culture.
            </p>

            {/* Primary Action Buttons */}
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

            {/* Quick Spec Metadata Row */}
            <div className="pt-6 border-t border-[#292927] grid grid-cols-3 gap-4 max-w-lg text-left">
              <div>
                <span className="block text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">CUT / FIT</span>
                <span className="text-sm font-mono font-bold text-[#F3F0E8]">ATHLETIC PRO</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">FABRIC TECH</span>
                <span className="text-sm font-mono font-bold text-[#F3F0E8]">DRI-FIT ADV</span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">AVAILABILITY</span>
                <span className="text-sm font-mono font-bold text-[#E3261E]">LIMITED DROP</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Jersey Showcase with Interactive Parallax */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div 
              style={{
                rotateX: jerseyRotateX,
                rotateY: jerseyRotateY,
                x: jerseyTranslateX,
                y: jerseyTranslateY,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md group cursor-pointer"
            >
              {/* Product Visual Container with Asymmetric Frame & Partial Crop */}
              <div className="relative bg-[#151514] border border-[#292927] p-3 shadow-2xl overflow-hidden rounded-sm group-hover:border-[#E3261E]/50 transition-colors duration-500">
                
                {/* Visual Label Banner */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#0B0B0A] border border-[#292927] mb-3 text-xs font-mono">
                  <span className="text-[#E3261E] font-bold uppercase tracking-wider">[ KIT 001 // SPOTLIGHT ]</span>
                  <span className="text-[#9B9992]">{spotlightProduct?.sport || 'FOOTBALL'}</span>
                </div>

                <Link to={`/collection/${spotlightProduct?.id || '1'}`} className="block relative aspect-[4/5] bg-[#0B0B0A] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85"
                    alt="Portugal 2026 Home Kit"
                    loading="eager"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                  />
                  
                  {/* Subtle Dark Gradient Overlay for Typography Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent opacity-80" />

                  {/* On-Image Product Callout */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[10px] font-mono text-[#E3261E] uppercase tracking-widest block mb-1">
                      NATIONAL TEAM ISSUE // 2026
                    </span>
                    <h3 className="text-2xl font-display font-bold text-[#F3F0E8] uppercase tracking-wide leading-tight">
                      {spotlightProduct?.name || 'Portugal 2026 Home Kit'}
                    </h3>
                  </div>
                </Link>

                {/* Card Footer Info */}
                <div className="p-4 bg-[#151514] border-t border-[#292927] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#9B9992] block uppercase tracking-wider">OFFICIAL PRICE</span>
                    <span className="text-xl font-mono font-bold text-[#F3F0E8]">₹{spotlightProduct?.price.toLocaleString('en-IN') || '4,999'}</span>
                  </div>
                  
                  <Link
                    to={`/collection/${spotlightProduct?.id || '1'}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#E3261E] hover:bg-[#c81e17] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-sm transition-colors"
                  >
                    <span>INSPECT KIT</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Floating Editorial Spec Callout Badges with Counter Parallax */}
              <motion.div 
                style={{
                  x: badgeTranslateX,
                  y: badgeTranslateY,
                }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[#0B0B0A]/95 border border-[#292927] backdrop-blur-md px-3.5 py-2 rounded-sm shadow-xl pointer-events-none hidden sm:block z-20"
              >
                <div className="text-[10px] font-mono text-[#E3261E] font-bold tracking-widest uppercase">
                  [ SPEC // MATCH EDITION ]
                </div>
                <div className="text-xs font-mono text-[#F3F0E8]">
                  DRI-FIT ADV FABRIC
                </div>
              </motion.div>

              <motion.div 
                style={{
                  x: badgeTranslateX,
                  y: badgeTranslateY,
                }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#0B0B0A]/95 border border-[#292927] backdrop-blur-md px-3.5 py-2 rounded-sm shadow-xl pointer-events-none hidden sm:block z-20"
              >
                <div className="text-[10px] font-mono text-[#9B9992] font-bold tracking-widest uppercase">
                  [ CREST // HEAT-APPLIED ]
                </div>
                <div className="text-xs font-mono text-[#E3261E] font-bold">
                  AUTHENTIC EMBLEM VAULT
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Match Timeline Motif */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="bg-[#151514] border border-[#292927] p-4 rounded-sm">
          
          {/* Timeline Header */}
          <div className="flex items-center justify-between text-xs font-mono text-[#9B9992] mb-3 pb-2 border-b border-[#292927]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E3261E] animate-ping" />
              <span className="text-[#F3F0E8] font-bold uppercase tracking-wider">MATCH TIMELINE PROGRESSION</span>
            </div>
            <div className="text-[#E3261E] font-bold">
              {MATCH_TIMELINE[activeMinuteIndex].minute} — {MATCH_TIMELINE[activeMinuteIndex].label}
            </div>
          </div>

          {/* Interactive Timeline Bar */}
          <div className="relative flex items-center justify-between gap-2 py-2 overflow-x-auto">
            
            {/* Connecting Track Line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#292927] z-0" />
            <div 
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#E3261E] z-0 transition-all duration-300" 
              style={{ width: `${(activeMinuteIndex / (MATCH_TIMELINE.length - 1)) * 100}%` }}
            />

            {/* Timeline Minute Markers */}
            {MATCH_TIMELINE.map((item, idx) => {
              const isActive = idx === activeMinuteIndex;
              const isPast = idx < activeMinuteIndex;
              return (
                <button
                  key={item.minute}
                  onClick={() => setActiveMinuteIndex(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-200 px-2`}
                >
                  <div className={`w-6 h-6 rounded-sm border flex items-center justify-center font-mono text-[10px] font-bold transition-all ${
                    isActive 
                      ? 'bg-[#E3261E] border-[#E3261E] text-white scale-110 shadow-lg shadow-[#E3261E]/30' 
                      : isPast
                        ? 'bg-[#151514] border-[#E3261E] text-[#E3261E]'
                        : 'bg-[#0B0B0A] border-[#292927] text-[#9B9992] group-hover:border-[#F3F0E8] group-hover:text-[#F3F0E8]'
                  }`}>
                    {item.minute.replace("'", "")}
                  </div>

                  <span className={`text-[10px] font-mono tracking-wider uppercase mt-1.5 whitespace-nowrap transition-colors ${
                    isActive ? 'text-[#E3261E] font-bold' : 'text-[#9B9992] group-hover:text-[#F3F0E8]'
                  }`}>
                    {item.minute}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Minute Detail Footer */}
          <div className="mt-3 pt-2 border-t border-[#292927] flex items-center justify-between text-[11px] font-mono text-[#9B9992]">
            <span>TACTICAL PHASE // {MATCH_TIMELINE[activeMinuteIndex].detail}</span>
            <span className="hidden sm:inline text-[#E3261E] font-bold">CLICK TIMELINE TO EXPLORE MATCH MOMENTS</span>
          </div>

        </div>
      </div>

    </section>
  );
};

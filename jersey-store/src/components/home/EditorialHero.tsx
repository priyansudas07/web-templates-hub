import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '../common/Button';
import { Jersey3DViewer } from '../common/Jersey3DViewer';
import { DustParticles } from '../common/DustParticles';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, MessageCircle, ChevronRight, Layers, Box } from 'lucide-react';

const KIT_ANGLES = [
  {
    id: 'front',
    label: 'FRONT',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1000&q=85',
    tag: 'MATCH EDITION FRONT',
    is3D: false
  },
  {
    id: 'back',
    label: 'BACK',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85',
    tag: 'CUSTOM NAMEPRINT BACK',
    is3D: false
  },
  {
    id: 'detail',
    label: 'CREST',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1000&q=85',
    tag: 'AUTHENTIC EMBLEM WEAVE',
    is3D: false
  },
  {
    id: '3d-model',
    label: '3D 360°',
    image: '',
    tag: '3D INTERACTIVE VAULT MODEL',
    is3D: true
  }
];

export const EditorialHero: React.FC = () => {
  const spotlightProduct = products[0]; // Portugal 2026 Home Kit
  const [activeAngleIndex, setActiveAngleIndex] = useState(0);

  // Parallax motion tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springConfig = { damping: 25, stiffness: 150 };
  const jerseyRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const jerseyRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const jerseyTranslateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const jerseyTranslateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

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

  const currentAngle = KIT_ANGLES[activeAngleIndex];

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[95vh] lg:min-h-screen -mt-20 pt-28 pb-16 lg:pb-24 bg-[#050505] text-[#F3F0E8] overflow-hidden flex flex-col justify-center border-b border-[#292927]"
    >
      {/* Real Photography Studio Backdrop Image (Darker Studio Paper & Shifted Frame) */}
      <div 
        className="absolute -top-24 inset-x-0 bottom-0 bg-[size:105%_100%] bg-[position:48%_center] bg-no-repeat opacity-95 pointer-events-none z-0 filter contrast-110 brightness-80 transform-gpu"
        style={{ backgroundImage: `url('/studio-backdrop.png')` }}
      />

      {/* Typography Legibility Gradient Mask (Darkens Left Side behind Headline) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/35 to-transparent pointer-events-none z-0" />

      {/* Bottom & Top Blends to Smoothly Integrate Stage into Navbar & Next Section */}
      <div className="absolute -top-24 inset-x-0 h-32 bg-gradient-to-b from-[#050505]/60 via-[#050505]/20 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none z-0" />

      {/* Unified Crimson Studio Spotlight Beam */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E3261E]/18 via-transparent to-transparent blur-3xl pointer-events-none z-0" />

      {/* Live Floating Studio Dust Particles */}
      <DustParticles particleCount={55} />

      {/* Main Asymmetric Campaign Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 lg:space-y-6 text-left lg:pl-6 xl:pl-8"
          >
            {/* Responsive Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] font-display font-bold uppercase tracking-tight leading-[0.93] text-[#F3F0E8]">
              THE GAME <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3F0E8] via-[#F3F0E8] to-[#9B9992] relative">
                NEVER STOPS.
              </span>
            </h1>

            {/* Editorial Paragraph */}
            <p className="text-[#9B9992] text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-sans font-medium pt-0.5">
              Presented as a valuable piece of football culture. Engineered for peak athletic performance, collectible vault archival, and pure street culture.
            </p>

            {/* Primary Action Buttons Group with Crimson Neon Backlight Glow */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              
              {/* Crimson Glowing CTA Wrapper */}
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-[#E3261E] rounded-sm blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:blur-2xl animate-pulse" />
                <Button
                  href="/collection"
                  variant="primary"
                  size="lg"
                  className="relative w-full sm:w-auto justify-center bg-[#E3261E] hover:bg-[#d01f17] text-white border-0 font-mono font-bold tracking-wider uppercase shadow-[0_0_35px_rgba(227,38,30,0.6)]"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Collection
                </Button>
              </div>

              {/* User-Requested Liquid Wave Fill WhatsApp Button (.button2) */}
              <a
                href={createGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="button2 sm:ml-2"
                aria-label="Contact Concierge on WhatsApp"
              >
                <span>WhatsApp Concierge</span>
                <svg viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            {/* Quick Spec Metadata Row */}
            <div className="pt-6 border-t border-[#292927] grid grid-cols-3 gap-2 sm:gap-4 max-w-lg text-left">
              <div>
                <span className="block text-[9px] sm:text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">CUT / FIT</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F3F0E8]">ATHLETIC PRO</span>
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">FABRIC TECH</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F3F0E8]">DRI-FIT ADV</span>
              </div>
              <div>
                <span className="block text-[9px] sm:text-[10px] font-mono text-[#9B9992] uppercase tracking-wider">AVAILABILITY</span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#E3261E]">LIMITED DROP</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Jersey Showcase with Interactive Parallax & Angle Switcher */}
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
              className="relative w-full max-w-[380px] sm:max-w-[410px] group cursor-pointer"
            >
              {/* Product Visual Container with Asymmetric Frame */}
              <div className="relative bg-[#151514] border border-[#292927] p-2.5 sm:p-3 shadow-2xl overflow-hidden rounded-sm group-hover:border-[#E3261E]/50 transition-colors duration-500">
                
                {/* Top Visual Header & Angle Switcher Controls */}
                <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#0B0B0A] border border-[#292927] mb-2.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#E3261E] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>[ SPOTLIGHT ]</span>
                  </div>

                  {/* Interactive Angle Switcher Tabs */}
                  <div className="flex items-center gap-1">
                    {KIT_ANGLES.map((angle, index) => {
                      const isActive = index === activeAngleIndex;
                      return (
                        <button
                          key={angle.id}
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveAngleIndex(index);
                          }}
                          className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase transition-all rounded-sm flex items-center gap-1 ${
                            isActive
                              ? 'bg-[#E3261E] text-white'
                              : 'bg-[#151514] text-[#9B9992] hover:text-[#F3F0E8] border border-[#292927]'
                          }`}
                        >
                          {angle.is3D && <Box className="w-2.5 h-2.5" />}
                          <span>{angle.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Dynamic Image or 3D Model Display */}
                {currentAngle.is3D ? (
                  <div className="aspect-[4/4.3] bg-[#0B0B0A] overflow-hidden rounded-sm relative">
                    <Jersey3DViewer modelUrl="/jersey.glb" altText="3D Jersey Model" showControls={true} />
                  </div>
                ) : (
                  <Link to={`/collection/${spotlightProduct?.id || '1'}`} className="block relative aspect-[4/4.3] bg-[#0B0B0A] overflow-hidden group">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentAngle.id}
                        src={currentAngle.image}
                        alt={spotlightProduct.name}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1.04 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="w-full h-full object-cover object-center filter contrast-105"
                      />
                    </AnimatePresence>
                    
                    {/* Subtle Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0A] via-transparent to-transparent opacity-80" />

                    {/* Dynamic Angle Callout Tag */}
                    <div className="absolute top-3 right-3 bg-[#0B0B0A]/90 border border-[#292927] px-2.5 py-1 text-[10px] font-mono font-bold text-[#E3261E] tracking-widest rounded-sm">
                      {currentAngle.tag}
                    </div>

                    {/* On-Image Product Title */}
                    <div className="absolute bottom-4 left-4 right-4 text-left">
                      <span className="text-[10px] font-mono text-[#E3261E] uppercase tracking-widest block mb-1">
                        NATIONAL TEAM ISSUE // 2026
                      </span>
                      <h3 className="text-2xl font-display font-bold text-[#F3F0E8] uppercase tracking-wide leading-tight">
                        {spotlightProduct?.name || 'Portugal 2026 Home Kit'}
                      </h3>
                    </div>
                  </Link>
                )}

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

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

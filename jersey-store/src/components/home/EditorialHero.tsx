import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '../common/Button';
import { products } from '../../data/products';
import { createGeneralWhatsAppLink } from '../../utils/whatsapp';
import { ArrowRight, MessageCircle, ChevronRight, Layers } from 'lucide-react';

const KIT_ANGLES = [
  {
    id: 'front',
    label: '01 // FRONT',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=85',
    tag: 'MATCH EDITION FRONT'
  },
  {
    id: 'back',
    label: '02 // BACK',
    image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=1000&q=85',
    tag: 'CUSTOM NAMEPRINT BACK'
  },
  {
    id: 'detail',
    label: '03 // CREST',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85',
    tag: 'AUTHENTIC EMBLEM WEAVE'
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
      className="relative min-h-[80vh] bg-[#0B0B0A] text-[#F3F0E8] overflow-hidden pt-12 pb-16 flex flex-col justify-center border-b border-[#292927]"
    >
      {/* Background Subtle Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#292927_1px,transparent_1px),linear-gradient(to_bottom,#292927_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0" />

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
              className="relative w-full max-w-md group cursor-pointer"
            >
              {/* Product Visual Container with Asymmetric Frame */}
              <div className="relative bg-[#151514] border border-[#292927] p-3 shadow-2xl overflow-hidden rounded-sm group-hover:border-[#E3261E]/50 transition-colors duration-500">
                
                {/* Top Visual Header & Angle Switcher Controls */}
                <div className="flex items-center justify-between px-3 py-2 bg-[#0B0B0A] border border-[#292927] mb-3 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#E3261E] font-bold uppercase tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>[ KIT 001 SPOTLIGHT ]</span>
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
                          className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase transition-all rounded-sm ${
                            isActive
                              ? 'bg-[#E3261E] text-white'
                              : 'bg-[#151514] text-[#9B9992] hover:text-[#F3F0E8] border border-[#292927]'
                          }`}
                        >
                          {angle.id.toUpperCase()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Main Dynamic Image Display */}
                <Link to={`/collection/${spotlightProduct?.id || '1'}`} className="block relative aspect-[4/5] bg-[#0B0B0A] overflow-hidden group">
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

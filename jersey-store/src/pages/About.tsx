import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';

export const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Sports Gear';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      <SectionHeading
        tag="AUTHENTIC KIT VAULT"
        title="ABOUT SPORTS GEAR"
        subtitle="Bringing football culture, authentic match kits, and premium sportswear directly to passionate fans."
      />

      {/* Main Brand Story & Principles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-[#9B9992] leading-relaxed text-sm sm:text-base">
          <p className="text-[#F3F0E8] font-extrabold text-lg sm:text-xl leading-snug">
            At Sports Gear, we believe a jersey is more than fabric—it is history, culture, and pride.
          </p>

          <p>
            Whether you are searching for the latest match-edition football kit, a timeless retro grail from World Cup history, an official cricket jersey, or an iconic NBA hardwood swingman, Sports Gear provides a curated catalog built for quality and detail.
          </p>

          <p>
            We operate as a direct showcase catalog: browse our collection online, select your exact kit and size, and connect directly with our store team on WhatsApp for instant confirmation, sizing guidance, and local delivery arrangements.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-sm bg-[#151514] border border-[#292927] space-y-2">
              <div className="flex items-center gap-2 text-[#E3261E] font-mono font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-[#E3261E]" />
                <span>Authentic Quality</span>
              </div>
              <p className="text-xs text-[#9B9992]">
                Crafted with high-grade moisture-wicking fabrics and durable badge details.
              </p>
            </div>

            <div className="p-5 rounded-sm bg-[#151514] border border-[#292927] space-y-2">
              <div className="flex items-center gap-2 text-[#25D366] font-mono font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                <span>Zero Friction</span>
              </div>
              <p className="text-xs text-[#9B9992]">
                No passwords, credit cards, or accounts required. Direct WhatsApp order inquiries.
              </p>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <Button
              href="/collection"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Collection
            </Button>
          </div>
        </div>

        {/* Visual Callout Card */}
        <div className="lg:col-span-5 bg-[#151514] p-8 rounded-sm border border-[#292927] space-y-6 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-sm bg-[#E3261E] flex items-center justify-center font-black text-[#F3F0E8] text-2xl mx-auto shadow-sm">
            SG
          </div>
          <h3 className="text-2xl font-black text-[#F3F0E8] uppercase tracking-tight">
            SPORTING DISCIPLINES COVERED
          </h3>
          <div className="space-y-3 text-sm text-[#F3F0E8] font-semibold">
            <div className="p-3.5 rounded-sm bg-[#0B0B0A] border border-[#292927] flex items-center justify-center gap-2 text-xs font-mono">
              <span>⚽</span> <span>Football (Premier League, La Liga, International)</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#0B0B0A] border border-[#292927] flex items-center justify-center gap-2 text-xs font-mono">
              <span>🏏</span> <span>Cricket (National T20, IPL Franchises)</span>
            </div>
            <div className="p-3.5 rounded-sm bg-[#0B0B0A] border border-[#292927] flex items-center justify-center gap-2 text-xs font-mono">
              <span>🏀</span> <span>Basketball (NBA Hardwood Classics & Swingman)</span>
            </div>
          </div>

          <Button
            href={createGeneralWhatsAppLink()}
            isExternal
            variant="emerald"
            size="md"
            fullWidth
            icon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
          >
            Chat With Our Store Team
          </Button>
        </div>
      </div>

    </div>
  );
};

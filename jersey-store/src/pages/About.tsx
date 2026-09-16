import React from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { createGeneralWhatsAppLink } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      <SectionHeading
        tag="AUTHENTIC KIT VAULT"
        title="ABOUT SPORTS GEAR"
        subtitle="Bringing football culture, authentic match kits, and premium sportswear directly to passionate fans."
      />

      {/* Main Brand Story & Principles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p className="text-slate-100 font-bold text-lg">
            At Sports Gear, we believe a jersey is more than fabric—it is history, culture, and pride.
          </p>

          <p>
            Whether you are searching for the latest match-edition football kit, a timeless retro grail from World Cup history, an official cricket jersey, or an iconic NBA hardwood swingman, Sports Gear provides a curated catalog built for quality and detail.
          </p>

          <p>
            We operate as a direct showcase catalog: browse our collection online, select your exact kit and size, and connect directly with our store team on WhatsApp for instant confirmation, sizing guidance, and local delivery arrangements.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>Authentic Quality</span>
              </div>
              <p className="text-xs text-slate-400">
                Crafted with high-grade moisture-wicking fabrics and durable badge details.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1E293B] border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Zero Friction</span>
              </div>
              <p className="text-xs text-slate-400">
                No passwords, credit cards, or accounts required. Direct WhatsApp order inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Callout Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-[#1E293B] to-slate-900 p-8 rounded-3xl border border-slate-800 space-y-6 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center font-black text-white text-2xl mx-auto shadow-lg shadow-rose-950/50">
            SG
          </div>
          <h3 className="text-2xl font-extrabold text-slate-100 uppercase tracking-tight">
            SPORTING DISCIPLINES COVERED
          </h3>
          <div className="space-y-3 text-sm text-slate-300 font-semibold">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              ⚽ Football (Premier League, La Liga, International Kits)
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              🏏 Cricket (National T20, IPL Franchises)
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
              🏀 Basketball (NBA Hardwood Classics & City Editions)
            </div>
          </div>

          <a
            href={createGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat With Our Store Team</span>
          </a>
        </div>
      </div>

    </div>
  );
};

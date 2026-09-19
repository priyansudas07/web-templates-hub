import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Check, Sparkles } from 'lucide-react';

interface SourcingOption {
  id: string;
  label: string;
  prefillMessage: string;
}

const SOURCING_OPTIONS: SourcingOption[] = [
  {
    id: 'retro-grail',
    label: 'RETRO GRAIL SOURCING',
    prefillMessage: "Hi Sports Gear! I'm looking to source a specific retro/historical grail jersey."
  },
  {
    id: 'custom-nameset',
    label: 'PLAYER NAME-SET & BADGES',
    prefillMessage: "Hi Sports Gear! I'd like to inquire about official player name-sets, squad numbers, and tournament sleeve badges."
  },
  {
    id: 'sizing-fit',
    label: 'SIZING & FIT ADVICE',
    prefillMessage: "Hi Sports Gear! I need personal sizing and fit recommendations for a kit."
  },
  {
    id: 'sold-out',
    label: 'SOLD-OUT KIT RESTOCK',
    prefillMessage: "Hi Sports Gear! Can you check restock availability for a sold-out kit?"
  },
  {
    id: 'bespoke-bundle',
    label: 'COLLECTOR BUNDLE',
    prefillMessage: "Hi Sports Gear! I'm interested in sourcing a multi-kit collector bundle."
  }
];

export const ConciergeSourcingPass: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<SourcingOption>(SOURCING_OPTIONS[0]);

  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(selectedOption.prefillMessage)}`;

  return (
    <div className="relative bg-[#0E0E0D] border border-white/[0.08] rounded-sm shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
      
      {/* Top Archival Ticket Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E3261E] shadow-sm" />
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.22em] text-[#F3F0E8] uppercase">
            SPECIMEN PASS // BESPOKE SOURCING DESK
          </span>
        </div>

        {/* Live Curator Beacon */}
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#8E8C85]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wider uppercase">CURATORS ONLINE</span>
        </div>
      </div>

      {/* Main Content & Interactive Chips */}
      <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Headline & Subtext */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold uppercase tracking-tight text-[#F3F0E8] leading-tight">
            LOOKING FOR A SPECIFIC GRAIL OR CUSTOM SIZING?
          </h3>
          <p className="text-xs sm:text-sm text-[#8E8C85] font-sans leading-relaxed max-w-xl">
            Select an inquiry ticket below to instantly connect with our personal kit curators on WhatsApp with your exact request pre-filled.
          </p>

          {/* Interactive Request Chips */}
          <div className="pt-2">
            <span className="block text-[9.5px] font-mono uppercase tracking-[0.2em] text-[#8E8C85]/70 mb-2.5">
              SELECT SOURCING TOPIC:
            </span>
            <div className="flex flex-wrap gap-2">
              {SOURCING_OPTIONS.map((opt) => {
                const isSelected = selectedOption.id === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedOption(opt)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10.5px] font-mono tracking-wider uppercase transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#E3261E] text-[#F3F0E8] font-bold border border-[#E3261E] shadow-sm'
                        : 'bg-white/[0.03] text-[#8E8C85] hover:text-[#F3F0E8] hover:bg-white/[0.06] border border-white/[0.08]'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 text-white" />}
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic WhatsApp Action Ticket */}
        <div className="lg:col-span-5 bg-[#080807] border border-white/[0.08] p-6 rounded-sm space-y-4 shadow-xl">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[9.5px] font-mono text-[#E3261E] uppercase tracking-widest font-bold">
              <Sparkles className="w-3 h-3" />
              <span>PRE-FILLED INQUIRY TICKET</span>
            </div>
            <p className="text-xs font-mono text-[#F3F0E8] italic bg-white/[0.02] p-3 rounded-sm border border-white/[0.04]">
              "{selectedOption.prefillMessage}"
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between w-full px-5 py-3.5 rounded-sm bg-[#E3261E] hover:bg-[#c91e17] text-[#F3F0E8] text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 shadow-md active:scale-98"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-white" />
              <span>CONNECT ON WHATSAPP</span>
            </div>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <div className="flex items-center justify-between text-[9px] font-mono text-[#8E8C85]/60 uppercase tracking-wider pt-1">
            <span>AVG RESPONSE: &lt; 15 MINS</span>
            <span>DIRECT CURATOR DESK</span>
          </div>
        </div>

      </div>

    </div>
  );
};

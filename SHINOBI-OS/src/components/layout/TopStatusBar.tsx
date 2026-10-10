import React from 'react';
import { Shield, VolumeX, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/profile';
import type { RouteKey } from '@/types/navigation';

export interface TopStatusBarProps {
  currentRoute: RouteKey;
  onNavigate: (route: RouteKey) => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({ currentRoute, onNavigate }) => {
  return (
    <header
      role="banner"
      className="h-12 border-b border-[#1B2232] bg-[#07080C]/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between text-xs font-mono select-none z-30 shrink-0"
    >
      {/* Left: Identity & Village Affiliation */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onNavigate('terminal')}
          aria-label="Return to Terminal View"
          className="flex items-center gap-2 font-bold tracking-wider text-rose-500 hover:text-rose-400 transition-colors focus-visible:outline-2 focus-visible:outline-emerald-500 rounded px-1"
        >
          <Shield className="w-4 h-4 text-rose-500 animate-pulse" />
          <span>SHINOBI OS</span>
        </button>
        <span className="text-[#283347] hidden sm:inline">|</span>
        <span className="text-slate-400 hidden sm:inline">{profile.villageAffiliation}</span>
        <span className="text-[#283347] hidden md:inline">|</span>
        <span className="text-slate-500 hidden md:inline font-mono">CALLSIGN: {profile.callsign}</span>
      </div>

      {/* Right: Authentic Availability & Audio Status */}
      <div className="flex items-center gap-3 sm:gap-4 text-slate-400">
        <span className="text-emerald-400/80 font-mono text-[11px] hidden lg:inline px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          VIEW: #{currentRoute.toUpperCase()}
        </span>

        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span className="font-medium uppercase">
            {profile.availabilityStatus === 'available' ? 'OPERATIVE: AVAILABLE' : 'STATUS: COMMITTED'}
          </span>
        </div>

        <div
          title="Procedural Audio: Strictly Muted by Default"
          className="hidden sm:flex items-center gap-1.5 text-slate-500 text-[11px]"
        >
          <VolumeX className="w-3.5 h-3.5 text-slate-500" />
          <span>AUDIO: MUTED</span>
        </div>

        <span className="text-[#283347] hidden sm:inline">|</span>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="px-2.5 py-1 text-xs font-mono rounded bg-[#161D2D] hover:bg-[#1E2638] text-slate-200 border border-[#283347] transition-colors focus-visible:outline-2 focus-visible:outline-emerald-500"
        >
          COMM DISPATCH
        </button>
      </div>
    </header>
  );
};

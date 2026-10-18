import { VolumeX, CheckCircle2 } from 'lucide-react';
import { profile } from '@/data/profile';
import type { RouteKey } from '@/types/navigation';
import { HitaiAtePlate, KonohaSeal } from '@/components/ui/ShinobiIcons';

export interface TopStatusBarProps {
  currentRoute: RouteKey;
  onNavigate: (route: RouteKey) => void;
}

export const TopStatusBar: React.FC<TopStatusBarProps> = ({ currentRoute, onNavigate }) => {
  return (
    <header
      role="banner"
      className="h-12 border-b border-[#1B2232] bg-[#07080C]/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between text-xs font-mono select-none z-30 shrink-0 w-full"
    >
      {/* Left: Hitai-Ate (Forehead Protector) Metal Plate & Village Affiliation */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => onNavigate('terminal')}
          aria-label="Return to Terminal View"
          className="flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-emerald-500 rounded min-h-[44px]"
        >
          <HitaiAtePlate label="SHINOBI OS" sealColor="text-emerald-400" />
        </button>
        <span className="text-[#283347] hidden sm:inline">|</span>
        <span className="text-slate-300 font-medium hidden sm:inline tracking-wide">
          {profile.villageAffiliation}
        </span>
        <span className="text-[#283347] hidden md:inline">|</span>
        <span className="text-slate-500 hidden md:inline font-mono text-[11px]">
          CALLSIGN: <span className="text-emerald-400/90 font-semibold">{profile.callsign}</span>
        </span>
      </div>

      {/* Right: Authentic Availability & Audio Status & Dispatch */}
      <div className="flex items-center gap-2 sm:gap-4 text-slate-400">
        <span className="text-emerald-400 font-mono text-[11px] hidden lg:inline px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
          VIEW: #{currentRoute.toUpperCase()}
        </span>

        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] sm:text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="font-medium uppercase tracking-wider">
            <span className="hidden sm:inline">OPERATIVE: </span>
            {profile.availabilityStatus === 'available' ? 'AVAILABLE' : 'COMMITTED'}
          </span>
        </div>

        <div
          title="Procedural Audio: Strictly Muted by Default"
          className="hidden sm:flex items-center gap-1.5 text-slate-500 text-[11px]"
        >
          <VolumeX className="w-3.5 h-3.5 text-slate-500 shrink-0" />
          <span>AUDIO: MUTED</span>
        </div>

        <span className="text-[#283347] hidden sm:inline">|</span>

        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-gradient-to-r from-[#121824] to-[#182030] hover:from-[#161F2E] hover:to-[#1E293B] border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-300 font-mono text-xs font-semibold tracking-wider transition-all shadow-sm focus-visible:outline-2 focus-visible:outline-emerald-500 min-h-[44px]"
        >
          <KonohaSeal className="w-3.5 h-3.5 text-emerald-400" />
          <span>DISPATCH</span>
        </button>
      </div>
    </header>
  );
};

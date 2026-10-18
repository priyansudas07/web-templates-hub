import React, { useEffect } from 'react';
import {
  Terminal,
  History,
  FileText,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import type { RouteKey } from '@/types/navigation';
import { shouldIgnoreHotkey, getHotkeyRoute } from '@/utils/hotkeyGuard';
import { ScrollIcon, KunaiIcon, ChakraSpark, BoltHardware } from '@/components/ui/ShinobiIcons';

export interface TacticalDockProps {
  currentRoute: RouteKey;
  onNavigate: (route: RouteKey) => void;
}

const renderShinobiNavIcon = (routeKey: RouteKey, isActive: boolean) => {
  const iconClass = `w-4 h-4 transition-transform group-hover:scale-110 ${
    isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'
  }`;

  switch (routeKey) {
    case 'terminal':
      return <Terminal className={iconClass} />;
    case 'missions':
      return <ScrollIcon className={iconClass} />;
    case 'jutsu':
      return <ChakraSpark className={iconClass} />;
    case 'records':
      return <History className={iconClass} />;
    case 'resume':
      return <FileText className={iconClass} />;
    case 'contact':
      return <KunaiIcon className={iconClass} />;
    default:
      return <Terminal className={iconClass} />;
  }
};

export const TacticalDock: React.FC<TacticalDockProps> = ({ currentRoute, onNavigate }) => {
  // Global hotkeys Alt+1 through Alt+6 with input guarding
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (shouldIgnoreHotkey(e.target as HTMLElement | null)) {
        return;
      }

      const targetRoute = getHotkeyRoute(e);
      if (targetRoute) {
        e.preventDefault();
        onNavigate(targetRoute);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNavigate]);

  return (
    <nav
      role="navigation"
      aria-label="Tactical navigation dock"
      className="fixed bottom-0 left-0 right-0 z-30 flex justify-center p-2 sm:p-3 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))] pointer-events-none"
    >
      <div className="relative pointer-events-auto max-w-full overflow-x-auto no-scrollbar bg-gradient-to-r from-[#1C1510] via-[#0E1524] to-[#1C1510] border-2 border-[#2E231C] backdrop-blur-md rounded-2xl sm:rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_0_1px_rgba(65,48,36,0.5),0_0_20px_rgba(16,185,129,0.06)] px-2 sm:px-3 py-1.5 flex items-center gap-1 sm:gap-2">
        {/* Left scroll-case iron clasp & bolts */}
        <div className="hidden sm:flex flex-col gap-1 -ml-1 pr-1.5 border-r border-[#33251D]">
          <BoltHardware className="w-1.5 h-1.5" />
          <BoltHardware className="w-1.5 h-1.5" />
        </div>

        {siteConfig.navigationItems.map((item) => {
          const routeKey = item.routeHash.replace(/^#/, '') as RouteKey;
          const isActive = currentRoute === routeKey;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(routeKey)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`${item.label} view (${item.shortcutKey})`}
              className={`group relative min-h-[44px] min-w-[44px] px-2.5 sm:px-3 py-1.5 rounded-lg font-mono text-xs flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 transition-all focus-visible:outline-2 focus-visible:outline-emerald-500 ${
                isActive
                  ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-950/40 text-emerald-200 border border-emerald-400/50 shadow-sm shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-[#161D2D]/70 border border-transparent'
              }`}
            >
              {renderShinobiNavIcon(routeKey, isActive)}
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">
                {item.label}
              </span>

              {/* Hotkey Indicator */}
              <span
                className={`hidden md:inline-block text-[9px] px-1 py-0.2 rounded border ${
                  isActive
                    ? 'bg-emerald-500/25 text-emerald-200 border-emerald-500/40'
                    : 'bg-[#0E121B] text-slate-500 border-[#1B2232]'
                }`}
              >
                {item.shortcutKey}
              </span>

              {/* Active Bottom Chakra Pip */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
              )}
            </button>
          );
        })}

        {/* Right scroll-case iron clasp & bolts */}
        <div className="hidden sm:flex flex-col gap-1 -mr-1 pl-1.5 border-l border-[#33251D]">
          <BoltHardware className="w-1.5 h-1.5" />
          <BoltHardware className="w-1.5 h-1.5" />
        </div>
      </div>
    </nav>
  );
};

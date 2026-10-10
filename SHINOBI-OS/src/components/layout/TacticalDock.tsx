import React, { useEffect } from 'react';
import {
  Terminal,
  FolderGit2,
  Zap,
  History,
  FileText,
  Mail,
  type LucideIcon,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import type { RouteKey } from '@/types/navigation';
import { shouldIgnoreHotkey, getHotkeyRoute } from '@/utils/hotkeyGuard';

export interface TacticalDockProps {
  currentRoute: RouteKey;
  onNavigate: (route: RouteKey) => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Terminal,
  FolderGit2,
  Zap,
  History,
  FileText,
  Mail,
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
      className="fixed bottom-0 left-0 right-0 z-30 flex justify-center p-2 sm:p-3 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-full overflow-x-auto no-scrollbar bg-[#0B0E14]/95 border border-[#283347] backdrop-blur-md rounded-2xl sm:rounded-xl shadow-2xl px-2 py-1.5 flex items-center gap-1 sm:gap-2">
        {siteConfig.navigationItems.map((item) => {
          const Icon = ICON_MAP[item.iconName] || Terminal;
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
                  ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-100 hover:bg-[#161D2D] border border-transparent'
              }`}
            >
              <Icon
                className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                  isActive ? 'text-emerald-400' : 'text-slate-400 group-hover:text-slate-200'
                }`}
              />
              <span className="text-[11px] sm:text-xs font-medium tracking-wide">
                {item.label}
              </span>

              {/* Hotkey Indicator */}
              <span
                className={`hidden md:inline-block text-[9px] px-1 py-0.2 rounded border ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-[#111622] text-slate-500 border-[#1B2232]'
                }`}
              >
                {item.shortcutKey}
              </span>

              {/* Active Bottom Pip */}
              {isActive && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

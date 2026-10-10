import React from 'react';
import type { MissionRank, SkillProficiency } from '@/types/schema';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'rank' | 'proficiency' | 'tech' | 'status' | 'default';
  rank?: MissionRank;
  proficiency?: SkillProficiency;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  rank,
  proficiency,
  className = '',
}) => {
  let colorClasses = 'bg-[#161D2D] text-slate-300 border-[#283347]';

  if (variant === 'rank' && rank) {
    switch (rank) {
      case 'S-Rank':
        colorClasses = 'bg-rose-500/10 text-rose-400 border-rose-500/30 font-semibold';
        break;
      case 'A-Rank':
        colorClasses = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-semibold';
        break;
      case 'B-Rank':
        colorClasses = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 font-semibold';
        break;
    }
  } else if (variant === 'proficiency' && proficiency) {
    switch (proficiency) {
      case 'Production Core':
        colorClasses = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 font-medium';
        break;
      case 'Proficient':
        colorClasses = 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
        break;
      case 'Familiar':
        colorClasses = 'bg-slate-500/10 text-slate-400 border-slate-500/30';
        break;
    }
  } else if (variant === 'tech') {
    colorClasses = 'bg-[#111622] text-slate-300 border-[#1B2232]';
  } else if (variant === 'status') {
    colorClasses = 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
  }

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-mono border ${colorClasses} ${className}`}
    >
      {children}
    </span>
  );
};

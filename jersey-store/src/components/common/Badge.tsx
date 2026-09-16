import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'new' | 'featured' | 'retro' | 'limited' | 'match' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'default' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'new':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60';
      case 'featured':
        return 'bg-rose-950/80 text-rose-400 border-rose-800/60';
      case 'retro':
        return 'bg-amber-950/80 text-amber-400 border-amber-800/60';
      case 'limited':
        return 'bg-purple-950/80 text-purple-400 border-purple-800/60';
      case 'match':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-800/60';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border ${getVariantStyles()}`}>
      {label}
    </span>
  );
};

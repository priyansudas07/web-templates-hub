import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'new' | 'featured' | 'retro' | 'limited' | 'match' | 'default';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'default' }) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'new':
        return 'bg-[#E3261E]/15 text-[#E3261E] border-[#E3261E]/40';
      case 'featured':
        return 'bg-[#E3261E] text-[#F3F0E8] border-[#E3261E]';
      case 'retro':
        return 'bg-[#151514] text-[#F3F0E8] border-[#292927]';
      case 'limited':
        return 'bg-[#151514] text-[#E3261E] border-[#E3261E]/50';
      case 'match':
        return 'bg-[#151514] text-[#F3F0E8] border-[#292927]';
      default:
        return 'bg-[#151514] text-[#9B9992] border-[#292927]';
    }
  };

  return (
    <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-sm border ${getVariantStyles()}`}>
      {label}
    </span>
  );
};

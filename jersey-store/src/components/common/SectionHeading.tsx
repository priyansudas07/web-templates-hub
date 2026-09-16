import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tag?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  tag
}) => {
  return (
    <div className={`space-y-1 mb-10 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
      {tag && (
        <div className={`flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#E3261E] uppercase ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
          <span className="text-[#9B9992]">//</span>
          <span className="bg-[#151514] border border-[#292927] px-2.5 py-0.5 rounded-sm text-[#E3261E] font-bold">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-4xl sm:text-6xl font-display tracking-wide text-[#F3F0E8] uppercase leading-none font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#9B9992] text-sm sm:text-base max-w-xl leading-relaxed font-sans font-normal pt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

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
    <div className={`space-y-2 mb-10 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      {tag && (
        <span className="text-[11px] font-extrabold tracking-widest text-rose-500 uppercase bg-rose-950/50 border border-rose-800/40 px-3 py-1 rounded-full inline-block">
          {tag}
        </span>
      )}
      <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-100 uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

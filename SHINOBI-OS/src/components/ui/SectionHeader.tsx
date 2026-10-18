import React from 'react';

export interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  level?: 'h1' | 'h2';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  subtitle,
  action,
  level = 'h1',
  className = '',
}) => {
  const HeadingTag = level;

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1B2232] pb-4 ${className}`}
    >
      <div>
        <div className="flex items-center gap-2">
          {icon && <span className="text-emerald-400 shrink-0">{icon}</span>}
          <HeadingTag className="text-lg sm:text-xl font-mono font-bold text-[#F1F5F9] tracking-wide">
            {title}
          </HeadingTag>
        </div>
        {subtitle && (
          <p className="text-xs sm:text-sm text-[#94A3B8] mt-1 font-sans">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="self-start sm:self-auto shrink-0">{action}</div>}
    </div>
  );
};

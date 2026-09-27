import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  tag?: string;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'left',
  tag,
  action,
  className = ''
}) => {
  if (align === 'center') {
    return (
      <div className={`space-y-3 mb-12 text-center mx-auto max-w-3xl ${className}`}>
        {tag && (
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#E3261E] uppercase">
            <span className="text-[#8E8C85]">//</span>
            <span>{tag}</span>
          </div>
        )}
        <h2 className="text-4xl sm:text-6xl font-['Bebas_Neue',sans-serif] tracking-tight text-[#F3F0E8] uppercase leading-none font-bold">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#8E8C85] text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`border-b border-white/[0.08] pb-4 sm:pb-5 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 ${className}`}>
      <div className="space-y-1.5 sm:space-y-2">
        {tag && (
          <div className="inline-flex items-center gap-2 text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.22em] sm:tracking-[0.25em] text-[#E3261E] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
            <span>{tag}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-['Bebas_Neue',sans-serif] tracking-tight text-[#F3F0E8] uppercase leading-none font-bold">
          {title}
        </h2>
      </div>

      {(subtitle || action) && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 pt-1 md:pt-0">
          {subtitle && (
            <p className="text-[#8E8C85] text-xs sm:text-sm font-sans max-w-md md:text-right leading-relaxed">
              {subtitle}
            </p>
          )}
          {action && (
            <Link
              to={action.href}
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#F3F0E8] hover:text-[#E3261E] uppercase whitespace-nowrap transition-colors py-1 group self-start sm:self-auto"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E3261E] group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
};


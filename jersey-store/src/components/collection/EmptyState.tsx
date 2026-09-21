import React from 'react';
import { ArrowRight } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
  searchQuery?: string;
  onSelectQuery?: (query: string) => void;
}

const POPULAR_GRAILS = [
  'Portugal Home',
  'Real Madrid',
  'Messi',
  'Jordan #23',
  'Arsenal Away'
];

export const EmptyState: React.FC<EmptyStateProps> = ({
  onReset,
  searchQuery,
  onSelectQuery,
}) => {
  return (
    <div className="py-20 sm:py-28 px-4 text-center max-w-2xl mx-auto space-y-8">
      
      {/* Archival Tag & Heading */}
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2 text-[10px] font-mono tracking-[0.24em] text-[#E3261E] uppercase">
          <span>// VAULT SEARCH</span>
          <span className="text-white/20">•</span>
          <span className="text-[#8E8C85]">0 RESULTS FOUND</span>
        </div>

        <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight text-[#F3F0E8] leading-tight">
          {searchQuery ? `NO MATCHES FOR "${searchQuery.toUpperCase()}"` : 'NO MATCHING KITS IN VAULT'}
        </h3>

        <p className="text-xs sm:text-sm text-[#8E8C85] font-sans leading-relaxed max-w-md mx-auto">
          All specimens in the catalog are curated by season and authenticity. Try exploring our most requested archival grails below:
        </p>
      </div>

      {/* Curated Quick Select Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {POPULAR_GRAILS.map((item) => (
          <button
            key={item}
            onClick={() => onSelectQuery ? onSelectQuery(item) : onReset()}
            className="px-3.5 py-1.5 rounded-sm bg-white/[0.03] hover:bg-white/[0.08] text-[#F3F0E8] border border-white/[0.08] hover:border-white/20 text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200"
          >
            + {item}
          </button>
        ))}
      </div>

      {/* Clean Reset Action */}
      <div className="pt-4">
        <button
          onClick={onReset}
          className="group inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.18em] text-[#F3F0E8] hover:text-[#E3261E] uppercase transition-colors"
        >
          <span>VIEW FULL CATALOG</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

    </div>
  );
};

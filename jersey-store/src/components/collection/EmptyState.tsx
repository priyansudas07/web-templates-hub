import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  onReset,
  message = "No matching kits found in our catalog."
}) => {
  return (
    <div className="py-16 sm:py-20 px-6 text-center bg-[#0E0E0D] rounded-sm border border-white/[0.07] max-w-lg mx-auto my-12 shadow-2xl">
      <div className="w-14 h-14 rounded-sm bg-[#060605] border border-white/[0.08] flex items-center justify-center text-[#E3261E] mx-auto mb-5">
        <SearchX className="w-6 h-6" />
      </div>
      <h3 className="text-xl sm:text-2xl font-sans font-bold uppercase tracking-tight text-[#F3F0E8] mb-2">
        NO MATCHES FOUND
      </h3>
      <p className="text-[#8E8C85] text-xs sm:text-sm mb-6 leading-relaxed font-sans max-w-sm mx-auto">
        {message} Try searching for another team, player, or sport category.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#E3261E] hover:bg-[#c91e17] text-[#F3F0E8] font-mono font-bold text-xs uppercase tracking-widest transition-all shadow-md active:scale-95"
      >
        <RefreshCw className="w-3.5 h-3.5" />
        <span>RESET FILTERS</span>
      </button>
    </div>
  );
};

import React from 'react';
import { SearchX, RefreshCw } from 'lucide-react';

interface EmptyStateProps {
  onReset: () => void;
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  onReset,
  message = "No matching jerseys found in our catalog."
}) => {
  return (
    <div className="py-20 px-4 text-center bg-[#151514] rounded-sm border border-[#292927] max-w-lg mx-auto my-8 shadow-xl">
      <div className="w-16 h-16 rounded-sm bg-[#0B0B0A] border border-[#292927] flex items-center justify-center text-[#E3261E] mx-auto mb-4">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-black uppercase tracking-wide text-[#F3F0E8] mb-2">
        NO MATCHES FOUND
      </h3>
      <p className="text-[#9B9992] text-sm mb-6 leading-relaxed font-sans">
        {message} Try searching for another team, player, or sport category.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#E3261E] hover:bg-[#c91e17] text-[#F3F0E8] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Reset Search & Filters</span>
      </button>
    </div>
  );
};

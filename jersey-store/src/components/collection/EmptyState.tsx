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
    <div className="py-20 px-4 text-center bg-[#1E293B]/40 rounded-2xl border border-slate-800/80 max-w-lg mx-auto my-8">
      <div className="w-16 h-16 rounded-full bg-rose-950/50 border border-rose-800/50 flex items-center justify-center text-rose-500 mx-auto mb-4">
        <SearchX className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold uppercase tracking-wide text-slate-100 mb-2">
        NO MATCHES FOUND
      </h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {message} Try searching for another team, player, or sport category.
      </p>
      <button
        onClick={onReset}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-rose-950/50"
      >
        <RefreshCw className="w-4 h-4" />
        <span>Reset Search & Filters</span>
      </button>
    </div>
  );
};

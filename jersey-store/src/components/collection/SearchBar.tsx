import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search by jersey, team, player, sport, or season..."
}) => {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3 rounded-xl bg-[#1E293B]/80 border border-slate-700/80 text-slate-100 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-500/30 transition-all shadow-inner"
      />

      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
          aria-label="Clear search input"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

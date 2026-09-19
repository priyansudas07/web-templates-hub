import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search kits, teams, players...",
  className,
}) => {
  return (
    <div className={cn("relative flex items-center w-full max-w-sm", className)}>
      <Search className="absolute left-3 w-3.5 h-3.5 text-[#9B9992]/70 pointer-events-none" />
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-9 pl-9 pr-8 bg-white/[0.04] hover:bg-white/[0.06] focus:bg-[#0B0B0A] border border-white/[0.08] hover:border-white/[0.15] focus:border-white/25 rounded-sm text-xs font-sans text-[#F3F0E8] placeholder:text-[#9B9992]/50 outline-none transition-all duration-200"
      />

      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
          className="absolute right-2.5 p-1 text-[#9B9992]/70 hover:text-[#F3F0E8] transition-colors"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};

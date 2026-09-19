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
  placeholder = "SEARCH CATALOG...",
  className,
}) => {
  return (
    <div className={cn("relative flex items-center border-b border-white/10 hover:border-white/25 focus-within:border-[#E3261E] transition-colors duration-200 py-1", className)}>
      <Search className="w-3.5 h-3.5 text-[#8E8C85] shrink-0 mr-2" />
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-xs font-mono tracking-wider uppercase text-[#F3F0E8] placeholder:text-[#8E8C85]/50 outline-none"
      />

      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
          className="p-0.5 text-[#8E8C85] hover:text-[#F3F0E8] transition-colors ml-1"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </div>
  );
};

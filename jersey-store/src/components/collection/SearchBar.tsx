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
  placeholder = "SEARCH ARCHIVE...",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative flex items-center px-3.5 py-2 bg-[#111110] hover:bg-[#181816] border border-white/[0.08] hover:border-white/20 focus-within:border-[#E3261E] rounded-sm transition-all duration-200",
        className
      )}
    >
      <Search className="w-3.5 h-3.5 text-[#E3261E] shrink-0 mr-2.5" />
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-xs font-mono tracking-wider uppercase text-[#F3F0E8] placeholder:text-[#6E6C65] outline-none"
      />

      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
          className="p-1 text-[#8E8C85] hover:text-[#E3261E] transition-colors ml-1"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
};


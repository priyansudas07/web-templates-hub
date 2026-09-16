import React, { useMemo } from 'react';
import { GooeySearch } from '../ui/gooey-search';
import { products } from '../../data/products';
import { X } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  placeholder = "Search kits, teams, players..."
}) => {
  const searchItems = useMemo(() => {
    const list: string[] = [];
    products.forEach((p) => {
      if (!list.includes(p.name)) list.push(p.name);
      if (p.team && !list.includes(p.team)) list.push(p.team);
      if (p.player && !list.includes(p.player)) list.push(p.player);
      if (p.season && !list.includes(p.season)) list.push(p.season);
    });
    return list;
  }, []);

  return (
    <div className="w-full flex items-center justify-between gap-4 py-1">
      {/* Gooey Morphing Search Button & Input */}
      <div 
        className="relative flex items-center"
        style={{
          ['--foreground' as string]: '#F3F0E8',
          ['--background' as string]: '#0B0B0A',
        }}
      >
        <GooeySearch
          items={searchItems}
          placeholder={placeholder}
          buttonLabel={searchQuery ? `Filtering: ${searchQuery}` : "Search Catalog"}
          onChangeQuery={(val) => onSearchChange(val)}
          onSelect={(selected) => onSearchChange(selected)}
          debounceMs={200}
          maxResults={5}
        />
      </div>

      {/* Clear Active Search Query */}
      {searchQuery && (
        <button
          onClick={() => onSearchChange('')}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#151514] border border-[#292927] text-[#E3261E] hover:text-[#F3F0E8] hover:bg-[#E3261E] text-xs font-mono font-bold uppercase transition-colors shrink-0"
        >
          <X className="w-3.5 h-3.5" />
          <span>Clear ({searchQuery})</span>
        </button>
      )}
    </div>
  );
};

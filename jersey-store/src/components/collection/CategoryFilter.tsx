import React from 'react';
import { categories } from '../../data/categories';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x" role="group" aria-label="Catalog Categories Filter">
      {categories.map((cat) => {
        const active = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            aria-pressed={active}
            className={`px-4 py-2 rounded-sm text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all shrink-0 min-h-[42px] flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] ${
              active
                ? 'bg-[#E3261E] text-[#F3F0E8] border border-[#E3261E] shadow-sm'
                : 'bg-[#0B0B0A] text-[#9B9992] hover:bg-[#151514] hover:text-[#F3F0E8] border border-[#292927]'
            }`}
          >
            <span>{cat.name}</span>
            {cat.countBadge && (
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-sm ${
                active ? 'bg-white/20 text-[#F3F0E8]' : 'bg-[#151514] text-[#9B9992] border border-[#292927]'
              }`}>
                {cat.countBadge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

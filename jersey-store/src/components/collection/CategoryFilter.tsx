import React from 'react';
import { categories } from '../../data/categories';
import { cn } from '../../lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategorySelect,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 sm:gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x border-b border-white/[0.08]",
        className
      )}
      role="tablist"
      aria-label="Category Filters"
    >
      {categories.map((cat) => {
        const active = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active}
            onClick={() => onCategorySelect(cat.id)}
            className={cn(
              "relative px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-mono font-semibold tracking-[0.14em] uppercase whitespace-nowrap transition-all duration-200 shrink-0",
              "focus-visible:outline-none focus-visible:text-white",
              active
                ? "text-[#F3F0E8] font-bold"
                : "text-[#9B9992]/80 hover:text-[#F3F0E8]"
            )}
          >
            <span>{cat.name}</span>
            {active && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E3261E] rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
};

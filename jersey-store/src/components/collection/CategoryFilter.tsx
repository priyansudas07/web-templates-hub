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
        "flex items-center gap-2 sm:gap-4 overflow-x-auto pb-2 scrollbar-none touch-pan-x border-b border-white/[0.07]",
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
              "relative px-3 sm:px-4 py-2 text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-200 shrink-0",
              "focus-visible:outline-none focus-visible:text-white",
              active
                ? "text-[#F3F0E8]"
                : "text-[#7E7C76] hover:text-[#F3F0E8]"
            )}
          >
            <span>{cat.name}</span>
            {active && (
              <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#E3261E]" />
            )}
          </button>
        );
      })}
    </div>
  );
};

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
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x">
      {categories.map((cat) => {
        const active = selectedCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategorySelect(cat.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase whitespace-nowrap transition-all shrink-0 min-h-[44px] flex items-center gap-2 ${
              active
                ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/40 border border-rose-500'
                : 'bg-[#1E293B]/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
            }`}
          >
            <span>{cat.name}</span>
            {cat.countBadge && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                active ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
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

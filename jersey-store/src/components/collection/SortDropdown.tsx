import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface SortOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const sortOptions: SortOption[] = [
  { value: 'featured', label: 'CURATED ROTATION', sublabel: 'ARCHIVAL SPOTLIGHT' },
  { value: 'newest', label: 'LATEST ARRIVALS', sublabel: 'SEASON 24/25 DROPS' },
  { value: 'price-asc', label: 'PRICE: LOW → HIGH', sublabel: 'ASCENDING VALUE' },
  { value: 'price-desc', label: 'PRICE: HIGH → LOW', sublabel: 'PREMIUM SPECIMENS' },
];

export const SortDropdown: React.FC<SortDropdownProps> = ({
  value,
  onChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = sortOptions.find(o => o.value === value) || sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={cn("relative shrink-0", className)}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          "flex items-center gap-3 px-3.5 py-2 bg-[#111110] hover:bg-[#181816] border rounded-sm text-xs font-mono tracking-[0.16em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#E3261E]",
          isOpen ? "border-[#E3261E] text-[#F3F0E8]" : "border-white/[0.08] text-[#8E8C85] hover:text-[#F3F0E8] hover:border-white/20"
        )}
      >
        <span className="text-[#6E6C65] text-[10px]">SORT //</span>
        <span className="text-[#F3F0E8] font-bold">{selectedOption.label}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 text-[#E3261E] transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Custom Editorial Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-64 bg-[#0A0A09] border border-white/[0.12] rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 py-1.5 divide-y divide-white/[0.04] animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="px-3.5 py-1.5 text-[9px] font-mono tracking-[0.25em] text-[#6E6C65] uppercase flex items-center justify-between">
            <span>SORT INDEX</span>
            <span className="text-[#E3261E]">SELECT ORDER</span>
          </div>

          <div className="py-1">
            {sortOptions.map((option, index) => {
              const isSelected = option.value === value;
              const numStr = (index + 1).toString().padStart(2, '0');

              return (
                <button
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-3.5 py-2.5 flex items-center justify-between gap-3 text-xs font-mono transition-colors duration-150 group",
                    isSelected
                      ? "bg-white/[0.04] text-[#F3F0E8]"
                      : "text-[#8E8C85] hover:bg-white/[0.02] hover:text-[#F3F0E8]"
                  )}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={cn("text-[10px]", isSelected ? "text-[#E3261E] font-bold" : "text-[#55534E] group-hover:text-white")}>
                        {numStr}
                      </span>
                      <span className={cn("tracking-wider uppercase font-bold", isSelected ? "text-[#F3F0E8]" : "text-[#8E8C85] group-hover:text-[#F3F0E8]")}>
                        {option.label}
                      </span>
                    </div>
                    {option.sublabel && (
                      <p className="text-[10px] text-[#55534E] tracking-wider uppercase pl-5 font-normal">
                        {option.sublabel}
                      </p>
                    )}
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#E3261E] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

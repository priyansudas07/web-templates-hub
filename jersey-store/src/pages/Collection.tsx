import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { SearchBar } from '../components/collection/SearchBar';
import { SortDropdown } from '../components/collection/SortDropdown';
import { CategoryFilter } from '../components/collection/CategoryFilter';
import { ProductGrid } from '../components/collection/ProductGrid';
import { EmptyState } from '../components/collection/EmptyState';
import { SectionHeading } from '../components/common/SectionHeading';
import { ArrowUp } from 'lucide-react';

export const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';
  const initialSort = searchParams.get('sort') || 'featured';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sortBy, setSortBy] = useState<string>(initialSort);

  // Dynamic document title for Collection page SEO
  useEffect(() => {
    document.title = 'The Collection | Sports Gear';
  }, []);

  // Sync state changes with URL query parameters for shareability
  useEffect(() => {
    const params: Record<string, string> = {};
    if (selectedCategory && selectedCategory !== 'all') {
      params.category = selectedCategory;
    }
    if (searchQuery.trim()) {
      params.search = searchQuery.trim();
    }
    if (sortBy && sortBy !== 'featured') {
      params.sort = sortBy;
    }
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, sortBy, setSearchParams]);

  // Combined real-time Search, Filter & Sort matching logic
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    const result = products.filter((p) => {
      // Category Match
      let matchesCategory = false;
      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'football' || selectedCategory === 'cricket' || selectedCategory === 'basketball') {
        matchesCategory = p.sport === selectedCategory;
      } else if (selectedCategory === 'clubs') {
        matchesCategory = p.category === 'club-teams';
      } else if (selectedCategory === 'national') {
        matchesCategory = p.category === 'national-teams';
      } else {
        matchesCategory = p.category === selectedCategory || p.sport === selectedCategory;
      }

      // Search Query Match
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.team && p.team.toLowerCase().includes(query)) ||
        (p.player && p.player.toLowerCase().includes(query)) ||
        p.sport.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.season && p.season.toLowerCase().includes(query)) ||
        (p.techSpec && p.techSpec.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    // Sort matching logic
    if (sortBy === 'price-asc') {
      return result.sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-desc') {
      return result.sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'newest') {
      return result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }
    return result; // Default featured sort
  }, [selectedCategory, searchQuery, sortBy]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFiltered = selectedCategory !== 'all' || searchQuery || sortBy !== 'featured';

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F3F0E8] pt-8 sm:pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Editorial Top Heading */}
        <div className="space-y-2">
          <SectionHeading
            tag="01 / COMPLETE ARCHIVE"
            title="THE VAULT & COLLECTION"
          />
        </div>

        {/* Editorial Navigation & Control Bar */}
        <div className="space-y-4 pb-4 border-b border-white/[0.08]">
          
          {/* Tier 1: Category Filter Tabs - Full Unobstructed Width */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            className="border-b-0 pb-0"
          />

          {/* Tier 2: Search & Sort Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            
            {/* Expanded Search Bar */}
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              placeholder="SEARCH ARCHIVE BY CLUB, PLAYER, TOURNAMENT..."
              className="w-full sm:max-w-md"
            />

            {/* Right Side: Sort Dropdown & Optional Clear Link */}
            <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
              {isFiltered && (
                <button
                  onClick={handleReset}
                  className="text-xs font-mono tracking-wider text-[#E3261E] hover:text-[#F3F0E8] font-bold uppercase transition-colors"
                  title="Reset all filters"
                >
                  [CLEAR FILTERS]
                </button>
              )}

              {/* Custom Editorial Sort Dropdown */}
              <SortDropdown
                value={sortBy}
                onChange={setSortBy}
              />
            </div>

          </div>
        </div>

        {/* Asymmetric Product Layout or Editorial Empty State */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptyState
            onReset={handleReset}
            searchQuery={searchQuery}
            onSelectQuery={(q) => setSearchQuery(q)}
          />
        )}

        {/* Clean End-of-Archive Sign-off & Back to Top Strip */}
        <div className="pt-8 mt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E8C85]">
          <div className="flex items-center gap-2.5 tracking-[0.16em] uppercase text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
            <span>END OF ARCHIVE // {filteredProducts.length} SPECIMENS DISPLAYED</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[#8E8C85] hover:text-[#F3F0E8] uppercase tracking-wider text-[11px] font-semibold transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </div>
  );
};

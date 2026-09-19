import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { SearchBar } from '../components/collection/SearchBar';
import { CategoryFilter } from '../components/collection/CategoryFilter';
import { ProductGrid } from '../components/collection/ProductGrid';
import { EmptyState } from '../components/collection/EmptyState';
import { SectionHeading } from '../components/common/SectionHeading';

export const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const initialCategory = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);

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
    setSearchParams(params, { replace: true });
  }, [selectedCategory, searchQuery, setSearchParams]);

  // Combined real-time Search & Filter matching logic
  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return products.filter((p) => {
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
        (p.season && p.season.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F3F0E8] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Editorial Top Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <SectionHeading
            tag="AUTHENTIC CATALOG"
            title="THE COLLECTION"
            subtitle="Engineered match kits, historic retro grails, and official federation player editions."
          />
          
          {/* Subtle Dark Search Field */}
          <div className="w-full md:w-auto shrink-0 pb-10">
            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              placeholder="Search kits, players, teams..."
            />
          </div>
        </div>

        {/* Clean Horizontal Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
            className="flex-grow"
          />

          <div className="flex items-center gap-3 text-xs font-mono text-[#9B9992] shrink-0">
            <span>
              {filteredProducts.length} {filteredProducts.length === 1 ? 'KIT' : 'KITS'} AVAILABLE
            </span>
            {(selectedCategory !== 'all' || searchQuery) && (
              <>
                <span>•</span>
                <button
                  onClick={handleReset}
                  className="text-[#E3261E] hover:text-[#F3F0E8] uppercase tracking-wider font-bold transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  RESET
                </button>
              </>
            )}
          </div>
        </div>

        {/* Asymmetric Product Layout or Empty State */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptyState onReset={handleReset} />
        )}

      </div>
    </div>
  );
};

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { SearchBar } from '../components/collection/SearchBar';
import { CategoryFilter } from '../components/collection/CategoryFilter';
import { ProductGrid } from '../components/collection/ProductGrid';
import { EmptyState } from '../components/collection/EmptyState';
import { SectionHeading } from '../components/common/SectionHeading';
import { ConciergeSourcingPass } from '../components/collection/ConciergeSourcingPass';
import { ChevronDown, ArrowUp } from 'lucide-react';

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
            tag="AUTHENTIC ARCHIVE"
            title="THE COLLECTION"
            subtitle="Engineered match kits, historic retro grails, and official federation player editions."
          />
        </div>

        {/* Static Editorial Navigation & Control Bar (Non-sticky) */}
        <div className="pb-4 border-b border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6">
            
            {/* Category Filter Tabs */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              className="border-b-0 pb-0"
            />

            {/* Right Side: Editorial Search, Sort & Count */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 justify-between lg:justify-end">
              
              {/* Borderless Editorial Search */}
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                placeholder="SEARCH CATALOG..."
                className="w-full sm:w-48"
              />

              {/* Minimal Text Sort Trigger */}
              <div className="relative flex items-center border-b border-white/10 hover:border-white/25 transition-colors py-1 shrink-0">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort kits"
                  className="bg-transparent text-xs font-mono tracking-wider uppercase text-[#8E8C85] hover:text-[#F3F0E8] outline-none cursor-pointer appearance-none pr-4"
                >
                  <option value="featured" className="bg-[#0E0E0D] text-white">SORT: FEATURED</option>
                  <option value="newest" className="bg-[#0E0E0D] text-white">SORT: NEWEST</option>
                  <option value="price-asc" className="bg-[#0E0E0D] text-white">PRICE: LOW → HIGH</option>
                  <option value="price-desc" className="bg-[#0E0E0D] text-white">PRICE: HIGH → LOW</option>
                </select>
                <ChevronDown className="w-3 h-3 text-[#8E8C85] absolute right-0 pointer-events-none" />
              </div>

              {/* Status Count & Clear Link */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#8E8C85] shrink-0">
                <span>{filteredProducts.length} KITS</span>
                {isFiltered && (
                  <button
                    onClick={handleReset}
                    className="text-[#E3261E] hover:text-[#F3F0E8] uppercase tracking-wider font-semibold transition-colors underline underline-offset-2 ml-1"
                  >
                    (CLEAR)
                  </button>
                )}
              </div>

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

        {/* Interactive Concierge Sourcing Pass Section */}
        <div className="pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-white/[0.08] space-y-6">
          <ConciergeSourcingPass />

          {/* End of Catalog Sign-off & Back to Top Strip */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#8E8C85]/80">
            <div className="flex items-center gap-2 tracking-widest uppercase text-[11px]">
              <span className="text-[#E3261E]">●</span>
              <span>END OF ARCHIVE — {filteredProducts.length} SPECIMENS DISPLAYED</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 text-[#8E8C85] hover:text-[#F3F0E8] uppercase tracking-wider text-[11px] font-semibold transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

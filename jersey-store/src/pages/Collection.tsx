import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { SearchBar } from '../components/collection/SearchBar';
import { CategoryFilter } from '../components/collection/CategoryFilter';
import { ProductGrid } from '../components/collection/ProductGrid';
import { EmptyState } from '../components/collection/EmptyState';
import { SectionHeading } from '../components/common/SectionHeading';
import { SlidersHorizontal, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-[#0B0B0A] text-[#F3F0E8] pt-8 sm:pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Editorial Top Heading */}
        <div className="space-y-2">
          <SectionHeading
            tag="AUTHENTIC ARCHIVE"
            title="THE COLLECTION"
            subtitle="Engineered match kits, historic retro grails, and official federation player editions."
          />
        </div>

        {/* Unified Sticky Controls Bar */}
        <div className="sticky top-[64px] z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 py-3 bg-[#0B0B0A]/90 backdrop-blur-xl border-y border-white/[0.08] shadow-2xl transition-all">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              className="border-b-0 pb-0"
            />

            {/* Right Controls: Search + Sort + Status */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 justify-between lg:justify-end">
              
              {/* Search Bar */}
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                placeholder="Search kits, players, teams..."
                className="w-full sm:w-60"
              />

              {/* Sort Selector */}
              <div className="relative flex items-center shrink-0">
                <SlidersHorizontal className="absolute left-3 w-3 h-3 text-[#8E8C85] pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  aria-label="Sort collection products"
                  className="h-9 pl-8 pr-7 bg-[#0E0E0D] hover:bg-[#141413] border border-white/[0.08] hover:border-white/[0.16] rounded-sm text-xs font-mono text-[#F3F0E8] outline-none cursor-pointer appearance-none uppercase tracking-wider"
                >
                  <option value="featured" className="bg-[#0E0E0D] text-white">SORT: FEATURED</option>
                  <option value="newest" className="bg-[#0E0E0D] text-white">SORT: NEWEST</option>
                  <option value="price-asc" className="bg-[#0E0E0D] text-white">PRICE: LOW → HIGH</option>
                  <option value="price-desc" className="bg-[#0E0E0D] text-white">PRICE: HIGH → LOW</option>
                </select>
                <span className="absolute right-2.5 text-[10px] text-[#8E8C85] pointer-events-none">▾</span>
              </div>

              {/* Kit Count & Reset */}
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#8E8C85] shrink-0">
                <span className="hidden sm:inline">[{filteredProducts.length} KITS]</span>
                {(selectedCategory !== 'all' || searchQuery || sortBy !== 'featured') && (
                  <button
                    onClick={handleReset}
                    className="px-2 py-1 bg-[#E3261E]/10 hover:bg-[#E3261E] text-[#E3261E] hover:text-white border border-[#E3261E]/30 text-[10px] uppercase font-bold rounded-sm transition-all"
                  >
                    RESET
                  </button>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* Asymmetric Product Layout or Empty State */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <EmptyState onReset={handleReset} />
        )}

        {/* Bottom Editorial Guarantees & Concierge Strip */}
        <div className="pt-16 mt-16 border-t border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 bg-[#0E0E0D] border border-white/[0.06] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E3261E] text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>100% MATCH-GRADE AUTHENTICITY</span>
              </div>
              <p className="text-xs text-[#8E8C85] font-sans leading-relaxed">
                Every kit is rigorously inspected for official federation heat seals, player cuts, and verified serial batch embroidery.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E0D] border border-white/[0.06] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E3261E] text-xs font-mono font-bold uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>DISPATCHED IN ARCHIVAL VAULT BOXES</span>
              </div>
              <p className="text-xs text-[#8E8C85] font-sans leading-relaxed">
                Packaged in custom moisture-resistant matte black collector boxes with archival acid-free tissue wrap.
              </p>
            </div>

            <div className="p-6 bg-[#0E0E0D] border border-white/[0.06] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E3261E] text-xs font-mono font-bold uppercase tracking-wider">
                <MessageCircle className="w-4 h-4" />
                <span>DIRECT WHATSAPP CONCIERGE</span>
              </div>
              <p className="text-xs text-[#8E8C85] font-sans leading-relaxed">
                Connect with our personal kit curators for sizing recommendations, custom name-set inquiries, or grail sourcing.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

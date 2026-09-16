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
      const matchesCategory =
        selectedCategory === 'all' ||
        p.category === selectedCategory ||
        p.sport === selectedCategory;

      // Search Query Match (matches name, team, player, sport, category, season)
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Editorial Header */}
      <SectionHeading
        tag="FULL CATALOG"
        title="THE COLLECTION"
        subtitle="Jerseys built around the game you follow. Explore authentic match editions, retro grails, and club kits."
      />

      {/* Controls Bar: Search & Category Chips */}
      <div className="space-y-6 bg-[#1E293B]/40 p-6 rounded-2xl border border-slate-800">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          placeholder="Search by team, jersey name, player, sport, or season..."
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-bold uppercase tracking-wider pt-2">
        <span>Displaying {filteredProducts.length} {filteredProducts.length === 1 ? 'Kit' : 'Kits'}</span>
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={handleReset}
            className="text-rose-400 hover:text-rose-300 underline font-semibold"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid or Empty State */}
      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <EmptyState onReset={handleReset} />
      )}

    </div>
  );
};

import React from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { FeaturedProductCard } from './FeaturedProductCard';
import { EditorialMidwayBanner } from './EditorialMidwayBanner';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // If no products, handled by parent with EmptyState
  if (products.length === 0) return null;

  // When filtered count is small (1 or 2 products)
  if (products.length < 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  // Segment products for editorial asymmetric layout
  // Block 1 (Top Hero Module): 1 Large Featured + 2 Standard Cards
  const heroFeatured = products[0];
  const upperStandards = products.slice(1, 3);

  // Block 2 (Lower Module): Next batch of products
  const remainingAfterUpper = products.slice(3);
  const lowerStandards = remainingAfterUpper.slice(0, 2);
  const lowerFeatured = remainingAfterUpper[2]; // Product at index 5
  const tailProducts = remainingAfterUpper.slice(3); // Products from index 6 onwards

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* Upper Asymmetric Section: 1 Large Featured Card (2 cols) + 2 Standard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
        {heroFeatured && (
          <FeaturedProductCard
            product={heroFeatured}
            className="lg:col-span-2"
          />
        )}
        <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-1">
          {upperStandards.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Midway Editorial Manifesto Section */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <EditorialMidwayBanner />
      </div>

      {/* Lower Asymmetric Section (Alternated): 2 Standard Cards + 1 Large Featured Card (if available) */}
      {remainingAfterUpper.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          <div className="flex flex-col gap-6 sm:gap-8 lg:col-span-1">
            {lowerStandards.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {lowerFeatured ? (
            <FeaturedProductCard
              product={lowerFeatured}
              className="lg:col-span-2"
            />
          ) : null}
        </div>
      )}

      {/* Remaining Products Grid */}
      {tailProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {tailProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};

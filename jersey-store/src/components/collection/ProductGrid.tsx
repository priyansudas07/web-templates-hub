import React from 'react';
import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { EditorialMidwayBanner } from './EditorialMidwayBanner';

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) return null;

  // When filtered count is small (1 or 2 products)
  if (products.length < 3) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant="standard" />
        ))}
      </div>
    );
  }

  // Row 1: 1 Large (~58% / 7 cols) + 2 Stacked (~42% / 5 cols)
  const row1Large = products[0];
  const row1Stacked = products.slice(1, 3);

  // Row 2 (Reversed): 2 Stacked (~42% / 5 cols) + 1 Large (~58% / 7 cols)
  const row2Products = products.slice(3, 6);
  const row2Stacked = row2Products.slice(0, 2);
  const row2Large = row2Products[2];

  // Remaining products from index 6 onwards
  const remainingProducts = products.slice(6);

  return (
    <div id="collection-grid" className="space-y-12 sm:space-y-16">
      
      {/* ROW 1: Large Featured (58%) on Left + 2 Stacked (42%) on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
        {row1Large && (
          <div className="lg:col-span-7 flex flex-col">
            <ProductCard product={row1Large} variant="large" className="h-full" />
          </div>
        )}
        {row1Stacked.length > 0 && (
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between">
            {row1Stacked.map((product) => (
              <ProductCard key={product.id} product={product} variant="stacked" />
            ))}
          </div>
        )}
      </div>

      {/* FULL-WIDTH EDITORIAL SECTION BETWEEN PRODUCT ROWS */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <EditorialMidwayBanner />
      </div>

      {/* ROW 2 (REVERSED): 2 Stacked (42%) on Left + Large Featured (58%) on Right */}
      {row2Products.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
          {row2Stacked.length > 0 && (
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 justify-between order-2 lg:order-1">
              {row2Stacked.map((product) => (
                <ProductCard key={product.id} product={product} variant="stacked" />
              ))}
            </div>
          )}
          {row2Large && (
            <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
              <ProductCard product={row2Large} variant="large" className="h-full" />
            </div>
          )}
        </div>
      )}

      {/* REMAINING PRODUCTS: Elegant Editorial Standard Grid */}
      {remainingProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 pt-4">
          {remainingProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="standard" />
          ))}
        </div>
      )}

    </div>
  );
};

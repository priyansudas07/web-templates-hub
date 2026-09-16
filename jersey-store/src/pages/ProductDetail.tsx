import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductGrid } from '../components/collection/ProductGrid';
import { SectionHeading } from '../components/common/SectionHeading';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  // Dynamic document title update
  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Sports Gear`;
    } else {
      document.title = `Product Not Found | Sports Gear`;
    }
  }, [product]);

  // Invalid Product ID Fallback
  if (!product) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-rose-950/60 border border-rose-800 flex items-center justify-center text-rose-500 mx-auto">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-extrabold uppercase tracking-tight text-slate-100">
          PRODUCT NOT FOUND
        </h1>
        <p className="text-slate-400 text-sm leading-relaxed">
          The requested jersey may have been removed or the URL is invalid.
        </p>
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs uppercase tracking-wider transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Collection</span>
        </Link>
      </div>
    );
  }

  // Related products in the same sport/category
  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.sport === product.sport || p.category === product.category))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Back Link */}
      <Link
        to="/collection"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-400 uppercase tracking-wider transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Full Collection</span>
      </Link>

      {/* PDP Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <ProductGallery
            images={product.images}
            productName={product.name}
            badgeTag={product.badgeTag}
          />
        </div>
        <div className="lg:col-span-6">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Kits Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-12 border-t border-slate-800 space-y-8">
          <SectionHeading
            tag="SIMILAR KITS"
            title="YOU MAY ALSO LIKE"
            subtitle="Explore additional jerseys in the same sport and kit category."
          />
          <ProductGrid products={relatedProducts} />
        </div>
      )}

    </div>
  );
};

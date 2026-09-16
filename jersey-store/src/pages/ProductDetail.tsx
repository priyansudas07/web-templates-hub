import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductGrid } from '../components/collection/ProductGrid';
import { SectionHeading } from '../components/common/SectionHeading';
import { NotFound } from '../components/common/NotFound';
import { ArrowLeft } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  // Dynamic document title & JSON-LD structured data update for SEO
  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Sports Gear`;

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'product-json-ld';
      script.text = JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Product',
        'name': product.name,
        'image': product.images,
        'description': product.description,
        'sku': product.id,
        'offers': {
          '@type': 'Offer',
          'url': `https://sportsgear.in/collection/${product.id}`,
          'priceCurrency': product.currency,
          'price': product.price,
          'availability': product.availability === 'available' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
        }
      });
      document.head.appendChild(script);

      return () => {
        const existingScript = document.getElementById('product-json-ld');
        if (existingScript) existingScript.remove();
      };
    } else {
      document.title = `Product Not Found — Sports Gear`;
    }
  }, [product]);

  // Invalid Product ID Fallback
  if (!product) {
    return (
      <NotFound
        title="PRODUCT NOT FOUND"
        message="The requested jersey model could not be found or may have been removed from our catalog."
      />
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
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-400 uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded"
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

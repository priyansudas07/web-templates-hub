import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { ProductStory } from '../components/product/ProductStory';
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
    <div className="bg-[#0B0B0A] text-[#F3F0E8] min-h-screen">
      
      {/* 1. PRODUCT HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 sm:pb-28 space-y-10 sm:space-y-14">
        
        {/* Minimal Editorial Back Navigation & Archival Folio */}
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <Link
            to="/collection"
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.24em] text-[#8E8C85] hover:text-[#E3261E] uppercase transition-colors group focus-visible:outline-none"
          >
            <ArrowLeft className="w-4 h-4 text-[#E3261E] group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>01 // ARCHIVE DIRECTORY</span>
          </Link>

          <div className="flex items-center gap-6 text-[11px] font-mono tracking-[0.22em] text-[#6E6C65] uppercase hidden sm:flex">
            <span>DISCIPLINE // {product.sport.toUpperCase()}</span>
            <span className="text-white/20">/</span>
            <span>SPEC NO. {product.archiveNo || '001'}</span>
          </div>
        </div>

        {/* Two-Column Editorial Product Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-start">
          {/* Left Column: Visual Hero Stage (6 Cols on tablet, 7 on desktop) */}
          <div className="md:col-span-6 lg:col-span-7">
            <ProductGallery
              images={product.images}
              productName={product.name}
              badgeTag={product.badgeTag}
              archiveNo={product.archiveNo}
            />
          </div>

          {/* Right Column: Spec & Action Details (6 Cols on tablet, 5 on desktop) */}
          <div className="md:col-span-6 lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

      </div>

      {/* 2. FULL-WIDTH EDITORIAL STORY & CLOSE-UP DETAILS SECTION */}
      <ProductStory product={product} />

      {/* 3. RELATED ARCHIVAL SPECIMENS SECTION */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-36 space-y-12">
          <SectionHeading
            tag="04 / ARCHIVAL PAIRINGS"
            title="COMPLETE THE VAULT"
            action={{ label: "VIEW ALL SPECIMENS", href: "/collection" }}
          />
          <ProductGrid products={relatedProducts} />
        </section>
      )}

    </div>
  );
};


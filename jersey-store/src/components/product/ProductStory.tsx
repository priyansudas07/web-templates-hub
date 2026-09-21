import React from 'react';
import type { Product } from '../../types/product';

interface ProductStoryProps {
  product: Product;
}

export const ProductStory: React.FC<ProductStoryProps> = ({ product }) => {
  const isPortugal = product.id.includes('portugal');

  const storyImages = {
    crest: isPortugal 
      ? '/kits/portugal-crest.jpg' 
      : 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85',
    fabric: isPortugal 
      ? '/kits/portugal-details.jpg' 
      : 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=85',
    back: product.images[1] || product.images[0] || '/kits/portugal-back.png'
  };

  const cleanKitTitle = isPortugal 
    ? 'THE PORTUGAL HOME KIT' 
    : `THE ${product.name.replace(/\d{4}\/\d{2,4}|jersey|kit/gi, '').trim().toUpperCase()} KIT`;

  return (
    <section className="py-24 sm:py-36 border-t border-b border-white/[0.08] bg-[#070706] relative overflow-hidden">
      
      {/* Background Specular Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[32vw] font-black text-white/[0.015] font-mono leading-none tracking-tighter select-none pointer-events-none pr-8"
      >
        07
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Top Editorial Header & Curatorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-4 border-b border-white/[0.08]">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2.5 text-xs font-mono font-bold tracking-[0.28em] text-[#E3261E] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3261E]" />
              <span>// ARCHIVAL ANATOMY</span>
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-['Bebas_Neue',sans-serif] tracking-tight uppercase leading-[0.84] text-[#F3F0E8]">
              {cleanKitTitle}
              <br />
              <span className="text-[#6E6C65]">A CLOSER LOOK AT THE DETAILS.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <p className="text-[#8E8C85] text-xs sm:text-sm font-sans leading-relaxed">
              Curated for tactile fabric weave, detailed embroidered heraldry, and authentic matchday aesthetic. Discover the craftsmanship behind this catalog issue.
            </p>
            <div className="text-[11px] font-mono tracking-[0.2em] text-[#E3261E] uppercase font-bold">
              SPECIMEN PROVENANCE // STORE ARCHIVE
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Specimen Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Hero Specimen: Crest & Heraldry (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between group">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-sm overflow-hidden bg-[#0E0E0D] border border-white/[0.08]">
              <img
                src={storyImages.crest}
                alt={`${product.name} crest specimen`}
                className="w-full h-full object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1000&q=85';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#8E8C85] uppercase bg-[#070706]/90 backdrop-blur-md px-4 py-2 border border-white/10">
                <span>01 // HERALDRY DETAIL</span>
                <span className="text-[#E3261E] font-bold">EMBROIDERED EMBLEM</span>
              </div>
            </div>

            <div className="pt-6 space-y-2">
              <h3 className="text-2xl sm:text-3xl font-['Bebas_Neue',sans-serif] tracking-wide uppercase text-[#F3F0E8] group-hover:text-[#E3261E] transition-colors">
                HIGH-DEFINITION TACTILE CREST
              </h3>
              <p className="text-xs sm:text-sm text-[#8E8C85] font-sans leading-relaxed max-w-2xl">
                Dimensional embroidered club heraldry with reinforced heat-applied backing, designed for durability and a crisp textured finish.
              </p>
            </div>
          </div>

          {/* Right Stacked Dossiers (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Dossier 02: Fabric & Airflow */}
            <div className="group space-y-3">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-[#0E0E0D] border border-white/[0.08]">
                <img
                  src={storyImages.fabric}
                  alt={`${product.name} fabric structure`}
                  className="w-full h-full object-cover grayscale contrast-125 opacity-75 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 ease-out"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E8C85] uppercase bg-[#070706]/90 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                  <span>02 // WEAVE DETAIL</span>
                  <span className="text-[#E3261E]">{product.techSpec || 'JACQUARD WEAVE'}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl sm:text-2xl font-['Bebas_Neue',sans-serif] tracking-wide uppercase text-[#F3F0E8] group-hover:text-[#E3261E] transition-colors">
                  ZONE-MAPPED KNIT TEXTURE
                </h4>
                <p className="text-xs text-[#8E8C85] font-sans leading-relaxed">
                  Breathable moisture-wicking knit structure engineered with micro-ventilation porosity for comfort during active wear.
                </p>
              </div>
            </div>

            {/* Dossier 03: Tailoring & Back Profile */}
            <div className="group space-y-3">
              <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-[#0E0E0D] border border-white/[0.08] flex items-center justify-center p-4">
                <img
                  src={storyImages.back}
                  alt={`${product.name} back silhouette and typography`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070706] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono tracking-widest text-[#8E8C85] uppercase bg-[#070706]/90 backdrop-blur-sm px-3 py-1.5 border border-white/10">
                  <span>03 // TAILORING</span>
                  <span className="text-[#E3261E]">ATHLETIC FIT</span>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xl sm:text-2xl font-['Bebas_Neue',sans-serif] tracking-wide uppercase text-[#F3F0E8] group-hover:text-[#E3261E] transition-colors">
                  COLLAR & NAMESET PROFILE
                </h4>
                <p className="text-xs text-[#8E8C85] font-sans leading-relaxed">
                  Ribbed athletic neckline paired with clean match-edition typography prints, finished hemline tape, and reinforced seams.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Minimal Archival Spec Bar */}
        <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-[#8E8C85] uppercase">
          <div>
            <span className="block text-[#6E6C65] text-[9px]">FABRIC STRUCTURE</span>
            <span className="text-[#F3F0E8] font-bold">{product.techSpec || 'PERFORMANCE JACQUARD'}</span>
          </div>
          <div>
            <span className="block text-[#6E6C65] text-[9px]">HERALDRY EMBOSS</span>
            <span className="text-[#F3F0E8] font-bold">EMBROIDERED EMBLEM</span>
          </div>
          <div>
            <span className="block text-[#6E6C65] text-[9px]">FIT CLASSIFICATION</span>
            <span className="text-[#F3F0E8] font-bold">ATHLETIC TAILORING</span>
          </div>
          <div>
            <span className="block text-[#6E6C65] text-[9px]">QUALITY STATUS</span>
            <span className="text-[#E3261E] font-bold">QUALITY INSPECTED</span>
          </div>
        </div>

      </div>
    </section>
  );
};


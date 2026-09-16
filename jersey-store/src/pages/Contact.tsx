import React, { useEffect } from 'react';
import { SectionHeading } from '../components/common/SectionHeading';
import { storeInfo } from '../data/store';
import { WhatsAppButton } from '../components/product/WhatsAppButton';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us — Sports Gear';

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'store-json-ld';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      'name': storeInfo.name,
      'description': storeInfo.description,
      'address': storeInfo.address,
      'telephone': storeInfo.phone,
      'openingHours': storeInfo.openingHours,
      'url': 'https://sportsgear.in/contact'
    });
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('store-json-ld');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      <SectionHeading
        tag="GET IN TOUCH"
        title="STORE LOCATION & CONTACT"
        subtitle="Have a kit in mind? Visit our store or connect with us directly on WhatsApp for stock inquiries, sizing recommendations, and delivery details."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="p-6 rounded-sm bg-[#151514] border border-[#292927] space-y-4">
            <h3 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#E3261E]">
              // DIRECT INQUIRIES
            </h3>

            <WhatsAppButton
              productName="Sports Gear Store Inquiry"
              label="Connect on WhatsApp"
              size="lg"
            />
          </div>

          {/* Detailed Info Cards */}
          <div className="p-6 rounded-sm bg-[#151514] border border-[#292927] space-y-5">
            {storeInfo.address && (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#0B0B0A] border border-[#292927] text-[#E3261E] shrink-0">
                  <MapPin className="w-5 h-5 text-[#E3261E]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#F3F0E8]">Store Address</h4>
                  <p className="text-sm text-[#9B9992] mt-0.5 leading-relaxed">{storeInfo.address}</p>
                </div>
              </div>
            )}

            {storeInfo.openingHours && (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#0B0B0A] border border-[#292927] text-[#E3261E] shrink-0">
                  <Clock className="w-5 h-5 text-[#E3261E]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#F3F0E8]">Opening Hours</h4>
                  <p className="text-sm text-[#9B9992] mt-0.5">{storeInfo.openingHours}</p>
                </div>
              </div>
            )}

            {storeInfo.phone && (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#0B0B0A] border border-[#292927] text-[#E3261E] shrink-0">
                  <Phone className="w-5 h-5 text-[#E3261E]" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#F3F0E8]">Phone</h4>
                  <a
                    href={`tel:${storeInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm text-[#9B9992] hover:text-[#E3261E] transition-colors mt-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded-sm font-mono"
                  >
                    {storeInfo.phone}
                  </a>
                </div>
              </div>
            )}

            {storeInfo.instagram && (
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-sm bg-[#0B0B0A] border border-[#292927] text-[#E3261E] shrink-0 flex items-center justify-center">
                  <svg className="w-5 h-5 fill-current text-[#E3261E]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#F3F0E8]">Instagram</h4>
                  <a
                    href={`https://instagram.com/${storeInfo.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#E3261E] hover:underline mt-0.5 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3261E] rounded-sm font-mono"
                  >
                    {storeInfo.instagram}
                  </a>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Google Maps Interactive Component */}
        {storeInfo.locationUrl && (
          <div className="lg:col-span-7 bg-[#151514] rounded-sm border border-[#292927] overflow-hidden shadow-2xl h-[450px]">
            <iframe
              title="Sports Gear Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.796336338167!2d72.8335048!3d18.9401484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzI0LjUiTiA3MsKwNTAnMDAuNiJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}

      </div>

    </div>
  );
};

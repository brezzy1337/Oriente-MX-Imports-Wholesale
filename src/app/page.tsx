"use client";

import HeroGallery from '@/components/HeroGallery';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroGallery />
      
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Thai Food Import
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Premium Thai food products for wholesale distribution. Authentic
              flavors direct from Thailand.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Wholesale Distribution
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Reliable distribution services across the region.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Quality Products
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Authentic Thai products with guaranteed quality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

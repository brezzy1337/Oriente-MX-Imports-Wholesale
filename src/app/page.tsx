"use client";

import dynamic from 'next/dynamic';
import WhatsAppButton from '@/app/components/WhatsAppButton';

export default function Home() {

  const HeroGallery = dynamic(() => import("@/app/components/HeroGallery"), {
    ssr: false,
    loading: () => <div>Loading...</div>
  });

  const ServiceCards = dynamic(() => import("@/app/components/ServiceCards"), {
    ssr: false,
    // loading: () => <div>Loading...</div>
  });

  const FeaturedProducts = dynamic(() => import("@/app/components/FeaturedProducts"), {
    ssr: false,
    // loading: () => <div>Loading...</div>
  });

  const FeaturedBrands = dynamic(() => import("@/app/components/FeaturedBrands"), {
    ssr: false,
    // loading: () => <div>Loading...</div>
  });

  return (
    <main className="flex min-h-screen flex-col">
      <HeroGallery />
      <FeaturedProducts />
      <section className="container mx-auto px-4 py-12">
        <ServiceCards />
      </section>
      <FeaturedBrands />
      <section className="bg-gray-50">
      </section>
      <WhatsAppButton phoneNumber="1234567890" />
    </main>
  );
}

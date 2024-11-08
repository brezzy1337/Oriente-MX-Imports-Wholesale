"use client";

import Image from 'next/image';
import HeroGallery from '@/components/HeroGallery';
import ServiceCards from '@/components/ServiceCards';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroGallery />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestras Marcas Principales</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <a href="/comercio/brands/aroy-d" className="group">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/brands/aroy-d.png"
                  alt="AROY-D"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </a>
            <a href="/comercio/brands/kikkoman" className="group">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/brands/kikkoman.png"
                  alt="KIKKOMAN"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </a>
            <a href="/comercio/brands/kum-chun" className="group">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/brands/kum-chun.jpg"
                  alt="KUM CHUN"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </a>
            <a href="/comercio/brands/cock" className="group">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/brands/cock.jpg"
                  alt="COCK"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </a>
            <a href="/comercio/brands/rose" className="group">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/images/brands/rose.jpg"
                  alt="ROSE"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-12">
        <ServiceCards />
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import HeroGallery from "@/app/components/HeroGallery";
import ServiceCards from "@/app/components/ServiceCards";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import DecoratedHeader from "@/app/components/DecoratedHeader";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroGallery />
      <FeaturedProducts />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <DecoratedHeader>
            Nuestras Marcas Principales
          </DecoratedHeader>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            <a href="/comercio/brands/aroy-d" className="group">
              <div className="bg-white p-4 hover:shadow-md transition-shadow">
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
              <div className="bg-white p-4 hover:shadow-md transition-shadow">
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
              <div className="bg-white p-4 hover:shadow-md transition-shadow">
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
              <div className="bg-white p-4 hover:shadow-md transition-shadow">
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
              <div className="bg-white p-4 hover:shadow-md transition-shadow">
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

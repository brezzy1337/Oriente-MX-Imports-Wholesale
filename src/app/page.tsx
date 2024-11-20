"use client";

import Image from "next/image";
import HeroGallery from "@/app/components/HeroGallery";
import ServiceCards from "@/app/components/ServiceCards";
import FeaturedProducts from "@/app/components/FeaturedProducts";
import DecoratedHeader from "@/app/components/DecoratedHeader";
import { useState, useEffect } from "react"
import { getBrands } from "./functions/_serverActions";
import { getBlobUrl } from "@/utils/blob";


export default function Home() {
  
  const [brands, setBrands] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBrands = async () => {
    const result = await getBrands();
    if (result.success && result.data) {
      setIsLoading(false);
      setBrands(result.data);
    }
    return result.data;
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col">
      <HeroGallery />
      <FeaturedProducts />
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <DecoratedHeader>
            Nuestras Marcas 
          </DecoratedHeader>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            { brands.map((brand) => (
              <a href={`/comercio/brands/${brand.slug}`} key={brand.id} className="group">
                <div className="bg-white p-4 hover:shadow-md transition-shadow">
                  <Image
                    src={getBlobUrl(brand.logoUrl)}
                    alt={brand.name}
                    width={200}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <ServiceCards />
      </section>
    </main>
  );
}
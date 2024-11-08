"use client";

import Image from 'next/image';
import HeroGallery from '@/components/HeroGallery';
import ThaiFlag from '@/components/ThaiFlag';

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
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3 max-w-[37.5%] mx-auto">
          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <ThaiFlag />
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Importación de Alimentos
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Productos tailandeses premium para distribución mayorista. Sabores
              auténticos directamente desde Tailandia.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <ThaiFlag />
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Distribución Mayorista
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Servicios confiables de distribución en toda la región.
            </p>
          </div>

          <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
            <ThaiFlag />
            <h2 className="text-2xl font-semibold text-[--primary] mb-4">
              Productos de Calidad
            </h2>
            <p className="text-[--text-secondary] leading-relaxed">
              Productos tailandeses auténticos con calidad garantizada.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

import Image from "next/image";
import { getBrands } from "@/app/functions/_serverActions";

export default async function Brands() {
  const result = await getBrands();
  const brands = result.success ? result.data : [];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Marcas Populares
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Explora nuestras marcas tailandesas de confianza
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {brands &&
            brands.map((brand) => (
              <a
                key={brand.id}
                href={`/comercio/brands/${brand.id}`}
                className="group block"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={brand.logoUrl || ""}
                    alt={brand.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 mb-1">
                    {brand.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {brand.products?.length || 0} productos
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

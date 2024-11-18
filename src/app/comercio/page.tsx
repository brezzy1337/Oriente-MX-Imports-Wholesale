import Image from 'next/image';
import { getCategories } from '@/app/functions/_serverActions';

export default async function Catalog() {
  const result = await getCategories();
  const categories = result.success ? result.data : [];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Sabores de Tailandia
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Descubre auténticos productos tailandeses para tu cocina
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-2xl mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group block"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-1">
                  {category.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {category.count} productos
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

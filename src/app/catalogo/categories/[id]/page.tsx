import Image from 'next/image';
import Link from 'next/link';
import { getCategoryProducts } from '@/app/functions/_serverActions';

type Params = Promise<{ id: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  return {
    title: `Category ${id}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Params
}) {
  const { id } = await params;

  const result = await getCategoryProducts(id);
  const products = result.success && result.data ? result.data : [];

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
            Category Not Found
          </h1>
        </div>
      </div>
    );
  }

  const category = products[0].category;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          {category.name}
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          {category.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link 
              href={`/catalogo/products/${product.id}`}
              key={product.id} 
              className="group block cursor-pointer"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.imageUrl || ''}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-1">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {product.unitSize}
                </p>
                <p className="text-sm text-gray-500">
                  {product.brand.name}
                </p>
              </div>
            </Link>
          ))}        </div>
      </div>
    </div>
  );
}

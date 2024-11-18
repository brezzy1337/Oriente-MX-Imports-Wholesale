import Image from 'next/image';
import { getProducts } from '@/app/functions/_serverActions';

export default async function BrandPage({ params }: { params: { id: string } }) {
  const result = await getProducts();
  const products = result.success && result.data ? 
    result.data.filter(product => product.brandId === params.id) : 
    [];

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
            Brand Not Found
          </h1>
        </div>
      </div>
    );
  }

  const brand = products[0].brand;

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          {brand.name}
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Productos de {brand.name}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.imageUrl || '/images/placeholder.jpg'}
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
                {/* <p className="text-sm text-gray-500"> */}
                  {/* ${product.price.toFixed(2)} */}
                {/* </p> */}
                <p className="text-sm text-gray-500">
                  {product.unitSize}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { getProduct } from '@/app/functions/_serverActions';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Params = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Params) {
  const { success, data: product, error } = await getProduct(params.id);

  if (!success || !product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Error</h1>
          <p>{error || 'Failed to load product'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Product Image */}
        <div className="relative h-[400px] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain rounded-lg"
          />
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="space-y-4">
            <p className="text-gray-700">{product.description}</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Unit Size</h3>
                <p className="text-gray-600">{product.unitSize}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Case Size</h3>
                <p className="text-gray-600">{product.caseSize}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Brand</h3>
              <p className="text-gray-600">{product.brand.name}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Category</h3>
              <p className="text-gray-600">{product.category.name}</p>
            </div>
          </div>

          <Button 
            className="w-full md:w-auto"
            size="lg"
          >
            Contact Us About This Product
          </Button>
        </div>
      </div>
    </div>
  );
}

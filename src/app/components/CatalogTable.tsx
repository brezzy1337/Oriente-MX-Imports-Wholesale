'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProducts } from '@/app/functions/_serverActions';
import dynamic from 'next/dynamic';

interface products {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  unitSize: string;
  caseSize: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}


export default function CatalogTable() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  interface ApiResponse {
    success: boolean;
    data: products[];
    error?: string;
  }

  const fetchProducts = async () => {
    const result = await getProducts() as ApiResponse;
    if (result.success && result.data) {
      setProducts(result.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Product Catalog</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit Size</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Size</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-20 h-20 relative">
                    <Image
                      src={product.imageUrl || '/placeholder.png'}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.unitSize}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.caseSize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-end">
        <DownloadPDFButton products={products} />
      </div>
    </div>
  );
}

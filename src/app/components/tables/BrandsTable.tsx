'use client';

import { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { getBrands, deleteBrand} from "@/app/functions/_serverActions";
import EditBrand from "../forms/EditBrand";

export default function BrandsTable() {
  const [brands, setBrands] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingBrand, setEditingBrand] = useState<any>(null);

  const fetchBrands = async () => {
    const result = await getBrands();
    if (result.success && result.data) {
      setBrands(result.data);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this brand?')) {
      // TODO: Implement delete brand server action
      deleteBrand(id);
      await fetchBrands(); // Refresh the list after deletion
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="mt-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {brands?.map((brand) => (
                <tr key={brand.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setEditingBrand(brand)}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PencilIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(brand.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{brand.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{brand.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{brand.products?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {editingBrand && (
        <EditBrand
          brand={editingBrand}
          isOpen={!!editingBrand}
          onClose={() => setEditingBrand(null)}
          onUpdate={fetchBrands}
        />
      )}
    </>
  );
}

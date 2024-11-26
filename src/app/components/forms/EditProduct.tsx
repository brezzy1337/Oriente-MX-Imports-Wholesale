'use client';

import { useState } from 'react';
import { uploadToVercelBlob } from '@/app/utils/imageUtils';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { updateProduct } from '@/app/functions/_serverActions';
import Image from 'next/image';

interface EditProductProps {
  product: {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    unitSize: string;
    caseSize: string;
    brandId: string;
    imageUrl: string;
    status: 'ACTIVE' | 'DRAFT' | 'ARCHIVED';
    featured: boolean;
  };
  isOpen: boolean;
  onClose: () => void;
  onUpdate: () => void;
}

export default function EditProduct({ product, isOpen, onClose, onUpdate }: EditProductProps) {
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    categoryId: product.categoryId,
    unitSize: product.unitSize,
    caseSize: product.caseSize,
    brandId: product.brandId,
    imageUrl: product.imageUrl,
    status: product.status,
    featured: product.featured || false,
  });
  const [imagePreview, setImagePreview] = useState(product.imageUrl);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Show local preview immediately
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);

        // Upload to Vercel Blob
        const blobUrl = await uploadToVercelBlob(file, formData.imageUrl);
        setFormData({ ...formData, imageUrl: blobUrl });
        alert(`Image uploaded successfully ${formData.imageUrl}` );
      } catch (error) {
        console.error('Failed to upload image:', error);
        alert('Failed to upload image');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await updateProduct(product.id, formData);
    if (result.success) {
      onUpdate();
      onClose();
      alert('Product Updated')
    } else {
      alert('Failed to update product');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-[#FFFFFF] p-6">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-medium">Edit Product</Dialog.Title>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 bg-[#FFFFFF]">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input  
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Unit Size</label>
              <input
                type="text"
                value={formData.unitSize}
                onChange={(e) => setFormData({ ...formData, unitSize: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Case Size</label>
              <input
                type="text"
                value={formData.caseSize}
                onChange={(e) => setFormData({ ...formData, caseSize: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Product Image</label>
              <div className="mt-1 flex items-center space-x-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                  {imagePreview && (
                    <Image
                      src={imagePreview} 
                      alt="Product preview" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-sm file:font-semibold
                      file:bg-indigo-50 file:text-indigo-700
                      hover:file:bg-indigo-100"
                  />
                  <input
                    type="text"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Or enter image URL directly"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as 'ACTIVE' | 'DRAFT' | 'ARCHIVED' })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="ACTIVE">Active</option>
                <option value="DRAFT">Draft</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="featured" className="ml-2 block text-sm text-gray-900">
                Featured Product
              </label>
            </div>

            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Save Changes
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

'use client';

import EmployeeSignIn from '@/components/forms/EmployeeSignIn';
import CreateBrand from '@/components/forms/CreateBrand';
import CreateCategory from '@/components/forms/CreateCategory';
import CreateProduct from '@/components/forms/CreateProduct';
import { useState } from 'react';

export default function AdminPage() {
  const [activeForm, setActiveForm] = useState<'brand' | 'category' | 'product'>('brand');

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <EmployeeSignIn />
        
        <div className="mt-8">
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveForm('brand')}
              className={`px-4 py-2 rounded ${
                activeForm === 'brand' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Create Brand
            </button>
            <button
              onClick={() => setActiveForm('category')}
              className={`px-4 py-2 rounded ${
                activeForm === 'category' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Create Category
            </button>
            <button
              onClick={() => setActiveForm('product')}
              className={`px-4 py-2 rounded ${
                activeForm === 'product' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Create Product
            </button>
          </div>

          {activeForm === 'brand' && <CreateBrand />}
          {activeForm === 'category' && <CreateCategory />}
          {activeForm === 'product' && <CreateProduct />}
        </div>
      </div>
    </div>
  );
}

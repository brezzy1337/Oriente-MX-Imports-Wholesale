'use client';

import { useState } from 'react';
// import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {

  interface User {
    role: string;
  }

  // const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('products');

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (!session || !['EMPLOYEE', 'ADMIN'].includes((session.user as User)?.role)) {
  //   router.push('/auth/signin');
  //   return null;
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          
          <div className="mt-4">
            <nav className="flex space-x-4">
              <button
                onClick={() => setActiveTab('products')}
                className={`px-3 py-2 rounded-md ${
                  activeTab === 'products' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab('brands')}
                className={`px-3 py-2 rounded-md ${
                  activeTab === 'brands' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Brands
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                className={`px-3 py-2 rounded-md ${
                  activeTab === 'categories' 
                    ? 'bg-gray-900 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Categories
              </button>
            </nav>
          </div>

          <div className="mt-6">
            {activeTab === 'products' && (
              <div className="bg-white shadow sm:rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Product Management</h2>
                {/* Product management UI will go here */}
              </div>
            )}
            
            {activeTab === 'brands' && (
              <div className="bg-white shadow sm:rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Brand Management</h2>
                {/* Brand management UI will go here */}
              </div>
            )}
            
            {activeTab === 'categories' && (
              <div className="bg-white shadow sm:rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Category Management</h2>
                {/* Category management UI will go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
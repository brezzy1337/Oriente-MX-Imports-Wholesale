'use client';

import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { createProduct, getBrands, getCategories } from '@/app/functions/_serverActions';

export default function CreateProduct() {

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    // price: 0,
    categoryId: '',
    unitSize: '',
    caseSize: '',
    brandId: '',
    imageUrl: '',
    status: 'ACTIVE' as 'ACTIVE' | 'INACTIVE',
    country: 'Thailand' as 'Thailand' | 'Vietnam',
    featured: false
  });

  const [brands, setBrands] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const [brandsResult, categoriesResult] = await Promise.all([
        getBrands(),
        getCategories()
      ]);

      if (brandsResult.success && brandsResult.data) setBrands(brandsResult.data);
      if (categoriesResult.success && categoriesResult.data) setCategories(categoriesResult.data);
    };

    fetchData();
  }, []);

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // const mutation = trpc.postProduct.useMutation({
  //   onSuccess: () => {
  //     setFormData({
  //       name: '',
  //       description: '',
  //       price: '',
  //       categoryId: '',
  //       unitSize: '',
  //       caseSize: '',
  //       brandId: '',
  //       imageUrl: '',
  //       status: 'ACTIVE'
  //     });
  //     alert('Product created successfully!');
  //   },
  //   onError: (error) => {
  //     alert(`Error creating product: ${error.message}`);
  //   },
  // });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (fileInputRef.current?.files?.[0]) {
      setIsUploading(true);
      try {
        const file = fileInputRef.current.files[0];
        const filename = encodeURIComponent(file.name);
        const res = await fetch(`/api/upload?filename=${filename}`, {
          method: "POST",
          body: file,
        });

        const blob = await res.json();

        formData.imageUrl = blob.url;

        const result = await createProduct(formData);


        if (result.success) {
          alert("Category created successfully!");
        } else {
          alert("Error creating category.");
        }

      } catch (error) {
        alert(`${error}`);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">Create New Product</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      {/* <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div> */}

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Unit Size
        </label>
        <input
          type="text"
          name="unitSize"
          value={formData.unitSize}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Case Size
        </label>
        <input
          type="text"
          name="caseSize"
          value={formData.caseSize}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <select
          name="brandId"
          value={formData.brandId}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        >
          <option value="">Select a brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
        Country Of Origin
        </label>
        <select
          name="status"
          value={formData.country}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="Thailand">Thailand</option>
          <option value="Vietnam">Vietnam</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Product Image
        </label>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="mt-1 block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="ACTIVE">Active</option>
          <option value="DRAFT">Draft</option>
          <option value="ARCHIVED">Archived</option>
        </select>
      </div>

      <button
        type="submit"
        // disabled={mutation.isPending || isUploading}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Submit
        {/*isUploading
          ? "Uploading..."
          : mutation.isPending
          ? "Creating..."
          : "Create Product" */}
      </button>
    </form>
  );
}
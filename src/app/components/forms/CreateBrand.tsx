// 'use client';

// import { trpc } from "../../api/_trpc/providers/client"
// import { useState } from 'react';

// export default function CreateBrand() {

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [logoUrl, setLogoUrl] = useState('');

//   const mutation = trpc.postBrand.useMutation({
//     onSuccess: () => {
//       setName('');
//       setDescription('');
//       setLogoUrl('');
//       alert('Brand created successfully!');
//     },
//     onError: (error) => {
//       alert(`Error creating brand: ${error.message}`);
//     },
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     mutation.mutate({ name, description, logoUrl });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow">
//       <h2 className="text-xl font-bold mb-4">Create New Brand</h2>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//           required
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-medium text-gray-700">Logo URL</label>
//         <input
//           type="text"
//           value={logoUrl}
//           onChange={(e) => setLogoUrl(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
//         />
//       </div>
//       <button
//         type="submit"
//         disabled={mutation.isPending}
//         className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
//       >
//         {mutation.isPending ? 'Creating...' : 'Create Brand'}
//       </button>
//     </form>
//   );
// }
"use client";

import { trpc } from "../../api/_trpc/providers/client";
import { useState, useRef } from "react";

export default function CreateBrand() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    logoUrl: "",
  });

  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mutation = trpc.postBrand.useMutation({
    onSuccess: () => {
      setFormData({
        name: "",
        description: "",
        logoUrl: "",
      });
      alert("Brand created successfully!");
    },
    onError: (error) => {
      alert(`Error creating brand: ${error.message}`);
    },
  });

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

        formData.logoUrl = blob.url;

        const data = {
          name: formData.name,
          description: formData.description,
          logoUrl: formData.logoUrl,
        };

        mutation.mutate(data);

      } catch (error) {
        alert(`${error}`);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">Create New Brand</h2>

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

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Brand Logo
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

      <button
        type="submit"
        disabled={mutation.isPending || isUploading}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isUploading
          ? "Uploading..."
          : mutation.isPending
          ? "Creating..."
          : "Create Brand"}
      </button>
    </form>
  );
}

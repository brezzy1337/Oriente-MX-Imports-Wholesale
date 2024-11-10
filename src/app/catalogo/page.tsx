'use client';

import { useState } from 'react';

export default function CatalogoPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    mobile: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{
        backgroundImage: "url('/images/thai-foods.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-2xl backdrop-blur-sm bg-white/30 p-8 rounded-2xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">
          Request Our Catalogue
        </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/70 rounded-full border-none focus:ring-2 focus:ring-blue-400 focus:bg-white/90 transition-all duration-300 placeholder-gray-500"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile (WhatsApp/Line/Viber/WeChat)
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600/90 text-white py-4 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-lg"
            >
              Request Catalogue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

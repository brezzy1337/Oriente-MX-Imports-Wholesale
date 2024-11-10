"use client";

import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#D32F2F] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
            <p className="text-gray-600">
              Have questions about our products or services? We're here to help!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaPhone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaWhatsapp className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+34 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaEnvelope className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">info@deliasya.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Calle Example 123<br />
                    28001 Madrid, Spain
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D32F2F] text-white py-4 px-6 rounded-lg hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.354652555768!2d-3.7037929!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2s!4v1699564178461!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.',
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor, inténtalo más tarde.',
      });
    } finally {
      setIsLoading(false);
    }
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
      <div className="relative h-[300px] w-[100%] mx-auto lg:h-[500px]">
        <Image
          src="/images/thailand-design.png"
          alt="Thai Supermarket" 
          fill
          className="object-cover"
          priority
        />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto px-2">
            Estamos aquí para ayudarte y responder cualquier pregunta que tengas.
            Esperamos saber de ti.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Ponte en Contacto</h2>
            <p className="text-gray-600 text-sm md:text-base">
              ¿Tienes preguntas sobre nuestros productos o servicios? ¡Estamos aquí para ayudarte!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaPhone className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">984 316 0169</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaWhatsapp className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">WhatsApp</h3>
                  <p className="text-gray-600">+52 984 316 0169</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaEnvelope className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Correo</h3>
                  <p className="text-gray-600">deliasyagrupo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#D32F2F] p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Dirección</h3>
                  <p className="text-gray-600">
                    Manzana 40 lote 6, Avenida Kukulkan,<br />
                    77760, Tulum, QR, Mexico
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 md:mb-8">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu nombre completo"
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de la Empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa el nombre de tu empresa"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu correo electrónico"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Número de Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ingresa tu número de teléfono"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#D32F2F] focus:border-transparent placeholder-gray-400"
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#D32F2F] text-white py-4 px-6 rounded-lg hover:bg-[#B71C1C] transition-all duration-300 transform hover:scale-[1.02] font-semibold text-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 md:mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.1984!2d-87.47102009999999!3d20.2076004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4fd7f701da68a7%3A0xab4b7d55b516590f!2sSukhothai%20Tulum%20-%20Thai%20Street%20Food!5e0!3m2!1sen!2s!4v1732334861446!5m2!1sen!2s"
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

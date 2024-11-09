'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <button onClick={onClose} className="mb-4 text-gray-600">
            ✕
          </button>
          <nav className="space-y-4">
            <Link href="/" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Inicio
            </Link>
            <Link href="/tienda" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Tienda
            </Link>
            <Link href="/nosotros" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Nosotros
            </Link>
            <Link href="/contacto" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Contacto
            </Link>
            <Link href="/comercio" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Comercio
            </Link>
            <Link href="/catalogo" className="block text-gray-800 hover:text-[#D32F2F]" onClick={onClose}>
              Catálogo
            </Link>
          </nav>
          <div className="mt-8 space-x-4">
            <a href="mailto:info@deliasya.com" className="text-[#D32F2F] hover:text-[#FFD54F]">
              <FaEnvelope className="inline-block w-6 h-6" />
            </a>
            <a href="tel:+525555555555" className="text-[#D32F2F] hover:text-[#FFD54F]">
              <FaPhone className="inline-block w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#D32F2F] hover:text-[#FFD54F]">
              <FaLinkedin className="inline-block w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;

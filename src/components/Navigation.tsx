'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

 const ShoppingCart = dynamic(() => import('@/components/ShoppingCart'), {
  ssr: false,
})

const SideMenu = dynamic(() => import('@/components/SideMenu'), {
  ssr: false,
})

const Navigation = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-30 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsSideMenuOpen(true)}
            className="p-2 hover:text-[#D32F2F] transition-colors md:hidden"
          >
            <FaBars className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-[#D32F2F] text-xl">
                Deli Asya
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link href="/" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Inicio
            </Link>
            <Link href="/tienda" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Tienda
            </Link>
            <Link href="/nosotros" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Contacto
            </Link>
            <Link href="/comercio" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Comercio
            </Link>
            <Link href="/catalogo" className="text-gray-800 hover:text-[#D32F2F] transition-colors">
              Catálogo
            </Link>
          </div>

          <ShoppingCart />
        </div>
      </div>

      <SideMenu 
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
    </nav>
  );
};

export default Navigation;

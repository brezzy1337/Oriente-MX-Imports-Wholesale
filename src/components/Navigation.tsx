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
          <button
            onClick={() => setIsSideMenuOpen(true)}
            className="p-2 hover:text-[#D32F2F] transition-colors"
          >
            <FaBars className="w-6 h-6" />
          </button>

          <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center">
              <span className="font-semibold text-[#D32F2F] text-xl">
                Deli Asya
              </span>
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

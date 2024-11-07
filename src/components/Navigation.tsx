'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import SideMenu from './SideMenu';
import ShoppingCart from './ShoppingCart';

const Navigation = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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

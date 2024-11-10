import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-20">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo.png"
              alt="Deli Asya Logo"
              width={180}
              height={60}
              className="h-auto"
            />
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl">
            {/* Company Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Company</h3>
              <Link href="/about" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                About Us
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                Privacy Notice
              </Link>
            </div>

            {/* Customer Service Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Customer Service</h3>
              <Link href="/branches" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                Branches
              </Link>
            </div>

            {/* Help Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Help</h3>
              <Link href="/contact" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                Contact Us
              </Link>
              <Link href="tel:+1234567890" className="text-gray-600 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                <FaPhone className="w-4 h-4" /> Call Us
              </Link>
              <Link href="mailto:contact@deliasya.com" className="text-gray-600 hover:text-[#D32F2F] transition-colors flex items-center gap-2">
                <MdEmail className="w-4 h-4" /> Email Us
              </Link>
            </div>

            {/* Store Column */}
            <div className="flex flex-col space-y-3">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Store</h3>
              <Link href="/products" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                Products
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
                Catalog
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-8">
            <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://wa.me/yourphonenumber" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 mt-8">© 2024 Deli Asya. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

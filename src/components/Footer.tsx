import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-20">
      <div className="container-custom">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <Link href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link href="https://wa.me/yourphonenumber" target="_blank" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <FaWhatsapp className="w-6 h-6" />
            </Link>
            <Link href="mailto:contact@deliasya.com" className="text-gray-600 hover:text-[#D32F2F] transition-colors">
              <MdEmail className="w-6 h-6" />
            </Link>
          </div>
          <p className="text-center text-gray-600">© 2024 Deli Asya. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

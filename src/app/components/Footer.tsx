import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#D32F2F] border-t border-gray-100 py-12 mt-20">
        <div className="flex flex-col space-y-8 px-4 md:px-8 lg:px-12">
          {/* Main Footer Content */}
          {/* <div className="w-screen"> */}
          {/* Logo */}
          <div className="mb-8 md:mb-0 flex lg:w-auto justify-center">
            <Image
              src="/images/logo.png"
              alt="Deli Asya Logo"
              width={140}
              height={140}
              className="h-auto"
            />
          </div>
            {/* <div className="flex md:flex-cols-5 gap-60 w-full justify-center space-y-1"> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 lg:gap-4 md:py-4 lg:px-24 w-full justify-center lg:justify-items-center">
            {/* Company Column */}
            <div className="flex flex-col space-y-1">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Compañía
              </h3>
              <Link
                href="/nosotros"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Aviso de privacidad
              </Link>
            </div>

            {/* Customer Service Column */}
            <div className="flex flex-col space-y-1">
              {/* <h3 className="font-semibold text-lg mb-2 text-gray-800">
              </h3> */}
              <Link
                href="/mapa-del-sitio"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Mapa del sitio
              </Link>
            </div>

            {/* Help Column */}
            <div className="flex flex-col space-y-1">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Ayuda</h3>
              <Link
                href="/contacto"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Contacto
              </Link>
            </div>

            {/* Store Column */}
            <div className="flex flex-col space-y-1">
              {/* <h3 className="font-semibold text-lg mb-2 text-gray-800">
                Store
              </h3> */}
              <Link
                href="/comercio"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Comercio
              </Link>
              {/* <Link
                href="/catalog"
                className="text-gray-600 hover:text-[#D32F2F] transition-colors"
              >
                Catalog
              </Link> */}
            </div>
          {/* </div> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-8 items-center justify-center">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="text-gray-600 hover:text-[#D32F2F] transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="text-gray-600 hover:text-[#D32F2F] transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/yourphonenumber"
              target="_blank"
              className="text-gray-600 hover:text-[#D32F2F] transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
            </Link>
            <Link
              href="tel:+1234567890"
              className="text-gray-600 hover:text-[#D32F2F] transition-colors flex items-center gap-2"
            >
              <FaPhone className="w-4 h-4" /> 
            </Link>
            <Link
              href="mailto:contact@deliasya.com"
              className="text-gray-600 hover:text-[#D32F2F] transition-colors flex items-center gap-2"
            >
              <MdEmail className="w-5 h-5" /> 
            </Link>
          {/* Copyright */}
          </div>
          <p className="text-center text-gray-600 mt-8">
            © 2024 DeliAsya. All rights reserved
          </p>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;

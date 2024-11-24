"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "DeliAsay",
    heading: "DeliAsya",
    description: "Deliasya es importador y distribuidor de productos auténticos de la cocina tailandesa, llevando los sabores tradicionales de Tailandia directamente a tu mesa en Mexico.",
    image: "/images/thailand-bangkok.jpg",
    buttonText: "Conócenos",
    buttonLink: "/nosotros"
  },
  {
    id: 2,
    title: "Productos",
    heading: "Nuestros Productos",
    description: "Deliasya trae lo mejor de Tailandia a tu mesa: leche de coco, pasta de curry, salsa y fideos de arroz auténticos.",
    image: "/images/Thai-supermarket.jpg",
    buttonText: "Ver Catálogo",
    buttonLink: "/catalogo"
  },
  {
    id: 3,
    title: "Valores",
    heading: "Valores",
    description: "En Deliasya garantizamos la máxima calidad de nuestros productos, seleccionados cuidadosamente para ofrecerte lo mejor de la gastronomía asiática.",
    image: "/images/thai-fresh-fruit.png",
    buttonText: "Nuestras Marcas",
    buttonLink: "/catalogo/brands"
  },
  // {
  //   id: 4,
  //   title: "Distribución",
  //   heading: "Servicio Nacional",
  //   description: "Servicios confiables de distribución mayorista en todo México, asegurando que tu negocio nunca se quede sin existencias.",
  //   image: "/images/truck.jpg",
  //   buttonText: "Contáctanos",
  //   buttonLink: "/contact"
  // }
];

export default function HeroGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: 'cover' }}
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-[#FFFFFF] text-center px-4">
            {/* <h2 className="text-xl font-semibold mb-2">{slide.title}</h2> */}
            <h1 className="text-5xl font-bold mb-4">{slide.heading}</h1>
            <p className="max-w-2xl text-lg mb-8">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="bg-primary text-gray-900 px-8 py-3 rounded-full font-semibold 
                       hover:bg-gray-100 transition-colors"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
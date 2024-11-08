"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "About Us",
    heading: "Deli Asya",
    description: "We are your premier Thai food wholesale partner in Mexico, dedicated to importing authentic Thai products directly from Thailand. Our mission is to bring the finest Thai ingredients and flavors to Mexican kitchens and businesses.",
    image: "/images/thailand-bangkok.jpg",
    buttonText: "Learn More",
    buttonLink: "/about"
  },
  {
    id: 2,
    title: "Our Products",
    heading: "Authentic Thai Selection",
    description: "Discover our extensive range of premium Thai products, from essential sauces to specialty ingredients.",
    image: "/images/Thai-supermarket.jpg",
    buttonText: "View Catalog",
    buttonLink: "/comercio"
  },
  {
    id: 3,
    title: "Quality Guarantee",
    heading: "Premium Quality",
    description: "We ensure all our products meet the highest standards of quality and authenticity.",
    image: "/images/thai-fresh-fruit.jpg",
    buttonText: "Our Brands",
    buttonLink: "/comercio/brands"
  },
  {
    id: 4,
    title: "Distribution",
    heading: "Nationwide Service",
    description: "Reliable wholesale distribution services across Mexico, ensuring your business never runs out of stock.",
    image: "/images/truck.jpg",
    buttonText: "Contact Us",
    buttonLink: "/contact"
  }
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
          
          <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
            <h1 className="text-5xl font-bold mb-4">{slide.heading}</h1>
            <p className="max-w-2xl text-lg mb-8">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold 
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

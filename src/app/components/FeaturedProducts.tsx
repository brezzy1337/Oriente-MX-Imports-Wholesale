'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Suspense } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFeaturedProducts } from '../functions/_serverActions';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface Product {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  unitSize: string;
  caseSize: string;
  imageUrl: string;
  brand: {
    name: string;
  };
  category: {
    name: string;
  };
}

const FeaturedProducts = () => {
  const { data: featuredProducts = [], isLoading } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: async () => {
      const result = await getFeaturedProducts();
      if (result.success && result.data) {
        return result.data as Product[];
      }
      throw new Error(result.error || 'Failed to fetch products');
    },
    staleTime: 1000 * 60 * 5, // Data stays fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Cache persists for 30 minutes
  });

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        await fetch('/api/featured-products');
      } catch (error) {
        console.error('Error loading featured products:', error);
      }
    };
    loadFeaturedProducts();
  }, []);

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  lazyload: true,
  waitForAnimate: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

return (
  <section className="py-16 bg-white width-full">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center mb-12">Productos</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="px-2">
              <Link href={`/catalogo/products/${product.id}`}>
                <div className="text-align-start">
                  <div className="relative h-32 w-full mb-4">
                    <Image
                      src={(product.imageUrl)}
                      alt={product.name}
                      fill
                      loading='eager'
                      priority={true}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-medium mb-1 text-center">{product.name}</h3>
                  <h3 className="font-medium mb-1 text-center">{product.unitSize}</h3>
                  {/* <div className="text-sm text-gray-500 pb-8 text-center">{product.caseSize}</div> */}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </Suspense>
    </div>
  </section>
);
};
export default FeaturedProducts;

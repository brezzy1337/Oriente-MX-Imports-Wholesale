'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getFeaturedProducts } from '../functions/_serverActions';
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
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        const result = await getFeaturedProducts();
        if (result.success) {
          setFeaturedProducts(result.data);
        } else {
          console.error('Failed to load featured products:', result.error);
        }
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <Slider {...settings}>
          {featuredProducts.map((product) => (
            <div key={product.id} className="px-2">
              <Link href={`/comercio/products/${product.id}`}>
                <div className="text-align-start">
                  <div className="relative h-32 w-full mb-4">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-medium mb-1">{product.name} {product.unitSize}</h3>
                  <div className="text-sm text-gray-500 pb-8">{product.caseSize}</div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedProducts;

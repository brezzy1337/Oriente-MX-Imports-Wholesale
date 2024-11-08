import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
}

export default function Kikkoman() {
  const products: Product[] = [
    {
      id: 1,
      name: "Salsa de soja",
      brand: "KIKKOMAN",
      size: "1L",
      price: 7.99,
      image: "/images/products/kikkoman/soy-sauce.jpg"
    },
    {
      id: 2,
      name: "Salsa teriyaki",
      brand: "KIKKOMAN",
      size: "975ml",
      price: 8.99,
      image: "/images/products/kikkoman/teriyaki.jpg"
    },
    {
      id: 3,
      name: "Salsa ponzu",
      brand: "KIKKOMAN",
      size: "600ml",
      price: 9.99,
      image: "/images/products/kikkoman/ponzu.jpg"
    },
    {
      id: 4,
      name: "Vinagre de arroz",
      brand: "KIKKOMAN",
      size: "500ml",
      price: 5.99,
      image: "/images/products/kikkoman/rice-vinegar.jpg"
    },
    {
      id: 5,
      name: "Salsa de ostras",
      brand: "KIKKOMAN",
      size: "510g",
      price: 6.99,
      image: "/images/products/kikkoman/oyster-sauce.jpg"
    },
    {
      id: 6,
      name: "Salsa tonkatsu",
      brand: "KIKKOMAN",
      size: "500ml",
      price: 7.99,
      image: "/images/products/kikkoman/tonkatsu.jpg"
    },
    {
      id: 7,
      name: "Salsa yakiniku",
      brand: "KIKKOMAN",
      size: "475ml",
      price: 7.99,
      image: "/images/products/kikkoman/yakiniku.jpg"
    },
    {
      id: 8,
      name: "Salsa sukiyaki",
      brand: "KIKKOMAN",
      size: "500ml",
      price: 8.99,
      image: "/images/products/kikkoman/sukiyaki.jpg"
    },
    {
      id: 9,
      name: "Salsa tempura",
      brand: "KIKKOMAN",
      size: "300ml",
      price: 6.99,
      image: "/images/products/kikkoman/tempura.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          KIKKOMAN
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Salsas y condimentos japoneses de primera calidad
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group block"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-1">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mb-1">
                  {product.size}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

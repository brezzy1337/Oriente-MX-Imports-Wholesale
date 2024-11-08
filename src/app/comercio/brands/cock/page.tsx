import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
}

export default function Cock() {
  const products: Product[] = [
    {
      id: 1,
      name: "Salsa de pescado",
      brand: "COCK",
      size: "725ml",
      price: 5.99,
      image: "/images/products/cock/fish-sauce.jpg"
    },
    {
      id: 2,
      name: "Salsa de soja clara",
      brand: "COCK",
      size: "700ml",
      price: 4.99,
      image: "/images/products/cock/light-soy-sauce.jpg"
    },
    {
      id: 3,
      name: "Salsa de soja oscura",
      brand: "COCK",
      size: "700ml",
      price: 4.99,
      image: "/images/products/cock/dark-soy-sauce.jpg"
    },
    {
      id: 4,
      name: "Salsa de ostras",
      brand: "COCK",
      size: "800g",
      price: 6.99,
      image: "/images/products/cock/oyster-sauce.jpg"
    },
    {
      id: 5,
      name: "Pasta de tamarindo",
      brand: "COCK",
      size: "454g",
      price: 3.99,
      image: "/images/products/cock/tamarind-paste.jpg"
    },
    {
      id: 6,
      name: "Salsa sriracha",
      brand: "COCK",
      size: "740ml",
      price: 5.99,
      image: "/images/products/cock/sriracha.jpg"
    },
    {
      id: 7,
      name: "Salsa de chile dulce",
      brand: "COCK",
      size: "800g",
      price: 4.99,
      image: "/images/products/cock/sweet-chili.jpg"
    },
    {
      id: 8,
      name: "Vinagre de arroz",
      brand: "COCK",
      size: "700ml",
      price: 3.99,
      image: "/images/products/cock/rice-vinegar.jpg"
    },
    {
      id: 9,
      name: "Salsa pad thai",
      brand: "COCK",
      size: "730ml",
      price: 5.99,
      image: "/images/products/cock/pad-thai-sauce.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          COCK
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Salsas y condimentos esenciales de la cocina tailandesa
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

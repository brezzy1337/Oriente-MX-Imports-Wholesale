import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
}

export default function KumChun() {
  const products: Product[] = [
    {
      id: 1,
      name: "Salsa hoisin",
      brand: "KUM CHUN",
      size: "2.27KG",
      price: 12.99,
      image: "/images/products/kum-chun/hoisin-sauce.jpg"
    },
    {
      id: 2,
      name: "Pasta de soja amarilla",
      brand: "KUM CHUN",
      size: "500g",
      price: 5.99,
      image: "/images/products/kum-chun/yellow-bean-sauce.jpg"
    },
    {
      id: 3,
      name: "Salsa de ciruela",
      brand: "KUM CHUN",
      size: "425g",
      price: 6.99,
      image: "/images/products/kum-chun/plum-sauce.jpg"
    },
    {
      id: 4,
      name: "Salsa de soja clara",
      brand: "KUM CHUN",
      size: "500ml",
      price: 4.99,
      image: "/images/products/kum-chun/light-soy-sauce.jpg"
    },
    {
      id: 5,
      name: "Salsa de soja oscura",
      brand: "KUM CHUN",
      size: "500ml",
      price: 4.99,
      image: "/images/products/kum-chun/dark-soy-sauce.jpg"
    },
    {
      id: 6,
      name: "Salsa de frijol negro",
      brand: "KUM CHUN",
      size: "510g",
      price: 5.99,
      image: "/images/products/kum-chun/black-bean-sauce.jpg"
    },
    {
      id: 7,
      name: "Salsa agridulce",
      brand: "KUM CHUN",
      size: "500ml",
      price: 5.99,
      image: "/images/products/kum-chun/sweet-sour-sauce.jpg"
    },
    {
      id: 8,
      name: "Salsa de ajo",
      brand: "KUM CHUN",
      size: "450g",
      price: 5.99,
      image: "/images/products/kum-chun/garlic-sauce.jpg"
    },
    {
      id: 9,
      name: "Salsa de ostras",
      brand: "KUM CHUN",
      size: "510g",
      price: 6.99,
      image: "/images/products/kum-chun/oyster-sauce.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          KUM CHUN
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Salsas y condimentos chinos tradicionales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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

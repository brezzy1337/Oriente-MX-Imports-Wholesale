import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
}

export default function AroyD() {
  const products: Product[] = [
    {
      id: 1,
      name: "Leche de coco",
      brand: "AROY D",
      size: "2.9L",
      price: 8.99,
      image: "/images/products/aroy-d/coconut-milk.jpg"
    },
    {
      id: 2,
      name: "Curry verde",
      brand: "AROY D",
      size: "1KG",
      price: 12.99,
      image: "/images/products/aroy-d/green-curry.jpg"
    },
    {
      id: 3,
      name: "Curry rojo",
      brand: "AROY D",
      size: "1KG",
      price: 12.99,
      image: "/images/products/aroy-d/red-curry.jpg"
    },
    {
      id: 4,
      name: "Curry amarillo",
      brand: "AROY D",
      size: "1KG",
      price: 12.99,
      image: "/images/products/aroy-d/yellow-curry.jpg"
    },
    {
      id: 5,
      name: "Curry panang",
      brand: "AROY D",
      size: "1KG",
      price: 12.99,
      image: "/images/products/aroy-d/panang-curry.jpg"
    },
    {
      id: 6,
      name: "Curry massaman",
      brand: "AROY D",
      size: "1KG",
      price: 12.99,
      image: "/images/products/aroy-d/massaman-curry.jpg"
    },
    {
      id: 7,
      name: "Sweet chili salsa",
      brand: "AROY D",
      size: "920G",
      price: 6.99,
      image: "/images/products/aroy-d/sweet-chili.jpg"
    },
    {
      id: 8,
      name: "Papel arroz 22cm",
      brand: "AROY D",
      size: "454G",
      price: 4.99,
      image: "/images/products/aroy-d/rice-paper.jpg"
    },
    {
      id: 9,
      name: "Canned bamboo sliced",
      brand: "AROY D",
      size: "2.95KG",
      price: 7.99,
      image: "/images/products/aroy-d/bamboo.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          AROY-D
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Productos auténticos de la marca líder tailandesa
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

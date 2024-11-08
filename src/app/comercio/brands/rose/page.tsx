import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  brand: string;
  size: string;
  price: number;
  image: string;
}

export default function Rose() {
  const products: Product[] = [
    {
      id: 1,
      name: "Arroz jazmín",
      brand: "ROSE",
      size: "4.5kg",
      price: 15.99,
      image: "/images/products/rose/jasmine-rice.jpg"
    },
    {
      id: 2,
      name: "Arroz glutinoso",
      brand: "ROSE",
      size: "1kg",
      price: 4.99,
      image: "/images/products/rose/sticky-rice.jpg"
    },
    {
      id: 3,
      name: "Fideos de arroz 3mm",
      brand: "ROSE",
      size: "400g",
      price: 3.99,
      image: "/images/products/rose/rice-noodles-3mm.jpg"
    },
    {
      id: 4,
      name: "Fideos de arroz 5mm",
      brand: "ROSE",
      size: "400g",
      price: 3.99,
      image: "/images/products/rose/rice-noodles-5mm.jpg"
    },
    {
      id: 5,
      name: "Tallarines pad thai",
      brand: "ROSE",
      size: "375g",
      price: 4.99,
      image: "/images/products/rose/pad-thai-noodles.jpg"
    },
    {
      id: 6,
      name: "Vermicelli de arroz",
      brand: "ROSE",
      size: "400g",
      price: 3.99,
      image: "/images/products/rose/rice-vermicelli.jpg"
    },
    {
      id: 7,
      name: "Harina de arroz",
      brand: "ROSE",
      size: "500g",
      price: 4.99,
      image: "/images/products/rose/rice-flour.jpg"
    },
    {
      id: 8,
      name: "Papel de arroz",
      brand: "ROSE",
      size: "400g",
      price: 5.99,
      image: "/images/products/rose/rice-paper.jpg"
    },
    {
      id: 9,
      name: "Chips de camarón",
      brand: "ROSE",
      size: "100g",
      price: 2.99,
      image: "/images/products/rose/prawn-crackers.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          ROSE
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Arroz y fideos premium de Tailandia
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

import Image from 'next/image';

export default function Brands() {
  const brands = [
    {
      id: 1,
      name: "AROY D",
      productCount: 45,
      image: "/images/brands/aroy-d.png",
      link: "/comercio/brands/aroy-d"
    },
    {
      id: 2,
      name: "KIKKOMAN",
      productCount: 32,
      image: "/images/brands/kikkoman.png",
      link: "/comercio/brands/kikkoman"
    },
    {
      id: 3,
      name: "KUM CHUN",
      productCount: 28,
      image: "/images/brands/kum-chun.jpg",
      link: "/comercio/brands/kum-chun"
    },
    {
      id: 4,
      name: "COCK",
      productCount: 25,
      image: "/images/brands/cock.jpg",
      link: "/comercio/brands/cock"
    },
    {
      id: 5,
      name: "ROSE",
      productCount: 30,
      image: "/images/brands/rose.jpg",
      link: "/comercio/brands/rose"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Marcas Populares
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Explora nuestras marcas tailandesas de confianza
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              className="group block"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-medium text-gray-900 mb-1">
                  {brand.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {brand.productCount} productos
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

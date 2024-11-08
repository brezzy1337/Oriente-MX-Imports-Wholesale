import Image from 'next/image';

export default function Catalog() {
  const categories = [
    {
      id: 1,
      name: "Marcas Populares",
      description: "Las mejores marcas de comida Thai",
      image: "/brands-thai.jpg", // You'll need to add this image
      link: "/comercio/brands"
    },
    {
      id: 2,
      name: "Alimentos",
      description: "Ingredientes auténticos Thai",
      image: "/foods-thai.jpg", // You'll need to add this image
      link: "/comercio/food"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4 text-[#D32F2F] text-center">
          Sabores de Tailandia
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Descubre auténticos productos tailandeses para tu cocina
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full h-[300px] bg-amber-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-[#D32F2F]/75" />
              </div>
              
              <div className="absolute bottom-0 w-full p-8 text-white bg-black/5">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-[#FFD54F] transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-200">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

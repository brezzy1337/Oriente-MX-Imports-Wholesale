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
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
          Sabores de Tailandia
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Descubre auténticos productos tailandeses para tu cocina
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200">
                {/* Replace with actual image component once added */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 w-full p-6 text-white">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
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

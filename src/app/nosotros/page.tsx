import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <Image
          src="/images/thai-supermarket.jpg"
          alt="Thai Supermarket"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Sobre Nosotros
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Deli Asya nació de la pasión por la auténtica cocina asiática y el deseo de 
              compartir los sabores únicos de Asia con la comunidad local. Desde nuestros 
              humildes comienzos, nos hemos convertido en un destino confiable para 
              productos asiáticos de alta calidad.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nos enorgullecemos de ofrecer una cuidadosa selección de productos 
              importados directamente de Asia, garantizando la autenticidad y calidad 
              que nuestros clientes merecen.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Nuestra Misión
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nuestra misión es ser el puente entre las tradiciones culinarias asiáticas 
              y nuestra comunidad local, ofreciendo productos auténticos y de alta calidad. 
              Nos esforzamos por proporcionar un servicio excepcional y conocimientos 
              expertos para ayudar a nuestros clientes a explorar y disfrutar de la 
              rica diversidad de la gastronomía asiática.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Calidad Garantizada
              </h3>
              <p className="text-gray-600">
                Seleccionamos cuidadosamente cada producto en nuestro inventario, 
                trabajando directamente con proveedores confiables para garantizar 
                la más alta calidad y autenticidad.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Servicio Personalizado
              </h3>
              <p className="text-gray-600">
                Nuestro equipo está comprometido a proporcionar un servicio 
                excepcional, ofreciendo asesoramiento experto y recomendaciones 
                personalizadas a cada cliente.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Nuestro Compromiso
            </h2>
            <p className="text-gray-600 leading-relaxed">
              En Deli Asya, nos comprometemos a mantener los más altos estándares 
              de calidad y servicio. Continuamente buscamos nuevas formas de mejorar 
              y expandir nuestra selección de productos para satisfacer las necesidades 
              de nuestra diversa clientela.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { getCategories, getProducts } from "@/app/functions/_serverActions";
import PDFDownload from "../components/PDFDownload";


export default async function Catalog() {

  const result = await getCategories();
  const categories = result.success ? result.data : [];
  const productsResult = await getProducts();
  const products = productsResult.success ? productsResult.data : [];
  
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center">
         Descargar Catalogo 
        </h1>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Descubre auténticos productos tailandeses para tu cocina
        </p>
        <div className="justify-center lg:max-w-3xl mx-auto">
          <PDFDownload products={products?.filter((product): product is any => product !== null) ?? []} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-2xl mx-auto">
          <a href="/catalogo/brands" className="group block">
            <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src="/images/Thai-supermarket.jpg"
                alt="Marcas"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-1">Marcas</h2>
              <p className="text-sm text-gray-500">
                Explora nuestras marcas tailandesas de confianza
              </p>
            </div>
          </a>
          {categories &&
            categories.map((category) => (
              <a
                key={category.id}
                href={`/catalogo/categories/${category.id}`}
                className="group block"
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-lg mb-4">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-medium text-gray-900 mb-1">
                    {category.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Ver productos ({category.products.length})
                  </p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

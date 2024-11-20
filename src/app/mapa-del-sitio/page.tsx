import Link from "next/link";

export default function SiteMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mapa del Sitio</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Páginas Principales</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="text-blue-600 hover:underline">Inicio</Link></li>
            <li><Link href="/nosotros" className="text-blue-600 hover:underline">Nosotros</Link></li>
            <li><Link href="/contacto" className="text-blue-600 hover:underline">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Comercio</h2>
          <ul className="space-y-2">
            <li><Link href="/comercio" className="text-blue-600 hover:underline">Tienda</Link></li>
            <li><Link href="/comercio/products" className="text-blue-600 hover:underline">Productos</Link></li>
            <li><Link href="/comercio/categories" className="text-blue-600 hover:underline">Categorías</Link></li>
            <li><Link href="/comercio/brands" className="text-blue-600 hover:underline">Marcas</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-blue-600 hover:underline">Aviso de Privacidad</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

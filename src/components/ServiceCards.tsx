import { IconTruck, IconBox, IconStars } from '@tabler/icons-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1">
    <div className="flex items-start gap-4 minmax=[0, .25fr] justify-content-center">
      <div className="text-[--primary] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h2 className="text-xl font-semibold text-[--primary] mb-2">
          {title}
        </h2>
        <p className="text-[--text-secondary] leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export default function ServiceCards() {
  const services = [
    {
      title: "Importación de Alimentos",
      description: "Productos tailandeses premium para distribución mayorista. Sabores auténticos directamente desde Tailandia.",
      icon: <IconBox size={28} strokeWidth={1.5} />
    },
    {
      title: "Distribución Mayorista",
      description: "Servicios confiables de distribución en toda la región.",
      icon: <IconTruck size={28} strokeWidth={1.5} />
    },
    {
      title: "Productos de Calidad",
      description: "Productos tailandeses auténticos con calidad garantizada.",
      icon: <IconStars size={28} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3 place-items-center max-w-7xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Salsa de Soja Kikkoman",
    description: "Salsa de soja premium, perfecta para sushi y cocina asiática",
    price: 5.99,
    image: "/images/brands/kikkoman.png",
    category: "Salsas",
    featured: true
  },
  {
    id: "2",
    name: "Leche de Coco Aroy-D",
    description: "Leche de coco cremosa para curry y postres",
    price: 3.99,
    image: "/images/brands/aroy-d.png",
    category: "Ingredientes básicos",
    featured: true
  },
  {
    id: "3",
    name: "Salsa de Ostras Kum Chun",
    description: "Salsa de ostras auténtica para realzar el sabor",
    price: 4.99,
    image: "/images/brands/kum-chun.jpg",
    category: "Salsas",
    featured: true
  },
  {
    id: "4",
    name: "Salsa de Pescado Cock",
    description: "Salsa de pescado tradicional tailandesa",
    price: 4.50,
    image: "/images/brands/cock.jpg",
    category: "Salsas",
    featured: true
  }
];

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  unitSize: string;
  caseSize: string;
  price: number;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Soy Sauce",
    brand: "Kikkoman",
    category: "Sauces",
    unitSize: "1L",
    caseSize: "12 bottles/case",
    price: 5.99,
    image: "/images/brands/kikkoman.png",
    featured: true
  },
  {
    id: "2",
    name: "Coconut Milk",
    brand: "Aroy-D",
    category: "Cooking Essentials",
    unitSize: "400ml",
    caseSize: "24 cans/case",
    price: 3.99,
    image: "/images/brands/aroy-d.png",
    featured: true
  },
  {
    id: "3",
    name: "Oyster Sauce",
    brand: "Kum Chun",
    category: "Sauces",
    unitSize: "510g",
    caseSize: "12 bottles/case",
    price: 4.99,
    image: "/images/brands/kum-chun.jpg",
    featured: true
  },
  {
    id: "4",
    name: "Fish Sauce",
    brand: "Cock",
    category: "Sauces",
    unitSize: "700ml",
    caseSize: "12 bottles/case",
    price: 4.50,
    image: "/images/brands/cock.jpg",
    featured: true
  }
];

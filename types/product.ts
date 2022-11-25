export interface Product {
  id:          number;
  title:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating: Rating;
  slug?: string
}
export interface ProductUI {
  id:          number;
  title:       string;
  name:       string;
  price:       number;
  description: string;
  category:    Category;
  image:       string;
  rating: number;
  slug: string;
  reviewCount?: number;
  href: string;
  breadcrumbs: Breadcrumb[];
  images: Image[];
  colors: Color[]; 
  sizes: Size[];
  details: any[];
}

export enum Category {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface Rating {
  rate:  number;
  count: number;
}
export interface Breadcrumb {
  id:  number;
  name: string;
  href: string;
}
export interface Image {
  id:  number;
  name: string;
  src: string;
  alt: string;
  primary?: boolean;
}
export interface Color {
  name: string;
  bgColor: string;
  selectedColor: string;
}
export interface Size {
  name: string;
  inStock: boolean;
}

import type { PageContextServer } from 'vike/types';

export interface ProductData {
  products: {
    id: string;
    name: string;
    price: number;
  }[];
}

export async function data(_pageContext: PageContextServer): Promise<ProductData> {

  const response = await fetch("http://localhost:3000/api/products");

  const products = await response.json();

  return { products };
}
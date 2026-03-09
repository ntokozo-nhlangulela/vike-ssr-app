import type { PageContextServer } from 'vike/types';

export interface ProductData {
  product: {
    id: string;
    name: string;
    price: number;
  } | undefined
}

export async function data(pageContext: PageContextServer): Promise<ProductData> {
  const { id } = pageContext.routeParams;

  const products = [
    { id: "1", name: "Laptop", price: 10000 },
    { id: "2", name: "Phone", price: 5000 },
    { id: "3", name: "Keyboard", price: 100 }
  ];

  const product = products.find(p => p.id === id);

  return { product };
}
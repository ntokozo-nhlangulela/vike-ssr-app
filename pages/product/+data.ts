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

  const response = await fetch(`http://localhost:3000/api/products`);
  if (!response.ok) {
    return { product: undefined };
  }
  const product = await response.json();

  return { product }
}
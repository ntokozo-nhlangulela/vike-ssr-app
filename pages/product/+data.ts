
export type Product = {
  id: string;
  name: string;
  price: number;
};

export interface ProductData {
  products: Product[];
}

export async function data(): Promise<ProductData> {

  const response = await fetch("http://localhost:4000/api/products");

  const products = await response.json();

  return { products };
}

export interface ProductData {
  products: {
    id: string;
    name: string;
    price: number;
  }[];
}

export async function data(): Promise<ProductData> {

  const response = await fetch("http://localhost:4000/api/products");

  const products = await response.json();

  return { products };
}
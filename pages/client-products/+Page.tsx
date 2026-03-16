import { useEffect, useState } from "react";
import { Product } from "../product/+data";

export default function Page() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:4000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    loadProducts();

  }, []);

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>

      <h1>Client Products Page</h1>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} - R{product.price}
        </div>
      ))}

    </div>
  );
}
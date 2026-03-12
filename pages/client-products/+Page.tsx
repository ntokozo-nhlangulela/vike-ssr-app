import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

export default function Page() {

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (err: any) {
        setError(err.message);
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
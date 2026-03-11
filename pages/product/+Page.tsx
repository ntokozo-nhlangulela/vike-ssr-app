import { useEffect, useState } from "react";

export default function Page() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((p:any) => (
        <div key={p.id}>
          {p.name} - R{p.price}
        </div>
      ))}

    </div>
  );
}
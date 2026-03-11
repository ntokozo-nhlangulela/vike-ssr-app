import { useData } from "vike-react/useData";
import type { ProductData } from "./+data";

export default function Page() {

  const { products } = useData<ProductData>();

  return (
    <div>
      <h1>Products List</h1>

      {products.map((p) => (
        <div key={p.id}>
          {p.name} - R{p.price}
        </div>
      ))}

    </div>
  );
}
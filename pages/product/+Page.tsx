
import { usePageContext } from 'vike-react/usePageContext';
import type { ProductData } from './+data';

export default function Page() {
  const pageContext = usePageContext()

  const { product } = pageContext.data as ProductData

  if (!product) {
    return <h1>Product not found</h1>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <p>Price: R{product.price}</p>
      <small>Product ID: {product.id}</small>
    </div>
  )
}
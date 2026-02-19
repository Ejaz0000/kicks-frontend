import Badge from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{product.brand}</p>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="mt-2 text-2xl font-bold">{formatPrice(product.price)}</p>
      <div className="mt-3 flex items-center gap-2">
        <span className="text-yellow-400">★</span>
        <span className="text-sm">{product.rating}</span>
        <span className="text-sm text-gray-400">({product.reviews} reviews)</span>
      </div>
      {product.inStock ? (
        <Badge variant="success" className="mt-3">In Stock</Badge>
      ) : (
        <Badge variant="danger" className="mt-3">Out of Stock</Badge>
      )}
    </div>
  );
}

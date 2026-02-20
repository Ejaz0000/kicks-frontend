import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  return (
    <div>
      <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
        New Release
      </span>
      <h1 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
        {product.name}
      </h1>
      <p className="mt-2 text-xl font-bold text-blue-600">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}

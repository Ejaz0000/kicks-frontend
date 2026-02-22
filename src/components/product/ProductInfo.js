import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  return (
    <div className="space-y-4">
      <span className="inline-block bg-(--blue-primary) text-white text-[12px] font-semibold px-4 py-2 md:py-3 rounded-lg md:rounded-xl tracking-wide">
        New Release
      </span>
      <h1 className="text-xl md:text-[32px] font-semibold uppercase tracking-tight text-(--dark-gray) leading-[1.1]">
        {product.name}
      </h1>
      <p className="text-[24px] font-semibold text-(--blue-primary)">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}

import { formatPrice } from '@/lib/utils';

export default function ProductInfo({ product }) {
  return (
    <div className="space-y-4">
      <span className="inline-block bg-[#4A69E2] text-white text-[12px] font-bold px-4 py-1.5 rounded-lg tracking-wide shadow-sm">
        New Release
      </span>
      <h1 className="text-[28px] lg:text-[32px] font-black uppercase tracking-tight text-[#232321] leading-[1.1]">
        {product.name}
      </h1>
      <p className="text-[24px] font-bold text-[#4A69E2]">
        {formatPrice(product.price)}
      </p>
    </div>
  );
}

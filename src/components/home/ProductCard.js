import Link from 'next/link';
import Image from '@/components/common/Image';
import Badge from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, showBadge = false }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-[#FAFAFA] rounded-[28px] p-2 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {showBadge && (
          <div className="absolute top-0 left-0 z-10 bg-[#4A69E2] text-white text-[12px] font-bold px-4 py-3 rounded-tl-[26px] rounded-br-[16px] border-none shadow-sm shadow-blue-900/10">
            New
          </div>
        )}
        <div className="aspect-square relative bg-[#ECEEF0] rounded-[24px] overflow-hidden">
          <Image
            src={product.images?.[0] || '/images/placeholder.png'}
            alt={product.name}
            fill
            className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="mt-4 px-1">
        <h3 className="font-bold text-[18px] md:text-[20px] uppercase tracking-tight text-[#232321] leading-[1.2] min-h-[48px] line-clamp-2">
          {product.name}
        </h3>
        <button className="mt-4 w-full bg-[#232321] text-white h-[48px] rounded-lg transition-all hover:bg-black font-bold text-[12px] tracking-widest flex items-center justify-center gap-1.5 duration-200">
          VIEW PRODUCT - <span className="text-[#FFA542]">{formatPrice(product.price)}</span>
        </button>
      </div>
    </Link>
  );
}

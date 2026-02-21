import Link from 'next/link';
import Image from '@/components/common/Image';
import Badge from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, showBadge = false }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-[#FAFAFA] rounded-2xl md:rounded-[28px] p-2 relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {showBadge && (
          <div className="absolute top-2 left-2 z-10 bg-(--blue-primary) text-white text-xs font-semibold px-2 md:px-4 py-1 md:py-3 rounded-tl-xl md:rounded-tl-3xl rounded-br-xl md:rounded-br-3xl border-none shadow-sm shadow-blue-900/10">
            New
          </div>
        )}
        <div className="aspect-[3/3.3] relative bg-[#ECEEF0] rounded-xl md:rounded-2xl overflow-hidden">
          <Image
            src={'/assets/shoe-1.png'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="font-semibold text-base md:text-2xl uppercase tracking-tight text-(--dark-gray) leading-[1.2] min-h-[48px] line-clamp-2 mb-0">
          {product.name}
        </p>
        <button className="mt-4 w-full bg-(--dark-gray) text-white h-10 md:h-12 rounded-lg transition-all hover:bg-black font-medium text-xs md:text-sm tracking-widest flex items-center justify-center gap-2 duration-200">
          VIEW PRODUCT - <span className="text-(--orange-primary)">${product.price}</span>
        </button>
      </div>
    </Link>
  );
}

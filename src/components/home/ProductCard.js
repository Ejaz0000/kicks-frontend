import Link from 'next/link';
import Image from '@/components/common/Image';
import Badge from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';

export default function ProductCard({ product, showBadge = false }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-gray-100 rounded-2xl p-4 relative overflow-hidden transition-shadow hover:shadow-lg">
        {showBadge && (
          <Badge className="absolute top-3 left-3 z-10 bg-blue-600 text-white">
            New
          </Badge>
        )}
        <div className="aspect-square relative">
          <Image
            src={product.images?.[0] || '/images/placeholder.png'}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-sm uppercase leading-tight">
          {product.name}
        </h3>
        <button className="mt-3 w-full bg-black text-white py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors group-hover:opacity-90">
          VIEW PRODUCT - <span className="text-orange-400">{formatPrice(product.price)}</span>
        </button>
      </div>
    </Link>
  );
}

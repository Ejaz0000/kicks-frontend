import Link from 'next/link';
import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';
import { formatPrice } from '@/lib/utils';

export default function RelatedProducts({ products = [] }) {
  if (products.length === 0) return null;

  return (
    <section className="mt-16">
      <SectionTitle title="You May Also Like" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-square bg-gray-100" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="mt-1 font-bold">{formatPrice(product.price)}</p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

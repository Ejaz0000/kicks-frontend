import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { formatPrice } from '@/lib/utils';

export default function NewDropsSection({ products = [] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle title="New Drops" subtitle="Freshest kicks just landed" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </Container>
    </section>
  );
}

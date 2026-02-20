import Link from 'next/link';
import Container from '@/components/layout/Container';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';

export default function NewDropsSection({ products = [] }) {
  return (
    <section className="py-16">
      <Container>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              DON&apos;T MISS OUT
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              NEW DROPS
            </h2>
          </div>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              SHOP NEW DROPS
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showBadge />
          ))}
        </div>
      </Container>
    </section>
  );
}

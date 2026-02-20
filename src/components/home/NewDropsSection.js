import Link from 'next/link';
import Container from '@/components/layout/Container';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';

export default function NewDropsSection({ products = [] }) {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight max-w-2xl">
            DON&apos;T MISS OUT NEW DROPS
          </h2>
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded shrink-0 transition-colors duration-200">
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

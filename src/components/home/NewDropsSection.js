import Link from 'next/link';
import Container from '@/components/layout/Container';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';
import SectionTitle from '../ui/SectionTitle';

export default function NewDropsSection({ products = [] }) {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <Container>
        <SectionTitle title="DON'T MISS OUT NEW DROPS" buttonText="SHOP NEW DROPS" link="/" className="mb-12" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showBadge />
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import Container from '@/components/layout/Container';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';
import SectionTitle from '../ui/SectionTitle';

export default function NewDropsSection({ products = [] }) {
  return (
    <section className="pt-6 md:pt-24 px-4 sm:px-6 lg:px-8">
      <Container>
        <SectionTitle title="Don’t miss out new drops" buttonText="SHOP NEW DROPS" link="/" className="mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} showBadge />
          ))}
        </div>
      </Container>
    </section>
  );
}

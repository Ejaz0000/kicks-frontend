import Link from 'next/link';
import Container from '@/components/layout/Container';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CategoriesSection({ categories = [] }) {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle title="Categories" subtitle="Find your perfect pair" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/`} className="group">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden" />
              <p className="mt-2 text-center font-semibold group-hover:underline">{cat.name}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

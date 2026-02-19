import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Step into <br />what feels good
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Premium sneakers for every occasion. New drops weekly.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" size="lg">New Drops</Button>
              </Link>
            </div>
          </div>
          <div className="aspect-square bg-gray-200 rounded-lg" />
        </div>
      </Container>
    </section>
  );
}

import Link from 'next/link';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <Container className="py-20 text-center">
      <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
      <p className="text-gray-500 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
}

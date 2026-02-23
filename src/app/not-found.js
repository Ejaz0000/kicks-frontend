import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, we could not find the page you were looking for.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </Container>
  );
}

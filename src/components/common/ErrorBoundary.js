import Link from 'next/link';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

export default function ErrorBoundary({ error, reset }) {
  return (
    <Container className="py-20 text-center">
      <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
      <p className="text-gray-500 mb-6">{error?.message || 'An unexpected error occurred.'}</p>
      <div className="flex gap-4 justify-center">
        <Button onClick={reset}>Try Again</Button>
        <Link href="/">
          <Button variant="secondary">Back to Home</Button>
        </Link>
      </div>
    </Container>
  );
}

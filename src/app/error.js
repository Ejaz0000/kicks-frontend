'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('[Error Boundary]', error);
  }, [error]);

  return (
    <Container className="py-16 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()}>
            Try again
          </Button>
          <Button onClick={() => window.location.href = '/'} variant="outline">
            Go home
          </Button>
        </div>
      </div>
    </Container>
  );
}

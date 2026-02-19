import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <svg className="h-16 w-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">Looks like you haven&apos;t added anything yet.</p>
      <Link href="/">
        <Button size="lg">Continue Shopping</Button>
      </Link>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import { getTotalQuantity } from '@/store/slices/cartSlice';

export default function CartBadge() {
  const totalQuantity = useAppSelector(getTotalQuantity);

  return (
    <Link href="/cart" className="relative p-2">
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      {totalQuantity > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
}

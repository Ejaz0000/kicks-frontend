'use client';

import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem';

export default function CartList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-bold mb-2">Your Bag</h2>
      <p className="text-xs text-gray-500 mb-6">
        Items in your bag not reserved- check out now to make them yours.
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
        ))}
      </div>
    </div>
  );
}

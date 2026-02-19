'use client';

import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem';

export default function CartList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
      ))}
    </div>
  );
}

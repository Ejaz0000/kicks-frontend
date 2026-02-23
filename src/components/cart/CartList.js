'use client';

import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem';

export default function CartList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-[#FAFAFA] rounded-2xl p-4 md:p-6">
      <div className="mb-4 md:mb-8">
        <h2 className="text-[20px] md:text-[32px] font-semibold text-(--dark-gray) mb-2">
          Your Bag
        </h2>
        <p className="text-sm md:text-base font-normal sub-text text-(--dark-gray)/80">
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </div>
      <div className="space-y-8">
        {items.map((item) => (
          <CartItem key={`${item.id}-${item.size}-${item.color}`} item={item} />
        ))}
      </div>
    </div>
  );
}

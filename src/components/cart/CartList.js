'use client';

import { useAppSelector } from '@/store/hooks';
import CartItem from './CartItem';

export default function CartList() {
  const items = useAppSelector((state) => state.cart.items);

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-sm border border-[#ECEEF0]">
      <div className="mb-8">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#232321] leading-none mb-2">
          Your Bag
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#232321]/80 leading-snug">
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

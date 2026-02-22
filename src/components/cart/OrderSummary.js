'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getSubtotal, getTotalQuantity } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';

const DELIVERY_COST = 6.99;

export default function OrderSummary() {
  const subtotal = useAppSelector(getSubtotal);
  const itemCount = useAppSelector(getTotalQuantity);
  const total = subtotal + (subtotal > 0 ? DELIVERY_COST : 0);

  return (
    <div className="bg-[#FAFAFA] lg:bg-transparent rounded-2xl px-4 py-4 md:px-0 md:py-6">
      <h2 className="text-[20px] md:text-[32px] font-semibold text-(--dark-gray) mb-6">
        Order Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)">
            {itemCount} ITEM{itemCount !== 1 ? 'S' : ''}
          </span>
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)/80">
            {formatPrice(subtotal)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)">
            Delivery
          </span>
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)/80">
            {subtotal > 0 ? formatPrice(DELIVERY_COST) : '-'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)">
            Sales Tax
          </span>
          <span className="text-[16px] md:text-[20px] font-semibold sub-text text-(--dark-gray)/80">
            -
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[20px] md:text-[20px] font-semibold  text-(--dark-gray)">
            Total
          </span>
          <span className="text-[20px] md:text-[24px] font-semibold  text-(--dark-gray)/80">
            {formatPrice(total)}
          </span>
        </div>
      </div>
      <button
        disabled={subtotal === 0}
        className="w-full bg-(--dark-gray) text-white h-[48px] rounded-[8px] text-sm font-medium uppercase tracking-widest mt-6 hover:bg-black transition-all disabled:opacity-50"
      >
        CHECKOUT
      </button>
      <button className="w-full text-left text-base md:text-[20px] font-semibold sub-text text-(--dark-gray) underline decoration-[0.5px] underline-offset-2 mt-4 mb:mt-6 hover:text-[#4A69E2] transition-colors">
        Use a promo code
      </button>
    </div>
  );
}

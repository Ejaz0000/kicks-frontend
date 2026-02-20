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
    <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm border border-[#ECEEF0]">
      <h2 className="text-[24px] md:text-[32px] font-bold text-[#232321] leading-none mb-8">
        Order Summary
      </h2>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321] uppercase tracking-tight">
            {itemCount} ITEM{itemCount !== 1 ? 'S' : ''}
          </span>
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321]">
            {formatPrice(subtotal)}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321] uppercase tracking-tight">
            Delivery
          </span>
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321]">
            {subtotal > 0 ? formatPrice(DELIVERY_COST) : '—'}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321] uppercase tracking-tight">
            Sales Tax
          </span>
          <span className="text-[16px] md:text-[20px] font-bold text-[#232321]">
            —
          </span>
        </div>
        <div className="pt-6 border-t border-[#ECEEF0] flex justify-between items-center">
          <span className="text-[20px] md:text-[28px] font-black text-[#232321] uppercase tracking-tight">
            Total
          </span>
          <span className="text-[20px] md:text-[24px] font-black text-[#232321]">
            {formatPrice(total)}
          </span>
        </div>
      </div>
      <button
        disabled={subtotal === 0}
        className="w-full bg-[#232321] text-white h-[56px] rounded-lg text-sm font-bold uppercase tracking-widest mt-10 hover:bg-black transition-all disabled:opacity-50 shadow-sm"
      >
        CHECKOUT
      </button>
      <button className="w-full text-left md:text-center text-[16px] font-bold text-[#232321] underline underline-offset-4 mt-6 hover:text-[#4A69E2] transition-colors leading-none">
        User a promo code
      </button>
    </div>
  );
}

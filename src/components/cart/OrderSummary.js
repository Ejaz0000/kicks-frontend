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
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">{itemCount} ITEM{itemCount !== 1 ? 'S' : ''}</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Delivery</span>
          <span>{subtotal > 0 ? formatPrice(DELIVERY_COST) : '—'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Sales Tax</span>
          <span>—</span>
        </div>
        <div className="border-t pt-4 flex justify-between font-bold text-base">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
      <button
        disabled={subtotal === 0}
        className="w-full bg-black text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider mt-6 hover:bg-gray-800 transition-colors disabled:opacity-50"
      >
        CHECKOUT
      </button>
      <button className="w-full text-center text-sm text-gray-600 mt-4 hover:underline">
        User a promo code
      </button>
    </div>
  );
}

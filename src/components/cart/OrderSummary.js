'use client';

import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { getSubtotal, clearCart } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

const SHIPPING_COST = 5.99;

export default function OrderSummary() {
  const dispatch = useAppDispatch();
  const subtotal = useAppSelector(getSubtotal);
  const total = subtotal + (subtotal > 0 ? SHIPPING_COST : 0);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{subtotal > 0 ? formatPrice(SHIPPING_COST) : '—'}</span>
        </div>
        <div className="border-t pt-3 flex justify-between font-bold text-base">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
      </div>
      <Button className="w-full mt-6" size="lg" disabled={subtotal === 0}>
        Checkout
      </Button>
      {subtotal > 0 && (
        <Button
          variant="ghost"
          className="w-full mt-2 text-red-500"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      )}
    </div>
  );
}

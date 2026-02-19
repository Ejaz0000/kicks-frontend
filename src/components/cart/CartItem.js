'use client';

import { useAppDispatch } from '@/store/hooks';
import { removeItem, updateQuantity } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';

export default function CartItem({ item }) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id, size: item.size, color: item.color }));
  };

  const handleQuantityChange = (newQty) => {
    dispatch(updateQuantity({ id: item.id, size: item.size, color: item.color, quantity: newQty }));
  };

  return (
    <div className="flex gap-4 border-b border-gray-200 pb-4">
      <div className="h-24 w-24 shrink-0 bg-gray-100 rounded-md" />
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">
              Size: {item.size} | Color: {item.color}
            </p>
          </div>
          <p className="font-bold">{formatPrice(item.price * item.quantity)}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={item.quantity <= 1}
              className="h-8 w-8 rounded border border-gray-300 text-sm disabled:opacity-50"
            >
              −
            </button>
            <span className="w-8 text-center text-sm">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="h-8 w-8 rounded border border-gray-300 text-sm"
            >
              +
            </button>
          </div>
          <Button variant="ghost" size="sm" onClick={handleRemove} className="text-red-500 hover:text-red-700">
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}

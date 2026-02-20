'use client';

import Image from '@/components/common/Image';
import { Heart, Trash2, ChevronDown } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { removeItem, updateQuantity } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';

export default function CartItem({ item }) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id, size: item.size, color: item.color }));
  };

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, size: item.size, color: item.color, quantity: Number(e.target.value) }));
  };

  const handleSizeChange = (e) => {
    // In real app, would update size
  };

  return (
    <div className="bg-gray-100 rounded-xl p-4">
      <div className="flex gap-4">
        <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg overflow-hidden relative shrink-0">
          <Image
            src={item.image || '/images/placeholder.png'}
            alt={item.name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div className="min-w-0">
              <h3 className="font-bold text-sm uppercase truncate">{item.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">Men&apos;s Road Running Shoes</p>
              <p className="text-xs text-gray-500">{item.color}</p>
            </div>
            <p className="font-bold text-blue-600 shrink-0">{formatPrice(item.price)}</p>
          </div>

          <div className="flex gap-3 mt-3">
            <div className="relative">
              <select
                value={item.size}
                onChange={handleSizeChange}
                className="appearance-none bg-white border border-gray-200 rounded-md pl-3 pr-8 py-1.5 text-xs cursor-pointer"
              >
                <option value={item.size}>Size {item.size}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                value={item.quantity}
                onChange={handleQuantityChange}
                className="appearance-none bg-white border border-gray-200 rounded-md pl-3 pr-8 py-1.5 text-xs cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <option key={n} value={n}>Quantity {n}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button onClick={handleRemove} className="p-1.5 hover:bg-gray-200 rounded transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from '@/components/common/Image';
import { Heart, Trash2, ChevronDown } from 'lucide-react';
import { useAppDispatch } from '@/store/hooks';
import { removeItem, updateQuantity } from '@/store/slices/cartSlice';
import { formatPrice } from '@/lib/utils';
import { MinusSquare } from 'lucide-react'; // Using similar icon for delete area

export default function CartItem({ item }) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id, size: item.size, color: item.color }));
  };

  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id: item.id, size: item.size, color: item.color, quantity: Number(e.target.value) }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:items-center py-4 border-b last:border-0 border-[#ECEEF0]">
      <div className="w-full md:w-[180px] aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden relative shrink-0">
        <Image
          src={item.image || '/images/placeholder.png'}
          alt={item.name}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div className="space-y-1.5 min-w-0">
          <h3 className="text-[20px] md:text-[24px] font-black text-[#232321] uppercase leading-tight tracking-tight">
            {item.name}
          </h3>
          <p className="text-[16px] text-[#232321]/60 font-semibold leading-none">
            Men&apos;s Road Running Shoes
          </p>
          <p className="text-[16px] text-[#232321]/60 font-semibold leading-none">
            {item.color}
          </p>

          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[16px] font-bold text-[#232321]">Size {item.size}</span>
              <ChevronDown className="w-4 h-4 text-[#232321] stroke-[3px]" />
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[16px] font-bold text-[#232321]">Quantity {item.quantity}</span>
              <ChevronDown className="w-4 h-4 text-[#232321] stroke-[3px]" />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <button className="text-[#232321] hover:text-[#4A69E2] transition-colors p-1">
              <Heart className="w-6 h-6 stroke-[2px]" />
            </button>
            <button onClick={handleRemove} className="text-[#232321] hover:text-[#4A69E2] transition-colors p-1 border border-[#232321] rounded-sm">
               <span className="relative bottom-0.5">x</span>
            </button>
          </div>
        </div>

        <div className="text-[20px] md:text-[24px] font-bold text-[#4A69E2]">
          {formatPrice(item.price)}
        </div>
      </div>
    </div>
  );
}

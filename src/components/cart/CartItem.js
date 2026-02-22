"use client";

import Image from "@/components/common/Image";
import { Heart, Trash2, ChevronDown } from "lucide-react";
import { useAppDispatch } from "@/store/hooks";
import { removeItem, updateQuantity } from "@/store/slices/cartSlice";
import { formatPrice } from "@/lib/utils";
import { MinusSquare } from "lucide-react"; // Using similar icon for delete area

export default function CartItem({ item }) {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id, size: item.size, color: item.color }));
  };

  const handleQuantityChange = (e) => {
    dispatch(
      updateQuantity({
        id: item.id,
        size: item.size,
        color: item.color,
        quantity: Number(e.target.value),
      }),
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-[0.5fr_1.5fr] gap-4 md:gap-6">
      <div className="w-full h-[216px] md:h-[225px] rounded-[24px] overflow-hidden relative ">
        <Image
          src={item.image || "/images/placeholder.png"}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-2 md:mb-10">
          <div className="space-y-1 min-w-0">
            <h3 className="text-base md:text-2xl font-semibold text-(--dark-gray) uppercase">
              {item.name}
            </h3>
            <p className="text-sm md:text-xl sub-text font-semibold text-(--dark-gray)/80">
              Men&apos;s Road Running Shoes
            </p>
            <p className="text-sm md:text-xl sub-text font-semibold text-(--dark-gray)/80">
              {item.color}
            </p>

            <div className="flex justify-between md:justify-start gap-2 md:gap-8 mt-2 md:mt-5">
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-base md:text-xl sub-text font-semibold text-(--dark-gray)/80">
                  Size {item.size}
                </span>
                <ChevronDown className="hidden md:inline-block w-6 h-6 text-(--dark-gray)/80" />
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <span className="text-base md:text-xl sub-text font-semibold text-(--dark-gray)/80">
                  Quantity {item.quantity}
                </span>
                <ChevronDown className="hidden md:inline-block w-6 h-6 text-(--dark-gray)/80" />
              </div>
            </div>
          </div>

          <div className="text-[20px] md:text-[24px] font-semibold text-(--blue-primary)">
            {formatPrice(item.price)}
          </div>
        </div>


        <div className="flex items-center gap-6">
          <button className="text-[#232321] hover:text-[#4A69E2] transition-colors">
            <Heart className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button
            onClick={handleRemove}
            className="text-[#232321] hover:text-[#4A69E2] transition-colors"
          >
            <Trash2 className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

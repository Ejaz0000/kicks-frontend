'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import SizeSelector from '@/components/product/SizeSelector';
import ColorSelector from '@/components/product/ColorSelector';
import ProductDescription from '@/components/product/ProductDescription';
import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/slices/cartSlice';

export default function ProductActions({ product }) {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) return;
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0],
        size: selectedSize,
        color: selectedColor,
        slug: product.slug,
      })
    );
  };

  return (
    <div className="space-y-6">
      <ColorSelector colors={product.colors} onSelect={setSelectedColor} />
      <SizeSelector
        sizes={product.sizes}
        disabledSizes={product.disabledSizes || []}
        onSelect={setSelectedSize}
      />

      <div className="space-y-3">
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || !selectedSize || !selectedColor}
            className="flex-1 bg-[#232321] text-white h-[56px] rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center disabled:opacity-50"
          >
            ADD TO CART
          </button>
          <button className="w-[56px] h-[56px] bg-[#232321] text-white rounded-lg flex items-center justify-center hover:bg-black transition-all">
            <Heart className="w-6 h-6" />
          </button>
        </div>

        <button className="w-full bg-[#4A69E2] text-white h-[56px] rounded-lg text-sm font-bold uppercase tracking-widest hover:bg-[#3b5bd9] transition-all">
          BUY IT NOW
        </button>
      </div>

      <div className="pt-8 group">
         <ProductDescription
          description={product.description}
          colorway={product.colorway}
          bullets={product.bullets || []}
        />
      </div>
    </div>
  );
}

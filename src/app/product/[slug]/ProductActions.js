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
    <div className="space-y-5">
      <ColorSelector colors={product.colors} onSelect={setSelectedColor} />
      <SizeSelector
        sizes={product.sizes}
        disabledSizes={product.disabledSizes || []}
        onSelect={setSelectedSize}
      />

      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || !selectedSize || !selectedColor}
          className="flex-1 bg-black text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          ADD TO CART
        </button>
        <button className="w-12 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-blue-700 transition-colors">
        BUY IT NOW
      </button>

      <ProductDescription
        description={product.description}
        colorway={product.colorway}
        bullets={product.bullets || []}
      />
    </div>
  );
}

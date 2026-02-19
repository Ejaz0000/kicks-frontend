'use client';

import { useState } from 'react';
import SizeSelector from '@/components/product/SizeSelector';
import ColorSelector from '@/components/product/ColorSelector';
import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/slices/cartSlice';
import Button from '@/components/ui/Button';

export default function ProductActions({ product }) {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

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
    <div className="space-y-4">
      <SizeSelector sizes={product.sizes} onSelect={setSelectedSize} />
      <ColorSelector colors={product.colors} onSelect={setSelectedColor} />
      <Button
        onClick={handleAddToCart}
        size="lg"
        className="w-full"
        disabled={!product.inStock || !selectedSize || !selectedColor}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </Button>
    </div>
  );
}

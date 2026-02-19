'use client';

import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/slices/cartSlice';
import Button from '@/components/ui/Button';

export default function AddToCartButton({ product, selectedSize, selectedColor }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
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
    <Button
      onClick={handleAddToCart}
      size="lg"
      className="w-full"
      disabled={!product.inStock || !selectedSize || !selectedColor}
    >
      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
    </Button>
  );
}

'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';

export default function RelatedProducts({ products = [] }) {
  const scrollRef = useRef(null);

  if (products.length === 0) return null;

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const amount = 300;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">You may also like</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-[220px] flex-1 snap-start">
            <ProductCard product={product} showBadge />
          </div>
        ))}
      </div>
    </section>
  );
}

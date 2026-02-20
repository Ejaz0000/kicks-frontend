'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { cn } from '@/lib/utils';

export default function RelatedProducts({ products = [] }) {
  const scrollRef = useRef(null);
  const [activeSegment, setActiveSegment] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  if (products.length === 0) return null;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Calculate active segment (there are 4 bars in the design)
      const progress = scrollLeft / (scrollWidth - clientWidth);
      const segment = Math.min(3, Math.floor(progress * 4) || 0);
      setActiveSegment(segment);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [products]);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth + 24; // Including gap
    scrollRef.current.scrollBy({ 
      left: dir === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="mt-24 mb-16 px-4 md:px-0">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#232321] leading-tight">
          You may also like
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => scroll('left')}
            className="w-[48px] h-[48px] rounded-lg bg-[#232321]/40 hover:bg-[#232321]/50 transition-all flex items-center justify-center text-white border-none shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 stroke-[3px]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-[48px] h-[48px] rounded-lg bg-[#232321] hover:bg-black transition-all flex items-center justify-center text-white border-none shadow-sm"
          >
            <ChevronRight className="w-5 h-5 stroke-[3px]" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory"
      >
        {products.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[calc(50%-8px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start"
          >
            <ProductCard product={product} showBadge />
          </div>
        ))}
      </div>

      {/* Pagination Bar */}
      <div className="flex justify-center mt-6">
        <div className="flex gap-2 h-1 w-[160px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-full flex-1 rounded-full transition-all duration-300",
                activeSegment === i ? "bg-[#4A69E2] w-12" : "bg-[#232321]/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

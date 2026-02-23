'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '@/components/home/ProductCard';
import { cn } from '@/lib/utils';
import Container from '../layout/Container';

export default function RelatedProducts({ products = [] }) {
  const [currentPage, setCurrentPage] = useState(0);

  if (products.length === 0) return null;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = currentPage >= totalPages - 1;

  const handlePrev = () => {
    if (!isPrevDisabled) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (!isNextDisabled) setCurrentPage((prev) => prev + 1);
  };

  const visibleProducts = products.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="pb-6 md:pb-16 px-4 sm:px-6 lg:px-8">
      <Container>
        <div className="flex items-center justify-between mb-8 md:mb-10">
          <h2 className="text-[24px] md:text-[48px] font-bold text-(--dark-gray) leading-tight">
            You may also like
          </h2>

          <div className="flex gap-2 md:gap-4 mb-0 md:mb-3">
            <button 
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0 text-(--dark-gray)",
                isPrevDisabled
                  ? "bg-[#232321]/20 text-white/50 cursor-not-allowed"
                  : "bg-[#232321] hover:bg-black text-white"
              )}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              disabled={isNextDisabled}
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0 text-(--dark-gray)",
                isNextDisabled 
                  ? "bg-[#232321]/20 text-white/50 cursor-not-allowed"
                  : "bg-[#232321] hover:bg-black text-white"
              )}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} showBadge />
            </div>
          ))}
        </div>

        {/* Pagination Indicators */}
        {totalPages && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-1 h-1.5 w-[80px]">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={cn(
                    "h-full flex-1 rounded-full transition-all duration-300",
                    currentPage === i ? "bg-(--blue-primary)" : "bg-[#232321]/20"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

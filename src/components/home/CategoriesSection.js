'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from '@/components/common/Image';
import Container from '@/components/layout/Container';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES_DATA = [
  { id: 1, name: 'Lifestyle Shoes', image: '/images/category-lifestyle.png', href: '/' },
  { id: 2, name: 'Basketball Shoes', image: '/images/category-basketball.png', href: '/' },
  { id: 3, name: 'Running Shoes', image: '/images/category-running.png', href: '/' },
  { id: 4, name: 'Training Shoes', image: '/images/category-training.png', href: '/' },
];

export default function CategoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    if (currentIndex < CATEGORIES_DATA.length - 2) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsFading(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setIsFading(false);
      }, 300);
    }
  };

  const visibleItems = CATEGORIES_DATA.slice(currentIndex, currentIndex + 2);
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= CATEGORIES_DATA.length - 2;

  return (
    <section className="py-16 md:pb-0 md:pt-20 bg-(--dark-gray) overflow-hidden">
      

      <div className='px-4 sm:px-6 lg:px-8'>
        <Container>
        <div className="flex items-center md:items-end justify-between mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[74px] text-white font-medium md:font-semibold tracking-tight leading-tight">
            CATEGORIES
          </h2>
          <div className="flex gap-2 md:gap-4 mb-0 md:mb-3">
            <button 
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-colors duration-200 flex-shrink-0 text-(--dark-gray)",
                isPrevDisabled
                  ? "bg-[#858582] cursor-not-allowed" 
                  : "bg-(--light-gray) hover:bg-gray-200"
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
                  ? "bg-[#858582] cursor-not-allowed" 
                  : "bg-(--light-gray) hover:bg-gray-200"
              )}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
      </div>

      <div className="w-full px-4 md:pr-0 sm:pl-6 md:pl-[max(2rem,calc((100vw-1320px)/2))]">
        <div className={cn(
          "flex flex-col md:flex-row rounded-tl-3xl md:rounded-tl-[64px] overflow-hidden transition-opacity duration-300",
          isFading ? "opacity-0" : "opacity-100"
        )}>
          {visibleItems.map((cat) => {
            const originalIndex = CATEGORIES_DATA.findIndex(c => c.id === cat.id);
            const isLightGray = originalIndex % 2 === 0;
            
            return (
              <Link 
                key={cat.id} 
                href={cat.href} 
                className={cn(
                  "group relative flex-1 aspect-[4/3] md:aspect-auto md:h-[600px] hover:opacity-95 transition-opacity duration-200 flex items-end",
                  isLightGray ? "bg-[#E7E7E3]" : "bg-[#FAFAFA]"
                )}
              >
                <div className="absolute inset-0 z-1">
                  <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  
                </div>

                <div className="flex items-end justify-between mt-auto p-4 md:px-12 md:py-8 z-2 relative w-full">
                    <p className="text-(--dark-gray) text-2xl md:text-4xl font-semibold leading-tight capitalize md:uppercase max-w-[150px] md:max-w-[250px]">
                      {cat.name}
                    </p>
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-(--dark-gray) rounded-sm md:rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-black transition-colors duration-200">
                      <ArrowUpRight className="w-4 h-4 md:w-8 md:h-8 text-white" strokeWidth={1} />
                    </div>
                  </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

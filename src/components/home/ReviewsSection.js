'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from '@/components/common/Image';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const REVIEWS_DATA = [
  { 
    id: 1, 
    name: 'Alex M.', 
    avatar: '/assets/avatar-1.jpg',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-1.png'
  },
  { 
    id: 2, 
    name: 'Sarah K.', 
    avatar: '/assets/avatar-2.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-2.png'
  },
  { 
    id: 3, 
    name: 'James R.', 
    avatar: '/assets/avatar-3.png',
    rating: 5, 
    title: 'Good Quality',
    text: 'I highly recommend shopping from kicks',
    image: '/assets/review-3.png'
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsVisible, setItemsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsVisible(3);
      } else if (window.innerWidth >= 768) {
        setItemsVisible(2);
      } else {
        setItemsVisible(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsVisible]);

  useEffect(() => {
    const maxIndex = Math.max(0, REVIEWS_DATA.length - itemsVisible);
    if (maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [itemsVisible]);

  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Container>
        
        <SectionTitle title="REVIEWS" buttonText="SEE ALL" link="/" className="mb-12" />
        
        <div className="overflow-hidden -mx-2 md:-mx-3">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)` }}
          >
            {REVIEWS_DATA.map((review) => (
              <div 
                key={review.id} 
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-3"
              >
                <div className="bg-white rounded-2xl md:rounded-4xl h-[340px] md:h-[501px] overflow-hidden hover:shadow-sm transition-shadow duration-200 flex flex-col">
                  <div className="p-4 md:p-8">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-xl md:text-2xl text-(--dark-gray) mb-2">{review.title}</p>
                        <p className="sub-text text-sm md:text-base text-gray-600 leading-relaxed">{review.text}</p>
                      </div>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-[#FFA52F] text-[#FFA52F]" />
                        ))}
                      </div>
                      <span className="sm:text-sm text-base font-semibold text-(--dark-gray) ml-1">5.0</span>
                    </div>
                  </div>
                  <div className="relative bg-gray-100 flex-1">
                    <Image
                      src={review.image}
                      alt="Review"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

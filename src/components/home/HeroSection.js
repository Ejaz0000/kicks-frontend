'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from '@/components/common/Image';
import Button from '@/components/ui/Button';
import Container from '@/components/layout/Container';

export default function HeroSection() {
  const [mainImage, setMainImage] = useState('/assets/main-bg-img.jpg');
  const [thumbnails, setThumbnails] = useState([
    '/assets/rec-bg-img2.jpg',
    '/assets/rec-bg-img1.jpg'
  ]);

  const handleThumbnailClick = (index) => {
    setThumbnails((prev) => {
      const newThumbnails = [...prev];
      newThumbnails[index] = mainImage;
      return newThumbnails;
    });
    setMainImage(thumbnails[index]);
  };


  useEffect(() => {
    console.log('Main image updated:', mainImage);
  }, [mainImage]);
  return (
    <section className="pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <Container>
        <h1 className="text-center w-full font-bold leading-[0.85] tracking-tight 
             text-[clamp(2.5rem,16.6vw,14.6rem)]! text-(--dark-gray) mb-12">
            DO IT <span className="text-(--blue-primary)">RIGHT</span>
        </h1>

        <div className="relative rounded-3xl md:rounded-[64px] overflow-hidden w-full min-h-[382px] md:min-h-[750px] bg-gray-100">
          {/* Main Background Image */}
          <Image
            src={mainImage}
            alt="Nike Air Max"
            fill
            className="object-cover"
            priority
          />

          {/* Black Backdrop */}
          <div className="absolute inset-0 bg-black opacity-30 z-5"></div>

          
          {/* Left Badge */}
          <div className="absolute left-0 top-6 md:top-20 bg-(--dark-gray) text-(--light-gray) text-xs md:text-base font-medium py-2 md:py-6 px-2 md:px-6 rounded-r-xl md:rounded-r-2xl flex items-center justify-center z-10">
            <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-0 left-0 p-4 md:p-12 z-10 flex flex-col items-start">
            <h2 className="text-white text-2xl md:text-[74px] font-semibold mb-0 tracking-tight">NIKE AIR MAX</h2>
            <p className="text-(--light-gray) sub-text text-sm md:text-2xl mb-2 md:mb-4 max-w-[200px] md:max-w-md leading-relaxed font-medium">
              Nike introducing the new air max for everyone&apos;s comfort
            </p>
            <Link href="/">
              <Button className="bg-(--blue-primary) hover:bg-blue-700 text-white font-medium md:font-semibold px-4 py-2 md:px-8 md:py-[14px] rounded-lg transition-colors duration-200 text-sm">
                SHOP NOW
              </Button>
            </Link>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col gap-4 z-10">
            {thumbnails.map((thumb, index) => (
              <button 
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className="w-16 h-16 md:w-40 md:h-40 rounded-lg md:rounded-4xl overflow-hidden relative border-2 md:border-[3px] border-white shadow-lg transition-transform hover:scale-105 focus:outline-none"
              >
                <Image
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

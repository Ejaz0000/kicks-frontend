'use client';

import { useState } from 'react';
import Image from '@/components/common/Image';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images = [] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  const displayImages = images.length >= 4 ? images.slice(0, 4) : [
    ...images,
    ...Array(Math.max(0, 4 - images.length)).fill(null),
  ];

  return (
    <div className="w-full">
      {/* Mobile Only: Slider with dots and thumbnails */}
      <div className="lg:hidden">
        <div className="aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden relative mb-4">
          {displayImages[activeIdx] ? (
            <Image
              src={displayImages[activeIdx]}
              alt={`Product image ${activeIdx + 1}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#ECEEF0]" />
          )}
          
          {/* Dots overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {displayImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  activeIdx === i ? "bg-blue-600 w-4" : "bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails below dots on mobile */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "aspect-square bg-[#ECEEF0] rounded-xl overflow-hidden relative border-2 transition-all",
                activeIdx === i ? "border-blue-600 shadow-sm" : "border-transparent"
              )}
            >
              {img && (
                <Image
                  src={img}
                  alt={`Thumb ${i + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Only: 2x2 Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
        {displayImages.map((img, i) => (
          <div
            key={i}
            className="aspect-square bg-[#ECEEF0] rounded-[32px] overflow-hidden relative group"
          >
            {img ? (
              <Image
                src={img}
                alt={`Product image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-[#ECEEF0]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

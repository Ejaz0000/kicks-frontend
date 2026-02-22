'use client';

import { useState } from 'react';
import Image from '@/components/common/Image';
import { cn } from '@/lib/utils';

export default function ProductGallery({ images = [] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  
  // Limit to max 4 images
  const displayImages = images.slice(0, 4);

  // Determine grid layout based on number of images
  const getGridLayout = (count) => {
    if (count === 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-1 grid-rows-2";
    if (count === 3) return "grid-cols-2 grid-rows-2 [&>*:nth-child(3)]:col-span-2";
    return "grid-cols-2 grid-rows-2";
  };

  return (
    <div className="w-full">
      {/* Mobile Only: Slider with dots and thumbnails */}
      <div className="lg:hidden">
        <div className="aspect-[358/273] bg-(--light-gray) rounded-2xl overflow-hidden relative mb-6">
          {displayImages[activeIdx] && (
            <Image
              src={displayImages[activeIdx]}
              alt={`Product image ${activeIdx + 1}`}
              fill
              className="object-cover"
            />
          )}

          {/* Dots overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {displayImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={cn(
                  "w-1.5 h-1.5 rounded-full transition-all",
                  activeIdx === i ? "bg-(--blue-primary)" : "bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>

        {/* Thumbnails below dots on mobile */}
        <div className="flex flex-wrap gap-2 mb-6">
          {displayImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={cn(
                "w-16 h-16 bg-(--light-gray) rounded-lg overflow-hidden relative border transition-all",
                activeIdx === i ? "border-(--blue-primary)" : "border-transparent"
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

      {/* Desktop Only: Dynamic Grid */}
      <div className={cn("hidden lg:grid gap-4 rounded-[48px] overflow-hidden", getGridLayout(displayImages.length))}>
        {displayImages.map((img, i) => (
          <div
            key={i}
            className={`${i < 2 ? 'aspect-[429/510]' : ''} bg-[#E7E7E3] relative group`}
          >
            {img && (
              <Image
                src={img}
                alt={`Product image ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function SizeSelector({ sizes = [], disabledSizes = [], onSelect }) {
  // Let's set 38 as default as shown in design
  const [selected, setSelected] = useState(38);

  const handleSelect = (size) => {
    if (disabledSizes.includes(size)) return;
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <p className="text-[16px] font-semibold text-(--dark-gray) tracking-tight mb-0 mb:uppercase">Size</p>
        <button className="text-[14px] font-medium text-(--dark-gray) underline uppercase tracking-tight hover:text-[#4A69E2] transition-colors leading-none">
          SIZE CHART
        </button>
      </div>
      <div className="flex flex-wrap md:grid grid-cols-8 gap-1">
        {sizes.map((size) => {
          const disabled = disabledSizes.includes(size);
          return (
            <button
              key={size}
              onClick={() => handleSelect(size)}
              disabled={disabled}
              className={cn(
                'w-[48px] md:w-full h-[48px] flex items-center justify-center rounded-lg text-sm font-bold transition-all border',
                disabled && 'bg-[#D2D1D3] text-[#8F8C91] border-transparent cursor-not-allowed',
                !disabled && selected === size && 'bg-(--dark-gray) text-white border-transparent',
                !disabled && selected !== size && 'bg-white text-(--dark-gray) border-[#ECEEF0] hover:border-(--dark-gray)'
              )}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}

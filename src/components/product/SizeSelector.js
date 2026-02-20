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
      <div className="flex items-end justify-between mb-4">
        <h3 className="text-[16px] font-bold text-[#232321] uppercase tracking-tight">Size</h3>
        <button className="text-[14px] font-bold text-[#232321] underline uppercase tracking-tight hover:text-[#4A69E2] transition-colors leading-none">
          SIZE CHART
        </button>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-1.5">
        {sizes.map((size) => {
          const disabled = disabledSizes.includes(size);
          return (
            <button
              key={size}
              onClick={() => handleSelect(size)}
              disabled={disabled}
              className={cn(
                'h-[56px] flex items-center justify-center rounded-lg text-sm font-bold transition-all border shadow-sm',
                disabled && 'bg-[#ECEEF0] text-[#8B8B82] border-transparent cursor-not-allowed',
                !disabled && selected === size && 'bg-[#232321] text-white border-transparent',
                !disabled && selected !== size && 'bg-white text-[#232321] border-[#ECEEF0] hover:border-[#232321]'
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

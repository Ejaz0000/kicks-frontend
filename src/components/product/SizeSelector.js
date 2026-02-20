'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function SizeSelector({ sizes = [], disabledSizes = [], onSelect }) {
  const [selected, setSelected] = useState(sizes[0] || null);

  const handleSelect = (size) => {
    if (disabledSizes.includes(size)) return;
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider">Size</h3>
        <button className="text-xs text-gray-500 hover:text-black transition-colors">
          SIZE CHART
        </button>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => {
          const disabled = disabledSizes.includes(size);
          return (
            <button
              key={size}
              onClick={() => handleSelect(size)}
              disabled={disabled}
              className={cn(
                'h-10 border rounded-md text-sm font-medium transition-colors',
                disabled && 'bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed',
                !disabled && selected === size && 'border-black bg-black text-white',
                !disabled && selected !== size && 'border-gray-300 hover:border-black'
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

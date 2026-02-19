'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function SizeSelector({ sizes = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (size) => {
    setSelected(size);
    onSelect?.(size);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Size</h3>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSelect(size)}
            className={cn(
              'px-4 py-2 border rounded-md text-sm font-medium transition-colors',
              selected === size
                ? 'border-black bg-black text-white'
                : 'border-gray-300 hover:border-black'
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

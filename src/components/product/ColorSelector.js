'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ColorSelector({ colors = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (color) => {
    setSelected(color);
    onSelect?.(color);
  };

  return (
    <div>
      <h3 className="text-sm font-semibold mb-2">Color</h3>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            className={cn(
              'px-4 py-2 border rounded-md text-sm font-medium transition-colors',
              selected === color
                ? 'border-black bg-black text-white'
                : 'border-gray-300 hover:border-black'
            )}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

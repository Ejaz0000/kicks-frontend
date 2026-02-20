'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const COLOR_MAP = {
  'Shadow Navy': '#232321', // Dark shade as shown in design
  'Army Green': '#697361',
  'Core Black': '#111',
  'Cloud White': '#f5f5f5',
  White: '#fff',
  Black: '#111',
  Red: '#dc2626',
};

export default function ColorSelector({ colors = [], onSelect }) {
  const [selected, setSelected] = useState(colors[0] || null);

  const handleSelect = (color) => {
    setSelected(color);
    onSelect?.(color);
  };

  return (
    <div className="mb-6">
      <h3 className="text-[16px] font-bold text-[#232321] uppercase tracking-tight mb-3">Color</h3>
      <div className="flex gap-4">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            title={color}
            className={cn(
              'w-[32px] h-[32px] rounded-full transition-all relative',
              selected === color
                ? 'ring-1 ring-offset-2 ring-[#232321]'
                : 'hover:ring-1 hover:ring-offset-1 hover:ring-gray-300'
            )}
            style={{ backgroundColor: COLOR_MAP[color] || color }}
          />
        ))}
      </div>
    </div>
  );
}

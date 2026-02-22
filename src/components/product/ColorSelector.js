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
    <div className="mb-8">
      <p className="text-[16px] font-semibold text-(--dark-gray) tracking-tight mb-3  mb:uppercase">Color</p>
      <div className="flex gap-4 pl-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            title={color}
            className={cn(
              'w-[22px] h-[22px] md:w-[32px] md:h-[32px] rounded-full transition-all relative',
              selected === color
                ? 'ring-3 ring-offset-2 md:ring-offset-5 ring-(--dark-gray) ring-offset-(--background)'
                : 'hover:ring-1 hover:ring-offset-1 hover:ring-gray-300'
            )}
            style={{ backgroundColor: COLOR_MAP[color] || color }}
          />
        ))}
      </div>
    </div>
  );
}

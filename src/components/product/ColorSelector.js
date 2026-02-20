'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const COLOR_MAP = {
  'Shadow Navy': '#1a2744',
  'Army Green': '#5a6b4e',
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
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Color</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleSelect(color)}
            title={color}
            className={cn(
              'w-8 h-8 rounded-full transition-all border-2',
              selected === color
                ? 'ring-2 ring-offset-2 ring-black border-white'
                : 'border-transparent hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'
            )}
            style={{ backgroundColor: COLOR_MAP[color] || '#ccc' }}
          />
        ))}
      </div>
    </div>
  );
}

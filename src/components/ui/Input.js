import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent',
        className
      )}
      {...props}
    />
  );
});

export default Input;

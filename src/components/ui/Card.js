import { cn } from '@/lib/utils';

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={cn('rounded-lg border border-gray-200 bg-white shadow-sm', className)}
      {...props}
    >
      {children}
    </div>
  );
}

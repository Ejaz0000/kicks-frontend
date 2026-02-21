import { cn } from '@/lib/utils';

export default function Container({ children, className }) {
  return (
    <div className={cn('mx-auto w-full max-w-[1320px]', className)}>
      {children}
    </div>
  );
}

import { cn } from '@/lib/utils';

export default function SectionTitle({ title, subtitle, className }) {
  return (
    <div className={cn('mb-8', className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-1 text-gray-500">{subtitle}</p>}
    </div>
  );
}

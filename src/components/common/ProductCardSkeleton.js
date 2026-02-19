import Skeleton from '@/components/ui/Skeleton';

export default function ProductCardSkeleton() {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

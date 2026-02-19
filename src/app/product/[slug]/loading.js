import Container from '@/components/layout/Container';
import Skeleton from '@/components/ui/Skeleton';

export default function Loading() {
  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Skeleton className="aspect-square w-full" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-10 w-full mt-6" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </Container>
  );
}

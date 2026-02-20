import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import NewDropsSection from '@/components/home/NewDropsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { getNewDrops } from '@/services/product.service';

export default async function HomePage() {
  const products = await getNewDrops();

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
        <NewDropsSection products={products} />
      </Suspense>
      <CategoriesSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}

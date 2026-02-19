import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import NewDropsSection from '@/components/home/NewDropsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { getNewDrops, getCategories } from '@/services/product.service';

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getNewDrops(),
    getCategories(),
  ]);

  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
        <NewDropsSection products={products} />
      </Suspense>
      <CategoriesSection categories={categories} />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}

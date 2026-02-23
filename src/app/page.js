import { Suspense } from 'react';
import HeroSection from '@/components/home/HeroSection';
import NewDropsSection from '@/components/home/NewDropsSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import { getCategories, getNewDrops } from '@/services/product.service';


async function fetchProducts() {
    try {
    const products = await getNewDrops();
    return products;
  } catch (error) {
    console.error('[HomePage] Failed to fetch products:', error.message);
    throw error;
  }
  }

async function fetchCategories() {
    try {
    const categories = await getCategories();
    return categories;
  } catch (error) {
    console.error('[HomePage] Failed to fetch categories:', error.message);
   throw error;
  }
  }

export default async function HomePage() {
  let products = [];
  let categories = [];
  
  products = await fetchProducts();
  categories = await fetchCategories();
  
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
        <NewDropsSection products={products} />
      </Suspense>
      <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
        <CategoriesSection categories={categories} />
      </Suspense>
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}

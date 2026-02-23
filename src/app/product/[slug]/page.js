import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import RelatedProducts from '@/components/product/RelatedProducts';
import { getProductBySlug, getRelatedProducts } from '@/services/product.service';
import ProductDetailsSection from '@/components/product/ProductDetailsSection';
import NewsletterSection from '@/components/home/NewsletterSection';


async function fetchProductsBySlug(slug) {
    try {
    const products = await getProductBySlug(slug);
    return products;
  } catch (error) {
    console.error('[ProductPage] Failed to fetch products:', error.message);
    throw error;
  }
  }

async function fetchRelatedProductsBySlug(slug) {
    try {
    const products = await getRelatedProducts(slug);
    return products;
  } catch (error) {
    console.error('[ProductPage] Failed to fetch related products:', error.message);
    throw error;
  }
  }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found' };
  return {
    title: `${product.name} | KICKS`,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await fetchProductsBySlug(slug);

  if (!product) notFound();

  const related = await fetchRelatedProductsBySlug(slug);

  console.log('Related products:', related);

  return (
    <>
      <ProductDetailsSection product={product} />
      <RelatedProducts products={related} />
      <NewsletterSection />
    </>
  );
}

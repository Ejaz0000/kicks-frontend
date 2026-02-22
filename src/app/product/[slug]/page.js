import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import RelatedProducts from '@/components/product/RelatedProducts';
import { getProductBySlug, getRelatedProducts } from '@/services/product.service';
import ProductDetailsSection from '@/components/product/ProductDetailsSection';
import NewsletterSection from '@/components/home/NewsletterSection';

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
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  const related = await getRelatedProducts(product.id);

  console.log('Related products:', related);

  return (
    <>
      <ProductDetailsSection product={product} />
      <RelatedProducts products={related} />
      <NewsletterSection />
    </>
  );
}

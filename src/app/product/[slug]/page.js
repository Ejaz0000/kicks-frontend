import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductDescription from '@/components/product/ProductDescription';
import RelatedProducts from '@/components/product/RelatedProducts';
import ProductActions from './ProductActions';
import { getProductBySlug, getRelatedProducts } from '@/services/product.service';

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

  return (
    <Container className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery images={product.images} />
        <div className="space-y-6">
          <ProductInfo product={product} />
          <ProductActions product={product} />
        </div>
      </div>
      <ProductDescription description={product.description} />
      <RelatedProducts products={related} />
    </Container>
  );
}

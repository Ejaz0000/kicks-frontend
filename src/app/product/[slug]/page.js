import { notFound } from 'next/navigation';
import Container from '@/components/layout/Container';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
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
    <Container className="py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <ProductGallery images={product.images} />
        <div className="flex flex-col">
          <ProductInfo product={product} />
          <div className="mt-8">
            <ProductActions product={product} />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <RelatedProducts products={related} />
      </div>
    </Container>
  );
}

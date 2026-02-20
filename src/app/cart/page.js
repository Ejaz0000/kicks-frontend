'use client';

import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import Container from '@/components/layout/Container';
import CartList from '@/components/cart/CartList';
import OrderSummary from '@/components/cart/OrderSummary';
import EmptyCart from '@/components/cart/EmptyCart';
import RelatedProducts from '@/components/product/RelatedProducts';
import NewsletterSection from '@/components/home/NewsletterSection';

const SUGGESTED_PRODUCTS = [
  {
    id: '1',
    slug: 'adidas-4dfwd-x-parley',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    images: ['/images/products/adidas-4dfwd-1.png'],
  },
  {
    id: '2',
    slug: 'ultraboost-22',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    images: ['/images/products/adidas-4dfwd-2.png'],
  },
  {
    id: '3',
    slug: 'classic-leather',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    images: ['/images/products/adidas-4dfwd-3.png'],
  },
  {
    id: '4',
    slug: 'adidas-4dfwd-orange',
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    images: ['/images/products/adidas-4dfwd-4.png'],
  },
];

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <>
        <Container className="py-10">
          <EmptyCart />
        </Container>
        <Container className="pb-10">
          <RelatedProducts products={SUGGESTED_PRODUCTS} />
        </Container>
        <NewsletterSection />
      </>
    );
  }

  return (
    <>
      <Container className="py-8">
        <div className="mb-6">
          <h1 className="text-xl font-bold">Saving to celebrate</h1>
          <p className="text-xs text-gray-600 mt-1">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <p className="text-xs mt-1">
            <Link href="/" className="underline font-medium">Join us</Link>
            {' '}or{' '}
            <Link href="/" className="underline font-medium">Sign-in</Link>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CartList />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>
      </Container>

      <Container className="pb-10">
        <RelatedProducts products={SUGGESTED_PRODUCTS} />
      </Container>

      <NewsletterSection />
    </>
  );
}

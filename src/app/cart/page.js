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
      <Container className="py-10 md:py-16">
        <div className="mb-10">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#232321] leading-tight mb-2">
            Saving to celebrate
          </h1>
          <p className="text-[14px] md:text-[16px] text-[#232321]/80 max-w-2xl leading-relaxed">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <div className="text-[14px] md:text-[16px] font-bold text-[#232321] mt-2 flex gap-1 items-center">
            <Link href="/" className="underline decoration-2 underline-offset-4 hover:text-[#4A69E2] transition-colors">Join us</Link>
            <span className="font-normal text-[#232321]/60">or</span>
            <Link href="/" className="underline decoration-2 underline-offset-4 hover:text-[#4A69E2] transition-colors">Sign-in</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-20 items-start">
          <div className="lg:col-span-8">
            <CartList />
          </div>
          <div className="lg:col-span-4">
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

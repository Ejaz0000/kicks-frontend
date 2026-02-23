'use client';
import React from 'react'
import Container from '@/components/layout/Container';
import CartList from '@/components/cart/CartList';
import OrderSummary from '@/components/cart/OrderSummary';
import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';

import EmptyCart from '@/components/cart/EmptyCart';

export default function CartDetails() {
    const items = useAppSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <section className="pt-2 px-4 sm:px-6 lg:px-8">
        <Container>
          <EmptyCart />
        </Container>
      </section>
    );
  }

  return (
    <section className="pt-2 px-4 sm:px-6 lg:px-8">
        <Container>
        <div className="mb-8 md:mb-12">
          <h1 className="text-2xl md:text-[32px] font-semibold text-(--dark-gray) mb-2">
            Saving to celebrate
          </h1>
          <p className="sub-text text-xs md:text-sm font-semibold  text-(--dark-gray)">
            Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
          </p>
          <div className="text-sm md:text-base font-semibold sub-text text-(--dark-gray)/80 mt-2 flex gap-1.5 items-center">
            <Link href="/" className="underline decoration-[0.5px] underline-offset-2 hover:text-[#4A69E2] transition-colors">Join us</Link>
            <span >or</span>
            <Link href="/" className="underline decoration-[0.5px] underline-offset-2 hover:text-[#4A69E2] transition-colors">Sign-in</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-16 items-start pb-10">
          <div className="lg:col-span-8">
            <CartList />
          </div>
          <div className="lg:col-span-4">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </section>
  )
}

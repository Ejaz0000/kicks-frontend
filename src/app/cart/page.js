'use client';

import { useAppSelector } from '@/store/hooks';
import Container from '@/components/layout/Container';
import CartList from '@/components/cart/CartList';
import OrderSummary from '@/components/cart/OrderSummary';
import PromoCodeInput from '@/components/cart/PromoCodeInput';
import EmptyCart from '@/components/cart/EmptyCart';

export default function CartPage() {
  const items = useAppSelector((state) => state.cart.items);

  if (items.length === 0) {
    return (
      <Container className="py-10">
        <EmptyCart />
      </Container>
    );
  }

  return (
    <Container className="py-10">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <CartList />
        </div>
        <div>
          <OrderSummary />
          <PromoCodeInput />
        </div>
      </div>
    </Container>
  );
}

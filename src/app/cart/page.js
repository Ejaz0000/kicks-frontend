'use client';


import RelatedProducts from '@/components/product/RelatedProducts';
import NewsletterSection from '@/components/home/NewsletterSection';
import CartDetails from '@/components/cart/CartDetails';

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
  

  return (
    <>
      <CartDetails />

      <RelatedProducts products={SUGGESTED_PRODUCTS} />

      <NewsletterSection />
    </>
  );
}

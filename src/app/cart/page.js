

import RelatedProducts from '@/components/product/RelatedProducts';
import NewsletterSection from '@/components/home/NewsletterSection';
import CartDetails from '@/components/cart/CartDetails';
import { getProducts } from '@/services/product.service';


async function fetchProducts() {
    try {
    const products = await getProducts();
    return products;
  } catch (error) {
    console.error('[HomePage] Failed to fetch products:', error.message);
    throw error;
  }
  }


export default async function CartPage() {
  let suggestedProducts = [];
  
  suggestedProducts = await fetchProducts();
  

  return (
    <>
      <CartDetails />

      <RelatedProducts products={suggestedProducts} />

      <NewsletterSection />
    </>
  );
}
